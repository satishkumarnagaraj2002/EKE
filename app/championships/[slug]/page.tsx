import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { championships } from "@/data/championships";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Trophy, Calendar, MapPin, ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const championship = championships.find((c) => c.slug === params.slug);
  if (!championship) {
    return {
      title: "Championship Not Found",
    };
  }
  return {
    title: `${championship.name} | Elite Karate Events`,
    description: championship.description,
  };
}

export async function generateStaticParams() {
  return championships.map((championship) => ({
    slug: championship.slug,
  }));
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-gray-100 text-gray-900";
    case "In Progress":
      return "bg-yellow-100 text-yellow-900";
    case "Upcoming":
      return "bg-emerald-100 text-emerald-900";
    default:
      return "bg-gray-100 text-gray-900";
  }
};

export default function ChampionshipDetailPage({ params }: Props) {
  const championship = championships.find((c) => c.slug === params.slug);

  if (!championship) {
    return (
      <main className="bg-white">
        <Navigation />
        <div className="section-py text-center">
          <p className="text-xl text-black/70">Championship not found</p>
          <Link href="/championships" className="text-red-primary font-semibold mt-4 inline-block">
            Back to Championships
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
          src={championship.image}
          alt={championship.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </section>

      {/* Championship Content */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <Link
                href="/championships"
                className="inline-flex items-center gap-2 text-red-primary font-semibold mb-8 hover:gap-3 transition-all"
              >
                <ArrowLeft size={18} />
                Back to Championships
              </Link>

              {/* Championship Header */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(championship.status)}`}>
                    {championship.status}
                  </span>
                  <span className="text-2xl font-black text-red-primary">{championship.year}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-4">{championship.name}</h1>
              </div>

              {/* Description */}
              <div className="mb-12">
                <p className="text-lg text-black/70 leading-relaxed">{championship.description}</p>
              </div>

              {/* Highlights */}
              {championship.highlights.length > 0 && (
                <div className="mb-12">
                  <h2 className="section-heading mb-6">Highlights</h2>
                  <ul className="space-y-3">
                    {championship.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-black/70">
                        <Trophy className="text-red-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-premium p-6">
                  <p className="text-xs uppercase font-bold text-black/60 mb-2">Location</p>
                  <p className="font-bold text-lg">{championship.location}</p>
                  <p className="text-sm text-black/60">{championship.country}</p>
                </div>

                <div className="card-premium p-6">
                  <p className="text-xs uppercase font-bold text-black/60 mb-2">Year</p>
                  <p className="font-bold text-lg">{championship.year}</p>
                  <p className="text-sm text-black/60">
                    {new Date(championship.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-premium p-8 sticky top-24">
                {/* Championship Info */}
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs uppercase font-bold text-black/60 mb-2">Championship</p>
                    <p className="font-bold text-lg">{championship.name}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold text-black/60 mb-2">Location</p>
                    <p className="font-bold">{championship.location}, {championship.country}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold text-black/60 mb-2">Date</p>
                    <p className="font-bold">
                      {new Date(championship.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-bold text-black/60 mb-2">Status</p>
                    <p className={`px-3 py-1 rounded-full font-semibold text-sm w-fit ${getStatusColor(championship.status)}`}>
                      {championship.status}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/events"
                  className="w-full py-4 font-bold rounded-lg text-white transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 btn-primary"
                >
                  VIEW EVENTS
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/register"
                  className="w-full mt-3 py-4 font-bold rounded-lg border-2 border-black bg-white text-black transition-all hover:bg-black hover:text-white text-center"
                >
                  REGISTER NOW
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
