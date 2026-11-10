import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Users, ArrowLeft, ArrowRight, Images } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((event) => event.slug === slug);
  if (!event) {
    return {
      title: "Event Not Found",
    };
  }
  return {
    title: `${event.name} | Elite Karate Events`,
    description: event.description,
  };
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Open":
      return "badge-open";
    case "Closed":
      return "badge-closed";
    case "Coming Soon":
      return "badge-soon";
    default:
      return "badge-status bg-gray-100 text-gray-900";
  }
};

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((event) => event.slug === slug);

  if (!event) {
    return (
      <main className="bg-white">
        <Navigation />
        <div className="section-py text-center">
          <p className="text-xl text-black/70">Event not found</p>
          <Link href="/events" className="text-red-primary font-semibold mt-4 inline-block">
            Back to Events
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const isPastEvent = event.date < new Date().toISOString().slice(0, 10);
  const backHref = isPastEvent ? "/past-events" : "/events";

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-dark-primary">
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-contain"
          priority
          sizes="100vw"
        />
      </section>

      {/* Event Content */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-red-primary font-semibold mb-8 hover:gap-3 transition-all"
              >
                <ArrowLeft size={18} />
                {isPastEvent ? "Back to Past Events" : "Back to Events"}
              </Link>

              {/* Event Header */}
              <div className="mb-12">
                <div className={`${getStatusColor(event.registrationStatus)} mb-4`}>
                  {event.registrationStatus}
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-4">{event.name}</h1>
                <p className="text-lg text-black/70">{event.description}</p>
              </div>

              {/* Event Overview */}
              <div className="mb-12">
                <h2 className="section-heading mb-6">About This Event</h2>
                <p className="whitespace-pre-line text-black/70 leading-relaxed mb-6">{event.overview}</p>
              </div>

              {/* Competition Details */}
              <div className="mb-12">
                <h2 className="section-heading mb-6">Competition Format</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3">Categories</h3>
                    <ul className="space-y-2">
                      {event.categories.map((cat) => (
                        <li key={cat} className="flex items-center gap-2 text-black/70">
                          <span className="w-2 h-2 rounded-full" style={{backgroundColor: "#C1121F"}}></span>
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {event.ageGroups.length > 0 && (
                    <div>
                      <h3 className="font-bold mb-3">Age Groups</h3>
                      <ul className="space-y-2">
                        {event.ageGroups.map((age) => (
                          <li key={age} className="flex items-center gap-2 text-black/70">
                            <span className="w-2 h-2 rounded-full" style={{backgroundColor: "#C1121F"}}></span>
                            {age}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Rules */}
              {event.rules && (
                <div className="mb-12">
                  <h2 className="section-heading mb-6">Rules & Regulations</h2>
                  <p className="whitespace-pre-line text-black/70 leading-relaxed">{event.rules}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-premium p-8 sticky top-24">
                {/* Key Details */}
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs uppercase font-bold text-black/60 mb-2">Date</p>
                    <p className="font-bold text-lg">
                      {new Date(`${event.date}T12:00:00`).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(`${event.endDate}T12:00:00`).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold text-black/60 mb-2">Venue</p>
                    <p className="font-bold">{event.venue}</p>
                    <p className="text-sm text-black/60">{event.location}, {event.country}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold text-black/60 mb-2">Address</p>
                    <p className="text-sm text-black/70">{event.address}</p>
                  </div>

                  {event.registrationDeadline && (
                    <div style={{borderTop: "1px solid rgba(0, 0, 0, 0.1)"}} className="pt-6">
                      <p className="text-xs uppercase font-bold text-black/60 mb-2">Registration Deadline</p>
                      <p className="font-bold">
                        {new Date(event.registrationDeadline).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  )}
                </div>

                {/* Organizer Info */}
                <div className="bg-bg-light p-6 rounded-lg mb-8">
                  <p className="text-xs uppercase font-bold text-black/60 mb-3">Organizer</p>
                  <p className="font-bold mb-4">{event.organizerName}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-black/70">{event.organizerEmail}</p>
                    <p className="text-black/70">{event.organizerPhone}</p>
                  </div>
                </div>

                {/* Registration Button */}
                {isPastEvent ? (
                  <Link href="/past-events" className="w-full rounded-lg btn-primary py-4 text-center">
                    EXPLORE THE EVENT ARCHIVE <ArrowRight size={18} className="ml-2" />
                  </Link>
                ) : event.playerRegistrationUrl && event.clubRegistrationUrl ? (
                  <div className="space-y-3">
                    <a href={event.playerRegistrationUrl} target="_blank" rel="noopener noreferrer" className="w-full rounded-lg btn-primary py-4 text-center">
                      PLAYER REGISTRATION <ArrowRight size={18} className="ml-2" />
                    </a>
                    <a href={event.clubRegistrationUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-lg border border-red-primary/50 bg-white py-4 text-center font-bold text-red-primary transition hover:bg-red-primary hover:text-white">
                      CLUB REGISTRATION <ArrowRight size={18} className="ml-2" />
                    </a>
                  </div>
                ) : event.registrationUrl ? (
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="w-full rounded-lg btn-primary py-4 text-center">
                    REGISTER NOW <ArrowRight size={18} className="ml-2" />
                  </a>
                ) : (
                  <Link
                    href={`/register?event=${event.slug}`}
                    className="w-full rounded-lg btn-primary py-4 text-center"
                  >
                    REGISTER NOW
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                )}

                {event.bulletinUrl ? (
                  <a href={event.bulletinUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex w-full items-center justify-center rounded-lg border border-black/20 bg-white py-4 font-bold text-black transition hover:bg-black hover:text-white">
                    COMPETITION BULLETIN PDF
                  </a>
                ) : event.playerRegistrationUrl ? (
                  <button type="button" disabled className="mt-3 w-full cursor-not-allowed rounded-lg border border-black/10 bg-black/5 py-4 font-bold text-black/40" title="The competition bulletin PDF has not been added to the site yet">
                    COMPETITION BULLETIN PDF UNAVAILABLE
                  </button>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {event.gallery && event.gallery.length > 0 && (
        <section className="relative isolate overflow-hidden bg-[#07111e] py-16 text-white md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 8% 12%, rgba(215,25,32,0.2), transparent 28rem), radial-gradient(circle at 92% 78%, rgba(48,118,190,0.18), transparent 30rem)" }} />
          <div className="section-container section-px">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-red-accent">
                  <Images size={15} /> Moments from the event
                </p>
                <h2 className="font-display text-3xl font-bold uppercase md:text-5xl">Event gallery</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                  {event.gallery.length} event images. Select any image to open it at full size.
                </p>
              </div>
              <span className="border border-white/15 bg-white/[0.04] px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-white/60">
                {event.gallery.length} images
              </span>
            </div>

            <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
              {event.gallery.map((image, index) => (
                <a
                  key={image}
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open photo ${index + 1} from ${event.name} at full size`}
                  className="group relative mb-5 block break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-red-accent/50 hover:shadow-[0_20px_55px_rgba(215,25,32,0.16)]"
                >
                  <Image
                    src={image}
                    alt={`${event.name} — event image ${index + 1}`}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-auto w-full rounded-lg object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  <span className="pointer-events-none absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/50 text-sm font-semibold text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
