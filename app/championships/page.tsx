import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Trophy } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { championships } from "@/data/championships";

export const metadata: Metadata = {
  title: "Championships | Elite Karate Events",
  description: "Elite Karate Events Championships - Premier karate competitions and championships.",
};

export default function ChampionshipsPage() {
  const featuredChampionship = championships.find((championship) => championship.status === "Upcoming") ?? championships[0];
  const otherChampionships = championships.filter((championship) => championship.id !== featuredChampionship.id);

  return (
    <main className="bg-white pt-20">
      <Navigation />
      <section className="relative isolate overflow-hidden bg-dark-primary text-white">
        <div className="absolute inset-0 -z-20">
          <Image src={featuredChampionship.image} alt="Karate championship" fill priority sizes="100vw" className="object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/35" />
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-8 lg:min-h-[580px]">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent"><span className="h-px w-10 bg-red-accent" />Elite Karate Events / Championship Series</p>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.96] sm:text-6xl lg:text-7xl">Where the<br /><span className="text-red-accent">elite meet.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">The championship stage for precision, power and the pursuit of excellence. Explore the series and follow every season.</p>
          </div>
          <div className="hidden justify-self-end md:block">
            <div className="relative w-72 border-l border-red-accent/70 pl-7 lg:w-80">
              <span className="font-display text-7xl font-bold leading-none text-white">{featuredChampionship.year}</span>
              <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-red-accent">The next title is waiting</p>
              <p className="mt-2 text-sm text-white/65">{featuredChampionship.location}, {featuredChampionship.country}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f6] px-5 py-14 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-red-primary">Featured championship</p>
              <h2 className="font-display text-3xl font-bold uppercase text-dark-primary md:text-4xl">The main event</h2>
            </div>
            <span className="hidden items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-black/45 sm:flex"><Trophy size={16} />{featuredChampionship.status}</span>
          </div>

          <Link href={`/championships/${featuredChampionship.slug}`} className="group grid overflow-hidden rounded-lg bg-dark-secondary text-white shadow-[0_18px_48px_rgba(10,14,20,0.15)] transition hover:shadow-[0_24px_58px_rgba(10,14,20,0.24)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-72 overflow-hidden lg:min-h-[430px]">
              <Image src={featuredChampionship.image} alt={featuredChampionship.name} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/65 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 bg-red-primary px-4 py-2 font-display text-sm font-bold uppercase tracking-wider">{featuredChampionship.year} / {featuredChampionship.status}</span>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
              <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent">{featuredChampionship.location}, {featuredChampionship.country}</p>
              <h3 className="font-display text-3xl font-bold uppercase leading-tight md:text-4xl">{featuredChampionship.name}</h3>
              <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">{featuredChampionship.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {featuredChampionship.highlights.slice(0, 3).map((highlight) => <span key={highlight} className="border border-white/15 px-3 py-2 text-xs text-white/75">{highlight}</span>)}
              </div>
              <div className="mt-8 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white">Explore championship <ArrowRight size={17} className="text-red-accent transition-transform group-hover:translate-x-1" /></div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-red-primary">Across the series</p>
              <h2 className="font-display text-3xl font-bold uppercase text-dark-primary md:text-4xl">More championships</h2>
            </div>
            <p className="text-sm text-black/50">A record of ambition, competition and achievement.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {otherChampionships.map((championship) => (
              <Link key={championship.id} href={`/championships/${championship.slug}`} className="group overflow-hidden border border-black/10 bg-white transition hover:border-red-primary/40 hover:shadow-[0_18px_44px_rgba(10,14,20,0.12)]">
                <div className="relative h-60 overflow-hidden bg-dark-secondary">
                  <Image src={championship.image} alt={championship.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/75 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 bg-dark-primary/75 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">{championship.status}</span>
                  <span className="absolute bottom-4 left-5 font-display text-4xl font-bold text-white">{championship.year}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold uppercase leading-tight text-dark-primary">{championship.name}</h3>
                  <p className="mt-3 flex items-center gap-2 text-sm text-black/55"><MapPin size={15} className="text-red-primary" />{championship.location}, {championship.country}</p>
                  <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-black/65">{championship.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 font-display text-xs font-bold uppercase tracking-wider text-dark-primary"><span>View championship</span><CalendarDays size={16} className="text-red-primary" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
