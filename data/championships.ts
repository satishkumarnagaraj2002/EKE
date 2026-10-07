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

export const championships: Championship[] = [
  {
    id: "1",
    slug: "elite-karate-championship-london-2026",
    name: "Elite Karate Championship London",
    year: 2026,
    location: "London",
    country: "United Kingdom",
    date: "2026-03-15",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&h=1000&fit=crop",
    status: "Completed",
    description: "The inaugural Elite Karate Championship London brought together elite athletes from across Europe in a three-day celebration of technical excellence and competitive spirit.",
    highlights: [
      "234 competitors from 18 countries",
      "4 disciplines: Kata, Kumite, Team Kata, Team Kumite",
      "12 age categories",
      "Live streaming to 50,000+ viewers",
    ],
  },
  {
    id: "2",
    slug: "elite-karate-championship-london-2027",
    name: "Elite Karate Championship London 2027",
    year: 2027,
    location: "London",
    country: "United Kingdom",
    date: "2027-03-15",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&h=1000&fit=crop",
    status: "Upcoming",
    description: "Building on the success of the inaugural championship, 2027 will bring even more international participation and expanded competition formats.",
    highlights: [
      "Expected 300+ competitors",
      "Expanded international participation",
      "Enhanced broadcasting capabilities",
      "Premier venue and facilities",
    ],
  },
  {
    id: "3",
    slug: "elite-international-open-2027",
    name: "Elite International Open",
    year: 2027,
    location: "Manchester",
    country: "United Kingdom",
    date: "2027-05-10",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1400&h=1000&fit=crop",
    status: "Upcoming",
    description: "A complementary international competition providing opportunities for developing and established athletes alike.",
    highlights: [
      "Open to all federation affiliations",
      "Flexible category system",
      "Development-focused programming",
      "Community atmosphere",
    ],
  },
  {
    id: "4",
    slug: "elite-youth-championship-2027",
    name: "Elite Youth Championship 2027",
    year: 2027,
    location: "Brighton",
    country: "United Kingdom",
    date: "2027-06-20",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&h=1000&fit=crop",
    status: "Upcoming",
    description: "Dedicated championship for young karate athletes providing a pathway to elite competition.",
    highlights: [
      "Age-appropriate categories (U12, U16, U18)",
      "Development coaching seminars",
      "Junior athlete mentorship program",
      "Family-friendly venue",
    ],
  },
];

export function getChampionshipBySlug(slug: string): Championship | undefined {
  return championships.find(c => c.slug === slug);
}

export function getUpcomingChampionships(): Championship[] {
  return championships.filter(c => c.status !== "Completed").sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getCompletedChampionships(): Championship[] {
  return championships.filter(c => c.status === "Completed").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
