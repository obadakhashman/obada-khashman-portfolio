"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow">
              Section Two — <span className="text-gold">My Journey</span>
            </p>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Two decades, in brief
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-dim">
            A path from first ventures to a portfolio built across markets
            and disciplines.
          </p>
        </div>

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-10">
            {timeline.map((stop, i) => {
              const fromLeft = i % 2 === 0;
              return (
                <motion.li
