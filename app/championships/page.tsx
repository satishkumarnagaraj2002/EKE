import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { championships } from "@/data/championships";

export const metadata: Metadata = {
  title: "Championships | Elite Karate Events",
  description: "Elite Karate Events Championships - Premier karate competitions and championships.",
};

export default function ChampionshipsPage() {
  return (
    <main className="bg-white pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-charcoal to-deep-red px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute -right-96 -top-96 h-[600px] w-[600px] rounded-full bg-red/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
            Elite Karate
            <br />
            <span className="text-red-bright">Championships</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            The premier karate championships bringing together elite athletes from around the world.
          </p>
        </div>
      </section>

      {/* Championships Grid */}
      <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {championships.map((champ) => (
              <Link
                key={champ.id}
                href={`/championships/${champ.slug}`}
                className="group overflow-hidden rounded-xl border border-black/10 bg-white transition-all hover:border-red/30 hover:shadow-xl"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-charcoal/30 to-black/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-black/30 group-hover:scale-105 transition-transform duration-300">
                      [Championship Image]
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-baseline gap-3">
                      <h2 className="font-display text-3xl font-black text-black">{champ.name}</h2>
                      <span className="text-lg font-bold text-black/60">{champ.year}</span>
                    </div>

                    <p className="mt-3 text-lg text-black/60">{champ.location}</p>

                    <p className="mt-6 text-base leading-relaxed text-black/70">{champ.description}</p>

                    <div className="mt-8">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-black/60">Key Highlights:</p>
                      <ul className="space-y-2">
                        {champ.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-red shrink-0"></span>
                            <span className="text-sm text-black/70">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-sm font-bold text-red group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
