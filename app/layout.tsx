import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puentesdeexito.example"),
  title: "Puentes de Exito | Andrea, trabajadora social",
  description:
    "Acompanamiento emocional, resiliencia, orientacion personal y apoyo social desde una mirada humana, cercana y profesional.",
  keywords: [
    "trabajadora social",
    "acompanamiento emocional",
    "orientacion personal",
    "resiliencia",
    "crecimiento personal",
    "apoyo social",
    "redes de apoyo",
    "bienestar emocional"
  ],
  openGraph: {
    title: "Puentes de Exito",
    description:
      "Andrea ofrece acompanamiento emocional, escucha activa y herramientas reales para procesos de cambio y reconstruccion personal.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Puentes de Exito",
    description:
      "Trabajo social y acompanamiento emocional desde una presencia cercana, humana y profesional."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            const saved = localStorage.getItem("puentes-theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (saved === "dark" || (!saved && prefersDark)) {
              document.documentElement.classList.add("dark");
            }
          } catch (error) {}
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
