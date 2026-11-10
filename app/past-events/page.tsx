import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, MapPin, Trophy } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EventDirectory } from "@/components/EventDirectory";
import { getPastEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Past Events | Elite Karate Events",
  description: "Browse past karate championships, competitions, training sessions and event details.",
};

export default function PastEventsPage() {
  const pastEvents = getPastEvents();

  return (
    <main className="bg-white pt-20">
      <Navigation />
      <section className="relative isolate overflow-hidden bg-dark-primary text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/WhatsApp Image 2026-11-10 at 6.07.18 PM.jpeg"
            alt="Elite Karate Events 2027 competition calendar"
            fill
            priority
            sizes="100vw"
            className="object-contain opacity-15"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/55" />
        <div className="mx-auto grid min-h-[420px] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.3fr_0.7fr] md:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-red-accent">
              <span className="h-px w-10 bg-red-accent" />Elite Karate Events / Archive
            </p>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.96] sm:text-6xl">Past<br /><span className="text-red-accent">events.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">Explore completed competitions, training sessions and the moments that brought our karate community together.</p>
          </div>
          <div className="hidden justify-self-end md:block">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm lg:h-52 lg:w-52">
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-red-accent/60 lg:h-44 lg:w-44">
                <Trophy size={27} className="mb-2 text-red-accent" />
                <span className="font-display text-3xl font-bold">350+</span>
                <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">events</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-5 flex gap-4 text-xs font-semibold uppercase tracking-wider text-white/60 md:left-8">
            <span className="inline-flex items-center gap-2"><CalendarDays size={15} className="text-red-accent" />Event archive</span>
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-red-accent" />United Kingdom</span>
          </div>
        </div>
      </section>
      <EventDirectory events={pastEvents} eyebrow="The archive" heading="Browse past events" />
      <Footer />
    </main>
  );
}
