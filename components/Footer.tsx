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
            <a
              href="tel:+61468782724"
              className="mt-4 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0468 782 724
            </a>
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
