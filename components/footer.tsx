import { footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/60 px-3 py-10 sm:px-4">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <p className="font-display text-3xl text-ink dark:text-[#f6efe8]">Puentes de Exito</p>
          <p className="mt-3 text-sm leading-7 text-stone dark:text-[#c8bfb6]">
            Acompanamiento social y emocional desde una mirada humana
          </p>
          <p className="mt-4 text-sm text-stone dark:text-[#c8bfb6]">© Puentes de Exito</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone transition hover:text-ink dark:text-[#c8bfb6] dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
