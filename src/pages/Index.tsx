import { Button } from "@/components/ui/button";
import { Shield, Zap, Users, Settings, Menu, X, Mail, MapPin, MessageCircle } from "lucide-react";
import ostecLogo from "@/assets/ostec-logo.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import { useState } from "react";
import Seo from "@/components/Seo";

const FAQS = [
  {
    q: "¿Qué servicios brinda Ostec Energy para grupos electrógenos?",
    a: "Ofrecemos venta, alquiler, instalación llave en mano y mantenimiento preventivo y correctivo de grupos electrógenos y tableros de transferencia manuales y automáticos en CABA y toda la Provincia de Buenos Aires.",
  },
  {
    q: "¿Ofrecen servicio técnico de emergencia 24 horas?",
    a: "Sí. Contamos con guardia técnica 24 horas los 365 días del año para atender urgencias sobre grupos electrógenos y tableros de transferencia.",
  },
  {
    q: "¿En qué zonas trabajan?",
    a: "Prestamos servicio en la Ciudad Autónoma de Buenos Aires (CABA), Gran Buenos Aires y en toda la Argentina bajo coordinación previa.",
  },
  {
    q: "¿Cada cuánto se debe hacer mantenimiento a un grupo electrógeno?",
    a: "Recomendamos mantenimientos preventivos programados cada 250 horas de uso o al menos una vez al año, con pruebas de arranque mensuales y bancos de carga periódicos para asegurar disponibilidad.",
  },
];

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  
  { label: "FAQ", href: "#faq" },
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
      <Seo
        path="/"
        title="Ostec Energy | Grupos Electrógenos: Venta, Alquiler y Mantenimiento"
        description="Venta, alquiler, instalación y mantenimiento de grupos electrógenos y tableros de transferencia en CABA y Buenos Aires. Servicio técnico 24/7 con reportes instantáneos."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
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
            Grupos Electrógenos.
            <br />
            <span className="text-primary">Mantenimiento Inteligente.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Nuestra visión es ser referentes del mercado en soluciones de energía, reconocidos por nuestra
            capacidad de respuesta, eficiencia y seguridad en la venta, alquiler y mantenimiento de Grupos
            Electrógenos y Tableros de Transferencia.
          </p>
          <Button size="lg" className="mt-8 text-base" asChild>
            <a href="https://app.ostecenergy.com.ar/auth" target="_blank" rel="noopener noreferrer">Portal Clientes</a>
          </Button>
        </section>

        {/* Valor Agregado */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">A qué nos dedicamos</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5">
                  <v.icon className="h-5 w-5 shrink-0 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">{v.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes (AEO) */}
        <section id="faq" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">Preguntas Frecuentes</h2>
            <p className="mt-2 text-white/60">Respuestas rápidas sobre nuestros servicios de grupos electrógenos.</p>
            <div className="mt-8 space-y-4">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-lg border border-white/10 bg-white/5 p-5">
                  <summary className="cursor-pointer list-none font-semibold text-white marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">Contacto</h2>
            <p className="mt-2 text-white/60">Estamos para ayudarte. Elegí el canal que prefieras.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5491122462787?text=Hola%2C%20me%20contacto%20desde%20la%20web%20de%20Ostec%20Energy."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-6 w-6 shrink-0 text-green-400" />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-sm text-white/60">(011) 2246 2787</p>
                </div>
              </a>

              {/* Mail Comercial */}
              <a
                href="mailto:comercial@ostecenergy.com.ar"
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-white">Mail Comercial</p>
                  <p className="text-sm text-white/60">comercial@ostecenergy.com.ar</p>
                </div>
              </a>

              {/* Mail Técnico */}
              <a
                href="mailto:tecnica@ostecnergy.com.ar"
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-white">Mail Técnico</p>
                  <p className="text-sm text-white/60">tecnica@ostecnergy.com.ar</p>
                </div>
              </a>
            </div>

            {/* Ubicación */}
            <div className="mt-8 flex items-center gap-3 text-white/60">
              <MapPin className="h-5 w-5 shrink-0" />
              <p>Ciudad Autónoma De Buenos Aires - Argentina</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 text-center">
            <p className="text-sm text-white/60">Ostec Energy es la mejor opción.</p>
            <p className="mt-2 text-xs text-white/40">© {new Date().getFullYear()} Ostec Energy. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
