"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Search, Trophy } from "lucide-react";
import type { Event } from "@/data/events";

interface EventDirectoryProps {
  events: Event[];
}

export function EventDirectory({ events }: EventDirectoryProps) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const locations = Array.from(new Set(events.map((event) => event.location))).sort();
  const types = Array.from(new Set(events.map((event) => event.type))).sort();
  const filteredEvents = events.filter((event) => {
    const searchText = `${event.name} ${event.location} ${event.venue}`.toLowerCase();
    return (
      searchText.includes(search.trim().toLowerCase()) &&
      (!location || event.location === location) &&
      (!type || event.type === type) &&
      (!status || event.registrationStatus === status)
    );
  });
  const hasFilters = Boolean(search || location || type || status);

  return (
    <section className="bg-[#f4f5f6] px-5 py-16 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-red-primary">The calendar</p>
            <h2 className="font-display text-3xl font-bold uppercase text-dark-primary md:text-4xl">Choose your next challenge</h2>
          </div>
          <p className="text-sm font-semibold text-black/50">{filteredEvents.length} {filteredEvents.length === 1 ? "EVENT" : "EVENTS"}</p>
        </div>

        <div className="mb-10 grid gap-3 rounded-lg border border-black/10 bg-white p-3 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          <label className="relative">
            <span className="sr-only">Search events</span>
            <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search events"
              className="h-12 w-full rounded-md border border-black/10 bg-[#f7f7f8] pl-10 pr-3 text-sm text-black outline-none transition focus:border-red-primary"
            />
          </label>
          <label>
            <span className="sr-only">Filter by location</span>
            <select value={location} onChange={(event) => setLocation(event.target.value)} className="h-12 w-full rounded-md border border-black/10 bg-[#f7f7f8] px-3 text-sm text-black outline-none focus:border-red-primary">
              <option value="">All locations</option>
              {locations.map((place) => <option key={place} value={place}>{place}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Filter by event type</span>
            <select value={type} onChange={(event) => setType(event.target.value)} className="h-12 w-full rounded-md border border-black/10 bg-[#f7f7f8] px-3 text-sm text-black outline-none focus:border-red-primary">
              <option value="">All event types</option>
              {types.map((eventType) => <option key={eventType} value={eventType}>{eventType}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Filter by registration status</span>
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-12 w-full rounded-md border border-black/10 bg-[#f7f7f8] px-3 text-sm text-black outline-none focus:border-red-primary">
              <option value="">All registration statuses</option>
              <option value="Open">Registration open</option>
              <option value="Coming Soon">Coming soon</option>
              <option value="Closed">Registration closed</option>
            </select>
          </label>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredEvents.map((event, index) => {
              const featured = index === 0 && !hasFilters;
              const statusStyle = event.registrationStatus === "Open"
                ? "border-emerald-300/50 bg-emerald-950/70 text-emerald-100"
                : event.registrationStatus === "Closed"
                  ? "border-white/20 bg-black/60 text-white/80"
                  : "border-sky-200/40 bg-sky-950/70 text-sky-100";

              return (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className={`group relative isolate overflow-hidden rounded-lg bg-dark-secondary text-white shadow-[0_14px_40px_rgba(10,14,20,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(10,14,20,0.2)] ${featured ? "sm:col-span-2 sm:grid sm:grid-cols-[1.2fr_0.8fr]" : ""}`}
                >
                  <div className={`relative min-h-60 overflow-hidden ${featured ? "sm:min-h-80" : "h-60"}`}>
                    <Image src={event.image} alt={event.name} fill sizes={featured ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 1280px) 50vw, 33vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/10 to-transparent" />
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                      <span className="rounded bg-red-primary px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">{event.type}</span>
                      <span className={`rounded border px-3 py-1.5 text-xs font-semibold ${statusStyle}`}>{event.registrationStatus}</span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 sm:hidden">
                      <h3 className="font-display text-2xl font-bold uppercase leading-tight">{event.name}</h3>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-between p-5 md:p-6 ${featured ? "sm:p-8" : ""}`}>
                    <div>
                      <div className="mb-3 hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-accent sm:flex">
                        <Trophy size={14} /> Elite Karate Events
                      </div>
                      <h3 className="mb-4 hidden font-display text-2xl font-bold uppercase leading-tight sm:block">{event.name}</h3>
                      <div className="space-y-3 text-sm text-white/75">
                        <p className="flex items-center gap-2"><CalendarDays size={16} className="text-red-accent" />{new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                        <p className="flex items-center gap-2"><MapPin size={16} className="text-red-accent" />{event.venue}, {event.location}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-sm font-semibold text-white">
                      <span>Explore event</span>
                      <ArrowUpRight size={18} className="text-red-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="border-y border-black/10 py-16 text-center">
            <p className="font-display text-2xl font-bold uppercase text-dark-primary">No events match those filters</p>
            <p className="mt-2 text-sm text-black/60">Try a different search or clear the selected filters.</p>
            <button type="button" onClick={() => { setSearch(""); setLocation(""); setType(""); setStatus(""); }} className="mt-5 font-display text-sm font-bold uppercase text-red-primary underline underline-offset-4">Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
