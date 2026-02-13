import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { blogPosts } from "@/lib/blog-data";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Digital transformation insights from NAITEC Digital in Newcastle — articles on AI, web development, SEO, GovCMS, UX design and emerging technology.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "News & Insights | NAITEC Digital",
    description: "Digital transformation insights from NAITEC Digital in Newcastle — articles on AI, web development, SEO, GovCMS, UX design and emerging technology.",
    url: "/blogs",
    images: [{ url: "/images/pages/page-header.jpg", width: 1200, height: 630, alt: "NAITEC Digital Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Insights | NAITEC Digital",
    description: "Digital transformation insights from NAITEC Digital in Newcastle — articles on AI, web development, SEO, GovCMS, UX design and emerging technology.",
    images: ["/images/pages/page-header.jpg"],
  },
};

const blogsPageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/blogs/#collectionpage`,
    name: "News & Insights",
    description: "Insights and updates from NAITEC Digital — articles on digital transformation, AI, SEO, UX design, and more.",
    url: `${siteConfig.url}/blogs`,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-AU",
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      name: post.title,
    })),
  },
  breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "News", url: "/blogs" },
  ]),
];

export default function BlogsPage() {
  return (
    <>
      {blogsPageJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader
        title="Insights & Updates"
        subtitle="Articles, guides and perspectives from the NAITEC Digital team"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary to-primary-light">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold text-primary transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-text-muted line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <time className="text-xs text-text-muted">
                        {new Date(post.date).toLocaleDateString("en-AU", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
                        Read More
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
