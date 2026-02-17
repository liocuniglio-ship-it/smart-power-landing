import { Button } from "@/components/ui/button";
import { Shield, Wrench, Zap, Users, Settings, Cable, Fuel, ArrowUpDown, Menu, X } from "lucide-react";
import ostecLogo from "@/assets/ostec-logo.jpg";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const VALUES = [
  {
    icon: Zap,
    title: "Conocimiento Técnico",
    desc: "Profesionales con años de experiencia y el mejor nivel técnico del mercado.",
  },
  {
    icon: Shield,
    title: "Calidad y Cumplimiento",
    desc: "Calidad de servicio, cordialidad y cumplimiento en cada entrega.",
  },
  {
    icon: Settings,
    title: "Equipos Certificados",
    desc: "Equipos testeados rigurosamente y certificados bajo normas nacionales e internacionales.",
  },
  {
    icon: Users,
    title: "Experiencia Comprobada",
    desc: "Agilidad, fluidez y efectividad en la ejecución de cada proyecto.",
  },
];

const SERVICES = [
  { icon: Wrench, title: "Mantenimiento Preventivo / Correctivo" },
  { icon: Cable, title: "Instalaciones Llave en Mano" },
  { icon: ArrowUpDown, title: "Instalaciones en Paralelo" },
  { icon: Fuel, title: "Conversiones a Gas" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#inicio">
            <img src={ostecLogo} alt="Ostec Energy" className="h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="border-t border-border px-4 py-3 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Mantenimiento Inteligente.
          <br />
          <span className="text-primary">Reportes Instantáneos.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Nuestra meta es ocuparnos de resolver problemas con eficiencia, seguridad y rapidez en la
          venta, alquiler y mantenimiento de Grupos Electrógenos y Tableros de Transferencia.
        </p>
        <Button size="lg" className="mt-8 text-base" asChild>
          <a href="#">Acceso a APP</a>
        </Button>
      </section>

      {/* Valor Agregado */}
      <section id="nosotros" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">¿Por qué Ostec Energy?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-lg border border-border bg-background p-5">
                <v.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nuestros Servicios</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-4 rounded-lg border border-border p-5 transition-colors hover:bg-secondary/50"
              >
                <s.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <p className="text-lg font-semibold">Ostec Energy es la mejor opción.</p>
          <div className="mt-4 space-y-1 text-sm opacity-80">
            <p>📞 +54 11 1234-5678</p>
            <p>✉️ contacto@ostecenergy.com</p>
            <p>📍 Buenos Aires, Argentina</p>
          </div>
          <p className="mt-8 text-xs opacity-60">© {new Date().getFullYear()} Ostec Energy. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
