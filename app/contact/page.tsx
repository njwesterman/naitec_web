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
                <a
                  href="tel:+61468782724"
                  className="mt-4 inline-flex items-center gap-2 text-accent font-medium transition-colors hover:text-accent-hover"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0468 782 724
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8!2d151.7795!3d-32.9283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7315c8a1b1b1b1%3A0x1!2sLevel%202%2F384%20Hunter%20St%2C%20Newcastle%20NSW%202300!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NAITEC Digital office location — Level 2, 384 Hunter Street, Newcastle NSW 2300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
