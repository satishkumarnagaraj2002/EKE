import { events } from "@/data/events";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Events" | "Results" | "Athletes" | "Championships" | "Announcements";
  image: string;
  author?: string;
  date: string;
  featured: boolean;
}

export const news: NewsArticle[] = events.map((event) => ({
  id: event.id,
  slug: event.slug,
  title: event.name,
  excerpt: event.description,
  content: event.overview,
  category: event.type === "Seminar" || event.type === "Training Camp" ? "Announcements" : "Events",
  image: event.image,
  author: event.organizerName,
  date: event.date,
  featured: event.featured,
}));
