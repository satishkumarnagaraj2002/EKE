import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";

interface ChampionshipCardProps {
  slug: string;
  name: string;
  year: number;
  location: string;
  status: "Completed" | "Upcoming" | "In Progress";
  image: string;
  description: string;
}

export function ChampionshipCard({
  slug,
  name,
  year,
  location,
  status,
  image,
  description,
}: ChampionshipCardProps) {
  return (
    <Link href={`/championships/${slug}`} className="group block overflow-hidden border border-white/10 bg-dark-secondary transition hover:border-red-primary/60">
      <div className="relative h-72 overflow-hidden bg-white">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="bg-red-primary/15 px-3 py-1 text-xs font-black uppercase tracking-wide text-red-accent">{year}</span>
          <span className="border border-white/15 px-3 py-1 text-xs font-black uppercase tracking-wide text-white/70">{status}</span>
        </div>
        <h3 className="font-display text-xl font-bold uppercase leading-tight text-white">{name}</h3>
        <p className="text-sm leading-relaxed text-white/65">{description}</p>
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="flex items-center gap-2 text-sm text-white/65">
            <Trophy size={15} className="text-red-accent" />
            {location}
          </span>
          <ArrowRight size={17} className="text-red-accent transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
