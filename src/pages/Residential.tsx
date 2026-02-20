import { Home, Heart, Baby, Dog, Flower2, Shield, Check, Star } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { CoverageBanner } from '../components/CoverageBanner';

export function Residential() {
  const services = [
    {
      icon: Home,
      title: 'Limpeza Regular do Lar',
      description: 'Manutenção semanal ou quinzenal com produtos ecológicos para um lar sempre limpo e saudável.'
    },
    {
      icon: Flower2,
      title: 'Harmonização do Espaço',
      description: 'Limpeza terapêutica com aromaterapia para criar ambientes de paz e equilíbrio.'
    },
    {
      icon: Shield,
      title: 'Sistema Rainbow',
      description: 'Limpeza profunda ideal para famílias com alergias, crianças pequenas ou animais.'
    },
    {
      icon: Heart,
      title: 'Limpeza Pós-Eventos',
      description: 'Harmonização especial após mudanças, doenças ou períodos difíceis.'
    }
  ];

  const whyChoose = [
    {
      icon: Baby,
      title: 'Seguro para Crianças',
      description: 'Produtos 100% naturais e não-tóxicos. As crianças podem brincar em segurança.'
    },
    {
      icon: Dog,
      title: 'Amigo dos Animais',
      description: 'Sem químicos prejudiciais. Completamente seguro para os seus animais de estimação.'
    },
    {
      icon: Shield,
      title: 'Anti-Alérgico',
      description: 'Redução drástica de ácaros, fungos e alergénios. Ideal para quem sofre de alergias.'
    },
    {
      icon: Flower2,
      title: 'Bem-Estar Emocional',
      description: 'Aromaterapia que promove calma, relaxamento e harmonia familiar.'
    }
  ];

  const packages = [
    {
      name: 'Básico',
      price: '€120',
      frequency: 'por visita',
      ideal: 'Apartamentos até 100m²',
      features: [
        'Limpeza completa da casa',
        'Produtos ecológicos incluídos',
        'Duração: 3-4 horas',
        'Equipa de 1-2 pessoas'
      ]
    },
    {
      name: 'Família',
      price: '€280',
      frequency: 'mensal (4 visitas)',
      ideal: 'Casas até 200m²',
      popular: true,
      features: [
        'Limpeza semanal',
        'Aromaterapia mensal incluída',
        'Sistema Rainbow trimestral',
        'Prioridade no agendamento',
        '10% desconto'
      ]
    },
    {
      name: 'Premium',
      price: '€450',
      frequency: 'mensal',
      ideal: 'Casas grandes ou famílias numerosas',
      features: [
        'Limpeza 2x por semana',
        'Aromaterapia personalizada',
        'Sistema Rainbow mensal',
        'Consultoria de harmonização',
        'Produtos para uso entre limpezas'
      ],
      premium: true
    }
  ];

  const testimonials = [
    {
      name: 'Sofia Martins',
      rating: 5,
      text: 'Tenho dois filhos pequenos e estava sempre preocupada com os produtos de limpeza. A Miss Clean mudou isso completamente. A casa fica impecável e posso deixar as crianças brincarem sem preocupações!'
    },
    {
      name: 'João Ribeiro',
      rating: 5,
      text: 'O meu filho tem asma e alergias severas. Desde que começamos com o Sistema Rainbow, ele não teve mais crises. A qualidade do ar melhorou drasticamente. Recomendo!'
    },
    {
      name: 'Mariana Costa',
      rating: 5,
      text: 'A limpeza terapêutica após a perda da minha mãe foi transformadora. O espaço ficou não apenas limpo, mas energeticamente leve. Senti paz pela primeira vez em meses. Gratidão!'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-teal-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Home className="w-16 h-16 text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Limpeza para <span className="text-gold">Residências</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Transforme a sua casa num santuário de saúde, harmonia e bem-estar para toda a família
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
                Pedir Avaliação Gratuita
              </button>
              <button className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
                Ver Pacotes
              </button>
            </div>
          </div>
        </div>
      </section>

      <CoverageBanner />

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Serviços para o Seu Lar
            </h2>
            <p className="text-xl text-gray-600">
              Cuidamos de cada detalhe da sua casa com amor e dedicação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl border-2 border-gray-light hover:border-gold hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-br from-gold/5 to-teal/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Por Que Escolher a Miss Clean?
            </h2>
            <p className="text-xl text-gray-600">
              A saúde e bem-estar da sua família em primeiro lugar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Pacotes para o Seu Lar
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano que melhor se adapta à sua família
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-lg p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-gold/10 to-teal/10 border-2 border-gold relative'
                    : pkg.premium
                    ? 'bg-gradient-to-br from-gold/5 to-teal/5'
                    : 'bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-6 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-dark mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{pkg.ideal}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-dark">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">{pkg.frequency}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.premium ? 'text-gold' : 'text-teal'
                      }`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                    pkg.premium
                      ? 'bg-gold hover:bg-gold/90 text-white'
                      : pkg.popular
                      ? 'bg-gold hover:bg-gold/90 text-white'
                      : 'bg-teal hover:bg-teal/90 text-white'
                  }`}
                >
                  Escolher Pacote
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Precisa de um plano personalizado? Temos soluções à medida para qualquer necessidade.
            </p>
            <button className="text-gold font-semibold hover:underline">
              Solicitar Plano Personalizado
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              O Que Dizem as Famílias
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de quem confia na Miss Clean
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-dark">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Situations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
                Situações Especiais
              </h2>
              <p className="text-xl text-gray-600">
                Serviços adaptados para momentos que precisam de cuidado extra
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gold/10 to-transparent p-6 rounded-2xl border-l-4 border-gold">
                <h3 className="text-xl font-semibold text-gray-dark mb-2">
                  Pós-Doença ou Hospitalização
                </h3>
                <p className="text-gray-600">
                  Limpeza profunda e harmonização para renovar as energias e criar um ambiente propício à recuperação.
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal/10 to-transparent p-6 rounded-2xl border-l-4 border-teal">
                <h3 className="text-xl font-semibold text-gray-dark mb-2">
                  Mudança de Casa
                </h3>
                <p className="text-gray-600">
                  Prepare o novo lar com limpeza ecológica e aromaterapia para começar esta nova fase com energia positiva.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gold/10 to-transparent p-6 rounded-2xl border-l-4 border-gold">
                <h3 className="text-xl font-semibold text-gray-dark mb-2">
                  Após Perda ou Luto
                </h3>
                <p className="text-gray-600">
                  Limpeza terapêutica com foco na harmonização emocional e energética do espaço, trazendo paz e conforto.
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal/10 to-transparent p-6 rounded-2xl border-l-4 border-teal">
                <h3 className="text-xl font-semibold text-gray-dark mb-2">
                  Preparação para Bebé
                </h3>
                <p className="text-gray-600">
                  Crie um ninho seguro e harmonioso para o seu bebé com produtos 100% naturais e aromaterapia suave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para Transformar o Seu Lar?"
        description="Peça uma avaliação gratuita e descubra como podemos tornar a sua casa mais saudável e harmoniosa."
        primaryButtonText="Avaliação Gratuita"
        secondaryButtonText="Ver Todos os Serviços"
        secondaryButtonLink="/servicos"
      />
    </div>
  );
}

