import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRecentPosts } from "@/lib/blog-data";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
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
