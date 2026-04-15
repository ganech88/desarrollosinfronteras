"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-accent tracking-widest uppercase">
              Contacto
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-ink mt-3 tracking-tight">
              Contanos tu idea
            </h2>
            <p className="text-ink-secondary mt-4 leading-relaxed max-w-md">
              Ya sea que tengas un proyecto en mente o quieras explorar
              cómo la tecnología puede ayudar a tu negocio, estamos
              para escuchar.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-xs text-ink-tertiary">Email directo</div>
                <a
                  href="mailto:hola@desarrollosinfronteras.com"
                  className="text-sm text-ink hover:text-accent transition-colors"
                >
                  hola@desarrollosinfronteras.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-surface-dark-raised border border-edge rounded-xl p-8 text-center">
                <CheckCircle size={40} className="text-signal-success mx-auto mb-4" />
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-ink mb-2">
                  Mensaje enviado
                </h3>
                <p className="text-sm text-ink-secondary">
                  Te respondemos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface-dark-raised border border-edge rounded-xl p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-ink-secondary mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-surface-dark border border-edge rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-ink-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-surface-dark border border-edge rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-ink-secondary mb-2"
                  >
                    Contanos sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-surface-dark border border-edge rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Describí brevemente qué necesitás..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-[#0a0a0f] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-[#0a0a0f]/30 border-t-[#0a0a0f] rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar mensaje
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
