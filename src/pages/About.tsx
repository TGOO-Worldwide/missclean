import { Heart, Target, Eye, Award, Sparkles, Users } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { AuthorityCertifications } from '../components/AuthorityCertifications';
import { CoverageBanner } from '../components/CoverageBanner';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-teal-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Sobre a Miss Clean
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Transformamos a limpeza numa experiência de bem-estar, harmonia e consciência ambiental
            </p>
          </div>
        </div>
      </section>

      {/* Destaque cobertura */}
      <CoverageBanner />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                  alt="Miss Clean"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-dark">
                  A Nossa História
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A Miss Clean nasceu da união entre a paixão pela sustentabilidade e o fascínio
                  pelo poder transformador da aromaterapia. Percebemos que os espaços não precisam
                  apenas de limpeza física — precisam de equilíbrio, harmonia e energia positiva.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Com formação em aromaterapia e anos de experiência em limpeza ecológica,
                  criámos um serviço único em Portugal que vai muito além do convencional.
                  Cada espaço é tratado com produtos naturais cuidadosamente selecionados e
                  óleos essenciais que promovem bem-estar físico e emocional.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  O nosso propósito é claro: transformar ambientes em santuários de paz,
                  saúde e consciência ambiental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover a consciência ambiental e emocional através da limpeza,
                oferecendo serviços que transformam espaços em ambientes saudáveis,
                equilibrados e energeticamente harmoniosos.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser a referência nacional em limpeza ecológica e terapêutica,
                inspirando pessoas e empresas a adotarem práticas sustentáveis
                e conscientes que promovem saúde e bem-estar integral.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Valores</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Sustentabilidade e respeito pelo ambiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Bem-estar físico e emocional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Consciência e propósito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Excelência e dedicação</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
                O Nosso Diferencial
              </h2>
              <p className="text-xl text-gray-600">
                O que torna a Miss Clean verdadeiramente única
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-dark mb-3">
                    Integração Terapêutica
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Somos os únicos em Portugal a integrar aromaterapia profissional,
                    cromoterapia e harmonização energética nos serviços de limpeza.
                    Não apenas limpamos — equilibramos e transformamos.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-dark mb-3">
                    Formação Especializada
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Equipa formada em aromaterapia, limpeza ecológica e técnicas de
                    harmonização de espaços. Cada profissional é treinado para entender
                    e aplicar os princípios terapêuticos em cada serviço.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-dark mb-3">
                    Abordagem Personalizada
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cada espaço é único e merece atenção especial. Fazemos uma avaliação
                    completa das necessidades físicas e energéticas do ambiente para criar
                    um plano de limpeza e harmonização totalmente personalizado.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-dark mb-3">
                    Compromisso com o Bem-Estar
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vamos além da limpeza superficial. O nosso compromisso é com a saúde
                    integral — física, emocional e ambiental. Cada serviço é uma experiência
                    de cuidado e transformação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Certifications */}
      <AuthorityCertifications />

      {/* CTA */}
      <CTASection
        title="Quer Conhecer Melhor o Nosso Trabalho?"
        description="Entre em contacto connosco e descubra como podemos transformar o seu espaço."
        primaryButtonText="Falar Connosco"
        variant="green"
      />
    </div>
  );
}

