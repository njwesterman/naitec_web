import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { webPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "NAITEC Digital Privacy Policy — how we collect, use, store, and disclose personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | NAITEC Digital",
    description: "NAITEC Digital Privacy Policy — how we collect, use, store, and disclose personal information.",
    url: "/privacy-policy",
    images: [{ url: "/images/pages/page-header.jpg", width: 1200, height: 630, alt: "NAITEC Digital Privacy Policy" }],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | NAITEC Digital",
    description: "NAITEC Digital Privacy Policy — how we collect, use, store, and disclose personal information.",
    images: ["/images/pages/page-header.jpg"],
  },
};

const privacyJsonLd = [
  webPageJsonLd({
    title: "Privacy Policy | NAITEC Digital",
    description: "NAITEC Digital Privacy Policy — how we collect, use, store, and disclose personal information.",
    url: "/privacy-policy",
  }),
  breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ]),
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {privacyJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader title="Privacy Policy" />

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary">Introduction</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                NAITEC Digital (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy and
                confidentiality of our clients, users, and stakeholders. This
                Privacy Policy outlines how we collect, use, store, and disclose
                personal information in compliance with applicable privacy laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Information We Collect</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">1. Personal Information</h4>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    When you interact with us, we may collect personal information
                    such as:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-text-muted space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company details</li>
                    <li>Other contact information provided through our website or services.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">2. Non-Identifiable Data</h4>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    We may collect non-identifiable data, including but not limited to:
                  </p>
                  <ul className="mt-2 list-disc pl-6 text-text-muted space-y-1">
                    <li>IP addresses</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage statistics on our website.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">3. Cookies and Tracking Technologies</h4>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    We use cookies and similar technologies to enhance user
                    experience and gather data about website usage. You can manage
                    your cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">How We Use Your Information</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                We collect and use your information for the following purposes:
              </p>
              <ul className="mt-2 list-disc pl-6 text-text-muted space-y-1">
                <li>To deliver our services and manage client relationships.</li>
                <li>To communicate with you regarding inquiries, projects, or support.</li>
                <li>To improve our website and services by analyzing usage trends.</li>
                <li>To comply with legal and regulatory obligations.</li>
                <li>To offer marketing materials and updates, where consent is provided.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">How We Store and Protect Your Information</h3>
              <ul className="mt-4 list-disc pl-6 text-text-muted space-y-2">
                <li>
                  <strong className="text-primary">Data Security:</strong> We
                  implement industry-standard security measures, including
                  encryption and access controls, to protect your data from
                  unauthorized access, alteration, or disclosure.
                </li>
                <li>
                  <strong className="text-primary">Data Retention:</strong> We
                  retain your data only as long as necessary for the purposes
                  outlined in this policy, unless a longer retention period is
                  required by law.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Sharing of Information</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                We do not sell or rent your personal information. We may share your
                information with trusted third parties under the following
                circumstances:
              </p>
              <ul className="mt-2 list-disc pl-6 text-text-muted space-y-2">
                <li>
                  <strong className="text-primary">Service Providers:</strong> To
                  third-party vendors who assist us in delivering our services
                  (e.g., hosting providers, analytics services).
                </li>
                <li>
                  <strong className="text-primary">Legal Compliance:</strong> To
                  comply with legal obligations, court orders, or government
                  regulations.
                </li>
                <li>
                  <strong className="text-primary">Business Transactions:</strong>{" "}
                  In the event of a merger, acquisition, or sale of our assets,
                  your data may be transferred as part of the transaction.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Your Rights</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
              <ul className="mt-2 list-disc pl-6 text-text-muted space-y-2">
                <li>
                  <strong className="text-primary">Access:</strong> Request access
                  to the personal information we hold about you.
                </li>
                <li>
                  <strong className="text-primary">Correction:</strong> Request
                  corrections to your personal information.
                </li>
                <li>
                  <strong className="text-primary">Deletion:</strong> Request
                  deletion of your personal information, subject to legal
                  obligations.
                </li>
                <li>
                  <strong className="text-primary">Opt-Out:</strong> Opt out of
                  marketing communications by contacting us or using the
                  unsubscribe link in our emails.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Third-Party Links</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices or content of these external
                sites. We recommend reviewing their privacy policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Changes to This Policy</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes
                in our practices or legal requirements. Updates will be posted on
                our website, and the &ldquo;last updated&rdquo; date will be revised.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Contact Us</h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or
                our data practices, please contact us:
              </p>
              <p className="mt-4 text-text-muted">
                <strong className="text-primary">NAITEC Digital</strong>
                <br />
                Please reach out via our{" "}
                <a
                  href="/contact"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  contact form
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
