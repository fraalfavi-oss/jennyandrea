import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="anchor-offset section-spacing px-3 sm:px-4">
      <div className="container-shell">
        <div className="card-surface overflow-hidden rounded-[2.5rem]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="h-full">
              <div className="relative h-full min-h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                  alt="Andrea en una fotografia profesional"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f2622]/20 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="p-8 sm:p-10 lg:p-14">
              <SectionHeading
                label="Sobre mi"
                title="Soy Andrea"
                description="Soy trabajadora social y, sobre todo, una persona profundamente conectada con el acompanamiento humano."
              />

              <div className="mt-8 space-y-5 text-base leading-8 text-stone dark:text-[#c8bfb6]">
                <div className="inline-flex rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-medium text-stone dark:border-white/10 dark:bg-white/5 dark:text-[#d6c8bc]">
                  Vocacion, escucha y acompanamiento honesto
                </div>
                <p>
                  Puentes de Exito nace de mi propia experiencia, de lo vivido,
                  de lo aprendido y de la necesidad de crear un espacio donde
                  otras personas tambien puedan sentirse sostenidas.
                </p>
                <p>
                  A lo largo de mi camino he entendido que no se trata de tener
                  todas las respuestas, sino de caminar acompanada, con
                  herramientas, con conciencia y con apoyo.
                </p>
                <p>
                  Mi forma de trabajar es cercana, honesta y comprometida. No
                  creo en la distancia profesional fria, sino en un
                  acompanamiento real, respetuoso y humano.
                </p>
                <p className="font-medium text-ink dark:text-[#f6efe8]">
                  Estoy aqui para acompanarte, no para decirte lo que tienes que
                  hacer, sino para ayudarte a encontrar tu propio camino.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
