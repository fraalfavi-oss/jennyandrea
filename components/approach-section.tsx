import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { approachCards } from "@/data/site";

export function ApproachSection() {
  return (
    <section id="enfoque" className="anchor-offset section-spacing px-3 sm:px-4">
      <div className="container-shell">
        <SectionHeading
          label="Mi enfoque"
          title="Una forma de acompanar desde lo real"
          description="Mi trabajo nace de una idea muy clara: todas las personas necesitamos, en algun momento, un espacio donde poder parar, ser escuchadas y empezar a reconstruirnos. No trabajo desde formulas magicas ni soluciones rapidas. Trabajo desde la escucha, la comprension de tu historia y el acompanamiento en procesos reales."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {approachCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="card-surface h-full rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/80">
                  <div className="inline-flex rounded-2xl bg-sage/12 p-3 text-sage">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-ink dark:text-[#f6efe8]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone dark:text-[#c8bfb6]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
