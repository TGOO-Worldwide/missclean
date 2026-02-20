import { Building2, TrendingUp, Users, Heart, Sparkles, Award, Check } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { CoverageBanner } from '../components/CoverageBanner';

export function Business() {
  const services = [
    {
      icon: Sparkles,
      title: 'Limpeza Ecológica Empresarial',
      description: 'Manutenção regular com produtos sustentáveis que garantem a saúde da equipa.',
      benefits: ['Limpeza diária/semanal', 'Produtos não-tóxicos', 'Equipa dedicada']
    },
    {
      icon: Heart,
      title: 'Aromaterapia Corporativa',
      description: 'Programas de aromaterapia para aumentar concentração e reduzir stress.',
      benefits: ['Difusão personalizada', 'Blends para produtividade', 'Consultoria mensal']
    },
    {
      icon: Users,
      title: 'Harmonização de Espaços',
      description: 'Criação de ambientes equilibrados que promovem bem-estar da equipa.',
      benefits: ['Diagnóstico energético', 'Aplicação de técnicas', 'Acompanhamento']
    },
    {
      icon: Award,
      title: 'Consultoria Ambiental',
      description: 'Transforme o seu escritório num espaço sustentável e saudável.',
      benefits: ['Plano de sustentabilidade', 'Formação de equipa', 'Certificação']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      description: 'Ambientes limpos e harmonizados contribuem para maior foco e eficiência da equipa.'
    },
    {
      icon: Heart,
      title: 'Redução de Stress',
      description: 'Aromaterapia e espaços equilibrados reduzem ansiedade e aumentam o bem-estar.'
    },
    {
      icon: Users,
      title: 'Melhor Ambiente de Trabalho',
      description: 'Colaboradores mais satisfeitos e motivados num espaço saudável e agradável.'
    },
    {
      icon: Award,
      title: 'Responsabilidade Social',
      description: 'Demonstre compromisso com sustentabilidade e saúde ambiental.'
    }
  ];

  const caseStudies = [
    {
      company: 'Escritório de Advocacia',
      size: '15 colaboradores',
      challenge: 'Ambiente stressante e falta de concentração',
      solution: 'Limpeza ecológica semanal + Aromaterapia para foco',
      results: ['30% redução de stress', 'Ambiente mais harmonioso', 'Feedback positivo da equipa']
    },
    {
      company: 'Startup Tecnológica',
      size: '25 colaboradores',
      challenge: 'Alergias e problemas respiratórios recorrentes',
      solution: 'Sistema Rainbow + Produtos hipoalergénicos',
      results: ['Zero casos de alergias', 'Ar purificado constantemente', 'Equipa mais saudável']
    },
    {
      company: 'Clínica Médica',
      size: '40 colaboradores',
      challenge: 'Necessidade de limpeza profunda e ambiente calmo',
      solution: 'Limpeza terapêutica + Consultoria ambiental',
      results: ['Ambiente tranquilo', 'Pacientes mais relaxados', 'Certificação de qualidade']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-teal-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Building2 className="w-16 h-16 text-teal mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Limpeza para <span className="text-gold">Empresas</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Transforme o seu escritório num espaço de produtividade, bem-estar e sustentabilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
                Solicitar Orçamento
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-dark text-white px-10 py-5 rounded-full text-lg font-semibold transition-all">
                Agendar Visita
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
              Serviços Empresariais
            </h2>
            <p className="text-xl text-gray-600">
              Soluções completas para o ambiente corporativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-light hover:border-teal p-6 rounded-2xl transition-all hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-teal/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Benefícios para a Sua Empresa
            </h2>
            <p className="text-xl text-gray-600">
              Investir no bem-estar da equipa é investir no sucesso do negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="w-14 h-14 bg-teal/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Casos de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Empresas que transformaram os seus ambientes
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal/5 to-gold/5 border-2 border-teal/20 p-8 rounded-2xl"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-dark mb-2">
                      {study.company}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{study.size}</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-teal mb-1">Desafio:</p>
                        <p className="text-sm text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-teal mb-1">Solução:</p>
                        <p className="text-sm text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-sm font-semibold text-teal mb-3">Resultados:</p>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Planos Mensais
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para a sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-dark mb-2">Básico</h3>
              <p className="text-gray-600 mb-6">Para pequenos escritórios</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-dark">€350</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Limpeza semanal (até 100m²)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Produtos ecológicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Equipa dedicada</span>
                </li>
              </ul>
              <button className="w-full bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-full font-semibold transition-all">
                Escolher Plano
              </button>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-br from-teal/10 to-gold/10 p-8 rounded-2xl shadow-2xl border-2 border-teal relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-white px-6 py-1 rounded-full text-sm font-bold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-2">Profissional</h3>
              <p className="text-gray-600 mb-6">Para empresas em crescimento</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-dark">€750</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Limpeza 2x por semana (até 300m²)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Aromaterapia mensal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Sistema Rainbow trimestral</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Consultoria trimestral</span>
                </li>
              </ul>
              <button className="w-full bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-full font-semibold transition-all">
                Escolher Plano
              </button>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-dark mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">Para grandes empresas</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-dark">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Plano totalmente personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Limpeza diária</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Aromaterapia contínua</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Consultoria mensal dedicada</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Identidade olfativa exclusiva</span>
                </li>
              </ul>
              <button className="w-full bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full font-semibold transition-all">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para Transformar o Seu Escritório?"
        description="Solicite um orçamento personalizado e descubra como podemos melhorar o ambiente da sua empresa."
        primaryButtonText="Solicitar Orçamento"
        secondaryButtonText="Agendar Visita Gratuita"
        secondaryButtonLink="/contactos"
        variant="green"
      />
    </div>
  );
}

