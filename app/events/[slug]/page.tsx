import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/data/events";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Users, ArrowLeft, ArrowRight } from "lucide-react";

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

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-200">
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </section>

      {/* Event Content */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-red-primary font-semibold mb-8 hover:gap-3 transition-all"
              >
                <ArrowLeft size={18} />
                Back to Events
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
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(event.endDate).toLocaleDateString("en-US", {
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
                {event.playerRegistrationUrl && event.clubRegistrationUrl ? (
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

      <Footer />
    </main>
  );
}
