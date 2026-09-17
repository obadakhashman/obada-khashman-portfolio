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
                  key={`${stop.year}-${stop.title}`}
                  initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col gap-5 md:flex-row md:items-center ${
                    fromLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* dot on the rail */}
                  <span className="absolute left-[22px] top-1 h-2.5 w-2.5 rounded-full border border-gold bg-graphite md:left-1/2 md:-translate-x-1/2" />

                  <div
                    className={`glass-card ml-14 flex items-center gap-4 p-4 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      fromLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <img
                      src={stop.image}
                      alt={stop.title}
                      className="h-16 w-16 flex-shrink-0 rounded-full border border-gold/40 object-cover"
                    />
                    <div>
                      <span className="font-display text-xl text-gold">
                        {stop.year}
                      </span>
                      <h4 className="font-display text-base text-ink">
                        {stop.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-ink-dim">
                        {stop.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
