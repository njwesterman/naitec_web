import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-accent via-blue-400 to-accent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Address */}
          <div>
            <Image
              src="/images/White-logo-no-background.png"
              alt="NAITEC Digital"
              width={160}
              height={24}
              className="mb-4 w-auto"
            />
            <address className="not-italic text-white/70 leading-relaxed">
              Level 2<br />
              384 Hunter Street<br />
              PO Box 1069<br />
              Newcastle NSW 2300
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2">
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
