import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Zap } from "lucide-react";

interface EventCardProps {
  id: string;
  slug: string;
  name: string;
  date: string;
  location: string;
  venue: string;
  image: string;
  type: string;
  registrationStatus: "Open" | "Closed" | "Coming Soon";
}

export function EventCard({
  id,
  slug,
  name,
  date,
  location,
  venue,
  image,
  type,
  registrationStatus,
}: EventCardProps) {
  const statusColor =
    registrationStatus === "Open"
      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
      : registrationStatus === "Closed"
        ? "bg-red-500/20 border-red-500/50 text-red-300"
        : "bg-blue-500/20 border-blue-500/50 text-blue-300";

  const statusText =
    registrationStatus === "Open"
      ? "Open"
      : registrationStatus === "Closed"
        ? "Closed"
        : "Coming Soon";

  return (
    <Link href={`/events/${slug}`}>
      <div className="card-premium group cursor-pointer">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-dark-secondary">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-black/40 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-3">
            {/* Type Badge */}
            <div className="bg-red-primary/90 backdrop-blur-md px-3 py-1.5 rounded text-xs font-black uppercase text-white whitespace-nowrap">
              {type}
            </div>

            {/* Status Badge */}
            <div className={`backdrop-blur-md px-3 py-1.5 rounded text-xs font-black uppercase border flex items-center gap-1.5 ${statusColor}`}>
              <Zap size={11} className="flex-shrink-0" />
              {statusText}
            </div>
          </div>

          {/* Event Name Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-black text-lg text-white line-clamp-2">
              {name}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 bg-dark-secondary/50">
          <div className="space-y-4">
            {/* Info Grid */}
            <div className="space-y-3">
              {/* Date */}
              <div className="info-item">
                <Calendar size={16} className="info-icon" />
                <div className="flex-1 min-w-0">
                  <p className="info-label">Date</p>
                  <p className="info-value">
                    {new Date(date).toLocaleDateString("en-US", { 
                      month: "short", 
                      day: "numeric"
                    })}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="info-item">
                <MapPin size={16} className="info-icon" />
                <div className="flex-1 min-w-0">
                  <p className="info-label">Location</p>
                  <p className="info-value line-clamp-1">{venue}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider-light"></div>

            {/* CTA */}
            <div className="flex items-center justify-between group/cta">
              <span className="text-red-accent font-black text-sm group-hover/cta:text-red-primary transition-colors">
                Details
              </span>
              <ArrowRight size={14} className="text-red-accent group-hover/cta:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
