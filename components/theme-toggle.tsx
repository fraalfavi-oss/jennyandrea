"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("puentes-theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/75 text-ink shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-[#f6efe8]"
      aria-label={mounted && isDark ? "Activar modo claro" : "Activar modo oscuro"}
      title={mounted && isDark ? "Modo claro" : "Modo oscuro"}
    >
      {mounted && isDark ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}
