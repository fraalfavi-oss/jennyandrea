import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="anchor-offset section-spacing px-3 pb-14 sm:px-4"
    >
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="card-surface h-full rounded-[2.5rem] p-8 sm:p-10">
              <SectionHeading
                label="Contacto"
                title="Si sientes que es tu momento, podemos empezar"
                description="Dar el paso no siempre es facil, pero puede ser el inicio de un cambio importante. Si necesitas acompanamiento, orientacion o simplemente un espacio donde empezar, puedes escribirme."
              />

              <div className="mt-8 space-y-4 text-sm text-stone">
                <a
                  href="mailto:andrea@puentesdeexito.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 px-5 py-4 transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-[#e8ddd2] dark:hover:bg-white/10"
                >
                  <Mail size={18} className="text-terracotta" />
                  andrea@puentesdeexito.com
                </a>
                <a
                  href="https://wa.me/34600000000"
                  className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 px-5 py-4 transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-[#e8ddd2] dark:hover:bg-white/10"
                >
                  <MessageCircle size={18} className="text-terracotta" />
                  Escribirme por WhatsApp
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 px-5 py-4 transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:text-[#e8ddd2] dark:hover:bg-white/10"
                >
                  <Instagram size={18} className="text-terracotta" />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card-surface rounded-[2.5rem] p-8 sm:p-10">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-2xl border border-stone/15 bg-white px-4 py-4 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20 dark:border-white/10 dark:bg-[#231d1a] dark:text-[#f6efe8]"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-2xl border border-stone/15 bg-white px-4 py-4 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20 dark:border-white/10 dark:bg-[#231d1a] dark:text-[#f6efe8]"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full rounded-2xl border border-stone/15 bg-white px-4 py-4 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20 dark:border-white/10 dark:bg-[#231d1a] dark:text-[#f6efe8]"
                    placeholder="Cuentame en que momento estas y como te gustaria empezar."
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b87458]"
                  >
                    Reservar consulta
                  </button>
                  <a
                    href="https://wa.me/34600000000"
                    className="inline-flex items-center justify-center rounded-full border border-stone/15 bg-white px-7 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-sage/30 dark:border-white/10 dark:bg-white/5 dark:text-[#f6efe8]"
                  >
                    Escribirme por WhatsApp
                  </a>
                </div>
              </form>

              <p className="mt-5 text-sm text-stone dark:text-[#c8bfb6]">
                Te respondere lo antes posible.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
