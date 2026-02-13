import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Government Services",
  description:
    "NAITEC Digital partners with government agencies to design, build and maintain robust, accessible and user-centric digital platforms using GovCMS, Drupal and more.",
  alternates: { canonical: "/government-services" },
  openGraph: {
    title: "Government Digital Services | NAITEC Digital",
    description: "NAITEC Digital partners with government agencies to design, build and maintain robust, accessible and user-centric digital platforms using GovCMS, Drupal and more.",
    url: "/government-services",
    images: [{ url: "/images/pages/page-header.jpg", width: 1200, height: 630, alt: "Government Digital Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Government Digital Services | NAITEC Digital",
    description: "NAITEC Digital partners with government agencies to design, build and maintain robust, accessible and user-centric digital platforms using GovCMS, Drupal and more.",
    images: ["/images/pages/page-header.jpg"],
  },
};

const govJsonLd = [
  webPageJsonLd({
    title: "Government Digital Services | NAITEC Digital",
    description: "NAITEC Digital partners with government agencies to design, build and maintain robust, accessible and user-centric digital platforms using GovCMS, Drupal and more.",
    url: "/government-services",
  }),
  breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Government Services", url: "/government-services" },
  ]),
];

const capabilities = [
  {
    title: "Proven expertise",
    description:
      "Experts in Drupal, GovCMS, React, and Angular with deep understanding of PHP, JavaScript, TypeScript, and modern AI integrations.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Secure and compliant",
    description:
      "Experience implementing web security practices in high security environments to meet government compliance standards.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Solution oriented",
    description:
      "Advanced troubleshooting skills and the ability to quickly and efficiently resolve complex technical challenges.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Support at every step",
    description:
      "Targeted training sessions and user-friendly documentation to empower teams to self-manage Drupal systems.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

const priorities = [
  "Development and maintenance of Drupal applications: Secure, scalable, and efficient websites and applications built on GovCMS and modern frameworks.",
  "AI-powered solutions: Intelligent document processing, AI-assisted citizen services, and predictive analytics to modernise government operations.",
  "System upgrades: Seamlessly transition to the latest version of Drupal with minimal disruption to users.",
  "Stakeholder collaboration: Provision of clear requirements and technical solutions that align with strategic objectives.",
  "Security implementation: Protection for your customers and your business with strict adherence to government security policies and guidelines to ensure all web applications are compliant.",
  "Performance optimisation: Enhanced website performance for both intranet and public-facing platforms to ensure fast load times and a positive user experience.",
  "Content management: Custom module and theme development tailored to your organisation's specific digital needs, ensuring ease of use and efficient content updates.",
  "Troubleshooting and support: Prompt issue resolution and support for ongoing maintenance.",
  "Comprehensive documentation: Creation of detailed technical specifications, user guides, and training materials.",
  "Training and support: Detailed training and support to empower teams to effectively manage and use Drupal systems.",
];

export default function GovernmentServicesPage() {
  return (
    <>
      {govJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader
        title="Government Services"
        subtitle="Trusted Expertise In GovCMS, Drupal And Secure Digital Platforms"
      />

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="max-w-3xl space-y-6 text-text-muted leading-relaxed">
            <p>
              At NAITEC Digital, we partner with government agencies to design,
              build and maintain robust, accessible and user-centric digital
              platforms. From high-profile public websites to secure intranets, our
              solutions meet strict accessibility, security and performance
              standards.
            </p>
            <p>
              We also bring AI capabilities to the government sector — including
              intelligent document processing, AI-assisted citizen services, and
              predictive analytics — helping agencies modernise operations while
              maintaining the highest levels of compliance and security.
            </p>
            <p>
              While based in Newcastle and Maitland, our team brings national
              experience and proven expertise across government frameworks, ensuring
              every project is delivered to the highest standards.
            </p>
          </div>
          </FadeIn>

          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {capabilities.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Aligning with Government Priorities */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Aligning with Government Priorities
            </h2>
            <p className="mt-4 max-w-3xl text-text-muted">
              Our team&apos;s skills and experience align perfectly with the key
              responsibilities and qualifications sought by government agencies:
            </p>
          </FadeIn>
          <StaggerContainer className="mt-10 space-y-4" staggerDelay={0.06}>
            {priorities.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-text-muted leading-relaxed">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BuyICT */}
      <section className="bg-accent py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            BuyICT Marketplace Supplier
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-white/80 leading-relaxed">
            <p>
              NAITEC is an approved seller on the Australian Government&apos;s BuyICT
              Marketplace.
            </p>
            <p>
              Agencies can procure our services directly through the Marketplace,
              with confidence that we meet the capability, compliance and security
              requirements set by the Digital Transformation Agency.
            </p>
            <p>
              <strong className="text-white">Approved Category:</strong>{" "}
              Application, Software Engineering and Development Services —
              including Drupal, govCMS, Azure, Power Pages, Angular, React, and AI
              integration services.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="https://www.buyict.gov.au/sp?id=seller_details&path=selling&seller=nai&spa=-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent transition-colors hover:bg-white/90"
            >
              View our BuyICT seller profile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
