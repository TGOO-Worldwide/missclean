import { BookOpen, Flower2, Briefcase, Calendar, Users, Clock, Check, ArrowRight, MapPin, Euro } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { WorkshopRitualDestaqueBanner } from '../components/WorkshopRitualDestaqueBanner';
import { Link } from 'react-router-dom';

export function Workshops() {
  const workshops = [
    {
      icon: BookOpen,
      title: 'Workshop de Limpeza Ecológica e Terapêutica',
      duration: '4 horas',
      participants: 'Até 12 pessoas',
      price: '€45 por pessoa',
      description: 'Aprenda a criar um lar mais saudável e sustentável com técnicas de limpeza ecológica e terapêutica.',
      topics: [
        'Receitas naturais e seguras para o lar',
        'Produtos ecológicos e suas aplicações',
        'Limpeza como prática de autocuidado',
        'Equilíbrio emocional através da limpeza',
        'Demonstrações práticas com óleos essenciais',
        'Kit de receitas para levar para casa'
      ],
      target: 'Famílias, mães, pessoas interessadas em sustentabilidade',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070'
    },
    {
      icon: Flower2,
      title: 'Workshop de Aromaterapia Doméstica',
      duration: '3 horas',
      participants: 'Até 10 pessoas',
      price: '€55 por pessoa',
      description: 'Descubra o poder dos óleos essenciais para transformar cada ambiente da sua casa.',
      topics: [
        'Introdução à aromaterapia',
        'Uso de difusores, sprays e mikados',
        'Óleos essenciais para cada divisão da casa',
        'Combinações para relaxar e energizar',
        'Aplicações terapêuticas básicas',
        'Criação de blend personalizado'
      ],
      target: 'Iniciantes em aromaterapia, entusiastas de bem-estar',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=2070'
    },
    {
      icon: Briefcase,
      title: 'Workshop Profissionalizante',
      duration: '8 horas (2 dias)',
      participants: 'Até 8 pessoas',
      price: '€250 por pessoa',
      description: 'Formação completa para profissionais que desejam integrar sustentabilidade e bem-estar no seu trabalho.',
      topics: [
        'Métodos de limpeza ecológica profissional',
        'Técnicas de aromaterapia ambiental',
        'Harmonização de espaços',
        'Protocolos de segurança e higiene',
        'Consultoria e criação de propostas',
        'Certificado de participação'
      ],
      target: 'Profissionais de limpeza, terapeutas, cuidadores, empreendedores',
      premium: true,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070'
    }
  ];

  const upcomingDates = [
    {
      workshop: 'Ritual de Beleza Natural',
      date: '23 de Maio · 18:00',
      location: 'Porto · Av. de França',
      spots: 12,
    },
    { workshop: 'Limpeza Ecológica', date: '15 de Novembro', location: 'Lisboa', spots: 5 },
    { workshop: 'Aromaterapia Doméstica', date: '22 de Novembro', location: 'Porto', spots: 3 },
    { workshop: 'Profissionalizante', date: '29-30 de Novembro', location: 'Lisboa', spots: 2 },
    { workshop: 'Limpeza Ecológica', date: '6 de Dezembro', location: 'Online', spots: 8 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-teal-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <BookOpen className="w-16 h-16 text-gold mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Formações & Workshops
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Aprenda métodos naturais e conscientes para transformar a limpeza num ato de cura e equilíbrio
            </p>
          </div>
        </div>
      </section>

      <WorkshopRitualDestaqueBanner />

      {/* Workshops List */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-dark mb-4">
              Outros Workshops Disponíveis
            </h2>
            <p className="text-xl text-gray-600">
              Formações completas para todos os níveis
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-16">
            {workshops.map((workshop, index) => {
              const Icon = workshop.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="md:col-span-2 relative">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover min-h-[400px]"
                      />
                      {workshop.premium && (
                        <div className="absolute top-4 right-4 bg-gold text-white px-6 py-2 rounded-full font-bold shadow-lg">
                          Premium
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-8 md:p-12">
                      <div className="space-y-6">
                        <div>
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                            workshop.premium ? 'bg-gold/20 text-gold' : 'bg-teal/20 text-teal'
                          }`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <h2 className="text-3xl font-bold text-gray-dark mb-4">
                            {workshop.title}
                          </h2>
                          <p className="text-gray-600 leading-relaxed text-lg mb-6">
                            {workshop.description}
                          </p>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
                          <div className="text-center">
                            <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-sm text-gray-500 mb-1">Duração</p>
                            <p className="font-semibold text-gray-dark">{workshop.duration}</p>
                          </div>
                          <div className="text-center">
                            <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-sm text-gray-500 mb-1">Participantes</p>
                            <p className="font-semibold text-gray-dark">{workshop.participants}</p>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gold mb-1">{workshop.price}</div>
                            <p className="text-sm text-gray-500">Investimento</p>
                          </div>
                        </div>

                        {/* Topics */}
                        <div>
                          <h3 className="font-semibold text-gray-dark mb-3">
                            O que vai aprender:
                          </h3>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {workshop.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  workshop.premium ? 'text-gold' : 'text-teal'
                                }`} />
                                <span className="text-sm text-gray-600">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Target */}
                        <div className="bg-gray-light/50 p-4 rounded-xl">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-dark">Destinado a:</span> {workshop.target}
                          </p>
                        </div>

                        {/* CTA */}
                        <button
                          className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 ${
                            workshop.premium
                              ? 'bg-gold hover:bg-gold/90 text-white'
                              : 'bg-teal hover:bg-teal/90 text-white'
                          }`}
                        >
                          Inscrever-me Agora
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-dark mb-4">
                Próximas Datas
              </h2>
              <p className="text-xl text-gray-600">
                Garanta já o seu lugar nos nossos workshops
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {upcomingDates.map((date, index) => (
                <div
                  key={index}
                  className={`p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
                    index !== upcomingDates.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-dark text-lg mb-1">
                      {date.workshop}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {date.date}
                      </span>
                      <span>•</span>
                      <span>{date.location}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      date.spots <= 3
                        ? 'bg-gold/20 text-gold'
                        : 'bg-teal/20 text-teal'
                    }`}>
                      {date.spots} {date.spots === 1 ? 'vaga' : 'vagas'}
                    </div>
                    <button className="bg-gold hover:bg-gold/90 text-white px-6 py-2 rounded-full font-medium transition-all">
                      Inscrever
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Não encontrou a data ideal? Entre em contacto para workshops privados ou em grupo.
              </p>
              <button className="text-gold font-semibold hover:underline inline-flex items-center gap-2">
                Solicitar Workshop Privado
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-dark mb-4">
                Por Que Fazer as Nossas Formações?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-dark mb-2">Conhecimento Prático</h3>
                  <p className="text-gray-600">
                    Aprenda técnicas que pode aplicar imediatamente no seu dia a dia ou trabalho.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-dark mb-2">Formadores Certificados</h3>
                  <p className="text-gray-600">
                    Equipa com formação profissional em aromaterapia e limpeza ecológica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-dark mb-2">Material Incluído</h3>
                  <p className="text-gray-600">
                    Apostilas, receitas e, em alguns workshops, kits de produtos para levar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-dark mb-2">Certificado</h3>
                  <p className="text-gray-600">
                    Certificado de participação nos workshops profissionalizantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para Aprender?"
        description="Inscreva-se nos nossos workshops e transforme a forma como cuida dos seus espaços."
        primaryButtonText="Ver Calendário Completo"
        variant="green"
      />
    </div>
  );
}

