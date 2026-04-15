"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,160,40,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,40,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] bg-accent-glow rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-surface-raised border border-edge rounded-full px-4 py-1.5 mb-8"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-ink-secondary tracking-wide">
              Software Factory &mdash; Buenos Aires, Argentina
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-6"
          >
            Construimos software
            <br />
            <span className="text-accent">que resuelve problemas</span>
            <br />
            <span className="text-brand-light">reales.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ink-secondary leading-relaxed max-w-xl mb-10"
          >
            Productos propios, desarrollo a medida y automatización con IA.
            Desde la idea hasta producción, sin fronteras.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-accent text-[#0a0a0f] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors duration-200 group"
            >
              Ver productos
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border border-edge-strong text-ink font-medium text-sm px-6 py-3 rounded-lg hover:bg-surface-raised hover:border-accent/30 transition-colors duration-200"
            >
              Contanos tu idea
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 flex flex-wrap gap-12 border-t border-edge pt-8"
        >
          {[
            { value: "3+", label: "Productos activos" },
            { value: "24/7", label: "Cloud Native" },
            { value: "100%", label: "TypeScript & React" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-ink-tertiary mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
