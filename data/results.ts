export interface Result {
  id: string;
  competitionId: string;
  competitionName: string;
  year: number;
  categoryName: string;
  athleteName: string;
  athleteSlug: string;
  country: string;
  position: 1 | 2 | 3;
  discipline: "Kata" | "Kumite" | "Team Kata" | "Team Kumite";
  ageCategory: string;
  date: string;
}

export const results: Result[] = [
  {
    id: "1",
    competitionId: "1",
    competitionName: "Elite Karate Championship London",
    year: 2026,
    categoryName: "Women's Kata Senior",
    athleteName: "Yuki Tanaka",
    athleteSlug: "yuki-tanaka",
    country: "Japan",
    position: 1,
    discipline: "Kata",
    ageCategory: "Senior (30+)",
    date: "2026-03-15",
  },
  {
    id: "2",
    competitionId: "1",
    competitionName: "Elite Karate Championship London",
    year: 2026,
    categoryName: "Men's Kumite Senior",
    athleteName: "Marco Rossi",
    athleteSlug: "marco-rossi",
    country: "Italy",
    position: 2,
    discipline: "Kumite",
    ageCategory: "Senior (30+)",
    date: "2026-03-16",
  },
  {
    id: "3",
    competitionId: "1",
    competitionName: "Elite Karate Championship London",
    year: 2026,
    categoryName: "Junior Women's Kumite",
    athleteName: "Sofia Garcia",
    athleteSlug: "sofia-garcia",
    country: "Spain",
    position: 1,
    discipline: "Kumite",
    ageCategory: "Junior (16-20)",
    date: "2026-03-15",
  },
  {
    id: "4",
    competitionId: "1",
    competitionName: "Elite Karate Championship London",
    year: 2026,
    categoryName: "Men's Kumite Senior",
    athleteName: "David Chen",
    athleteSlug: "david-chen",
    country: "Canada",
    position: 3,
    discipline: "Kumite",
    ageCategory: "Senior (30+)",
    date: "2026-03-16",
  },
  {
    id: "5",
    competitionId: "2",
    competitionName: "International Open Championship",
    year: 2025,
    categoryName: "Women's Kata Senior",
    athleteName: "Yuki Tanaka",
    athleteSlug: "yuki-tanaka",
    country: "Japan",
    position: 1,
    discipline: "Kata",
    ageCategory: "Senior (30+)",
    date: "2025-09-20",
  },
  {
    id: "6",
    competitionId: "2",
    competitionName: "International Open Championship",
    year: 2025,
    categoryName: "Men's Kumite Senior",
    athleteName: "Marco Rossi",
    athleteSlug: "marco-rossi",
    country: "Italy",
    position: 1,
    discipline: "Kumite",
    ageCategory: "Senior (30+)",
    date: "2025-09-21",
  },
];
