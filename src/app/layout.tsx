import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desarrollo sin Fronteras — Software Factory",
  description:
    "Software Factory argentina. Productos propios como LegalIA, ConsorcioTrust y POSTGAME, páginas web llave en mano y desarrollo a medida.",
  keywords:
    "software factory, desarrollo software, argentina, SaaS, legalia, ia para abogados, consorcios, páginas web, desarrollo web llave en mano, postgame, diario de videojuegos",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Desarrollo sin Fronteras — Software Factory",
    description:
      "Creamos productos digitales y soluciones a medida que transforman negocios.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface">{children}</body>
    </html>
  );
}
