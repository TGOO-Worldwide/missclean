import { Award, Sparkles, Heart, Leaf, Users, CheckCircle2 } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { CoverageBanner } from '../components/CoverageBanner';

export function Unique() {
  const differentials = [
    {
      icon: Sparkles,
      title: 'Primeira e Única em Portugal',
      description: 'Somos pioneiros na integração de limpeza ecológica com aromaterapia e harmonização terapêutica. Não existe outro serviço igual no país.',
      stats: '100% exclusivo'
    },
    {
      icon: Heart,
      title: 'Abordagem Holística',
      description: 'Não tratamos apenas do espaço físico — cuidamos do bem-estar emocional, energético e ambiental. Cada serviço é uma experiência transformadora.',
      stats: 'Corpo, mente e ambiente'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade Real',
      description: 'Zero produtos químicos tóxicos. 100% biodegradável. Compromisso genuíno com o planeta e as futuras gerações.',
      stats: '0% impacto negativo'
    },
    {
      icon: Users,
      title: 'Equipa Especializada',
      description: 'Profissionais formados em aromaterapia, limpeza ecológica e harmonização de espaços. Não somos apenas uma empresa de limpeza — somos terapeutas do ambiente.',
      stats: 'Certificação profissional'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Diagnóstico Sensorial',
      description: 'Avaliamos o espaço física e energeticamente, identificando necessidades específicas e áreas que precisam de atenção especial.'
    },
    {
      step: '02',
      title: 'Plano Personalizado',
      description: 'Criamos um protocolo único com produtos ecológicos selecionados e óleos essenciais adaptados às características do espaço e às necessidades dos habitantes.'
    },
    {
      step: '03',
      title: 'Limpeza Consciente',
      description: 'Executamos a limpeza com técnicas profissionais, produtos naturais e intenção terapêutica. Cada gesto é feito com propósito e cuidado.'
    },
    {
      step: '04',
      title: 'Harmonização Aromática',
      description: 'Aplicamos aromaterapia, cromoterapia e, quando apropriado, música terapêutica para equilibrar as energias do ambiente.'
    },
    {
      step: '05',
      title: 'Acompanhamento Contínuo',
      description: 'Monitorizamos os resultados e ajustamos o protocolo conforme necessário, garantindo que o espaço se mantém equilibrado e saudável.'
    }
  ];

  const results = [
    {
      metric: '98%',
      label: 'Taxa de Satisfação',
      description: 'Clientes recomendam os nossos serviços'
    },
    {
      metric: '85%',
      label: 'Redução de Alergias',
      description: 'Em clientes com problemas respiratórios'
    },
    {
      metric: '92%',
      label: 'Melhoria de Bem-Estar',
      description: 'Reportam maior sensação de paz'
    },
    {
      metric: '+200',
      label: 'Espaços Transformados',
      description: 'Casas e empresas mais saudáveis'
    }
  ];

  const recognitions = [
    'Pioneiros em Limpeza Terapêutica em Portugal',
    'Certificação em Aromaterapia Profissional',
    'Parceiros de Produtos Ecológicos Certificados',
    'Formadores em Sustentabilidade Doméstica',
    'Referência em Harmonização de Espaços'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-teal-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Award className="w-20 h-20 text-gold mx-auto mb-6 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              O Único Serviço em Portugal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              A primeira e única empresa que transforma limpeza em terapia
            </p>
          </div>
        </div>
      </section>

      <CoverageBanner />

      {/* Main Differentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              O Que Nos Torna Únicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não somos mais uma empresa de limpeza. Somos uma revolução no cuidado de espaços.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-gold/5 to-teal/5 border-2 border-gold/20 hover:border-gold hover:shadow-2xl transition-all"
                >
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-dark mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                        {item.stats}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              A Nossa Metodologia Exclusiva
            </h2>
            <p className="text-xl text-gray-600">
              Um processo único que alia ciência, arte e terapia
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-teal/10 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              Resultados Que Falam Por Si
            </h2>
            <p className="text-xl text-gray-600">
              Números reais de transformação e impacto
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl font-bold text-gold mb-3">
                  {result.metric}
                </div>
                <h3 className="text-lg font-semibold text-gray-dark mb-2">
                  {result.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
                Reconhecimento e Certificações
              </h2>
              <p className="text-xl text-gray-600">
                A excelência reconhecida por profissionais e clientes
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-teal/10 p-12 rounded-3xl border-2 border-gold/20">
              <ul className="space-y-4">
                {recognitions.map((recognition, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-lg"
                  >
                    <Award className="w-6 h-6 text-gold flex-shrink-0" />
                    <span className="text-gray-700">{recognition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
                Miss Clean vs Limpeza Convencional
              </h2>
              <p className="text-xl text-gray-600">
                Veja a diferença
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Miss Clean */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-gold/10 to-teal/10">
                  <h3 className="text-3xl font-bold text-gold mb-8 text-center">
                    Miss Clean
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-dark">100% Ecológico</p>
                        <p className="text-sm text-gray-600">Produtos naturais e biodegradáveis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-dark">Aromaterapia Incluída</p>
                        <p className="text-sm text-gray-600">Harmonização emocional e energética</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-dark">Seguro para Todos</p>
                        <p className="text-sm text-gray-600">Crianças, animais, grávidas, idosos</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-dark">Equipa Certificada</p>
                        <p className="text-sm text-gray-600">Formação em aromaterapia e terapias</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-dark">Consultoria Incluída</p>
                        <p className="text-sm text-gray-600">Orientação personalizada contínua</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Convencional */}
                <div className="p-8 md:p-12 bg-gray-50">
                  <h3 className="text-3xl font-bold text-gray-400 mb-8 text-center">
                    Limpeza Convencional
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-500">Produtos Químicos</p>
                        <p className="text-sm text-gray-400">Podem ser tóxicos e poluentes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-500">Apenas Físico</p>
                        <p className="text-sm text-gray-400">Sem cuidado emocional ou energético</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-500">Riscos de Alergias</p>
                        <p className="text-sm text-gray-400">Produtos podem causar reações</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-500">Sem Formação Específica</p>
                        <p className="text-sm text-gray-400">Foco apenas na limpeza básica</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-500">Serviço Standard</p>
                        <p className="text-sm text-gray-400">Sem personalização ou acompanhamento</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experimente o Serviço Único em Portugal"
        description="Descubra a diferença que a Miss Clean pode fazer no seu espaço e na sua vida."
        primaryButtonText="Quero Experimentar"
        secondaryButtonText="Saber Mais"
        secondaryButtonLink="/sobre"
      />
    </div>
  );
}

