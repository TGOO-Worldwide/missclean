import { Leaf, Sparkles, Heart, Wind, Briefcase, Home, Check, ArrowRight, Calendar, Users, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { CoverageBanner } from '../components/CoverageBanner';

export function Services() {
  const services = [
    {
      id: 'ecologica',
      icon: Leaf,
      title: 'Limpeza Ecológica',
      subtitle: 'Residencial e Profissional',
      description: 'Utilizamos apenas produtos biodegradáveis e naturais, livres de químicos tóxicos, seguros para pessoas, animais e meio ambiente.',
      benefits: [
        'Produtos 100% naturais e biodegradáveis',
        'Seguros para crianças e animais',
        'Redução de ácaros, fungos e alergénios',
        'Purificação do ar',
        'Zero impacto ambiental negativo',
        'Equipa treinada e certificada'
      ],
      pricing: 'A partir de 150€/serviço',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070'
    },
    {
      id: 'terapeutica',
      icon: Sparkles,
      title: 'Limpeza Terapêutica',
      subtitle: 'Harmonização Energética',
      description: 'Integração de óleos essenciais cuidadosamente selecionados conforme as necessidades energéticas e emocionais do espaço.',
      benefits: [
        'Seleção personalizada de óleos essenciais',
        'Purificação e harmonização energética',
        'Aplicação de aromaterapia profissional',
        'Técnicas de cromoterapia',
        'Música terapêutica ambiente',
        'Ideal após mudanças, doenças ou períodos de stress'
      ],
      pricing: 'A partir de 250€/sessão',
      premium: true,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2070'
    },
    {
      id: 'rainbow',
      icon: Wind,
      title: 'Sistema Rainbow',
      subtitle: 'Limpeza Profunda com Aspiração Aquática',
      description: 'Limpeza profunda utilizando o sistema Rainbow de aspiração aquática que purifica o ar e elimina alergénios.',
      benefits: [
        'Aspiração aquática de alta eficiência',
        'Purificação profunda do ar',
        'Remoção de ácaros e alergénios',
        'Ideal para alergias respiratórias',
        'Seguro para crianças e idosos',
        'Recomendado por profissionais de saúde'
      ],
      pricing: 'A partir de 180€/serviço',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070'
    },
    {
      id: 'aromaterapia',
      icon: Heart,
      title: 'Aromaterapia Aplicada',
      subtitle: 'Sinergias Personalizadas',
      description: 'Criação de fórmulas com óleos essenciais adaptadas a diferentes ambientes e necessidades emocionais.',
      benefits: [
        'Consultoria personalizada',
        'Blends exclusivos para cada espaço',
        'Planos terapêuticos individuais',
        'Tratamento de ansiedade, stress e insónia',
        'Aromaterapia para empresas',
        'Difusores e aplicadores profissionais'
      ],
      pricing: 'A partir de 120€/consulta',
      premium: true,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2070'
    },
    {
      id: 'consultoria',
      icon: Briefcase,
      title: 'Consultoria Personalizada',
      subtitle: 'Ambiental e Sensorial',
      description: 'Consultoria completa para empresas e residências que desejam integrar sustentabilidade e bem-estar.',
      benefits: [
        'Diagnóstico energético do espaço',
        'Criação de identidade olfativa',
        'Plano de sustentabilidade personalizado',
        'Consultoria em aromaterapia ambiental',
        'Harmonização com cores, música e flores',
        'Acompanhamento contínuo'
      ],
      pricing: 'Sob consulta',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-teal-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Nossos Serviços
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Soluções completas que aliam sustentabilidade, saúde e bem-estar para o seu espaço
            </p>
          </div>
        </div>
      </section>

      <CoverageBanner />

      {/* 21 Dias com Miss Clean - Featured Program */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* New Program Badge */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-teal text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse shadow-lg">
                <Star className="w-4 h-4" />
                PROGRAMA EXCLUSIVO
              </span>
            </div>

            {/* Featured Card */}
            <div className="relative bg-gradient-to-br from-gold via-gold/90 to-teal rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left: Image */}
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                    alt="21 Dias com Miss Clean"
                    className="w-full h-full object-cover rounded-2xl shadow-xl min-h-[300px]"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gold px-4 py-2 rounded-full font-bold shadow-lg">
                    NOVO PROGRAMA
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center text-white space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                      21 Dias com Miss Clean
                    </h2>
                    <p className="text-xl text-white/90 mb-4">
                      Programa de Limpeza Ecológica e Harmonização de Espaços
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      Transforme o seu espaço em apenas 21 dias através de limpeza ecológica, 
                      organização e harmonização com aromaterapia.
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-white/90" />
                      <span>Limpeza ecológica profissional</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-white/90" />
                      <span>Organização e renovação do espaço</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-white/90" />
                      <span>Aromaterapia com óleos essenciais</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-white/90" />
                      <span>Acompanhamento durante 21 dias</span>
                    </div>
                  </div>

                  {/* Info Pills */}
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">21 Dias</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">Empresas & Famílias</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Link
                      to="/contactos"
                      className="inline-flex items-center gap-2 bg-white text-gold px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
                    >
                      Saber Mais e Solicitar
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="mt-12 bg-gray-light rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-dark mb-4">O que é o programa</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      O 21 Dias com Miss Clean é um processo de limpeza e harmonização progressiva que combina:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Limpeza ecológica profissional</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Organização e renovação do espaço</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Aromaterapia com óleos essenciais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Criação de ambientes mais equilibrados e agradáveis</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      O objetivo é ir além da limpeza tradicional, ajudando a transformar o ambiente 
                      e o bem-estar de quem vive ou trabalha no espaço.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-dark mb-4">Benefícios</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Ambiente mais limpo, leve e organizado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Sensação de tranquilidade e bem-estar no espaço</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Melhoria da energia e da atmosfera da casa ou empresa</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Uso de produtos ecológicos e naturais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">Acompanhamento durante 21 dias para uma transformação consistente</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-dark mb-4">Para quem é este programa</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h4 className="text-lg font-semibold text-gray-dark mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-gold" />
                          Empresas
                        </h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Escritórios</li>
                          <li>• Consultórios</li>
                          <li>• Espaços comerciais</li>
                          <li>• Ambientes que precisam de renovação energética e organização</li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h4 className="text-lg font-semibold text-gray-dark mb-3 flex items-center gap-2">
                          <Home className="w-5 h-5 text-teal" />
                          Famílias
                        </h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Casas que precisam de reorganização e limpeza profunda</li>
                          <li>• Ambientes que procuram mais tranquilidade e equilíbrio</li>
                          <li>• Pessoas que valorizam limpeza ecológica e bem-estar no lar</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gold/10 to-teal/10 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-dark mb-3">
                      Interessado no programa?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Entre em contacto connosco para mais informações e para personalizar 
                      o programa às suas necessidades específicas.
                    </p>
                    <Link
                      to="/contactos"
                      className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                    >
                      Contactar Agora
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                      />
                      {service.premium && (
                        <div className="absolute -top-4 -right-4 bg-gold text-white px-6 py-2 rounded-full font-bold shadow-lg">
                          Premium
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'md:order-2' : 'md:order-1'} >
                    <div className="space-y-6">
                      <div>
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                          service.premium ? 'bg-gold/20 text-gold' : 'bg-teal/20 text-teal'
                        }`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-dark mb-2">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gold font-semibold mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {service.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-dark mb-3 text-lg">
                          Benefícios:
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                service.premium ? 'text-gold' : 'text-teal'
                              }`} />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-2xl font-bold text-gray-dark mb-4">
                          {service.pricing}
                        </p>
                        <Link
                          to="/contactos"
                          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 ${
                            service.premium
                              ? 'bg-gold hover:bg-gold/90 text-white'
                              : 'bg-teal hover:bg-teal/90 text-white'
                          }`}
                        >
                          Solicitar Orçamento
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Para Quem São os Nossos Serviços?
            </h2>
            <p className="text-xl text-gray-600">
              Soluções adaptadas para diferentes necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/residencias"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-all">
                <Home className="w-8 h-8 text-gold group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-3">
                Residências
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Serviços personalizados para o seu lar, criando ambientes saudáveis,
                harmoniosos e acolhedores para toda a família.
              </p>
              <span className="text-gold font-semibold group-hover:underline inline-flex items-center gap-2">
                Ver serviços para residências
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/empresas"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-white transition-all">
                <Briefcase className="w-8 h-8 text-teal group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-3">
                Empresas
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Soluções empresariais que aumentam a produtividade, reduzem o stress
                e criam ambientes corporativos mais harmoniosos.
              </p>
              <span className="text-teal font-semibold group-hover:underline inline-flex items-center gap-2">
                Ver serviços para empresas
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para Transformar o Seu Espaço?"
        description="Entre em contacto connosco e receba uma proposta personalizada adaptada às suas necessidades."
        primaryButtonText="Pedir Orçamento Gratuito"
        secondaryButtonText="Ver Formações"
        secondaryButtonLink="/formacoes"
      />
    </div>
  );
}

