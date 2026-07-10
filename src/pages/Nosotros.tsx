import { Shield, Users, Settings, ArrowLeft } from "lucide-react";
import ostecLogo from "@/assets/ostec-logo.jpg";
import bgHero from "@/assets/bg-hero.jpg";
import Seo from "@/components/Seo";

const Nosotros = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <Seo
        path="/nosotros"
        title="Nosotros | Ostec Energy — Especialistas en Grupos Electrógenos"
        description="Conocé a Ostec Energy: equipo técnico especializado en venta, alquiler y mantenimiento de grupos electrógenos y tableros de transferencia. Calidad certificada y respaldo profesional."
      />
      <div className="min-h-screen bg-black/60">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
            <a href="/">
              <img src={ostecLogo} alt="Ostec Energy" className="h-20 w-auto sm:h-28 rounded-md" />
            </a>
            <a href="/" className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Nuestra Visión</h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70">
            <p>
              Ser el referente del mercado en soluciones de energía, reconocidos por nuestra capacidad de respuesta, eficiencia y seguridad en la venta, alquiler y mantenimiento de Grupos Electrógenos y Tableros de Transferencia.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-white">Qué nos diferencia</h2>
          <p className="mt-2 text-sm uppercase tracking-wider text-primary">Nuestro Valor Agregado</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5">
              <Shield className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-white">Compromiso y Conocimiento</h3>
                <p className="mt-1 text-sm text-white/60">Combinamos experiencia técnica, cordialidad y puntualidad para superar las expectativas en cada servicio.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5">
              <Users className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-white">Respaldo Profesional</h3>
                <p className="mt-1 text-sm text-white/60">Nuestro equipo está conformado por técnicos altamente calificados con años de trayectoria, asegurando soluciones ágiles en tiempo y forma.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5 sm:col-span-2">
              <Settings className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-white">Calidad Certificada</h3>
                <p className="mt-1 text-sm text-white/60">Disponemos de equipos de alta gama, rigurosamente testeados y bajo certificación de normas nacionales e internacionales.</p>
              </div>
            </div>
          </div>


          <p className="mt-12 text-lg font-semibold text-primary">Ostec Energy es la mejor opción.</p>
        </main>

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

export default Nosotros;
