import { ArrowLeft, ImageIcon } from "lucide-react";
import ostecLogo from "@/assets/ostec-logo.jpg";
import bgHero from "@/assets/bg-hero.jpg";

const Trabajos = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
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

        <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Trabajos Realizados</h1>
          <p className="mt-4 text-white/60 text-lg">Galería de proyectos completados por Ostec Energy.</p>

          {/* Placeholder */}
          <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 py-20">
            <ImageIcon className="h-12 w-12 text-white/30" />
            <p className="mt-4 text-white/40 text-sm">Próximamente — Fotos de trabajos realizados</p>
          </div>
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

export default Trabajos;
