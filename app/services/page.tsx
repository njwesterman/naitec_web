import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
  TiltCard,
} from "@/components/motion";
import { webPageJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Digital Services — Web Development, AI & SEO in Newcastle",
  description:
    "NAITEC Digital's services in Newcastle NSW: custom web development, AI automation, GovCMS, Drupal, SEO, UX design, cloud DevOps and digital transformation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Services — Web Development, AI & SEO | NAITEC Digital Newcastle",
    description: "NAITEC Digital's services in Newcastle NSW: custom web development, AI automation, GovCMS, Drupal, SEO, UX design, cloud DevOps and digital transformation.",
    url: "/services",
    images: [{ url: "/images/digitalservices.jpg", width: 1200, height: 630, alt: "NAITEC Digital Services Newcastle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services — Web Development, AI & SEO | NAITEC Digital Newcastle",
    description: "NAITEC Digital's services in Newcastle NSW: custom web development, AI automation, GovCMS, Drupal, SEO, UX design, cloud DevOps and digital transformation.",
    images: ["/images/digitalservices.jpg"],
  },
};

const servicesJsonLd = [
  webPageJsonLd({
    title: "Digital Services — Web Development, AI & SEO | NAITEC Digital Newcastle",
    description: "NAITEC Digital's services in Newcastle NSW: custom web development, AI automation, GovCMS, Drupal, SEO, UX design, cloud DevOps and digital transformation.",
    url: "/services",
  }),
  breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]),
  faqJsonLd([
    {
      question: "What digital services does NAITEC Digital offer in Newcastle?",
      answer:
        "NAITEC Digital offers custom web development, AI & workflow automation, creative design, digital transformation, cloud & DevOps, marketing & SEO, data analytics, and government digital services — all from our Newcastle NSW office.",
    },
    {
      question: "Does NAITEC Digital work with government agencies?",
      answer:
        "Yes. We are a registered BuyICT supplier and specialise in GovCMS, Drupal and secure platform development for Australian federal, state and local government agencies.",
    },
    {
      question: "Which technologies does NAITEC Digital use?",
      answer:
        "We build with React, Next.js, Angular, Drupal, GovCMS, Node.js, TypeScript, Python, AWS, Azure and Google Cloud — choosing the right stack for each project.",
    },
    {
      question: "Can NAITEC Digital help with SEO and digital marketing?",
      answer:
        "Absolutely. We provide search engine optimisation, content strategy, Google Analytics integration and ongoing digital marketing to help Newcastle and Hunter Valley businesses rank higher in local search results.",
    },
    {
      question: "Where is NAITEC Digital located?",
      answer:
        "Our office is at Level 2, 384 Hunter Street, Newcastle NSW 2300. We serve clients across the Hunter Valley, Central Coast, Sydney and all of Australia.",
    },
  ]),
];

const services = [
  {
    title: "Digital solutions",
    description:
      "Custom web applications and platforms built with React, Angular, Next.js, and Drupal — tailored to your business objectives.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Workflow automation",
    description:
      "AI-driven smart workflows that save time, reduce errors, and boost productivity across your organisation.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Creative development",
    description:
      "From acquisition landing pages to compelling digital campaigns, engage your audience and see results.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Digital transformation",
    description:
      "Seamless CMS re-platforming across Drupal, React, and Angular with deep analytics and optimised digital production workflows.",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Marketing & SEO",
    description:
      "AI-enhanced SEO, content personalisation, and experimentation strategies that drive traffic and improve conversions.",
    icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "AI & intelligent automation",
    description:
      "From AI agents and chatbots to predictive analytics and LLM integrations — we build intelligent solutions that automate processes, enhance decision-making, and unlock new capabilities.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Social media",
    description:
      "Build a strong online presence with our social media expertise.",
    icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
  },
  {
    title: "Content marketing",
    description:
      "Develop impactful content strategies that inform, engage, and convert.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
];

export default function ServicesPage() {
  return (
    <>
      {servicesJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader
        title="Digital Services"
        subtitle="Digital solutions as unique as your business needs"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <FadeIn direction="left">
              <h3 className="text-2xl font-bold text-primary md:text-3xl">
                Digital Solutions As Unique As Your Business
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                At NAITEC Digital, we combine deep technical expertise in React, Angular,
                Drupal, and AI with strategic thinking to help businesses across
                Australia thrive. Our services are designed to empower your business with
                intelligent tools and data-driven strategies for seamless customer
                experiences.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-105 hover:shadow-lg"
              >
                Get Started
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="h-[380px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/digitalservices.jpg"
                  alt="NAITEC Digital Services"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>
          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
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
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <ScaleIn>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Get started today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Start your journey towards smarter business solutions with a free,
              no-obligation consultation.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent transition-all hover:bg-white/90 hover:scale-105 hover:shadow-lg"
            >
              Book Your Free Consultation
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
