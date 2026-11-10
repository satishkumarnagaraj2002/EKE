export interface Athlete {
  id: string;
  slug: string;
  name: string;
  country: string;
  dojo: string;
  discipline: string;
  category: string;
  image: string;
  bio: string;
  featured: boolean;
}

const squadPoster = "/Sqad.jpeg";

export const athletes: Athlete[] = [
  {
    id: "maya-harian",
    slug: "maya-harian",
    name: "Maya Harian",
    country: "England",
    dojo: "Shito Ryu England squad",
    discipline: "Kumite",
    category: "Female Junior Kumite, -63kg",
    image: squadPoster,
    bio: "The Shito Ryu England squad poster lists Maya Harian as a female junior kumite athlete in the -63kg category, representing England at the World Karate Championships in Poland.",
    featured: true,
  },
  {
    id: "nada-wegrzyn",
    slug: "nada-wegrzyn",
    name: "Nada Wegrzyn",
    country: "England",
    dojo: "Shito Ryu England squad",
    discipline: "Kata",
    category: "Female Junior Kata",
    image: squadPoster,
    bio: "The Shito Ryu England squad poster lists Nada Wegrzyn as a female junior kata athlete representing England at the World Karate Championships in Poland.",
    featured: true,
  },
  {
    id: "adam-choudhury",
    slug: "adam-choudhury",
    name: "Adam Choudhury",
    country: "Bangladesh",
    dojo: "Shito Ryu England squad training",
    discipline: "Kata & Kumite",
    category: "Male Junior Kata & Kumite, -61kg",
    image: squadPoster,
    bio: "The Shito Ryu England squad poster lists Adam Choudhury as a male junior kata and kumite athlete in the -61kg category, representing Bangladesh.",
    featured: true,
  },
];
