import { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, MapPin, Trophy } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventDirectory } from "@/components/EventDirectory";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events | Elite Karate Events",
  description: "Discover upcoming karate championships, competitions, and events. Register now for world-class competition.",
};

export default function EventsPage() {
  return (
    <main className="bg-white pt-20">
      <Navigation />
      <section className="relative isolate overflow-hidden bg-dark-primary text-white">
        <div className="absolute inset-0 -z-20">
          <Image src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=2000&h=1200&fit=crop" alt="Karate athletes competing" fill priority sizes="100vw" className="object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/35" />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "linear-gradient(135deg, transparent 0 58%, rgba(215,25,32,0.7) 58% 58.2%, transparent 58.2% 100%)" }} />
        <div className="mx-auto grid min-h-[540px] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.3fr_0.7fr] md:px-8 lg:min-h-[600px]">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent"><span className="h-px w-10 bg-red-accent" />Elite Karate Events / Calendar</p>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.96] sm:text-6xl lg:text-7xl">Find your next<br /><span className="text-red-accent">competition.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">A season of sharp technique, fierce focus and unforgettable moments. Find the right tournament and take your place on the tatami.</p>
            <div className="mt-9 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider text-white/80">
              <span className="inline-flex items-center gap-2 border border-white/20 bg-black/20 px-3 py-2"><CalendarDays size={15} className="text-red-accent" />2026 / 2027 season</span>
              <span className="inline-flex items-center gap-2 border border-white/20 bg-black/20 px-3 py-2"><MapPin size={15} className="text-red-accent" />United Kingdom</span>
            </div>
          </div>
          <div className="hidden justify-self-end md:block">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm lg:h-52 lg:w-52">
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-red-accent/60 lg:h-44 lg:w-44">
                <Trophy size={27} className="mb-2 text-red-accent" />
                <span className="font-display text-3xl font-bold">{events.length}</span>
                <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">events</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EventDirectory events={events} />
      <Footer />
    </main>
  );
}
