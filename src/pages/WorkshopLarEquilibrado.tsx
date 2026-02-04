import { Calendar, MapPin, Users, Euro, Sparkles, Home, Droplets, Wind, Heart, Check, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WorkshopLarEquilibrado() {
  // TODO: Substituir este link pelo Payment Link real do Stripe após configuração
  // const STRIPE_PAYMENT_LINK = 'https://book.stripe.com/test_7sY9AS7aQaxa4JP9WX0Fi00'; // Teste
  const STRIPE_PAYMENT_LINK = 'https://book.stripe.com/7sY9AS7aQaxa4JP9WX0Fi00';

  const learningTopics = [
    {
      icon: Home,
      title: 'Ambientes Saudáveis',
      description: 'Criar ambientes mais saudáveis e harmoniosos para a família'
    },
    {
      icon: Droplets,
      title: 'Produtos Naturais',
      description: 'Preparar inaladores, sprays de limpeza energética e ecológica'
    },
    {
      icon: Wind,
      title: 'Difusores',
      description: 'Utilizar difusores ultrassónicos e de madeira para um lar equilibrado'
    },
    {
      icon: Heart,
      title: 'Bem-Estar Familiar',
      description: 'Integrar sustentabilidade, autocuidado e bem-estar familiar'
    }
  ];

  const practicalDetails = [
    { label: 'Duração', value: '3-4 horas', icon: Clock },
    { label: 'Data', value: '21 de Fevereiro 2026', icon: Calendar },
    { label: 'Local', value: 'Mais q\'uma Papelaria, Esgueira, Aveiro', icon: MapPin },
    { label: 'Investimento', value: '35€', icon: Euro }
  ];

  const included = [
    'Material didático completo',
    'Receitas de produtos naturais',
    'Demonstrações práticas',
    'Amostras de produtos',
    'Certificado de participação',
    'Coffee break incluído'
  ];

  const faqItems = [
    {
      question: 'Preciso de experiência prévia?',
      answer: 'Não! O workshop é ideal para iniciantes. Vamos ensinar tudo desde o básico.'
    },
    {
      question: 'O que devo levar?',
      answer: 'Apenas vontade de aprender! Todo o material necessário será fornecido.'
    },
    {
      question: 'Posso cancelar minha inscrição?',
      answer: 'Sim, com até 7 dias de antecedência, oferecemos reembolso total. Entre em contacto connosco.'
    },
    {
      question: 'Receberei certificado?',
      answer: 'Sim! Todos os participantes recebem certificado de participação ao final do workshop.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-teal to-teal-dark overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <span className="inline-flex items-center gap-2 bg-gold text-white px-6 py-2 rounded-full font-bold text-sm animate-pulse shadow-lg">
                <Sparkles className="w-4 h-4" />
                NOVO EVENTO
              </span>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold text-sm border-2 border-white/30">
                VAGAS LIMITADAS
              </span>
            </div>

            {/* Title */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Workshop Lar Equilibrado
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                Limpeza Ecológica, Feng Shui e Aromaterapia
              </p>

              {/* Key Info */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-white">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-semibold">21 de Fevereiro 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="font-semibold">Aveiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-2xl">35€</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <a
                  href={STRIPE_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-2xl"
                >
                  Inscrever-me Agora
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-dark mb-6">
                Transforma o Teu Lar, a Tua Energia e o Bem-Estar da Tua Família!
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Este workshop prático vai mostrar como a limpeza ecológica, a aromaterapia e o Feng Shui 
                podem criar um lar mais saudável, equilibrado e sustentável. Descobre técnicas simples e 
                eficazes para transformar cada divisão da tua casa num espaço de harmonia e energia positiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-dark mb-4">
                O Que Vais Aprender
              </h2>
              <p className="text-xl text-gray-600">
                Conhecimentos práticos que podes aplicar imediatamente
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {learningTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-dark mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {topic.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-dark mb-4">
                Detalhes Práticos
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {practicalDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-light rounded-xl">
                    <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                    <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
                    <p className="font-semibold text-gray-dark">{detail.value}</p>
                  </div>
                );
              })}
            </div>

            {/* What's Included */}
            <div className="bg-gradient-to-br from-teal/10 to-gold/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-dark mb-6 text-center">
                O Que Está Incluído
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-l-8 border-gold">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-dark mb-4">
                    Para Quem é Este Workshop?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Este workshop é perfeito para <strong>famílias, mães e pais</strong> que querem criar 
                    um ambiente mais saudável para os seus filhos, pessoas interessadas em <strong>sustentabilidade 
                    e vida natural</strong>, e todos aqueles que desejam aprender técnicas práticas para melhorar 
                    o <strong>bem-estar, a saúde e a energia</strong> do seu lar.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mt-4">
                    Não é necessária experiência prévia. Todos são bem-vindos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-dark mb-4">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gray-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-dark mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 bg-teal/10 rounded-xl">
              <p className="text-gray-600 mb-4">
                Tens mais perguntas? Entra em contacto connosco!
              </p>
              <a
                href="https://wa.me/351913034241?text=Olá! Tenho uma pergunta sobre o Workshop Lar Equilibrado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal/80 transition-colors"
              >
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gold via-gold/90 to-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Garante Já o Teu Lugar!
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              As vagas são limitadas para garantir uma experiência personalizada e de qualidade. 
              Não percas esta oportunidade de transformar o teu lar!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-teal px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-2xl"
              >
                Inscrever-me Agora
                <ArrowRight className="w-6 h-6" />
              </a>
              
              <Link
                to="/formacoes"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
              >
                Ver Todos os Workshops
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/90">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">Inscrição segura processada por Stripe</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
