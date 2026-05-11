import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Shield, Award, TrendingUp, Users, Leaf, ArrowRight, Calendar, MapPin, Euro, Zap, BookOpen, Flower2, Briefcase, Star, Check } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { LeadQuiz } from '../components/LeadQuiz';
import { AuthorityCertifications } from '../components/AuthorityCertifications';
import { CoverageBanner } from '../components/CoverageBanner';
import { WorkshopRitualDestaqueBanner } from '../components/WorkshopRitualDestaqueBanner';
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const { t } = useLanguage();

  const services = [
    {
      icon: Leaf,
      title: t('home.service1Title'),
      description: t('home.service1Desc'),
      link: '/servicos#ecologica'
    },
    {
      icon: Sparkles,
      title: t('home.service2Title'),
      description: t('home.service2Desc'),
      link: '/servicos#terapeutica',
      premium: true
    },
    {
      icon: Heart,
      title: t('home.service3Title'),
      description: t('home.service3Desc'),
      link: '/servicos#aromaterapia'
    },
    {
      icon: Shield,
      title: t('home.service4Title'),
      description: t('home.service4Desc'),
      link: '/servicos#rainbow'
    }
  ];

  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Proprietária de Casa',
      content: 'A Miss Clean transformou completamente a energia da minha casa. O serviço de aromaterapia é incrível e sinto o ambiente muito mais leve e harmonioso.',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor de Empresa',
      content: 'Contratámos a Miss Clean para o nosso escritório e a diferença é notável. Os colaboradores estão mais focados e o ambiente é muito mais agradável. Serviço premium!',
      rating: 5
    },
    {
      name: 'Maria Costa',
      role: 'Mãe de 2 Crianças',
      content: 'Finalmente encontrei um serviço que é seguro para as minhas crianças e animais. Os produtos ecológicos são fantásticos e o sistema Rainbow ajudou muito com as alergias.',
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: 'O que torna a Miss Clean única em Portugal?',
      answer: 'Somos a única empresa em Portugal que alia limpeza ecológica com aromaterapia e harmonização terapêutica. Não fazemos apenas limpeza física - transformamos a energia e o bem-estar dos espaços.'
    },
    {
      question: 'Os produtos utilizados são seguros?',
      answer: 'Sim! Utilizamos apenas produtos biodegradáveis, naturais e livres de químicos tóxicos. São completamente seguros para crianças, animais de estimação, idosos e pessoas com alergias ou doenças respiratórias.'
    },
    {
      question: 'Como funciona a limpeza terapêutica?',
      answer: 'A limpeza terapêutica integra óleos essenciais cuidadosamente selecionados conforme as necessidades energéticas e emocionais do espaço. Aplicamos técnicas de aromaterapia, música e cromoterapia para equilibrar a energia do local.'
    },
    {
      question: 'Qual é a diferença entre os serviços para residências e empresas?',
      answer: 'Para residências, focamos no bem-estar familiar e harmonização do lar. Para empresas, adaptamos os serviços para aumentar a produtividade, reduzir o stress e criar ambientes mais harmoniosos para as equipas.'
    },
    {
      question: 'Oferecem formações e workshops?',
      answer: 'Sim! Promovemos workshops de Limpeza Ecológica e Terapêutica, Aromaterapia Doméstica e formações profissionalizantes. Ensinamos métodos naturais e conscientes para transformar a limpeza num ato de cura.'
    },
    {
      question: 'Como posso começar?',
      answer: 'Pode preencher o nosso questionário para receber uma proposta personalizada, contactar-nos via WhatsApp ou marcar uma consulta gratuita. Vamos avaliar as necessidades do seu espaço e criar um plano à medida.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-dark/80 via-teal/60 to-gray-dark/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="bg-gold/20 border border-gold text-gold px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                {t('home.uniqueBadge')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t('home.heroTitle')} <span className="text-gold">{t('home.heroTitleHighlight')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
              {t('home.heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => setShowQuiz(true)}
                className="group flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-2xl"
              >
                {t('home.heroCtaPrimary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link
                to="/sobre"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-dark text-white px-10 py-5 rounded-full text-lg font-semibold transition-all"
              >
                {t('home.heroCtaSecondary')}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">{t('home.trust100')}</div>
                <div className="text-sm text-gray-300">{t('home.trust100Label')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">{t('home.trust5Star')}</div>
                <div className="text-sm text-gray-300">{t('home.trust5StarLabel')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">{t('home.trust200Plus')}</div>
                <div className="text-sm text-gray-300">{t('home.trust200PlusLabel')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">{t('home.trustUnique')}</div>
                <div className="text-sm text-gray-300">{t('home.trustUniqueLabel')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Destaque cobertura: Aveiro + todo o país */}
      <CoverageBanner />

      {/* Destaque workshop: Ritual de Beleza Natural */}
      <WorkshopRitualDestaqueBanner />

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="my-8">
            <LeadQuiz onClose={() => setShowQuiz(false)} />
          </div>
        </div>
      )}

      {/* Unique in Portugal Section */}
      <section className="py-20 bg-gradient-to-br from-gold/10 to-teal/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Award className="w-16 h-16 text-gold mx-auto mb-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark">
              {t('home.uniqueTitle')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('home.uniqueDescription')}
            </p>
            <Link
              to="/unico"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
            >
              {t('home.uniqueLink')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 21 Dias com Miss Clean Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Link 
            to="/servicos"
            className="block max-w-6xl mx-auto group"
          >
            <div className="relative bg-gradient-to-r from-gold via-gold/95 to-teal rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                <span className="inline-flex items-center gap-2 bg-white text-gold px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg animate-pulse">
                  <Star className="w-4 h-4" />
                  PROGRAMA EXCLUSIVO
                </span>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 p-6 sm:p-8 md:p-12">
                {/* Left: Content */}
                <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-white">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                      21 Dias com Miss Clean
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4">
                      Programa de Limpeza Ecológica e Harmonização de Espaços
                    </p>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      Transforme o seu espaço em apenas 21 dias através de limpeza ecológica, organização e harmonização com aromaterapia.
                    </p>
                  </div>

                  {/* Benefits Pills */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-semibold">Limpeza Ecológica</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-semibold">Organização</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-white/30">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      21 Dias de Acompanhamento
                    </div>
                  </div>

                  {/* Target audience */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-semibold">Empresas & Famílias</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 bg-white text-gold px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base group-hover:scale-105 transition-transform shadow-xl">
                      Saber Mais e Solicitar
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative order-first md:order-last">
                  <div className="relative h-48 sm:h-64 md:h-full min-h-[250px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                      alt="21 Dias com Miss Clean"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              {t('common.viewAllServices')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits/Authority Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              {t('home.benefitsTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">{t('home.benefit1Title')}</h3>
              <p className="text-gray-600">
                {t('home.benefit1Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">{t('home.benefit2Title')}</h3>
              <p className="text-gray-600">
                {t('home.benefit2Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">{t('home.benefit3Title')}</h3>
              <p className="text-gray-600">
                {t('home.benefit3Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">{t('home.benefit4Title')}</h3>
              <p className="text-gray-600">
                {t('home.benefit4Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">{t('home.benefit5Title')}</h3>
              <p className="text-gray-600">
                {t('home.benefit5Desc')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-gray-dark mb-3">{t('home.benefit6Title')}</h3>
              <p className="text-gray-600">
                {t('home.benefit6Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Certifications Section */}
      <AuthorityCertifications />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              {t('home.testimonialsTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.testimonialsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
              {t('home.faqTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.faqSubtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title={t('home.ctaFinalTitle')}
        description={t('home.ctaFinalDesc')}
        primaryButtonText={t('home.ctaFinalButton')}
        secondaryButtonText={t('home.ctaFinalButtonSecondary')}
        secondaryButtonLink="/servicos"
      />
    </div>
  );
}

