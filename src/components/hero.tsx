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
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
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

          {/* Logo with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer pulsing glow ring */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px 10px rgba(212,160,40,0.08), 0 0 80px 30px rgba(212,160,40,0.04)",
                  "0 0 60px 20px rgba(212,160,40,0.15), 0 0 120px 50px rgba(212,160,40,0.07)",
                  "0 0 40px 10px rgba(212,160,40,0.08), 0 0 80px 30px rgba(212,160,40,0.04)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[280px] h-[280px] rounded-full"
            />

            {/* Rotating border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent, rgba(212,160,40,0.2), transparent, rgba(212,160,40,0.1), transparent)",
              }}
            />

            {/* Inner glow backdrop */}
            <div className="absolute w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(212,160,40,0.06)_0%,transparent_70%)]" />

            {/* Logo image */}
            <motion.div
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/logo.svg"
                alt="Desarrollo sin Fronteras"
                width={240}
                height={240}
                className="drop-shadow-[0_0_30px_rgba(212,160,40,0.2)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile logo - shown above stats on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:hidden flex justify-center mt-12 relative"
        >
          {/* Mobile pulsing glow */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px 8px rgba(212,160,40,0.06), 0 0 60px 20px rgba(212,160,40,0.03)",
                "0 0 50px 15px rgba(212,160,40,0.12), 0 0 90px 35px rgba(212,160,40,0.06)",
                "0 0 30px 8px rgba(212,160,40,0.06), 0 0 60px 20px rgba(212,160,40,0.03)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[140px] h-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src="/logo.svg"
            alt="Desarrollo sin Fronteras"
            width={150}
            height={150}
            className="relative z-10 drop-shadow-[0_0_20px_rgba(212,160,40,0.2)]"
          />
        </motion.div>

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
