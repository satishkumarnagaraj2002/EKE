import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-primary text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-red-primary/5 blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-red-primary/3 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16 pb-16 border-b border-white/10">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-amber-300/80 bg-white shadow-[0_0_20px_rgba(224,186,84,0.24)] transition-transform duration-300 group-hover:scale-105">
                  <Image src="/EKE.jpeg" alt="Elite Karate Events logo" fill sizes="48px" className="rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold leading-none text-white">ELITE KARATE</p>
                  <p className="font-display text-xs font-semibold text-red-accent uppercase">Events</p>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Premium international karate championship organization.
              </p>
              <p className="text-white/40 text-xs font-semibold">
                © {currentYear} Elite Karate Events
              </p>
            </div>

            {/* Events */}
            <div className="group">
              <h3 className="font-black text-sm uppercase tracking-wider text-red-accent mb-6">
                EVENTS
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/events", label: "Upcoming Events" },
                  { href: "/championships", label: "Championships" },
                  { href: "/results", label: "Results" },
                  { href: "/athletes", label: "Athletes" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div className="group">
              <h3 className="font-black text-sm uppercase tracking-wider text-red-accent mb-6">
                INFORMATION
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/news", label: "News" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="group">
              <h3 className="font-black text-sm uppercase tracking-wider text-red-accent mb-6">
                LEGAL
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "#privacy", label: "Privacy Policy" },
                  { href: "#terms", label: "Terms & Conditions" },
                  { href: "/register", label: "Register" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="group">
              <h3 className="font-black text-sm uppercase tracking-wider text-red-accent mb-6">
                CONNECT
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/elitekarateevents.uk?stkn=MWptemR0eGkwb2lybQ==", label: "Instagram" },
                  { Icon: Facebook, href: "https://www.facebook.com/share/19eBBnf87R/", label: "Facebook" },
                  { Icon: Mail, href: "mailto:info@elitekarateclub.net", label: "Email" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-red-primary transition-all duration-300 flex items-center justify-center group/social hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <a href="tel:+447438052254" className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors">
                  <Phone size={14} className="text-red-accent" />
                  <span>+44 7438052254</span>
                </a>
                <a href="mailto:info@elitekarateclub.net" className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors">
                  <Mail size={14} className="text-red-accent" />
                  <span>info@elitekarateclub.net</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p className="font-semibold">
              International Karate Championship Organization
            </p>
            <div className="h-px w-12 bg-red-primary/30 md:hidden"></div>
            <p className="text-center">
              Bringing athletes, dojos, and officials together through world-class karate events.
            </p>
          </div>

          <div className="relative mt-14 border-t border-white/10 px-4 pt-10 text-center md:mt-16 md:pt-12">
            <span aria-hidden="true" className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight text-white sm:text-3xl">
              SATISH KUMAR NAGARAJ
            </p>
            <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-48 max-w-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />
            <div className="mt-3 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-7 bg-gradient-to-r from-transparent to-[#78d8ce]/80 sm:w-10" />
              <p className="font-[family-name:var(--font-playfair)] text-sm font-semibold italic tracking-[0.06em] text-[#a8eee2] drop-shadow-[0_0_14px_rgba(119,217,203,0.2)] sm:text-base">
                Performance &amp; Data Analyst
              </p>
              <span aria-hidden="true" className="h-px w-7 bg-gradient-to-l from-transparent to-[#78d8ce]/80 sm:w-10" />
            </div>
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-sm">
              Website design &amp; development
            </p>
            <p className="mt-2 text-xs text-white/45">
              Designed, developed &amp; maintained in-house
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
