import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="anchor-offset section-spacing px-3 sm:px-4"
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                label="Servicios"
                title="Acompanamiento adaptado a tu momento"
                description="Cada proceso es unico. Por eso, el acompanamiento se adapta a tu situacion, tus necesidades y el momento en el que te encuentras."
              />
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.07}>
                  <article
                    className={`group h-full rounded-[2rem] border border-white/70 bg-gradient-to-br ${service.accent} p-7 shadow-soft transition duration-300 hover:-translate-y-1`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex rounded-2xl bg-white/80 p-3 text-terracotta shadow-sm transition duration-300 group-hover:scale-105">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs uppercase tracking-[0.24em] text-stone/70">
                        Servicio
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-3xl text-ink dark:text-[#f6efe8]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-stone dark:text-[#bfb4a9]">
                      {service.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/80 transition group-hover:translate-x-1 dark:text-[#ede2d6]">
                      Ver como trabajarlo contigo
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
