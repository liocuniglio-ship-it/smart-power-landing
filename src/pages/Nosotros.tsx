import { Shield, Wrench, Zap, Users, Settings, Cable, Fuel, ArrowUpDown, ArrowLeft } from "lucide-react";
import ostecLogo from "@/assets/ostec-logo.jpg";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
          <a href="/">
            <img src={ostecLogo} alt="Ostec Energy" className="h-16 w-auto sm:h-20" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </a>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Nosotros</h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Nuestra meta es ocupar un lugar en el mercado donde ser reconocidos por la capacidad de resolver problemas, con eficiencia, seguridad y rapidez en la venta, alquiler y mantenimiento de Grupos Electrógenos y Tableros de Transferencia.
          </p>
          <p>
            Además de brindar precios, calidad y servicio, recurrimos a entregar valor agregado: conocimiento, calidad de servicio, cordialidad y cumplimiento en entrega.
          </p>
          <p>
            Contamos con profesionales con el mejor nivel técnico y años de experiencia en el mercado, obteniendo no solo agilidad y fluidez en la ejecución de cada proyecto, sino también efectividad y seguridad en tiempo y forma.
          </p>
          <p>
            Disponemos de equipos de alta calidad, testeados rigurosamente y certificados bajo normas nacionales e internacionales de calidad.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">Nuestros Pilares</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex gap-4 rounded-lg border border-border p-5">
            <Zap className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Conocimiento Técnico</h3>
              <p className="mt-1 text-sm text-muted-foreground">Profesionales con años de experiencia y el mejor nivel técnico del mercado.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border border-border p-5">
            <Shield className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Calidad y Cumplimiento</h3>
              <p className="mt-1 text-sm text-muted-foreground">Calidad de servicio, cordialidad y cumplimiento en cada entrega.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border border-border p-5">
            <Settings className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Equipos Certificados</h3>
              <p className="mt-1 text-sm text-muted-foreground">Equipos testeados rigurosamente y certificados bajo normas nacionales e internacionales.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border border-border p-5">
            <Users className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Experiencia Comprobada</h3>
              <p className="mt-1 text-sm text-muted-foreground">Agilidad, fluidez y efectividad en la ejecución de cada proyecto.</p>
            </div>
          </div>
        </div>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">Nuestros Servicios</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-lg border border-border p-5">
            <Wrench className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-medium">Mantenimiento Preventivo / Correctivo</span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-border p-5">
            <Cable className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-medium">Instalaciones Llave en Mano</span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-border p-5">
            <ArrowUpDown className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-medium">Instalaciones en Paralelo</span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-border p-5">
            <Fuel className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-medium">Conversiones a Gas</span>
          </div>
        </div>

        <p className="mt-12 text-lg font-semibold text-foreground">Ostec Energy es la mejor opción.</p>
      </main>
    </div>
  );
};

export default Nosotros;
