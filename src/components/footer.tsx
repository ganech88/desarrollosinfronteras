import { GitBranch, Globe, ExternalLink, Mail } from "lucide-react";

const footerLinks = [
  { label: "Productos", href: "#productos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: ExternalLink, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hola@desarrollosinfronteras.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-brand flex items-center justify-center">
                <span className="text-white font-bold text-xs font-[family-name:var(--font-space-grotesk)]">
                  dsf
                </span>
              </div>
              <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white text-sm tracking-tight">
                Desarrollo sin Fronteras
              </span>
            </div>
            <p className="text-xs text-[#7a7a9a] max-w-xs leading-relaxed">
              Software Factory. Buenos Aires, Argentina.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#7a7a9a] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.04)] flex items-center justify-center text-[#7a7a9a] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-all"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#5a5a7a]">
            &copy; {new Date().getFullYear()} Desarrollo sin Fronteras. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#5a5a7a]">
            Hecho con dedicación en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
