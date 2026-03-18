import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { resources } from "@/data/site";

export function ResourcesSection() {
  return (
    <section id="recursos" className="anchor-offset section-spacing px-3 sm:px-4">
      <div className="container-shell">
        <SectionHeading
          label="Recursos"
          title="Espacios para reflexionar y crecer"
          description="Aqui comparto reflexiones, herramientas y contenido que pueden acompanarte tambien fuera de las sesiones."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 0.08}>
              <article className="card-surface h-full overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
                    {resource.category}
                  </span>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-ink dark:text-[#f6efe8]">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone dark:text-[#c8bfb6]">
                    {resource.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
