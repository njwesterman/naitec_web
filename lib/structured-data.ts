import { siteConfig } from "./seo-config";

// Organization schema for the whole site
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/White-logo-no-background.png`,
    },
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    sameAs: [siteConfig.social.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: "English",
    },
  };
}

// LocalBusiness schema
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/pages/page-header.jpg`,
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.9283,
      longitude: 151.7817,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Australia",
      },
      {
        "@type": "City",
        name: "Newcastle",
      },
    ],
    priceRange: "$$",
    sameAs: [siteConfig.social.linkedin],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Digital Solutions",
            description: "Web applications, platforms and digital tools built with React, Angular, Next.js and Drupal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Intelligent Automation",
            description: "AI agents, chatbots, workflow automation and machine learning solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Government Digital Services",
            description: "GovCMS, Drupal and secure digital platform development for government agencies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Transformation",
            description: "CMS re-platforming, analytics integration and digital production optimisation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing & SEO",
            description: "Search engine optimisation, content strategy and digital marketing",
          },
        },
      ],
    },
  };
}

// WebSite schema with SearchAction
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-AU",
  };
}

// WebPage schema
export function webPageJsonLd(params: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}${params.url}/#webpage`,
    url: `${siteConfig.url}${params.url}`,
    name: params.title,
    description: params.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    ...(params.datePublished && { datePublished: params.datePublished }),
    ...(params.dateModified && { dateModified: params.dateModified }),
    inLanguage: "en-AU",
  };
}

// BreadcrumbList schema
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// BlogPosting / Article schema
export function articleJsonLd(params: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}${params.url}/#article`,
    headline: params.title,
    description: params.description,
    url: `${siteConfig.url}${params.url}`,
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${params.image}`,
    },
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/White-logo-no-background.png`,
      },
    },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${params.url}/#webpage`,
    },
    inLanguage: "en-AU",
  };
}

// FAQ schema for pages with Q&A-like content
export function faqJsonLd(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
