import Link from "next/link";
import Image from "next/image";
import { MapPin, Award } from "lucide-react";

interface AthleteCardProps {
  slug: string;
  name: string;
  country: string;
  dojo: string;
  discipline: string;
  image: string;
}

export function AthleteCard({
  slug,
  name,
  country,
  dojo,
  discipline,
  image,
}: AthleteCardProps) {
  return (
    <Link href={`/athletes/${slug}`}>
      <div className="card-premium group cursor-pointer">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden bg-dark-secondary">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-black/40 to-transparent"></div>
          
          {/* Elite Badge */}
          <div className="absolute top-4 right-4 bg-red-primary/90 backdrop-blur-md px-3 py-1 rounded text-white font-black text-xs uppercase">
            ELITE
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-black text-xl text-white line-clamp-2">
              {name}
            </h3>
            <div className="flex items-center gap-2 text-red-accent text-sm font-black mt-1">
              <MapPin size={14} />
              {country}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-dark-secondary/50">
          <div className="space-y-4">
            {/* Discipline Badge */}
            <div className="inline-block">
              <p className="text-xs font-black text-red-accent uppercase tracking-widest bg-red-primary/15 px-3 py-1 rounded border border-red-primary/30">
                {discipline}
              </p>
            </div>

            {/* Dojo Info */}
            <div>
              <p className="info-label">Dojo</p>
              <p className="info-value line-clamp-2">{dojo}</p>
            </div>

            {/* Divider */}
            <div className="divider-light"></div>

            {/* CTA */}
            <div className="flex items-center justify-between group/cta">
              <span className="text-red-accent font-black text-sm">Profile</span>
              <Award size={14} className="text-red-accent group-hover/cta:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
