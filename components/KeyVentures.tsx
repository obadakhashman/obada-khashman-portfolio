"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Cpu, Palette, LucideIcon } from "lucide-react";
import { ventures } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  trending: TrendingUp,
  cpu: Cpu,
  palette: Palette
};

export default function KeyVentures() {
  return (
    <section id="ventures" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">
              Section One — <span className="text-gold">Key Ventures</span>
            </p>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Where the work happens
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-dim">
            Four disciplines, one operating philosophy: patient capital,
            deliberate craft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ventures.
