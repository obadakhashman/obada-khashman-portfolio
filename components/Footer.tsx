import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <span className="font-display text-sm text-gold-dim">
          OK — Obada Khashman
        </span>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-ink-faint">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-gold">
              {link.label}
            </a>
          ))}
        </div>

        <span className="text-xs text-ink-faint">
          © {new Date().getFullYear()} Obada Khashman. All rights reserved.
        </span>
      </div>
