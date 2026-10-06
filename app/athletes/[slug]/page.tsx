import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { athletes } from "@/data/athletes";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Trophy, MapPin, ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const athlete = athletes.find((a) => a.slug === params.slug);
  if (!athlete) {
    return {
      title: "Athlete Not Found",
    };
  }
  return {
    title: `${athlete.name} | Elite Karate Events`,
    description: `Meet ${athlete.name}, ${athlete.discipline} athlete from ${athlete.country}`,
  };
}

export async function generateStaticParams() {
  return athletes.map((athlete) => ({
    slug: athlete.slug,
  }));
}

export default function AthleteDetailPage({ params }: Props) {
  const athlete = athletes.find((a) => a.slug === params.slug);

  if (!athlete) {
    return (
      <main className="bg-white">
        <Navigation />
        <div className="section-py text-center">
          <p className="text-xl text-black/70">Athlete not found</p>
          <Link href="/athletes" className="text-red-primary font-semibold mt-4 inline-block">
            Back to Athletes
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
          src={athlete.image}
          alt={athlete.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </section>

      {/* Athlete Content */}
      <section className="section-py">
        <div className="section-container section-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <Link
                href="/athletes"
                className="inline-flex items-center gap-2 text-red-primary font-semibold mb-8 hover:gap-3 transition-all"
              >
                <ArrowLeft size={18} />
                Back to Athletes
              </Link>

              {/* Athlete Header */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-black mb-4">{athlete.name}</h1>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-red-primary" size={20} />
                    <span className="font-semibold">{athlete.country}</span>
                  </div>
                  <span className="px-4 py-2 bg-red-primary/10 text-red-primary font-semibold text-sm rounded">
                    {athlete.discipline}
                  </span>
                </div>
              </div>

              {/* Bio */}
              {athlete.bio && (
                <div className="mb-12">
                  <h2 className="section-heading mb-6">About</h2>
                  <p className="text-black/70 leading-relaxed text-lg">{athlete.bio}</p>
                </div>
              )}

              {/* Athlete Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="card-premium p-6">
                  <p className="text-xs uppercase font-bold text-black/60 mb-2">Dojo</p>
                  <p className="font-bold text-lg">{athlete.dojo}</p>
                  {athlete.city && (
                    <p className="text-sm text-black/60">{athlete.city}, {athlete.country}</p>
                  )}
                </div>
                <div className="card-premium p-6">
                  <p className="text-xs uppercase font-bold text-black/60 mb-2">Discipline</p>
                  <p className="font-bold text-lg">{athlete.discipline}</p>
                  <p className="text-sm text-black/60">{athlete.category}</p>
                </div>
              </div>

              {/* Achievements */}
              {athlete.achievements.length > 0 && (
                <div>
                  <h2 className="section-heading mb-6">Achievements</h2>
                  <div className="space-y-4">
                    {athlete.achievements.map((achievement, idx) => (
                      <div key={idx} className="card-premium p-6 flex items-start gap-4">
                        <div className="text-2xl">
                          {achievement.result === "Gold"
                            ? "🥇"
                            : achievement.result === "Silver"
                              ? "🥈"
                              : "🥉"}
                        </div>
                        <div>
                          <p className="font-bold">{achievement.competition}</p>
                          <p className="text-sm text-black/60">
                            {achievement.year} • {achievement.category} • {achievement.result}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-premium p-8 sticky top-24">
                <div className="mb-8">
                  <p className="text-xs uppercase font-bold text-black/60 mb-4 pb-4" style={{borderBottom: "1px solid rgba(0, 0, 0, 0.1)"}}>
                    Quick Stats
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase font-bold text-red-primary mb-1">Country</p>
                      <p className="font-bold">{athlete.country}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-bold text-red-primary mb-1">Discipline</p>
                      <p className="font-bold">{athlete.discipline}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-bold text-red-primary mb-1">Category</p>
                      <p className="font-bold">{athlete.category}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-bold text-red-primary mb-1">Dojo</p>
                      <p className="font-bold">{athlete.dojo}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-bold text-red-primary mb-1">Achievements</p>
                      <p className="font-bold">{athlete.achievements.length}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/events"
                  className="w-full py-4 font-bold rounded-lg text-white transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 btn-primary"
                >
                  VIEW COMPETITIONS
                  <ArrowRight size={18} />
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
