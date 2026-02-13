import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NAITEC Digital for a free, no-obligation consultation about your digital needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NAITEC Digital",
    description: "Get in touch with NAITEC Digital for a free, no-obligation consultation about your digital needs.",
    url: "/contact",
    images: [{ url: "/images/pages/page-header.jpg", width: 1200, height: 630, alt: "Contact NAITEC Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NAITEC Digital",
    description: "Get in touch with NAITEC Digital for a free, no-obligation consultation about your digital needs.",
    images: ["/images/pages/page-header.jpg"],
  },
};

const contactJsonLd = [
  webPageJsonLd({
    title: "Contact NAITEC Digital",
    description: "Get in touch with NAITEC Digital for a free, no-obligation consultation about your digital needs.",
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

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-surface-alt p-8">
                <h3 className="text-lg font-bold text-primary">Our Office</h3>
                <address className="mt-4 not-italic text-text-muted leading-relaxed">
                  Level 2<br />
                  384 Hunter Street<br />
                  PO Box 1069<br />
                  Newcastle NSW 2300
                </address>
              </div>

              <div className="rounded-2xl bg-surface-alt p-8">
                <h3 className="text-lg font-bold text-primary">Email</h3>
                <p className="mt-4">
                  <a
                    href="mailto:contact@naitec.com.au"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    contact@naitec.com.au
                  </a>
                </p>
              </div>

              <div className="rounded-2xl bg-accent p-8 text-white">
                <h3 className="text-lg font-bold">Free consultation</h3>
                <p className="mt-2 text-sm text-white/80">
                  Start your journey towards smarter business solutions with a
                  free, no-obligation consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
