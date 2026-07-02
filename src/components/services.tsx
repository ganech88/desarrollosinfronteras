"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Layers,
  Cpu,
  Rocket,
  ShoppingCart,
  Palette,
  Search,
  ArrowRight,
} from "lucide-react";

const webStyles = [
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas de alto impacto para lanzar productos, campañas o captar clientes.",
  },
  {
    icon: Palette,
    title: "Sitios Institucionales",
    description: "La cara digital de tu empresa o estudio, con diseño a medida de tu marca.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas con carrito, pagos y gestión de productos.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Optimización para buscadores y velocidad de carga desde el día uno.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Desarrollo a Medida",
    description:
      "Aplicaciones web y mobile construidas desde cero. Desde MVPs rápidos hasta plataformas complejas, con el stack que mejor se adapte.",
    details: ["React / Next.js", "Node.js / Python", "APIs & Microservicios"],
  },
  {
    icon: Layers,
    title: "Productos SaaS",
    description:
      "Diseñamos, construimos y operamos productos SaaS completos. Multi-tenant, escalables, con billing integrado.",
    details: ["Multi-tenant", "Supabase / PostgreSQL", "Stripe / MercadoPago"],
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    description:
      "Asistentes inteligentes, análisis de datos automatizado y workflows que eliminan trabajo repetitivo usando modelos de IA.",
    details: ["Claude AI / OpenAI", "RAG & Agentes", "Workflows automáticos"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-surface-inset">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-medium text-accent tracking-widest uppercase">
            Servicios
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-ink mt-3 tracking-tight">
            Cómo trabajamos
          </h2>
          <p className="text-ink-secondary mt-4 max-w-lg leading-relaxed">
            Somos una Software Factory. Damos soluciones de software a medida,
            desde productos propios hasta proyectos para terceros.
          </p>
        </div>

        {/* Featured: Desarrollo Web llave en mano */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-surface-raised border border-accent/25 rounded-xl p-6 sm:p-10 mb-6 hover:border-accent/40 hover:shadow-[0_2px_30px_rgba(212,160,40,0.1)] transition-all duration-300"
        >
          {/* Accent glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-glow rounded-full blur-[100px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-5 bg-accent/15 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Servicio Destacado
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Globe size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-ink">
                  Desarrollo Web Llave en Mano
                </h3>
                <p className="text-sm text-ink-tertiary mt-1">
                  De la idea a tu web online, sin que tengas que ocuparte de nada.
                </p>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl mb-8">
              Diseño, desarrollo, dominio, hosting y puesta en producción.
              Nos encargamos de todo el proceso para que recibas tu página web
              funcionando, optimizada y lista para crecer — cualquiera sea el
              estilo que tu proyecto necesite.
            </p>

            {/* Web styles grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {webStyles.map((style) => {
                const Icon = style.icon;
                return (
                  <div
                    key={style.title}
                    className="bg-surface-inset border border-edge rounded-lg p-4"
                  >
                    <Icon size={18} className="text-accent mb-3" />
                    <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-ink mb-1">
                      {style.title}
                    </h4>
                    <p className="text-xs text-ink-tertiary leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-accent text-[#0a0a0f] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors duration-200 group"
            >
              Quiero mi web
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
          </div>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-surface-raised border border-edge rounded-xl p-6 sm:p-8 hover:border-edge-strong hover:shadow-[0_2px_20px_rgba(212,160,40,0.06)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-accent" />
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-ink mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-ink-secondary leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-xs text-ink-tertiary bg-surface-inset border border-edge px-2.5 py-1 rounded-md"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
