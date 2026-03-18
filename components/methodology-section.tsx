import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { methodologySteps } from "@/data/site";

export function MethodologySection() {
  return (
    <section className="section-spacing px-3 sm:px-4">
      <div className="container-shell">
        <SectionHeading
          label="Mi metodologia"
          title="Un proceso paso a paso"
          description="Cada proceso es diferente, pero hay una base comun que guia mi forma de acompanar."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {methodologySteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="card-surface h-full rounded-[2rem] p-7">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="font-display text-3xl text-ink dark:text-[#f6efe8]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone dark:text-[#c8bfb6]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
