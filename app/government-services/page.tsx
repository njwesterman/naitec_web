import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  TiltCard,
} from "@/components/motion";
import { webPageJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Government Digital Services — GovCMS & Drupal Specialists",
  description:
    "NAITEC Digital is a BuyICT registered supplier in Newcastle NSW, specialising in GovCMS, Drupal and secure digital platforms for Australian government agencies.",
  alternates: { canonical: "/government-services" },
  openGraph: {
    title: "Government Digital Services — GovCMS & Drupal | NAITEC Digital",
    description: "NAITEC Digital is a BuyICT registered supplier in Newcastle NSW, specialising in GovCMS, Drupal and secure digital platforms for Australian government agencies.",
    url: "/government-services",
    images: [{ url: "/images/govcms.jpg", width: 1200, height: 630, alt: "NAITEC Digital Government Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Government Digital Services — GovCMS & Drupal | NAITEC Digital",
    description: "NAITEC Digital is a BuyICT registered supplier in Newcastle NSW, specialising in GovCMS, Drupal and secure digital platforms for Australian government agencies.",
    images: ["/images/govcms.jpg"],
  },
};

const govJsonLd = [
  webPageJsonLd({
    title: "Government Digital Services — GovCMS & Drupal | NAITEC Digital",
    description: "NAITEC Digital is a BuyICT registered supplier in Newcastle NSW, specialising in GovCMS, Drupal and secure digital platforms for Australian government agencies.",
    url: "/government-services",
  }),
  breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Government Services", url: "/government-services" },
  ]),
  faqJsonLd([
    {
      question: "Is NAITEC Digital a registered BuyICT supplier?",
      answer:
        "Yes. NAITEC Digital is a registered BuyICT supplier, making procurement fast and compliant for Australian government agencies at federal, state and local levels.",
    },
    {
      question: "What government platforms does NAITEC Digital support?",
      answer:
        "We specialise in GovCMS (the Australian Government's whole-of-government CMS) and Drupal. We also work with React, Angular and custom platforms for government projects.",
    },
    {
      question: "Does NAITEC Digital meet government accessibility standards?",
      answer:
        "Yes. All government projects are built to WCAG 2.1 AA standards or higher, ensuring compliance with the Disability Discrimination Act and Digital Service Standard.",
    },
    {
      question: "Where is NAITEC Digital based?",
      answer:
        "We are based at Level 2, 384 Hunter Street, Newcastle NSW 2300 and work with government agencies across Australia.",
    },
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-24">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          {/* Dot grid pattern */}
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <FadeIn direction="left">
              <h3 className="text-2xl font-bold text-primary md:text-3xl">
                Trusted Government Digital Partners
              </h3>
              <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
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
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="h-[380px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/govcms.jpg"
                  alt="GovCMS and Government Digital Platforms"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>

          {/* Stat tiles */}
          <FadeIn delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: 20, suffix: "+", label: "Years Experience" },
                { value: 0, display: "IRAP", label: "Security Aligned" },
                { value: 0, display: "WCAG", label: "Accessibility Compliant" },
                { value: 0, display: "BuyICT", label: "Approved Supplier" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-accent/10 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="text-2xl font-bold text-accent">
                    {stat.display ? stat.display : <Counter value={stat.value} suffix={stat.suffix} />}
                  </div>
                  <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {capabilities.map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
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
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Aligning with Government Priorities */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Aligning with Government Priorities
            </h2>
            <p className="mt-4 max-w-3xl text-text-muted">
              Our team&apos;s skills and experience align perfectly with the key
              responsibilities and qualifications sought by government agencies:
            </p>
          </FadeIn>
          <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2" staggerDelay={0.06}>
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to modernise your digital platform?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Let&apos;s discuss how we can help your agency deliver secure,
              accessible and high-performing digital experiences.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Book Your Free Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
