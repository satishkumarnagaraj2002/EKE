import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Zap, Heart, Search, Filter, Calendar, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { ChampionshipCard } from "@/components/ChampionshipCard";
import { AthleteCard } from "@/components/AthleteCard";
import { NewsCard } from "@/components/NewsCard";
import { events } from "@/data/events";
import { championships } from "@/data/championships";
import { athletes } from "@/data/athletes";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Light Karate Events | International Karate Championships",
  description: "Premium international karate championships, events, competitions and athlete excellence. Professional karate competition platform.",
};

export default function Home() {
  const featuredEvent = events.find((e) => e.featured);
  const upcomingEvents = events.slice(0, 3);
  const featuredChampionships = championships.slice(0, 4);
  const featuredAthletes = athletes.filter((a) => a.featured);
  const featuredNews = news.slice(0, 3);

  return (
    <main className="bg-white">
      <Navigation />

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-dark-primary min-h-screen flex items-center pt-32 md:pt-20">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main gradient circles */}
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-red-primary opacity-20 blur-3xl"></div>
          <div className="absolute -left-48 bottom-20 h-96 w-96 rounded-full bg-red-primary opacity-10 blur-3xl"></div>
          
          {/* Accent elements */}
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-red-accent opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-red-primary opacity-20"></div>
          
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(215, 25, 32, 0.1) 25%, rgba(215, 25, 32, 0.1) 26%, transparent 27%, transparent 74%, rgba(215, 25, 32, 0.1) 75%, rgba(215, 25, 32, 0.1) 76%, transparent 77%, transparent)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Pre-heading Badge */}
            <div className="inline-block mb-8 animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-primary/15 border border-red-primary/30 text-red-accent font-black text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-red-accent"></span>
                INTERNATIONAL KARATE CHAMPIONSHIP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              LIGHT KARATE
              <br />
              <span className="text-gradient-red block">EVENTS</span>
            </h1>

            {/* Tagline */}
            <p className="hero-subtitle mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              WHERE ATHLETES EXCEL, CHAMPIONS RISE
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Premium international karate competitions bringing together elite athletes, professional dojos, and passionate officials from across the globe.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 mb-16 max-w-2xl mx-auto animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
              {[
                { value: "234", label: "Competitors" },
                { value: "18", label: "Countries" },
                { value: "4", label: "Disciplines" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-red-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm font-semibold uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Link href="/events" className="btn-primary flex items-center justify-center gap-2">
                EXPLORE EVENTS
                <ArrowRight size={18} />
              </Link>
              <Link href="/register" className="btn-secondary flex items-center justify-center gap-2">
                REGISTER NOW
              </Link>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* FEATURED EVENT */}
      {featuredEvent && (
        <section className="section-py bg-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-96 -top-96 h-96 w-96 rounded-full bg-red-primary opacity-5 blur-3xl"></div>
            <div className="absolute -right-96 bottom-0 h-96 w-96 rounded-full bg-red-primary opacity-3 blur-3xl"></div>
          </div>

          <div className="section-container section-px relative z-10">
            <div className="section-header">
              <span className="section-label">FEATURED</span>
              <h2 className="section-title">Next Championship</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="image-card h-80 lg:h-96 group">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.name}
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="image-overlay"></div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="badge-premium">{featuredEvent.registrationStatus}</div>
                
                <h3 className="text-4xl lg:text-5xl font-black leading-tight">
                  {featuredEvent.name}
                </h3>

                <p className="text-lg text-black/70 leading-relaxed">
                  {featuredEvent.overview}
                </p>

                {/* Event Info Grid */}
                <div className="space-y-4 pb-8 divider-light border-b">
                  <div className="info-item">
                    <Calendar size={18} className="info-icon" />
                    <div className="flex-1">
                      <p className="info-label">Date</p>
                      <p className="info-value">
                        {new Date(featuredEvent.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })} - {new Date(featuredEvent.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <MapPin size={18} className="info-icon" />
                    <div className="flex-1">
                      <p className="info-label">Location</p>
                      <p className="info-value">
                        {featuredEvent.venue}, {featuredEvent.location}
                      </p>
                    </div>
                  </div>
                </div>

                <Link href={`/events/${featuredEvent.slug}`} className="btn-primary inline-flex items-center gap-2">
                  EXPLORE EVENT
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHY LIGHT KARATE EVENTS */}
      <section className="section-py bg-dark-primary text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 -top-96 h-96 w-96 rounded-full bg-red-primary opacity-10 blur-3xl"></div>
          <div className="absolute -left-96 bottom-0 h-96 w-96 rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="section-header text-center max-w-3xl mx-auto">
            <span className="section-label">VISION</span>
            <h2 className="section-title text-white">Why Light Karate Events</h2>
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
            <p className="section-description text-white/70">Stay informed with latest from Light Karate Events.</p>
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

              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* FEATURED EVENT */}
      {featuredEvent && (
        <section className="section-py bg-gradient-to-b from-bg-light to-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-96 -top-96 h-[600px] w-[600px] rounded-full bg-red-primary opacity-5 blur-3xl"></div>
            <div className="absolute -right-96 bottom-0 h-[500px] w-[500px] rounded-full bg-red-dark opacity-5 blur-3xl"></div>
          </div>

          <div className="section-container section-px relative z-10">
            <div className="mb-12">
              <p className="text-red-bright font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-red-bright/10 rounded-full">
                FEATURED EVENT
              </p>
              <h2 className="section-heading">
                Next Championship
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-dark via-red-primary to-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur"></div>
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 relative z-10 rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block mb-4 px-4 py-1.5 bg-emerald-500/90 text-white font-bold text-xs uppercase tracking-widest rounded-full">
                    ✓ {featuredEvent.registrationStatus}
                  </span>
                  <h3 className="text-4xl lg:text-5xl font-black mb-4 group-hover:text-red-primary transition-colors">
                    {featuredEvent.name}
                  </h3>
                </div>

                <p className="text-black/70 text-lg mb-8 leading-relaxed">
                  {featuredEvent.overview}
                </p>

                {/* Event Details */}
                <div className="space-y-4 pb-8 border-b border-gradient-to-r from-red-primary/0 via-red-primary/30 to-red-primary/0">
                  <div className="flex items-center gap-4 group/detail">
                    <div className="w-12 h-12 rounded-xl bg-red-primary/20 flex items-center justify-center group-hover/detail:bg-red-primary/30 transition-all">
                      <Calendar className="text-red-primary flex-shrink-0" size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-black text-black/50">Date</p>
                      <p className="font-black text-black">
                        {new Date(featuredEvent.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        -{" "}
                        {new Date(featuredEvent.endDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/detail">
                    <div className="w-12 h-12 rounded-xl bg-red-primary/20 flex items-center justify-center group-hover/detail:bg-red-primary/30 transition-all">
                      <MapPin className="text-red-primary flex-shrink-0" size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-black text-black/50">Location</p>
                      <p className="font-black text-black">
                        {featuredEvent.venue}, {featuredEvent.location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase font-black text-black/50">Categories</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredEvent.categories.map((cat) => (
                        <span key={cat} className="px-4 py-1.5 bg-red-primary/15 border border-red-primary/40 text-red-primary font-black text-xs uppercase rounded-full hover:bg-red-primary/25 transition-all">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/events/${featuredEvent.slug}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  VIEW EVENT
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHY ELITE KARATE EVENTS */}
      <section className="section-py relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 top-0 h-[500px] w-[500px] rounded-full bg-red-primary opacity-5 blur-3xl"></div>
          <div className="absolute -left-96 bottom-0 h-[500px] w-[500px] rounded-full bg-red-dark opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="text-center mb-16">
            <p className="text-red-bright font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-red-bright/10 rounded-full">
              MORE THAN A COMPETITION
            </p>
            <h2 className="section-heading">
              Why Elite Karate Events
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Elite Karate Events exists to create professional, memorable and fair competition experiences where athletes can challenge themselves, showcase their skills and grow through karate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="feature-box group">
              <div className="w-16 h-16 bg-gradient-red rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-red group-hover:-translate-y-2">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3 group-hover:text-red-primary transition-colors">COMPETE</h3>
              <p className="text-black/70 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                Test your skills against athletes from across the karate community.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-box group">
              <div className="w-16 h-16 bg-gradient-red rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-red group-hover:-translate-y-2">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3 group-hover:text-red-primary transition-colors">DEVELOP</h3>
              <p className="text-black/70 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                Every competition creates an opportunity to learn and improve.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-box group">
              <div className="w-16 h-16 bg-gradient-red rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-red group-hover:-translate-y-2">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3 group-hover:text-red-primary transition-colors">CONNECT</h3>
              <p className="text-black/70 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                Bring athletes, coaches, clubs and officials together.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-box group">
              <div className="w-16 h-16 bg-gradient-red rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-red group-hover:-translate-y-2">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-black text-lg mb-3 group-hover:text-red-primary transition-colors">EXCEL</h3>
              <p className="text-black/70 text-sm leading-relaxed group-hover:text-black/80 transition-colors">
                Create an environment where discipline and performance are recognised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section-py bg-gradient-to-b from-white via-bg-light to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 -top-96 h-[600px] w-[600px] rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="mb-16">
            <p className="text-red-bright font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-red-bright/10 rounded-full">
              DISCOVER
            </p>
            <h2 className="section-heading">
              Upcoming Events
            </h2>
            <p className="section-subheading">
              Browse the latest karate competitions and championships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              BROWSE ALL EVENTS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CHAMPIONSHIPS */}
      <section className="section-py relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-96 top-0 h-[500px] w-[500px] rounded-full bg-red-dark opacity-5 blur-3xl"></div>
          <div className="absolute -right-96 bottom-0 h-[500px] w-[500px] rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="mb-16">
            <p className="text-red-bright font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-red-bright/10 rounded-full">
              PREMIER EVENTS
            </p>
            <h2 className="section-heading">
              Elite Championships
            </h2>
            <p className="section-subheading">
              The most prestigious karate championships in the world.
            </p>
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
      <section className="section-py bg-gradient-to-b from-black via-charcoal to-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 -top-96 h-[600px] w-[600px] rounded-full bg-red-primary opacity-10 blur-3xl"></div>
          <div className="absolute -left-96 bottom-0 h-[500px] w-[500px] rounded-full bg-gold-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="mb-16">
            <p className="text-gold-accent font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-gold-accent/10 rounded-full">
              FEATURED
            </p>
            <h2 className="section-heading text-white">
              Athlete Spotlight
            </h2>
            <p className="section-subheading text-white/70">
              Meet the world-class athletes competing on the Elite Karate Events stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="text-center mt-12">
            <Link href="/athletes" className="btn-primary inline-flex items-center gap-2">
              VIEW ALL ATHLETES
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-py bg-gradient-to-b from-white via-bg-light to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 top-0 h-[500px] w-[500px] rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="mb-16">
            <p className="text-red-bright font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-red-bright/10 rounded-full">
              COMPETITION
            </p>
            <h2 className="section-heading">
              Latest Results
            </h2>
            <p className="section-subheading">
              Check out the results from recent competitions and championships.
            </p>
          </div>

          <div className="text-center">
            <Link href="/results" className="btn-primary inline-flex items-center gap-2">
              VIEW ALL RESULTS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-py relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-96 bottom-0 h-[500px] w-[500px] rounded-full bg-red-dark opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="mb-16">
            <p className="text-red-bright font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-red-bright/10 rounded-full">
              VISUAL EXPERIENCE
            </p>
            <h2 className="section-heading">
              Experience The Moment
            </h2>
            <p className="section-subheading">
              Gallery of premium karate competition photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div
                key={idx}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 border-2 border-red-primary/0 group-hover:border-red-primary/50 transition-all duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary inline-flex items-center gap-2">
              VIEW FULL GALLERY
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="section-py bg-gradient-to-b from-white via-bg-light to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-96 -top-96 h-[600px] w-[600px] rounded-full bg-red-primary opacity-5 blur-3xl"></div>
          <div className="absolute -left-96 bottom-0 h-[500px] w-[500px] rounded-full bg-red-dark opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="mb-16">
            <p className="text-red-bright font-bold text-sm uppercase tracking-widest mb-4 inline-block px-4 py-2 bg-red-bright/10 rounded-full">
              LATEST
            </p>
            <h2 className="section-heading">
              News & Updates
            </h2>
            <p className="section-subheading">
              Stay updated with the latest from Elite Karate Events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

      {/* CTA SECTION */}
      <section className="section-py bg-gradient-premium-red text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-96 -top-48 h-[700px] w-[700px] rounded-full bg-red-bright opacity-20 blur-3xl"></div>
          <div className="absolute -left-96 bottom-0 h-[500px] w-[500px] rounded-full bg-gold-primary opacity-10 blur-3xl"></div>
          
          {/* Animated gradient shapes */}
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-gradient-to-tl from-gold-primary/20 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading text-white mb-6 text-premium">
              Ready to Step Onto The Tatami?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed font-semibold">
              Find your next competition. Test yourself. Challenge yourself. Create your moment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-primary font-black rounded-xl transition-all duration-500 hover:scale-110 active:scale-95 gap-2 shadow-premium hover:shadow-glow-red group relative overflow-hidden"
              >
                <span className="relative z-10">EXPLORE EVENTS</span>
                <ArrowRight size={18} className="relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
              </Link>
              <Link
                href="#register"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-white/10 backdrop-blur-md text-white font-black rounded-xl transition-all duration-500 hover:bg-white hover:text-red-primary active:scale-95 gap-2 hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10">REGISTER NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-0 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-py relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-96 -top-96 h-[600px] w-[600px] rounded-full bg-red-dark opacity-5 blur-3xl"></div>
          <div className="absolute -right-96 bottom-0 h-[500px] w-[500px] rounded-full bg-red-primary opacity-5 blur-3xl"></div>
        </div>

        <div className="section-container section-px relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-heading mb-6">Questions?</h2>
            <p className="text-lg text-black/70 mb-8 leading-relaxed">
              Get in touch with our team for event inquiries, registrations, or partnerships.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              CONTACT US
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
