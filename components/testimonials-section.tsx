"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(() => testimonials[activeIndex], [activeIndex]);

  return (
    <section
      id="testimonios"
      className="anchor-offset section-spacing px-3 sm:px-4"
    >
      <div className="container-shell">
        <SectionHeading
          label="Testimonios"
          title="Procesos reales, personas reales"
          description="Historias ejemplo que muestran una experiencia de acompanamiento cercana, sobria y humana."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card-surface overflow-hidden rounded-[2.5rem] p-8 sm:p-10">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sage to-terracotta text-lg font-semibold text-white">
                      {active.initials}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-ink dark:text-[#f6efe8]">
                        {active.name}
                      </p>
                      <p className="text-sm text-stone dark:text-[#c8bfb6]">
                        {active.role} · {active.location}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-3 text-terracotta dark:bg-white/5">
                    <Quote size={22} />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-display text-4xl leading-tight text-ink dark:text-[#f6efe8] sm:text-5xl">
                    “{active.quote}”
                  </p>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-white/60 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
                    Momento trabajado
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone dark:text-[#c8bfb6]">
                    {active.moment}
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4">
              {testimonials.map((item, index) => (
                <button
                  key={`${item.name}-${item.location}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`text-left transition ${
                    activeIndex === index ? "scale-[1.01]" : ""
                  }`}
                >
                  <article
                    className={`rounded-[1.75rem] border p-5 transition ${
                      activeIndex === index
                        ? "border-terracotta/30 bg-white/85 shadow-soft dark:border-terracotta/30 dark:bg-white/10"
                        : "border-white/60 bg-white/50 hover:bg-white/75 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-ink dark:text-[#f6efe8]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-stone dark:text-[#c8bfb6]">
                          {item.role}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/60 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone dark:border-white/10 dark:text-[#c8bfb6]">
                        {item.location}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-stone dark:text-[#c8bfb6]">
                      {item.quote}
                    </p>
                  </article>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
