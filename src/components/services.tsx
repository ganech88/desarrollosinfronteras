"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cpu, Compass } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo a Medida",
    description:
      "Aplicaciones web y mobile construidas desde cero. Desde MVPs rápidos hasta plataformas complejas, con el stack que mejor se adapte.",
    details: ["React / Next.js", "Node.js / Python", "Mobile con React Native", "APIs & Microservicios"],
  },
  {
    icon: Layers,
    title: "Productos SaaS",
    description:
      "Diseñamos, construimos y operamos productos SaaS completos. Multi-tenant, escalables, con billing integrado.",
    details: ["Arquitectura multi-tenant", "Supabase / PostgreSQL", "Stripe / MercadoPago", "CI/CD automatizado"],
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    description:
      "Bots inteligentes, análisis de datos automatizado y workflows que eliminan trabajo repetitivo usando modelos de IA.",
    details: ["Claude AI / OpenAI", "Bots de trading", "Procesamiento de datos", "Workflows automáticos"],
  },
  {
    icon: Compass,
    title: "Consultoría Tech",
    description:
      "Guía en arquitectura, selección de stack y estrategia técnica. Para equipos que necesitan dirección experta.",
    details: ["Arquitectura de software", "Selección de stack", "Code reviews", "Optimización de performance"],
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

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2"
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
