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
  const statusConfig = {
    Completed: { icon: "✓", color: "bg-gray-500/20 border-gray-500/50 text-gray-300" },
    "In Progress": { icon: "⏱", color: "bg-amber-500/20 border-amber-500/50 text-amber-300" },
    Upcoming: { icon: "🎯", color: "bg-emerald-500/20 border-emerald-500/50 text-emerald-300" },
  };

  const config = statusConfig[status];

  return (
    <Link href={`/championships/${slug}`}>
      <div className="card-premium group cursor-pointer">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden bg-dark-secondary">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
          
          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-black/40 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-3">
            {/* Year Badge */}
            <div className="bg-red-primary/90 backdrop-blur-md px-4 py-2 rounded font-black text-lg text-white whitespace-nowrap">
              {year}
            </div>

            {/* Status Badge */}
            <div className={`backdrop-blur-md px-3 py-1.5 rounded text-xs font-black uppercase border flex items-center gap-1.5 ${config.color}`}>
              <span>{config.icon}</span>
              {status}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-black text-xl text-white line-clamp-2">
              {name}
            </h3>
            <p className="text-red-accent text-sm font-black mt-1">{location}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 bg-dark-secondary/50">
          <div className="space-y-4">
            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
              {description}
            </p>

            {/* Divider */}
            <div className="divider-light"></div>

            {/* Footer with CTA */}
            <div className="flex items-center justify-between group/cta">
              <div className="flex items-center gap-2">
                <Trophy size={14} className="text-red-accent" />
                <span className="text-red-accent font-black text-sm group-hover/cta:text-red-primary transition-colors">
                  Learn More
                </span>
              </div>
              <ArrowRight size={14} className="text-red-accent group-hover/cta:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
