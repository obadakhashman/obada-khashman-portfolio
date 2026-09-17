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
      "Early-stage backing for founders building
