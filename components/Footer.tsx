import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/White-logo-no-background.png";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-accent via-blue-400 to-accent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Address */}
          <div>
            <Image
              src={logo}
              alt="NAITEC Digital"
              height={48}
              className="mb-4 w-auto"
            />
            <address className="not-italic text-white/70 leading-relaxed">
              Level 2<br />
              384 Hunter Street<br />
              PO Box 1069<br />
              Newcastle NSW 2300
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <p className="text-white/70">
              Email:{" "}
              <a
                href="mailto:contact@naitec.com.au"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                contact@naitec.com.au
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Digital Services" },
                { href: "/government-services", label: "Government" },
                { href: "/blogs", label: "News" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 transition-all hover:text-white hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} NAITEC PTY. LTD. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            ABN: 88 611 039 466
          </p>
        </div>
      </div>
    </footer>
  );
}
