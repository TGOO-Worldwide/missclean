import { Calendar, MapPin, Clock, Sparkles, Check, ArrowRight, Flower2, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_RESERVA =
  'https://wa.me/351913034241?text=' +
  encodeURIComponent(
    'Olá! Gostaria de reservar o meu lugar no Workshop Ritual de Beleza Natural (Dia 23).'
  );

export function WorkshopRitualBelezaNatural() {
  const highlights = [
    'Experiência de Skin Care',
    'Dicas de autocuidado',
    'Ambiente acolhedor e descontraído',
    'Momento de bem-estar e partilha',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gold via-gold/90 to-teal overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 bg-white text-gold px-5 py-2 rounded-full font-bold text-sm animate-pulse shadow-lg">
                <Sparkles className="w-4 h-4" />
                Dia 23 · Porto
              </span>
              <span className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm text-white px-5 py-2 rounded-full font-bold text-sm border border-white/40">
                <Flower2 className="w-4 h-4" />
                Ritual de Beleza Natural
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Workshop Ritual de Beleza Natural
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
              Uma experiência especial de cuidado, beleza e bem-estar com{' '}
              <strong className="font-semibold">Delmira Monteiro (Herbalife)</strong> e{' '}
              <strong className="font-semibold">Sónia Jesus (Miss Clean)</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-white pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">23 de Maio de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">18:00</span>
              </div>
              <div className="flex items-start gap-2 max-w-md text-left">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-sm md:text-base">
                  Avenida de França n.º 20, sala 501 — 4050-275 Porto
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href={WHATSAPP_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gold px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-2xl"
              >
                Reservar lugar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/contactos"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/25 transition-all"
              >
                Contactos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Porto (imagem promocional) */}
      <section className="bg-gray-light border-b border-gray-100">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200/80">
            <img
              src="/workshop-porto18.jpeg"
              alt="Workshop Ritual de Beleza Natural — Porto"
              className="hidden md:block w-full h-auto object-cover max-h-[min(70vh,560px)] object-center"
              loading="eager"
              decoding="async"
            />
            <img
              src="/workshop-mobile18.jpeg"
              alt="Workshop Ritual de Beleza Natural — Porto"
              className="md:hidden w-full h-auto object-cover max-h-[min(70vh,560px)] object-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                alt="Skin care e ritual de beleza natural"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">
                Skin Care com inspiração na beleza coreana
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Iremos realizar um workshop de{' '}
                <strong className="text-gray-dark">Skin Care com hidratação facial profunda</strong>,
                inspirado na inovadora beleza coreana, reconhecida mundialmente pelos seus resultados,
                tecnologia e cuidado avançado da pele.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mais do que um tratamento facial, este será um momento para{' '}
                <strong className="text-gray-dark">desacelerar, cuidar de si</strong>, elevar a autoestima
                e sentir uma pele mais hidratada, luminosa e revitalizada.
              </p>
              <div className="flex items-start gap-3 bg-teal/5 border border-teal/20 rounded-xl p-5">
                <Leaf className="w-8 h-8 text-teal flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  A Miss Clean associa também o cuidado da pele ao cuidado do ambiente onde vivemos.
                  Um espaço equilibrado e saudável contribui para o bem-estar, conforto e harmonia do
                  nosso dia a dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark">O que pode esperar</h2>
          </div>
          <ul className="max-w-xl mx-auto space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-md">
                <Check className="w-6 h-6 text-teal flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Reserve o seu lugar e permita-se viver um verdadeiro ritual de beleza e equilíbrio.
            </p>
            <a
              href={WHATSAPP_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Reservar lugar
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
