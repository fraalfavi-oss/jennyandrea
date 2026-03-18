"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`container-shell transition-all duration-300 ${
          scrolled
            ? "rounded-full border border-white/70 bg-white/80 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-[#201b18]/85"
            : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-4">
          <a
            href="#inicio"
            className="font-display text-2xl text-ink dark:text-[#f6efe8]"
          >
            Puentes de Exito
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  activeSection === item.href
                    ? "bg-white/75 text-ink shadow-sm dark:bg-white/10 dark:text-white"
                    : "text-stone hover:text-ink dark:text-[#c8bfb6] dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href="#contacto"
              className="rounded-full border border-terracotta/20 bg-terracotta px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b87458]"
            >
              Escribeme
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex rounded-full border border-white/70 bg-white/80 p-3 text-ink shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-[#f6efe8] lg:hidden"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-soft dark:border-white/10 dark:bg-[#201b18]/95 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-3 py-2 text-sm font-medium transition ${
                    activeSection === item.href
                      ? "bg-white/70 text-ink dark:bg-white/10 dark:text-white"
                      : "text-stone hover:text-ink dark:text-[#c8bfb6] dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white"
              >
                Reserva una consulta
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
