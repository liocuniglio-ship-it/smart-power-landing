import { Button } from "@/components/ui/button";
import { Shield, Zap, Users, Settings, Menu, X } from "lucide-react";
import ostecLogo from "@/assets/ostec-logo.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
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


const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="min-h-screen bg-black/60">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
            <a href="/">
              <img src={ostecLogo} alt="Ostec Energy" className="h-20 w-auto sm:h-28 rounded-md" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">{link.label}</a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <nav className="border-t border-white/10 px-4 py-3 md:hidden">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-white/70 hover:text-white">{link.label}</a>
              ))}
            </nav>
          )}
        </header>

        {/* Hero */}
        <section id="inicio" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-white">
            Mantenimiento Inteligente.
            <br />
            <span className="text-primary">Reportes Instantáneos.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Nuestra meta es ocuparnos de resolver problemas con eficiencia, seguridad y rapidez en la
            venta, alquiler y mantenimiento de Grupos Electrógenos y Tableros de Transferencia.
          </p>
          <Button size="lg" className="mt-8 text-base" asChild>
            <a href="#">Acceso a APP</a>
          </Button>
        </section>


        {/* Footer */}
        <footer id="contacto" className="border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
            <p className="text-lg font-semibold text-white">Ostec Energy es la mejor opción.</p>
            <div className="mt-4 space-y-1 text-sm text-white/70">
              <p>📍 Ciudad Autónoma De Buenos Aires - Argentina</p>
              <p>📞 (011) 2246 2787</p>
              <p>✉️ comercial@ostecenergy.com.ar</p>
            </div>
            <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Ostec Energy. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
