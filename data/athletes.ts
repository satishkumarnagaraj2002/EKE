export interface Athlete {
  id: string;
  slug: string;
  name: string;
  country: string;
  city?: string;
  dojo: string;
  discipline: "Kata" | "Kumite" | "Both";
  category: string;
  image: string;
  bio?: string;
  achievements: {
    competition: string;
    year: number;
    result: "Gold" | "Silver" | "Bronze";
    category: string;
  }[];
  featured: boolean;
}

export const athletes: Athlete[] = [
  {
    id: "1",
    slug: "yuki-tanaka",
    name: "Yuki Tanaka",
    country: "Japan",
    city: "Tokyo",
    dojo: "Shotokan Dojo Tokyo",
    discipline: "Kata",
    category: "Senior Women",
    image: "https://images.unsplash.com/photo-1584735175097-24340077477d?w=500&h=500&fit=crop",
    bio: "One of the most decorated kata athletes in international competition with multiple championship titles.",
    achievements: [
      {
        competition: "Elite Karate Championship London 2026",
        year: 2026,
        result: "Gold",
        category: "Women's Kata Senior",
      },
      {
        competition: "International Open Championship",
        year: 2025,
        result: "Gold",
        category: "Women's Kata",
      },
      {
        competition: "Asian Karate Games",
        year: 2024,
        result: "Silver",
        category: "Women's Team Kata",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "marco-rossi",
    name: "Marco Rossi",
    country: "Italy",
    city: "Milan",
    dojo: "Milano Karate Club",
    discipline: "Kumite",
    category: "Senior Men",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop",
    bio: "Dynamic kumite athlete known for aggressive strategy and precision technique.",
    achievements: [
      {
        competition: "Elite Karate Championship London 2026",
        year: 2026,
        result: "Silver",
        category: "Men's Kumite Senior",
      },
      {
        competition: "European Karate Championships",
        year: 2025,
        result: "Gold",
        category: "Men's Kumite",
      },
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "sofia-garcia",
    name: "Sofia Garcia",
    country: "Spain",
    city: "Barcelona",
    dojo: "Barcelona Karate Federation",
    discipline: "Both",
    category: "Junior Women",
    image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=500&fit=crop",
    bio: "Rising star excelling in both kata and kumite disciplines.",
    achievements: [
      {
        competition: "European Junior Championships",
        year: 2026,
        result: "Gold",
        category: "Junior Women's Kumite",
      },
      {
        competition: "Mediterranean Games",
        year: 2025,
        result: "Bronze",
        category: "Junior Women's Kata",
      },
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "david-chen",
    name: "David Chen",
    country: "Canada",
    city: "Toronto",
    dojo: "Toronto Karate Academy",
    discipline: "Kumite",
    category: "Senior Men",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
    achievements: [
      {
        competition: "North American Open",
        year: 2026,
        result: "Gold",
        category: "Men's Kumite Senior",
      },
    ],
    featured: false,
  },
];
