import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { athletes } from "@/data/athletes";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const athlete = athletes.find((entry) => entry.slug === params.slug);
  return athlete
    ? {
        title: `${athlete.name} | Elite Karate Events`,
        description: athlete.bio,
      }
    : { title: "Athlete Not Found | Elite Karate Events" };
}

export async function generateStaticParams() {
  return athletes.map((athlete) => ({ slug: athlete.slug }));
}

export default function AthleteDetailPage({ params }: Props) {
  const athlete = athletes.find((entry) => entry.slug === params.slug);

  if (!athlete) {
    return (
      <main className="bg-white">
        <Navigation />
        <section className="section-py text-center">
          <p className="text-xl text-black/70">Athlete not found</p>
          <Link href="/athletes" className="mt-4 inline-block font-semibold text-red-primary">
            Back to Featured Athletes
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Navigation />
      <section className="section-py">
        <div className="section-container section-px">
          <Link href="/athletes" className="mb-8 inline-flex items-center gap-2 font-semibold text-red-primary">
            <ArrowLeft size={18} />
            Back to Featured Athletes
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden border border-black/10 bg-dark-primary">
              <Image
                src={athlete.image}
                alt="Shito Ryu England squad training poster"
                width={1122}
                height={1400}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="py-4">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-red-primary">
                Shito Ryu England squad
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold uppercase text-dark-primary md:text-5xl">
                {athlete.name}
              </h1>
              <p className="mt-5 flex items-center gap-2 font-semibold text-black/60">
                <MapPin size={18} className="text-red-primary" />
                {athlete.country}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-black/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-black/50">Discipline</p>
                  <p className="mt-2 font-semibold text-dark-primary">{athlete.discipline}</p>
                </div>
                <div className="border border-black/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-black/50">Category</p>
                  <p className="mt-2 font-semibold text-dark-primary">{athlete.category}</p>
                </div>
              </div>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/70">{athlete.bio}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
