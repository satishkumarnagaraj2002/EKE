import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Filter } from "lucide-react";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events | Elite Karate Events",
  description: "Discover upcoming karate championships, competitions, and events. Register now for world-class competition.",
};

export default function EventsPage() {
  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-charcoal to-deep-red px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute -right-96 -top-96 h-[600px] w-[600px] rounded-full bg-red/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Find Your Next
              <br />
              <span className="text-red-bright">Competition</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Browse upcoming karate competitions, championships, and events. Filter by location, date, type and registration status.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full rounded-lg border border-white/20 bg-white/10 px-10 py-3 text-sm text-white placeholder-white/50 backdrop-blur-sm transition focus:border-red/50 focus:bg-white/20 focus:outline-none"
              />
            </div>
            <div>
              <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition focus:border-red/50 focus:bg-white/20 focus:outline-none">
                <option value="" className="bg-charcoal">All Locations</option>
                <option value="london" className="bg-charcoal">London</option>
                <option value="manchester" className="bg-charcoal">Manchester</option>
                <option value="brighton" className="bg-charcoal">Brighton</option>
              </select>
            </div>
            <div>
              <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition focus:border-red/50 focus:bg-white/20 focus:outline-none">
                <option value="" className="bg-charcoal">All Types</option>
                <option value="championship" className="bg-charcoal">Championship</option>
                <option value="open" className="bg-charcoal">Open Competition</option>
                <option value="international" className="bg-charcoal">International</option>
              </select>
            </div>
            <div>
              <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition focus:border-red/50 focus:bg-white/20 focus:outline-none">
                <option value="" className="bg-charcoal">All Status</option>
                <option value="open" className="bg-charcoal">Registration Open</option>
                <option value="coming" className="bg-charcoal">Coming Soon</option>
                <option value="closed" className="bg-charcoal">Registration Closed</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {events.length === 0 ? (
            <div className="rounded-xl border border-black/10 bg-bg-light px-8 py-16 text-center">
              <p className="text-black/60">No events found. Please check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group overflow-hidden rounded-xl border border-black/10 bg-white transition-all hover:border-red/30 hover:shadow-xl hover:shadow-red/10"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-charcoal/20 to-black/20">
                    <div className="aspect-video flex items-center justify-center text-black/30 group-hover:text-black/40">
                      [Event Image]
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <span className="inline-block rounded-full bg-red/10 px-3 py-1 text-xs font-bold uppercase text-red">
                        {event.type}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase ${
                          event.registrationStatus === "Open"
                            ? "text-green-600"
                            : event.registrationStatus === "Closed"
                              ? "text-red"
                              : "text-black/50"
                        }`}
                      >
                        {event.registrationStatus}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-black leading-tight text-black">{event.name}</h3>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-black/60">{event.location}</p>
                      <p className="text-xs font-bold uppercase text-black/60">
                        {new Date(event.date).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-black/10 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {event.categories.slice(0, 2).map((cat) => (
                          <span key={cat} className="text-xs font-semibold text-black/60">
                            {cat}
                          </span>
                        ))}
                        {event.categories.length > 2 && (
                          <span className="text-xs font-semibold text-black/60">
                            +{event.categories.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/events/${event.slug}`}
                      className="mt-4 inline-flex items-center rounded-lg bg-red/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red transition-all hover:bg-red hover:text-white"
                    >
                      View Details
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
