"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Wrench, Globe } from "lucide-react";

const values = [
  {
    icon: Wrench,
    label: "Metodologías Ágiles",
    description: "Iteramos rápido, entregamos valor constante.",
  },
  {
    icon: Globe,
    label: "Cloud Native",
    description: "Infraestructura moderna, escalable desde el día uno.",
  },
  {
    icon: MapPin,
    label: "Buenos Aires",
    description: "Base en Argentina, trabajo sin fronteras.",
  },
  {
    icon: Calendar,
    label: "Fundada en 2026",
    description: "Nuevos pero con experiencia que nos respalda.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-accent tracking-widest uppercase">
              Nosotros
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-ink mt-3 tracking-tight">
              Software que nace
              <br />
              de problemas reales
            </h2>
            <div className="mt-6 space-y-4 text-ink-secondary leading-relaxed">
              <p>
                Somos <strong className="text-ink font-medium">Desarrollo sin Fronteras</strong>,
                una Software Factory con base en Buenos Aires.
                No nos limitamos a un solo tipo de proyecto — construimos
                lo que haga falta para resolver el problema.
              </p>
              <p>
                Nuestro enfoque es simple: entender el problema de verdad,
                elegir la tecnología correcta (no la de moda), y entregar
                software que funcione en producción, no solo en demos.
              </p>
              <p>
                Tenemos productos propios como ConsorcioTrust y Cripto Bot,
                y también desarrollamos soluciones a medida para quienes
                necesitan un equipo técnico comprometido.
              </p>
            </div>
          </motion.div>

          {/* Right: values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.label}
                  className="bg-surface-raised border border-edge rounded-xl p-5 hover:border-edge-strong hover:shadow-[0_2px_20px_rgba(212,160,40,0.06)] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-ink mb-1">
                    {val.label}
                  </h3>
                  <p className="text-xs text-ink-tertiary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
