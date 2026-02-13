import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/motion";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact NAITEC Digital in Newcastle NSW for a free consultation about web development, AI automation, GovCMS and digital transformation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NAITEC Digital",
    description: "Contact NAITEC Digital in Newcastle NSW for a free consultation about web development, AI automation, GovCMS and digital transformation.",
    url: "/contact",
    images: [{ url: "/images/pages/page-header.jpg", width: 1200, height: 630, alt: "Contact NAITEC Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NAITEC Digital",
    description: "Contact NAITEC Digital in Newcastle NSW for a free consultation about web development, AI automation, GovCMS and digital transformation.",
    images: ["/images/pages/page-header.jpg"],
  },
};

const contactJsonLd = [
  webPageJsonLd({
    title: "Contact NAITEC Digital",
    description: "Contact NAITEC Digital in Newcastle NSW for a free consultation about web development, AI automation, GovCMS and digital transformation.",
    url: "/contact",
  }),
  breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]),
];

export default function ContactPage() {
  return (
    <>
      {contactJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader title="Contact us" />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Get in touch</h2>
            <p className="mt-4 max-w-2xl text-text-muted">
              Whether you have a question, want to discuss a project, or just want to say hello — we&apos;d love to hear from you.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_400px]">
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-primary via-primary-light to-primary p-8 shadow-xl md:p-10">
              <h2 className="mb-2 text-2xl font-bold text-white">Send us a message</h2>
              <p className="mb-8 text-sm text-white/60">Fill out the form below and we&apos;ll get back to you shortly.</p>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-accent p-8 text-white">
                <h3 className="text-lg font-bold">Free consultation</h3>
                <p className="mt-2 text-sm text-white/80">
                  Start your journey towards smarter business solutions with a
                  free, no-obligation consultation.
                </p>
              </div>

              <div className="rounded-2xl bg-surface-alt p-8">
                <h3 className="text-lg font-bold text-primary">Our Office</h3>
                <address className="mt-4 not-italic text-text-muted leading-relaxed">
                  Level 2<br />
                  384 Hunter Street<br />
                  PO Box 1069<br />
                  Newcastle NSW 2300
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
