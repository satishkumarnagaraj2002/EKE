"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/events", label: "EVENTS" },
    { href: "/championships", label: "CHAMPIONSHIPS" },
    { href: "/athletes", label: "ATHLETES" },
    { href: "/results", label: "RESULTS" },
    { href: "/news", label: "NEWS" },
    { href: "/gallery", label: "GALLERY" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-secondary/95 backdrop-blur-xl border-b border-white/10"
          : "bg-dark-secondary/90 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-amber-300/80 bg-white shadow-[0_0_20px_rgba(224,186,84,0.24)] transition-transform duration-300 group-hover:scale-105">
              <Image src="/EKE.jpeg" alt="Elite Karate Events logo" fill sizes="44px" className="rounded-full object-cover" />
            </div>
            <span className="font-display text-[10px] font-bold leading-[1.05] text-white uppercase sm:text-sm">
              ELITE KARATE<br />EVENTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="btn-primary-sm hidden sm:flex"
            >
              REGISTER
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-accent transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 animate-fade-in-up">
            <div className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-red-accent font-bold text-sm uppercase tracking-wider transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/register"
                className="btn-primary-sm flex justify-center w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                REGISTER
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
