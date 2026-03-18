import {
  BookOpenText,
  Compass,
  HeartHandshake,
  LifeBuoy,
  Network,
  Sparkles,
  Sprout,
  Waypoints
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Service = Feature & {
  accent: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Resource = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  moment: string;
  initials: string;
};

export const navigation: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Recursos", href: "#recursos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" }
];

export const approachCards: Feature[] = [
  {
    title: "Escucha activa",
    description:
      "Un espacio seguro donde puedes expresarte sin juicio, con respeto y acompanamiento real.",
    icon: HeartHandshake
  },
  {
    title: "Acompanamiento emocional",
    description:
      "No estas sola en tu proceso. Te acompano paso a paso, adaptandome a tu ritmo.",
    icon: LifeBuoy
  },
  {
    title: "Herramientas practicas",
    description:
      "No solo hablamos: trabajamos con recursos que puedas aplicar en tu dia a dia.",
    icon: Compass
  },
  {
    title: "Redes de apoyo",
    description:
      "Fortalecer tu entorno y tus vinculos tambien forma parte del proceso.",
    icon: Network
  }
];

export const services: Service[] = [
  {
    title: "Acompanamiento individual",
    description:
      "Un espacio personal donde trabajar lo que estas viviendo, entenderlo y empezar a construir nuevas formas de afrontarlo.",
    icon: Sprout,
    accent: "from-[#f4e7db] to-[#f6f1eb]"
  },
  {
    title: "Orientacion emocional",
    description:
      "Para momentos de bloqueo, incertidumbre o dificultad emocional donde necesitas claridad y apoyo.",
    icon: HeartHandshake,
    accent: "from-[#eef1ea] to-[#f5efe8]"
  },
  {
    title: "Procesos de cambio",
    description:
      "Cuando estas atravesando una etapa de transicion y necesitas sosten, direccion y herramientas.",
    icon: Waypoints,
    accent: "from-[#f3ebe4] to-[#fbf7f3]"
  },
  {
    title: "Fortalecimiento personal",
    description:
      "Trabajo sobre autoestima, limites, identidad y bienestar emocional.",
    icon: Sparkles,
    accent: "from-[#f6eee8] to-[#f1f4ed]"
  },
  {
    title: "Apoyo en momentos dificiles",
    description:
      "Acompanamiento en situaciones de crisis, perdidas o etapas complejas.",
    icon: LifeBuoy,
    accent: "from-[#f2eee7] to-[#f8f3ed]"
  },
  {
    title: "Red de apoyo y recursos sociales",
    description:
      "Orientacion para acceder a recursos, entender tu contexto y fortalecer tu entorno.",
    icon: BookOpenText,
    accent: "from-[#eef3ef] to-[#faf5f0]"
  }
];

export const methodologySteps: Step[] = [
  {
    title: "Escuchamos tu historia",
    description:
      "Creamos un espacio donde puedas hablar con libertad y empezar a poner en palabras lo que estas viviendo."
  },
  {
    title: "Entendemos tu situacion",
    description:
      "Identificamos lo que necesitas, tus bloqueos y tambien tus recursos."
  },
  {
    title: "Trazamos un camino realista",
    description:
      "Definimos pequenos pasos que tengan sentido para ti y tu momento."
  },
  {
    title: "Acompano tu proceso",
    description:
      "Estoy presente durante el camino, adaptandome a ti, sosteniendo y ofreciendo herramientas utiles."
  }
];

export const resources: Resource[] = [
  {
    category: "Bienestar emocional",
    title: "Cuando sientes que no puedes mas",
    excerpt:
      "Un espacio para entender que hay detras del agotamiento emocional y como empezar a cuidarte.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Relaciones sanas",
    title: "Aprender a poner limites sin culpa",
    excerpt:
      "Reflexiones y herramientas para construir relaciones mas sanas y mas honestas contigo.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Reconstruccion personal",
    title: "Reconstruirte despues de una etapa dificil",
    excerpt:
      "Porque volver a empezar tambien forma parte del proceso y merece ser acompanado con calma.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Senti por primera vez que alguien realmente me escuchaba sin juzgarme. Pude ordenar lo que me estaba pasando y empezar a sostenerme con mas calma.",
    name: "Laura M.",
    role: "Docente",
    location: "Valencia",
    moment: "Proceso de agotamiento emocional",
    initials: "LM"
  },
  {
    quote:
      "El acompanamiento fue cercano, respetuoso y muy humano. Me ayudo a entenderme mejor y a tomar decisiones sin sentirme sola.",
    name: "Marta R.",
    role: "Madre y cuidadora",
    location: "Sevilla",
    moment: "Momento de cambio familiar",
    initials: "MR"
  },
  {
    quote:
      "No encontre soluciones magicas, pero si herramientas reales que hoy forman parte de mi vida. Eso hizo toda la diferencia.",
    name: "Claudia S.",
    role: "Administrativa",
    location: "Madrid",
    moment: "Trabajo en autoestima y limites",
    initials: "CS"
  },
  {
    quote:
      "Gracias a este proceso pude reconstruirme poco a poco, a mi ritmo, sin presion. Me senti acompanada de verdad.",
    name: "Elena P.",
    role: "Emprendedora",
    location: "Bilbao",
    moment: "Duelo y reconstruccion personal",
    initials: "EP"
  },
  {
    quote:
      "Lo que mas valore fue la claridad y la sensibilidad. Andrea supo sostener mi proceso sin invadirlo y eso me devolvio mucha confianza.",
    name: "Nuria T.",
    role: "Trabajadora del tercer sector",
    location: "Malaga",
    moment: "Transicion profesional y personal",
    initials: "NT"
  },
  {
    quote:
      "Aprendi a pedir ayuda, poner limites y volver a mirar mi historia con menos culpa. Fue un espacio muy honesto y muy cuidado.",
    name: "Paula G.",
    role: "Estudiante universitaria",
    location: "Barcelona",
    moment: "Ansiedad y reorganizacion vital",
    initials: "PG"
  }
];

export const footerLinks = [
  ...navigation.slice(0, 6),
  { label: "Aviso legal", href: "#" },
  { label: "Politica de privacidad", href: "#" }
];
