import Image from "next/image";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="anchor-offset px-3 pb-12 pt-8 sm:px-4 sm:pb-16 sm:pt-10"
    >
      <div className="container-shell">
        <div className="ambient-orb left-[6%] top-16 h-40 w-40 bg-sage/25 dark:bg-sage/10" />
        <div className="ambient-orb right-[8%] top-44 h-48 w-48 bg-terracotta/20 dark:bg-terracotta/10" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="relative">
            <div className="absolute -left-3 top-8 hidden h-32 w-32 rounded-full bg-sage/20 blur-3xl sm:block" />
            <div className="absolute bottom-10 right-16 hidden h-24 w-24 rounded-full bg-terracotta/20 blur-3xl sm:block" />

            <span className="section-label">
              <span className="eyebrow-dot" />
              Trabajadora social y acompanamiento emocional
            </span>

            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-ink dark:text-[#f6efe8] sm:text-6xl lg:text-7xl">
              Acompano procesos de reconstruccion personal desde una mirada humana y social.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone dark:text-[#c8bfb6] sm:text-xl">
              Soy Andrea, trabajadora social. En Puentes de Exito encontraras
              escucha, orientacion y herramientas reales para atravesar
              momentos de cambio, fortalecer tu bienestar emocional y
              reconectar contigo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b87458]"
              >
                Reservar consulta
                <ArrowRight size={18} />
              </a>
              <a
                href="#enfoque"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone/15 bg-white/70 px-7 py-4 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-sage/30 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-[#f6efe8] dark:hover:bg-white/10"
              >
                <PlayCircle size={18} />
                Conoce mi enfoque
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                "Escucha sin juicio",
                "Herramientas utiles",
                "Procesos reales"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/60 bg-white/60 px-5 py-4 text-sm font-medium text-stone shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-[#d6c8bc]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-white/40 blur-2xl" />
              <div className="card-surface relative overflow-hidden rounded-[2.5rem] p-3">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80"
                    alt="Andrea en un retrato profesional y cercano"
                    width={900}
                    height={1100}
                    className="h-[520px] w-full object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f2622]/25 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-10 left-10 max-w-xs rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone">
                    Puentes de Exito
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone">
                    Un espacio para parar, entender lo que estas viviendo y
                    caminar con apoyo real.
                  </p>
                </div>

                <div className="absolute right-6 top-6 rounded-[1.5rem] border border-white/70 bg-[#2f2622]/80 px-4 py-3 text-white shadow-soft backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/70">
                    <Sparkles size={14} />
                    Presencia real
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    Escucha, orientacion y herramientas a tu ritmo.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
