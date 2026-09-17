"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28"
    >
      {/* faint gold linework backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(115deg,rgba(212,175,55,0.05)_0px,rgba(212,175,55,0.05)_1px,transparent_1px,transparent_90px)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2"
      >
        <div>
          <motion.p variants={item} className="section-eyebrow">
            Serial Entrepreneur &amp; Investment Advisor
          </motion.p>
