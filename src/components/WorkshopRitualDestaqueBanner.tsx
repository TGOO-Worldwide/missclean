import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WorkshopRitualDestaqueBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-teal text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse shadow-lg">
              <Sparkles className="w-4 h-4" />
              ✨ NOVO WORKSHOP · DIA 23
            </span>
          </div>

          <div className="relative bg-gradient-to-br from-gold via-gold/90 to-teal rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.01] transition-all duration-300">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="relative order-last md:order-first">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                  alt="Workshop Ritual de Beleza Natural"
                  className="w-full h-full object-cover rounded-2xl shadow-xl min-h-[280px]"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gold px-4 py-2 rounded-full font-bold shadow-lg">
                  Porto · 18:00
                </div>
              </div>

              <div className="flex flex-col justify-center text-white space-y-5">
                <div>
                  <p className="text-white/85 text-sm font-semibold uppercase tracking-wide mb-2">
                    Delmira Monteiro · Herbalife &amp; Sónia Jesus · Miss Clean
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Workshop Ritual de Beleza Natural
                  </h2>
                  <p className="text-xl text-white/90 mb-3">
                    Skin Care com hidratação facial profunda · inspiração na beleza coreana
                  </p>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Convite para uma experiência de cuidado da pele, autocuidado e bem-estar num ambiente
                    acolhedor — com o cuidado do lar que caracteriza a Miss Clean.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-white/90 shrink-0" />
                    <div>
                      <p className="text-white/70">Data</p>
                      <p className="font-bold">23 de Maio de 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-white/90 shrink-0" />
                    <div>
                      <p className="text-white/70">Horário</p>
                      <p className="font-bold">18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <MapPin className="w-5 h-5 text-white/90 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70">Local</p>
                      <p className="font-bold">Av. de França n.º 20, sala 501 — 4050-275 Porto</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to="/workshop-ritual-beleza-natural"
                    className="inline-flex items-center gap-2 bg-white text-gold px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    Ver detalhes e reservar
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Banner promocional (desktop / mobile) */}
          <div className="mt-8">
            <Link
              to="/workshop-ritual-beleza-natural"
              className="block overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200/80 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-label="Workshop Ritual de Beleza Natural — ver página do evento"
            >
              <img
                src="/workshop-porto.jpeg"
                alt="Workshop Ritual de Beleza Natural — Porto"
                className="hidden md:block w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/workshop-mobile.jpeg"
                alt="Workshop Ritual de Beleza Natural — Porto"
                className="md:hidden w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
