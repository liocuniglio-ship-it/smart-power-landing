import { Button } from "@/components/ui/button";
import { Wrench, Shield, Settings, Cable, ArrowLeft } from "lucide-react";
import ostecLogo from "@/assets/ostec-logo.jpg";
import bgHero from "@/assets/bg-hero.jpg";

const Servicios = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundImage: `url(${bgHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="min-h-screen bg-black/60">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
            <a href="/">
              <img src={ostecLogo} alt="Ostec Energy" className="h-16 w-auto sm:h-20" />
            </a>
            <a href="/" className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </a>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 space-y-20">
          {/* Título principal */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Nuestros Servicios
            </h1>
            <p className="mt-4 text-white/60 text-lg">
              Soluciones integrales para grupos electrógenos y tableros de transferencia.
            </p>
          </div>

          {/* Mantenimiento Preventivo / Correctivo */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Wrench className="h-6 w-6 text-primary shrink-0" />
              <h2 className="text-2xl font-bold sm:text-3xl text-white">Mantenimiento Preventivo / Correctivo</h2>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed border-l-2 border-primary/50 pl-6">
              <p>
                Para evitar desperfectos en los grupos electrógenos, los mantenimientos o las revisiones periódicas programadas siempre evitan posteriores reparaciones. Los contratos de mantenimiento que ofrecemos a nuestros clientes dan posibilidad de mantener sus equipos en buen funcionamiento.
              </p>
              <p>
                <strong className="text-white">Las ventajas y sus posibilidades:</strong> recambios originales, bancos de carga, servicio 24 horas / 365 días, diagnóstico de sus equipos con informes sobre medidas a realizar. Diseñamos los contratos a su medida en función de sus necesidades. Nuestros técnicos especializados le ayudarán en su proyecto.
              </p>
              <p className="text-primary font-semibold text-lg">
                Confíe en la experiencia y los profesionales que OSTEC ENERGY pone a su disposición.
              </p>
              <p>
                Después de realizar el mantenimiento preventivo, en caso de que en el informe aparezca un diagnóstico negativo de avería, se realizará un presupuesto con la valoración del correctivo a realizar, con el objetivo de mantener siempre los equipos operativos y en perfecto funcionamiento.
              </p>
            </div>
          </section>

          {/* Instalaciones */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary shrink-0" />
              <h2 className="text-2xl font-bold sm:text-3xl text-white">Instalaciones</h2>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed border-l-2 border-primary/50 pl-6">
              <p>
                Contamos con una amplia gama de equipos para asegurarle la mayor variedad posible de elección acorde a sus necesidades.
              </p>
              <p>
                Realizamos la instalación de Grupos Electrógenos con personal altamente calificado y de consolidada experiencia.
              </p>
              <p>
                Tras analizar su caso, le asesoramos en la instalación, ofreciendo un servicio de alta calidad y un trato personalizado. Desde el primer momento, usted contará con el asesoramiento de nuestro personal técnico que le ayudarán a llevar a cabo su idea.
              </p>
              <p>
                Además contamos con todo el material necesario para afrontar todo tipo de instalaciones temporales y permanentes, disponiendo del material más moderno.
              </p>
            </div>
          </section>

          {/* Instalaciones Llave en Mano */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Cable className="h-6 w-6 text-primary shrink-0" />
              <h2 className="text-2xl font-bold sm:text-3xl text-white">Instalaciones Llave en Mano</h2>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed border-l-2 border-primary/50 pl-6">
              <p>
                Realizamos instalaciones de grupos electrógenos y tableros de transferencia manuales y automáticos en empresas, locales comerciales, edificios, industrias, etc.
              </p>
              <p>
                Según la necesidad de los clientes realizamos instalaciones en exterior e interior.
              </p>
              <p>
                Contamos con personal especializado en transportes, izajes, montajes, tendido eléctrico, puesta en marcha, automatizaciones y así brindarles a nuestros clientes un servicio <strong className="text-white">LLAVE EN MANO</strong>.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-4 pb-8">
            <Button size="lg" className="text-base" asChild>
              <a href="/#contacto">Contactanos</a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/40">
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

export default Servicios;
