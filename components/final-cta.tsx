import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="px-3 pb-10 sm:px-4 sm:pb-14">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-[#2f2622] px-8 py-12 text-center text-white shadow-soft sm:px-10 sm:py-16 dark:border dark:border-white/10 dark:bg-[#241d1a]">
            <p className="font-display text-4xl leading-tight sm:text-5xl">
              A veces, lo unico que necesitamos es no hacerlo solos.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Empezar mi proceso
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
