import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Zap, Heart, Instagram, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { ChampionshipCard } from "@/components/ChampionshipCard";
import { NewsCard } from "@/components/NewsCard";
import { getUpcomingEvents } from "@/data/events";
import { getUpcomingChampionships } from "@/data/championships";
import { athletes } from "@/data/athletes";
import { news } from "@/data/news";
import { instagramPosts } from "@/data/instagram";

export const metadata: Metadata = {
  title: "Elite Karate Events | International Karate Championships",
  description: "Premium international karate championships, events, competitions and athlete excellence. Professional karate competition platform.",
};

export default function Home() {
  const upcomingEvents = getUpcomingEvents().slice(0, 4);
  const nextEvent = upcomingEvents[0];
  const featuredChampionships = getUpcomingChampionships()
    .filter((championship) => championship.year === 2027)
    .slice(0, 3);
  const featuredAthletes = athletes;
  const featuredNews = [...news]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main className="bg-white">
      <Navigation />

      {/* ============ HERO SECTION ============ */}
      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#050609] pt-24 text-white md:min-h-screen">
        <div className="absolute inset-0 z-0 bg-[#050609]" />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-70"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 38px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 38px)" }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-[12%] -top-[42%] h-[180%] w-[48%] rotate-[24deg] border-x border-white/[0.06] bg-[linear-gradient(90deg,transparent,rgba(215,25,32,0.07),transparent)]" />
          <div className="absolute right-[17%] top-0 h-full w-px rotate-[24deg] bg-gradient-to-b from-transparent via-red-accent/50 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-red-accent/50 via-white/10 to-transparent" />
          <div className="absolute right-10 top-28 h-28 w-28 border-r border-t border-amber-300/30" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 border-l-2 border-red-accent bg-black/25 px-4 py-2.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-accent shadow-[0_0_12px_rgba(240,39,50,0.9)]" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/85">Three international events / England</span>
            </div>

            <h1 className="hero-headline text-left text-5xl leading-[0.86] sm:text-7xl sm:leading-[0.94] lg:text-8xl">
              <span className="block">2027<br className="sm:hidden" /> KARATE</span>
              <span className="hero-accent mt-7 block text-6xl leading-[0.95] text-red-accent sm:mt-3 sm:text-8xl lg:text-9xl">Calendar</span>
            </h1>

            <p className="mt-7 max-w-xl font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/75 md:text-base">
              Harlow Open. Lions Open. Elite Open.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Three major international karate competitions are coming to Harlow, England. We look forward to welcoming clubs, athletes, coaches and officials from across the UK and around the world.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/events" className="btn-primary flex items-center justify-center gap-2">
                UPCOMING EVENTS <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary flex items-center justify-center gap-2">
                CONTACT US
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/20 py-5">
              {[
                { value: "3", label: "Competitions" },
                { value: "1", label: "Harlow venue" },
                { value: "2027", label: "Season" },
              ].map((stat) => (
                <div key={stat.label} className="border-r border-white/15 px-3 first:pl-0 last:border-r-0">
                  <p className="font-display text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/55 md:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="group/calendar relative mx-auto w-full max-w-md lg:ml-auto lg:mr-2">
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-red-accent/70 transition-colors duration-300 group-hover/calendar:border-amber-300" />
            <div className="relative border border-white/20 bg-[#080A0F]/65 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-accent/60 hover:bg-[#0d1017] hover:shadow-[0_28px_80px_rgba(215,25,32,0.18)] md:p-8">
              {nextEvent && (
                <>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent">Next on the calendar</p>
                  <p className="mt-5 font-display text-3xl font-bold leading-tight text-white">{nextEvent.name}</p>
                  <p className="mt-3 text-sm font-semibold text-white/70">
                    {new Date(`${nextEvent.date}T12:00:00`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <div className="my-6 h-px bg-white/15" />
                  <p className="font-display text-lg font-semibold uppercase leading-tight">{nextEvent.venue}</p>
                  <p className="mt-2 text-sm text-white/60">{nextEvent.address}</p>
                  <Link href={`/events/${nextEvent.slug}`} className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-red-accent">
                    Event details <ArrowRight size={16} />
                  </Link>
                </>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-amber-300/70 transition-colors duration-300 group-hover/calendar:border-red-accent" />
          </aside>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 md:px-8">
          <span>Elite Karate Events</span>
          <span>Discipline / Performance / Respect</span>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#091321] py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 95% 10%, rgba(240,39,50,0.18), transparent 26rem)" }} />
        <div className="section-container section-px relative z-10">
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent">Save the dates / England</p>
            <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">Three major international karate competitions</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">Join us at Harlow Leisurezone, Essex, CM20 3DT. Entries will be limited. Registration links and further information will be announced on Sportdata and our official channels.</p>
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[500px] overflow-hidden rounded-lg border border-white/15 bg-black/30 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <Image
                src="/WhatsApp Image 2026-11-10 at 6.07.18 PM.jpeg"
                alt="Elite Karate Events 2027 calendar poster showing the Harlow Open, Lions Open and Elite Open dates"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "10th Harlow Open", date: "Sunday 31 January 2027" },
                { name: "10th Lions Open", date: "Sunday 6 June 2027" },
                { name: "11th Elite Open – International Karate Grand Prix", date: "Sunday 17 October 2027" },
              ].map((event) => (
                <div key={event.name} className="border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-amber-200">{event.date}</p>
                  <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight">{event.name}</h3>
                  <p className="mt-3 text-sm text-white/60">Harlow Leisurezone · Harlow, Essex CM20 3DT</p>
                </div>
              ))}
              <div className="flex flex-col justify-center border border-red-accent/30 bg-red-accent/10 p-5 sm:col-span-2">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-red-accent">Limited entries</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">Follow our official channels for registration announcements. Register early when entries open to avoid disappointment.</p>
                <Link href="/events" className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-white hover:text-red-accent">
                  Explore upcoming events <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
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
            <p className="section-description text-white/70">Three international karate competitions are coming to Harlow in 2027.</p>
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
            <p className="section-description">Meet the athletes featured on the Shito Ryu England squad-training poster.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-dark-secondary">
              <Image
                src="/Sqad.jpeg"
                alt="Shito Ryu England squad training poster featuring athletes Maya Harian, Nada Wegrzyn, and Adam Choudhury"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {featuredAthletes.map((athlete) => (
                <article key={athlete.id} className="flex flex-col justify-center border border-black/10 bg-white p-6 shadow-sm">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">{athlete.country} / {athlete.discipline}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase text-dark-primary">{athlete.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{athlete.category}</p>
                  <Link href={`/athletes/${athlete.slug}`} className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-red-primary">
                    Athlete details <ArrowRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
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
            <span className="section-label">ARCHIVE</span>
            <h2 className="section-title text-white">Past Events</h2>
            <p className="section-description text-white/70">Browse event reports, posters, and photos from our past competitions and seminars.</p>
          </div>

          <Link           href="/past-events" className="btn-primary inline-flex items-center gap-2">
            VIEW PAST EVENTS
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-py relative overflow-hidden bg-[#f4f2ee]">
        <div className="section-container section-px relative z-10">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="section-label">FROM INSTAGRAM</span>
              <h2 className="section-title">Inside the action</h2>
              <p className="section-description">Tournament moments and the latest from the Elite Open Grand Prix.</p>
            </div>
            <a href="https://www.instagram.com/elitekarateevents.uk/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 self-start border-b border-[#d71920]/40 pb-2 font-display text-sm font-bold uppercase tracking-wider text-[#17191d] transition-colors hover:border-[#d71920] hover:text-[#d71920] md:self-auto">
              <Instagram size={17} /> Follow on Instagram <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid gap-4 md:min-h-[540px] md:grid-cols-[1.15fr_0.85fr]">
            {instagramPosts.slice(0, 3).map((post, index) => (
              <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative isolate min-h-[280px] overflow-hidden border border-black/10 bg-[#080a0f] ${index === 0 ? "md:row-span-2 md:min-h-0" : "md:min-h-0"}`}
                aria-label={`${post.caption}, view Instagram post`}
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className={`${post.fit === "contain" ? "object-contain p-3 md:p-5" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.03]`}
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-7">
                  <div>
                    <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">{post.date}</p>
                    <p className="mt-2 font-display text-xl font-bold uppercase leading-tight md:text-2xl">{post.caption}</p>
                  </div>
                  <span className="mb-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/45 bg-black/20 transition-colors group-hover:border-white group-hover:bg-[#d71920]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
              VIEW FULL GALLERY <ArrowRight size={18} />
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
