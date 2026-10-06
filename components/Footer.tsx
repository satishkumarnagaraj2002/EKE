import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

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
                <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="text-white font-black text-xl">L</span>
                </div>
                <div>
                  <p className="font-black text-lg leading-none text-red-accent">LIGHT</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider">KARATE EVENTS</p>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Premium international karate championship organization.
              </p>
              <p className="text-white/40 text-xs font-semibold">
                © {currentYear} Light Karate Events
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
                  { Icon: Instagram, href: "#", label: "Instagram" },
                  { Icon: Facebook, href: "#", label: "Facebook" },
                  { Icon: Youtube, href: "#", label: "YouTube" },
                  { Icon: Mail, href: "#", label: "Email" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-red-primary transition-all duration-300 flex items-center justify-center group/social hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <Phone size={14} className="text-red-accent" />
                  <span>+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <Mail size={14} className="text-red-accent" />
                  <span>info@lightkarateevents.com</span>
                </div>
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
        </div>
      </div>
    </footer>
  );
}
