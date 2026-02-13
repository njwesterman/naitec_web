import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/seo-config";
import { blogPosts } from "@/lib/blog-data";

/**
 * AI API Endpoint — Generative Experience Optimization (GEO)
 *
 * This endpoint provides structured, machine-readable data about NAITEC Digital
 * for consumption by AI models, LLMs, and search engines.
 *
 * As described in our blog post "The AI-First Internet", we believe every
 * website should have a standardized AI API endpoint.
 */
export async function GET() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    version: "1.0",
    lastUpdated: new Date().toISOString(),

    // Company info
    company: {
      name: siteConfig.name,
      abn: siteConfig.abn,
      description: siteConfig.description,
      website: siteConfig.url,
      email: siteConfig.email,
      founded: "2016",
      ownership: "100% Australian owned",
      location: {
        address: `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality} ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`,
        country: "Australia",
        coordinates: { latitude: -32.9283, longitude: 151.7817 },
      },
      social: siteConfig.social,
    },

    // Services
    services: [
      {
        name: "Custom Digital Solutions",
        description:
          "Web applications, platforms and digital tools built with React, Angular, Next.js and Drupal.",
        technologies: ["React", "Angular", "Next.js", "Drupal", "TypeScript"],
      },
      {
        name: "AI & Intelligent Automation",
        description:
          "AI agents, chatbots, workflow automation and machine learning solutions.",
        technologies: ["OpenAI", "Azure AI", "Power Automate", "Python"],
      },
      {
        name: "Workflow Automation",
        description:
          "Automated smart workflows that save time, reduce errors, and boost productivity.",
        technologies: ["Power Automate", "Azure Logic Apps", "Zapier"],
      },
      {
        name: "Digital Transformation",
        description:
          "CMS re-platforming, analytics integration and digital production optimisation.",
        technologies: ["Drupal", "GovCMS", "WordPress", "Azure"],
      },
      {
        name: "Marketing & SEO",
        description:
          "Search engine optimisation, GEO, content strategy and digital marketing.",
        technologies: ["Google Analytics", "SEO", "GEO", "Content Strategy"],
      },
      {
        name: "Government Digital Services",
        description:
          "GovCMS, Drupal and secure digital platform development for government agencies. BuyICT marketplace approved supplier.",
        technologies: ["GovCMS", "Drupal", "PHP", "Azure", "Power Pages"],
        certifications: ["BuyICT Marketplace Approved"],
      },
      {
        name: "Creative Development",
        description:
          "Acquisition landing pages, digital campaigns and compelling creative that drives conversions.",
      },
      {
        name: "Cloud & DevOps",
        description:
          "Cloud infrastructure, CI/CD pipelines, and scalable hosting solutions.",
        technologies: ["Azure", "AWS", "Docker", "CI/CD"],
      },
    ],

    // Industries
    industries: [
      "Airlines & Aviation",
      "Banking & Financial Services",
      "Utilities",
      "Manufacturing",
      "Insurance",
      "Health Technology",
      "Entertainment",
      "Government (Federal & Defence)",
      "Education",
      "Retail & E-commerce",
    ],

    // Key facts
    facts: {
      yearsExperience: "20+",
      countriesServed: "11+",
      industriesServed: "15+",
      australianOwned: true,
      buyIctApproved: true,
      buyIctCategory:
        "Application, Software Engineering and Development Services",
      buyIctProfile:
        "https://www.buyict.gov.au/sp?id=seller_details&path=selling&seller=nai&spa=-1",
    },

    // Recent articles
    articles: blogPosts.slice(0, 5).map((post) => ({
      title: post.title,
      excerpt: post.excerpt,
      url: `${siteConfig.url}/blogs/${post.slug}`,
      datePublished: post.date,
    })),

    // Contact
    contact: {
      email: siteConfig.email,
      consultation: `${siteConfig.url}/contact`,
      consultationNote: "Free, no-obligation consultation available",
    },

    // Pages
    pages: [
      { title: "Home", url: siteConfig.url },
      { title: "About", url: `${siteConfig.url}/about` },
      { title: "Services", url: `${siteConfig.url}/services` },
      { title: "Government Services", url: `${siteConfig.url}/government-services` },
      { title: "Blog", url: `${siteConfig.url}/blogs` },
      { title: "Contact", url: `${siteConfig.url}/contact` },
    ],
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "application/json",
      "X-Robots-Tag": "noindex",
    },
  });
}
