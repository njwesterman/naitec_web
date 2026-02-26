import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRecentPosts } from "@/lib/blog-data";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  softwareApplicationJsonLd,
  faqJsonLd,
} from "@/lib/structured-data";
import { siteConfig } from "@/lib/seo-config";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      publishedTime: post.date,
      authors: [siteConfig.name],
      section: "Technology",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(5);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const postJsonLd = [
    articleJsonLd({
      title: post.title,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      image: post.image,
      datePublished: post.date,
    }),
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "News", url: "/blogs" },
      { name: post.title, url: `/blogs/${post.slug}` },
    ]),
    // Slug-specific structured data for rich results
    ...(slug ===
    "building-robo-raven-and-the-ancient-relics-for-the-esafety-commissioner"
      ? [
          softwareApplicationJsonLd({
            name: "Robo Raven and the Ancient Relics: A Mighty Heroes Adventure",
            description:
              "A web-based online safety game built by NAITEC Digital for the Australian eSafety Commissioner. Part of the Mighty Heroes series, it teaches primary school students about cyberbullying, privacy, critical thinking, and respectful online behaviour through game-based learning.",
            url: "https://www.esafety.gov.au/esafetyrelics",
            image: "/images/blog/esafety-robo-raven-ancient-relics.png",
            applicationCategory: "EducationalApplication",
            datePublished: "2026-02-01",
          }),
          faqJsonLd([
            {
              question:
                "What is Robo Raven and the Ancient Relics?",
              answer:
                "Robo Raven and the Ancient Relics is a web-based online safety game developed by NAITEC Digital for the Australian eSafety Commissioner as part of the Mighty Heroes educational series. It teaches middle primary school students about digital safety topics including cyberbullying, privacy, critical thinking, and respectful online behaviour through interactive, game-based learning.",
            },
            {
              question:
                "Who built the eSafety Commissioner's Robo Raven game?",
              answer:
                "The game was built by NAITEC Digital, an Australian digital agency based in Newcastle, NSW. NAITEC Digital was responsible for all development, engineering, and deployment. ThinkHQ provided creative design and storyboarding, and PeakXD conducted UX research in schools.",
            },
            {
              question:
                "What technology is Robo Raven and the Ancient Relics built with?",
              answer:
                "The game is built with Angular and Ionic as a Progressive Web App (PWA). It uses Capacitor and Electron for cross-platform compatibility. The application is hosted on GovCMS, the Australian Government's Drupal-based SaaS platform, and stores no user data — all game state is kept entirely in memory to protect student privacy.",
            },
            {
              question:
                "Can the game be played offline or in low-connectivity areas?",
              answer:
                "Yes. The game was built as a PWA specifically to support rural and remote Australian schools with limited internet connectivity. It caches assets efficiently and was tested in real school environments, including rural schools, to ensure reliable performance on typical classroom devices.",
            },
            {
              question: "Is the eSafety Robo Raven game free to play?",
              answer:
                "Yes. Robo Raven and the Ancient Relics is completely free, requires no login or account creation, and is available at esafety.gov.au/esafetyrelics. It is compatible with interactive whiteboards, tablets, laptops, and computers with a minimum screen resolution of 1024x768.",
            },
          ]),
        ]
      : slug === "beyond-drupal-hosting-a-progressive-web-app-on-govcms"
        ? [
            faqJsonLd([
              {
                question:
                  "Can you host a single-page application on GovCMS?",
                answer:
                  "Yes. GovCMS SaaS can serve static files, which means any modern JavaScript framework (Angular, React, Vue) that compiles to static HTML, CSS, and JS can be deployed on GovCMS without additional server infrastructure.",
              },
              {
                question: "Does NAITEC Digital work with GovCMS?",
                answer:
                  "Yes. NAITEC Digital is a BuyICT registered supplier specialising in GovCMS, Drupal, and government digital platforms. We work with federal, state, and local government agencies across Australia.",
              },
              {
                question: "Can a PWA run on GovCMS?",
                answer:
                  "Yes. A Progressive Web App built with frameworks like Angular Ionic can be deployed on GovCMS as static assets. The service worker handles caching and offline functionality in the browser, independent of the hosting platform.",
              },
              {
                question:
                  "What government projects has NAITEC Digital delivered?",
                answer:
                  "NAITEC Digital built Robo Raven and the Ancient Relics for the Australian eSafety Commissioner — the most successful educational resource in the Commissioner's history. The game was built with Angular and Ionic, deployed on GovCMS, and serves classrooms across Australia including rural and remote schools.",
              },
            ]),
          ]
        : []),
  ];

  return (
    <>
      {postJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Header */}
      <section className="relative bg-primary pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/blogs"
            className="mb-6 inline-flex items-center text-sm text-white/60 hover:text-white transition-colors"
          >
            &larr; Back to News
          </Link>
          <h1 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>
          <time className="mt-4 block text-sm text-white/50">
            {new Date(post.date).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_300px]">
            {/* Article */}
            <article
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <aside className="space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-muted">
                  Recent Posts
                </h3>
                <nav className="space-y-3">
                  {recentPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blogs/${p.slug}`}
                      className={`block rounded-lg p-3 text-sm transition-colors ${
                        p.slug === slug
                          ? "bg-accent/10 font-medium text-accent"
                          : "text-text-muted hover:bg-surface-alt hover:text-primary"
                      }`}
                    >
                      {p.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          </div>

          {/* Prev / Next */}
          <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
            {prevPost ? (
              <Link
                href={`/blogs/${prevPost.slug}`}
                className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <span>&larr;</span>
                <span className="group-hover:underline">{prevPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blogs/${nextPost.slug}`}
                className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors sm:text-right"
              >
                <span className="group-hover:underline">{nextPost.title}</span>
                <span>&rarr;</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
