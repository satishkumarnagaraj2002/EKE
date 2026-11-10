import { events } from "@/data/events";

export interface Championship {
  id: string;
  slug: string;
  name: string;
  year: number;
  location: string;
  country: string;
  date: string;
  image: string;
  status: "Completed" | "Upcoming" | "In Progress";
  description: string;
  highlights: string[];
}

const today = new Date().toISOString().slice(0, 10);

export const championships: Championship[] = events
  .filter((event) => event.type === "International Competition" || event.type === "Open Competition")
  .map((event) => ({
    id: event.id,
    slug: event.slug,
    name: event.name,
    year: Number(event.date.slice(0, 4)),
    location: event.location,
    country: event.country,
    date: event.date,
    image: event.image,
    status: event.date < today ? "Completed" : "Upcoming",
    description: event.description,
    highlights: event.categories,
  }));

export function getChampionshipBySlug(slug: string): Championship | undefined {
  return championships.find((championship) => championship.slug === slug);
}

export function getUpcomingChampionships(): Championship[] {
  return championships
    .filter((championship) => championship.status !== "Completed")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getCompletedChampionships(): Championship[] {
  return championships
    .filter((championship) => championship.status === "Completed")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
