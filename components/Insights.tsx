"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mic, Newspaper, Play } from "lucide-react";
import { insights, type Insight } from "@/lib/data";

const typeMeta: Record<Insight["type"], { label: string; Icon: typeof Play }> = {
  video: { label: "Film", Icon: Play },
  article: { label: "Essay", Icon: Newspaper },
  podcast: { label: "Interview", Icon: Mic }
};

export default function Insights() {
  return (
    <section id="insights" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
