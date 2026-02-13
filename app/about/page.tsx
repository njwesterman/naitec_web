import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "@/components/motion";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About — Newcastle Digital Agency",
  description:
    "Meet NAITEC Digital — a Newcastle NSW digital agency helping businesses and government across the Hunter Valley and Australia with web development, AI and digital transformation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About NAITEC Digital — Newcastle Digital Agency",
    description:
      "Meet NAITEC Digital — a Newcastle NSW digital agency helping businesses and government across the Hunter Valley and Australia with web development, AI and digital transformation.",
    url: "/about",
    images: [{ url: "/images/newcastle_office.jpg", width: 1200, height: 630, alt: "NAITEC Digital Newcastle Office" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NAITEC Digital — Newcastle Digital Agency",
    description: "Meet NAITEC Digital — a Newcastle NSW digital agency helping businesses and government across the Hunter Valley and Australia with web development, AI and digital transformation.",
    images: ["/images/newcastle_office.jpg"],
  },
};

const aboutJsonLd = [
  webPageJsonLd({
    title: "About NAITEC Digital — Newcastle Digital Agency",
    description: "Meet NAITEC Digital — a Newcastle NSW digital agency helping businesses and government across the Hunter Valley and Australia with web development, AI and digital transformation.",
    url: "/about",
  }),
  breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]),
];

const highlights = [
  {
    title: "Tailored solutions",
    description:
      "Custom digital solutions designed to meet your unique business needs.",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
  {
    title: "Local expertise",
    description:
      "Proudly serving Newcastle and beyond with insights into your local market.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Proven experience",
    description:
      "Delivering measurable success across diverse industries for over two decades.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "On your terms",
    description:
      "Explore your digital potential with a free, no-strings-attached consultation.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

export default function AboutPage() {
  return (
    <>
      {aboutJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader title="About" />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Located in the heart of Newcastle
              </h2>
              <div className="mt-8 space-y-6 text-text-muted leading-relaxed">
            <p>
              Our office is a hub of innovation and collaboration located in the
              heart of Newcastle, dedicated to helping businesses across Australia
              work smarter with AI, modern web technologies, and data-driven
              strategies.
            </p>
            <p>
              By blending creative thinking with deep technical expertise across
              React, Angular, Drupal, and AI, we deliver thoughtful solutions and
              high-impact digital experiences built on the right technology for each
              challenge.
            </p>
            <p>
              Our team is led by digital strategists with extensive expertise in AI
              integration, digital transformation, journey optimisation and data-led
              product development.
            </p>
            <p>
              We&apos;re trusted by companies in a broad range of industries such as
              airline, banking, utilities, manufacturing, insurance, health-tech,
              entertainment and more. We&apos;ve also delivered experiences for both the
              federal government and the military, delivering tailored solutions
              that drive success.
            </p>
          </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="h-[500px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/newcastle_office.jpg"
                  alt="Newcastle NSW - NAITEC Digital office location"
                  width={600}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">Why work with us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-text-muted">We combine technical depth with genuine partnership to deliver results that matter.</p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard className="h-full">
                <div className="group h-full rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
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
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
              What we work with
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
              We choose the right technology for each project — here are the
              platforms and tools we specialise in.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {[
              {
                name: "React & Next.js",
                desc: "High-performance web applications with server-side rendering and cutting-edge UX.",
                icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              {
                name: "Angular",
                desc: "Enterprise-grade applications built with TypeScript, robust architecture, and scalable design.",
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              },
              {
                name: "Drupal",
                desc: "Content-rich platforms with sophisticated content workflows, multi-site governance, and accessibility.",
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
              },
              {
                name: "AI & Machine Learning",
                desc: "Custom AI agents, chatbots, LLM integrations, and predictive analytics tailored to your business.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                name: "Cloud & DevOps",
                desc: "AWS, Azure, and modern CI/CD pipelines for reliable, scalable infrastructure.",
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
              },
              {
                name: "Analytics & Data",
                desc: "Data warehousing, dashboards, and AI-powered insights that drive smarter decisions.",
                icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
            ].map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/10 hover:-translate-y-1">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={tech.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                <p className="mt-2 text-sm text-white/60">{tech.desc}</p>
                </div>
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
          <FadeIn>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Let&apos;s build something great together
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
          </FadeIn>
        </div>
      </section>
    </>
  );
}
