import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Zap, Heart, Download } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { ChampionshipCard } from "@/components/ChampionshipCard";
import { AthleteCard } from "@/components/AthleteCard";
import { NewsCard } from "@/components/NewsCard";
import { FeaturedCommunityEvents } from "@/components/FeaturedCommunityEvents";
import { events } from "@/data/events";
import { championships } from "@/data/championships";
import { athletes } from "@/data/athletes";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Elite Karate Events | International Karate Championships",
  description: "Premium international karate championships, events, competitions and athlete excellence. Professional karate competition platform.",
};

export default function Home() {
  const grandPrix = events.find((event) => event.slug === "elite-open-10th-international-karate-grand-prix-2026");
  const upcomingEvents = events.slice(0, 3);
  const featuredChampionships = championships.slice(0, 4);
  const featuredAthletes = athletes.filter((a) => a.featured);
  const featuredNews = news.slice(0, 3);

  return (
    <main className="bg-white">
      <Navigation />

      {/* ============ HERO SECTION ============ */}
      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-dark-primary pt-24 text-white md:min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/EKE.jpeg"
            alt="Elite Karate Events lion emblem"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover object-center opacity-35 blur-[2px] mix-blend-screen"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.78)_0%,rgba(8,10,15,0.68)_52%,rgba(8,10,15,0.54)_100%)]" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,#080A0F_0%,transparent_40%,rgba(8,10,15,0.22)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent 0 79px, rgba(255,255,255,0.08) 80px, transparent 81px)" }} />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-red-accent bg-black/25 px-4 py-2.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-accent shadow-[0_0_12px_rgba(240,39,50,0.9)]" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/85">The international karate stage</span>
            </div>

            <h1 className="hero-headline text-left text-5xl leading-[0.94] sm:text-7xl lg:text-8xl">
              <span className="block">ELITE<br className="sm:hidden" /> KARATE</span>
              <span className="hero-accent mt-8 block text-6xl leading-[0.95] text-red-accent sm:mt-3 sm:text-8xl lg:text-9xl">Events</span>
            </h1>

            <p className="mt-7 max-w-xl font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/75 md:text-base">
              Where athletes excel.<br className="sm:hidden" /> Champions rise.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Premium international karate competitions bringing together elite athletes, professional dojos, and passionate officials from across the globe.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/events" className="btn-primary flex items-center justify-center gap-2">
                EXPLORE EVENTS <ArrowRight size={18} />
              </Link>
              <Link href="/register" className="btn-secondary flex items-center justify-center gap-2">
                REGISTER NOW
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/20 py-5">
              {[
                { value: "800+", label: "Competitors" },
                { value: "18", label: "Countries" },
                { value: "4", label: "Disciplines" },
              ].map((stat) => (
                <div key={stat.label} className="border-r border-white/15 px-3 first:pl-0 last:border-r-0">
                  <p className="font-display text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/55 md:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-2">
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-red-accent/70" />
            <div className="relative border border-white/20 bg-[#080A0F]/65 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-md md:p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent">Next on the calendar</p>
              <p className="mt-5 font-display text-5xl font-bold leading-none text-white">24<span className="ml-2 text-2xl text-red-accent">/ OCT</span></p>
              <p className="mt-1 font-display text-lg font-semibold uppercase tracking-wider text-white/55">2026</p>
              <div className="my-6 h-px bg-white/15" />
              <p className="font-display text-2xl font-bold uppercase leading-tight">Elite Open<br />International Grand Prix</p>
              <p className="mt-3 text-sm text-white/60">K2 Crawley · England</p>
              <Link href="/events/elite-open-10th-international-karate-grand-prix-2026" className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-red-accent">
                Event details <ArrowRight size={16} />
              </Link>
            </div>
            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-amber-300/70" />
          </aside>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 md:px-8">
          <span>Elite Karate Events</span>
          <span>Discipline / Performance / Respect</span>
        </div>
      </section>

      {grandPrix && (
        <section className="relative overflow-hidden bg-[#091321] py-16 text-white md:py-24">
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "linear-gradient(135deg, transparent 0 68%, rgba(215,25,32,0.24) 68.1%, transparent 68.4%), radial-gradient(circle at 95% 10%, rgba(240,39,50,0.18), transparent 26rem)" }} />
          <div className="section-container section-px relative z-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent">Upcoming tournament / 24 October 2026</p>
                <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">The next big moment</h2>
              </div>
              <span className="border border-amber-300/40 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-amber-200">Money prizes</span>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div>
                <div className="relative aspect-[1.48] overflow-hidden rounded-lg border border-white/15 bg-black/30 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <Image src="/championship-2026.jpg" alt="Elite Open 10th International Karate Grand Prix poster, Saturday 24 October 2026 at K2 Crawley" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a href={grandPrix.playerRegistrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d8b45a] px-5 py-3 text-center font-display text-xs font-bold uppercase tracking-wider text-[#11151d] transition hover:bg-[#f0d27c]">
                    Player registration <ArrowRight size={15} />
                  </a>
                  <a href={grandPrix.clubRegistrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-center font-display text-xs font-bold uppercase tracking-wider text-white transition hover:border-red-accent hover:bg-white/10">
                    Club registration <ArrowRight size={15} />
                  </a>
                  {grandPrix.bulletinUrl && (
                    <a href={grandPrix.bulletinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-center font-display text-xs font-bold uppercase tracking-wider text-white transition hover:border-red-accent sm:col-span-2">
                      <Download size={15} /> Competition bulletin PDF
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-1 lg:pt-4">
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Organized by Elite Karate Club</p>
                <h3 className="font-display text-4xl font-bold uppercase leading-[0.98] md:text-5xl">Elite Open<br /><span className="text-red-accent">10th International</span><br />Karate Grand Prix</h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-display text-[11px] font-semibold uppercase tracking-widest text-amber-200">Date</p>
                    <p className="mt-2 text-lg font-semibold">Saturday 24 October 2026</p>
                  </div>
                  <div className="border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-display text-[11px] font-semibold uppercase tracking-widest text-amber-200">Venue</p>
                    <p className="mt-2 text-lg font-semibold">K2 Crawley</p>
                    <p className="text-sm text-white/55">RH11 9BQ, England</p>
                  </div>
                </div>
                <div className="mt-5 border-l-2 border-red-accent pl-5">
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-white/55">Competition categories</p>
                  <p className="mt-2 text-base font-semibold leading-relaxed text-white/85">Para Kata · Kata · Team Kata · Kumite · Team Kumite</p>
                </div>
                <a href={`/events/${grandPrix.slug}`} className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white hover:text-red-accent">
                  Tournament details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <FeaturedCommunityEvents events={events} />

      {/* WHY ELITE KARATE EVENTS */}
      <section className="section-py bg-dark-primary text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 -top-96 h-96 w-96 rounded-full bg-red-primary opacity-10 blur-3xl"></div>
          <div className="absolute -left-96 bottom-0 h-96 w-96 rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="section-header text-center max-w-3xl mx-auto">
            <span className="section-label">VISION</span>
            <h2 className="section-title text-white">Why Elite Karate Events</h2>
            <p className="section-description">
              We create professional, unforgettable competition experiences where elite athletes can showcase their skills, challenge themselves, and grow through world-class karate events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Trophy, title: "ELITE", desc: "World-class competitions" },
              { icon: Zap, title: "DYNAMIC", desc: "Professional organization" },
              { icon: Users, title: "GLOBAL", desc: "International community" },
              { icon: Heart, title: "PASSION", desc: "Champion mindset" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/15 hover:border-red-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-red-primary/20 flex items-center justify-center mb-6 group-hover:bg-red-primary/40 group-hover:scale-110 transition-all">
                  <Icon size={28} className="text-red-accent" />
                </div>
                <h3 className="font-black text-lg mb-2 text-white">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section-py bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 -top-96 h-96 w-96 rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="section-header">
            <span className="section-label">DISCOVER</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-description">Browse and register for premium karate competitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                slug={event.slug}
                name={event.name}
                date={event.date}
                location={event.location}
                venue={event.venue}
                image={event.image}
                type={event.type}
                registrationStatus={event.registrationStatus}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/events" className="btn-primary inline-flex items-center gap-2">
              VIEW ALL EVENTS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CHAMPIONSHIPS */}
      <section className="section-py bg-dark-primary text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-96 -top-96 h-96 w-96 rounded-full bg-red-primary opacity-8 blur-3xl"></div>
          <div className="absolute -right-96 bottom-0 h-96 w-96 rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="section-header">
            <span className="section-label">PREMIER</span>
            <h2 className="section-title text-white">Elite Championships</h2>
            <p className="section-description text-white/70">The most prestigious karate championships in the world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredChampionships.map((championship) => (
              <ChampionshipCard
                key={championship.id}
                slug={championship.slug}
                name={championship.name}
                year={championship.year}
                location={championship.location}
                status={championship.status}
                image={championship.image}
                description={championship.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ATHLETE SPOTLIGHT */}
      <section className="section-py bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 -top-48 h-96 w-96 rounded-full bg-red-primary opacity-5 blur-3xl"></div>
          <div className="absolute -left-96 bottom-0 h-96 w-96 rounded-full bg-red-primary opacity-3 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="section-header">
            <span className="section-label">FEATURED</span>
            <h2 className="section-title">Athlete Spotlight</h2>
            <p className="section-description">Meet elite athletes competing on the world stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredAthletes.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                slug={athlete.slug}
                name={athlete.name}
                country={athlete.country}
                dojo={athlete.dojo}
                discipline={athlete.discipline}
                image={athlete.image}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/athletes" className="btn-primary inline-flex items-center gap-2">
              VIEW ALL ATHLETES
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-py bg-dark-primary text-white relative overflow-hidden">
        <div className="section-container section-px text-center">
          <div className="section-header max-w-2xl mx-auto">
            <span className="section-label">SCORES</span>
            <h2 className="section-title text-white">Latest Results</h2>
            <p className="section-description text-white/70">Check out competition results and leaderboards.</p>
          </div>

          <Link href="/results" className="btn-primary inline-flex items-center gap-2">
            VIEW ALL RESULTS
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-py bg-white relative overflow-hidden">
        <div className="section-container section-px relative z-10">
          <div className="section-header">
            <span className="section-label">VISUAL</span>
            <h2 className="section-title">Experience The Moment</h2>
            <p className="section-description">Premium photography from international karate championships.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              "https://images.unsplash.com/photo-1584735175097-24340077477d?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
              "https://images.unsplash.com/photo-1549719386-74dfaf00b474?w=500&h=500&fit=crop",
            ].map((image, idx) => (
              <div key={idx} className="image-card h-64 group rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="image-overlay"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
              VIEW FULL GALLERY
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="section-py bg-dark-primary text-white relative overflow-hidden">
        <div className="section-container section-px relative z-10">
          <div className="section-header">
            <span className="section-label">LATEST</span>
            <h2 className="section-title text-white">News & Updates</h2>
            <p className="section-description text-white/70">Stay informed with the latest from Elite Karate Events.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredNews.map((article) => (
              <NewsCard
                key={article.id}
                slug={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                category={article.category}
                date={article.date}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/news" className="btn-primary inline-flex items-center gap-2">
              READ ALL NEWS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-py bg-gradient-to-r from-red-primary to-red-accent text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Ready to Compete?
            </h2>
            <p className="text-xl font-semibold text-white/90 mb-12">
              Join elite athletes from around the world. Register for your next competition today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="btn-primary bg-white text-red-primary hover:bg-white inline-flex items-center justify-center gap-2">
                FIND EVENTS
                <ArrowRight size={18} />
              </Link>
              <Link href="/register" className="btn-secondary inline-flex items-center justify-center gap-2">
                REGISTER NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
