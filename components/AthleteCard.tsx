import Link from "next/link";
import Image from "next/image";
import { MapPin, Award, Sparkles } from "lucide-react";

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
      <div className="card-premium group cursor-pointer relative overflow-hidden">
        {/* Glow Effect on Hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-dark via-red-primary to-red-bright opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur -z-10"></div>

        {/* Image Container */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Premium Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 group-hover:from-black/80 transition-all duration-500"></div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-red-primary/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Sparkles size={12} className="text-white" />
            <span className="text-white font-bold text-xs uppercase">Elite</span>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <div className="space-y-3">
              <div className="transform group-hover:-translate-y-1 transition-transform duration-500">
                <h3 className="font-black text-2xl text-white group-hover:text-red-bright transition-colors line-clamp-2">
                  {name}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                <MapPin size={16} className="text-gold-accent flex-shrink-0" />
                <span className="font-semibold">{country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white/90">
          <div className="space-y-4">
            {/* Discipline Badge */}
            <div className="inline-block">
              <p className="text-xs font-black text-red-primary uppercase tracking-widest bg-red-primary/10 px-3 py-1 rounded-full border border-red-primary/30">
                {discipline}
              </p>
            </div>

            {/* Info Section */}
            <div>
              <p className="text-xs font-black text-black/50 uppercase tracking-wider mb-2">Dojo</p>
              <p className="font-bold text-black/80 line-clamp-2 text-sm">{dojo}</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-red-primary/0 via-red-primary/30 to-red-primary/0"></div>

            {/* CTA */}
            <div className="flex items-center justify-between group/cta pt-2">
              <span className="text-red-primary font-bold text-sm group-hover/cta:text-red-bright transition-colors">
                View Profile
              </span>
              <span className="text-lg group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
