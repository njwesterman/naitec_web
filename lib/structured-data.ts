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

// LocalBusiness schema — heavily optimised for local Google results
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    alternateName: "NAITEC Digital Pty Ltd",
    url: siteConfig.url,
    image: [
      `${siteConfig.url}/images/pages/page-header.jpg`,
      `${siteConfig.url}/images/White-logo-no-background.png`,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/White-logo-no-background.png`,
    },
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
        "@type": "City",
        name: "Newcastle",
        containedInPlace: { "@type": "State", name: "New South Wales" },
      },
      { "@type": "City", name: "Lake Macquarie" },
      { "@type": "City", name: "Maitland" },
      { "@type": "City", name: "Port Stephens" },
      { "@type": "City", name: "Cessnock" },
      {
        "@type": "AdministrativeArea",
        name: "Hunter Valley",
      },
      {
        "@type": "AdministrativeArea",
        name: "Central Coast",
      },
      {
        "@type": "City",
        name: "Sydney",
        containedInPlace: { "@type": "State", name: "New South Wales" },
      },
      {
        "@type": "Country",
        name: "Australia",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -32.9283,
        longitude: 151.7817,
      },
      geoRadius: "200000", // 200 km around Newcastle
    },
    priceRange: "$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Bank Transfer, Credit Card",
    sameAs: [siteConfig.social.linkedin],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    // Professional credentials
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "government-supplier",
        name: "BuyICT Registered Supplier",
      },
    ],
    knowsAbout: [
      "Web Development",
      "Digital Transformation",
      "AI Automation",
      "GovCMS",
      "Drupal",
      "React",
      "Next.js",
      "Angular",
      "SEO",
      "UX Design",
      "Cloud DevOps",
      "Workflow Automation",
      "Government Digital Services",
      "Custom Software Development",
    ],
    slogan: "You Know Your Business. We Know Digital.",
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
            description: "Search engine optimisation, content strategy and digital marketing for Newcastle and Hunter Valley businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creative Development",
            description: "Web design, responsive UI/UX, branding and visual identity for digital platforms",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud & DevOps",
            description: "AWS, Azure and GCP infrastructure, CI/CD pipelines and scalable cloud architecture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data & Analytics",
            description: "Data strategy, dashboards, Google Analytics integration and business intelligence",
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
