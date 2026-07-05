"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Scale,
  Shield,
  MessageSquare,
  FileText,
  CalendarCheck,
  Smartphone,
  Brain,
  BookOpen,
  FileDown,
  Landmark,
  Gamepad2,
  Star,
  Library,
  Users,
  ArrowUpRight,
} from "lucide-react";

const products = [
  {
    id: "legalia",
    badge: "IA Legal",
    badgeColor: "bg-signal-info/15 text-signal-info",
    name: "LegalIA",
    tagline: "Inteligencia artificial para abogados argentinos.",
    description:
      "Asistente IA especializado en derecho argentino y generador de escritos judiciales. Produce borradores listos para presentar, citando artículos y jurisprudencia real — conoce las jurisdicciones, los fueros y el formato procesal correcto.",
    icon: Scale,
    features: [
      { icon: FileText, label: "Generador de escritos judiciales" },
      { icon: Brain, label: "Asistente IA con legislación argentina" },
      { icon: BookOpen, label: "Citas de artículos y jurisprudencia" },
      { icon: Landmark, label: "Jurisdicciones y fueros" },
      { icon: FileDown, label: "Exportación a Word" },
    ],
    stack: ["Next.js", "Supabase", "Claude AI", "RAG"],
    href: "https://legaliapp.com",
  },
  {
    id: "consorcio-trust",
    badge: "Gestión de Consorcios",
    badgeColor: "bg-signal-success/15 text-signal-success",
    name: "ConsorcioTrust",
    tagline: "Gestión de consorcios, reimaginada.",
    description:
      "Plataforma SaaS completa para administraciones de consorcios. Expensas, reclamos, documentos, reservas y comunicación — todo en un solo lugar, accesible desde cualquier dispositivo.",
    icon: Building2,
    features: [
      { icon: Shield, label: "Expensas automatizadas" },
      { icon: MessageSquare, label: "Reclamos en tiempo real" },
      { icon: FileText, label: "Documentos digitales" },
      { icon: CalendarCheck, label: "Reservas de amenities" },
      { icon: Smartphone, label: "PWA multiplataforma" },
    ],
    stack: ["React", "Supabase", "Tailwind CSS", "PWA"],
    href: "https://consorciotrust.com",
  },
  {
    id: "postgame",
    badge: "Próximamente",
    badgeColor: "bg-accent/15 text-accent",
    name: "POSTGAME",
    tagline: "Tu diario de videojuegos.",
    description:
      "Red social y diario de videojuegos — el Letterboxd de los juegos. Registrá lo que jugás, puntualo con estrellas, escribí reviews y descubrí tu próximo juego a través de gente real.",
    icon: Gamepad2,
    features: [
      { icon: Gamepad2, label: "Diario de juegos" },
      { icon: Star, label: "Ratings y reviews" },
      { icon: Library, label: "Catálogo de +280.000 títulos" },
      { icon: Users, label: "Comunidad de jugadores" },
    ],
    stack: ["Next.js", "PostgreSQL", "Vercel"],
    href: "https://playpostgame.com",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Products() {
  return (
    <section id="productos" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-medium text-accent tracking-widest uppercase">
            Productos
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-ink mt-3 tracking-tight">
            Lo que construimos
          </h2>
          <p className="text-ink-secondary mt-4 max-w-lg leading-relaxed">
            Productos propios que nacen de problemas concretos. Cada uno es una
            apuesta al software que genera valor real.
          </p>
        </div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative flex flex-col bg-surface-raised border border-edge rounded-xl p-6 sm:p-8 transition-all duration-300 hover:border-edge-strong hover:shadow-[0_2px_20px_rgba(212,160,40,0.06)]"
              >
                {/* Badge */}
                <div
                  className={`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-5 ${product.badgeColor}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {product.badge}
                </div>

                {/* Icon + name */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-ink">
                      {product.name}
                    </h3>
                    <p className="text-sm text-ink-tertiary mt-0.5">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid gap-3 mb-6 sm:grid-cols-2 lg:grid-cols-1">
                  {product.features.map((feature) => {
                    const FIcon = feature.icon;
                    return (
                      <div
                        key={feature.label}
                        className="flex items-center gap-2.5 text-sm text-ink-secondary"
                      >
                        <FIcon size={15} className="text-ink-tertiary shrink-0" />
                        {feature.label}
                      </div>
                    );
                  })}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-edge">
                  {product.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-ink-tertiary bg-surface-inset border border-edge px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
                  >
                    Visitar {product.name}
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
