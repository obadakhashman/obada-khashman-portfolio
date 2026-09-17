export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#ventures" },
  { label: "Ventures", href: "#ventures" },
  { label: "Academy", href: "#journey" },
  { label: "Blog", href: "#insights" },
  { label: "Contact", href: "#contact" }
];

export type Venture = {
  icon: "building" | "trending" | "cpu" | "palette";
  title: string;
  description: string;
};

export const ventures: Venture[] = [
  {
    icon: "building",
    title: "Khashman Holdings",
    description:
      "The family office behind every venture — governance, capital allocation and long-term stewardship."
  },
  {
    icon: "trending",
    title: "Investment Advisory",
    description:
      "Private guidance for founders and family offices navigating growth capital and cross-border deals."
  },
  {
    icon: "cpu",
    title: "Tech Innovations",
    description:
      "Early-stage backing for founders building infrastructure, fintech and applied AI across emerging markets."
  },
  {
    icon: "palette",
    title: "Creative Studio",
    description:
      "A film and content studio translating strategy into story — documentaries and original productions."
  }
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  image: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "2027",
    title: "Global expansion",
    description:
      "Charting the next phase of Khashman Holdings across three new markets and extending the advisory practice.",
    image: "/images/journey-2027.jpg"
  },
  {
    year: "2024",
    title: "Creative Studio launches",
    description:
      "Founded the in-house production arm, pairing capital with storytelling and premiering its first feature.",
    image: "/images/journey-2024.jpg"
  },
  {
    year: "2020",
    title: "Tech Innovations formed",
    description:
      "Opened the early-stage practice, backing founders in fintech and infrastructure across the Gulf and MENA.",
    image: "/images/journey-2020-b.jpg"
  },
  {
    year: "2020",
    title: "Advisory practice opens",
    description:
      "Began advising family offices and founders directly on structuring, growth capital and cross-border deals.",
    image: "/images/journey-2020-a.jpg"
  },
  {
    year: "2003",
    title: "First venture",
    description:
      "Founded a small trading operation that would later become the foundation for Khashman Holdings.",
    image: "/images/journey-2003.jpg"
  }
];

export type InsightType = "article" | "podcast" | "video";

export type Insight = {
  type: InsightType;
  date: string;
  title: string;
  href: string;
  youtubeId?: string;
};

export const insights: Insight[] = [
  {
    type: "video",
    date: "Feature Documentary · 2026",
    title: "Previous Stops — retracing the routes of early trade",
    href: "#",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    type: "article",
    date: "Essay · September 2026",
    title: "Investing destinies: rereading opportunity in emerging markets",
    href: "#"
  },
  {
    type: "podcast",
    date: "Interview · August 2026",
    title: "Obada on Mastermind Talks: capital, craft and conviction",
    href: "#"
  }
];

export type SocialLink = { label: string; href: string };

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" }
];
