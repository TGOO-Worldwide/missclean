import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { CoverageBanner } from '../components/CoverageBanner';

const WHATSAPP_NUMBER = '351913034241';
const EMAIL = 'info@missclean.pt';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre os serviços da Miss Clean.

Nome: ${formData.name || '[Nome]'}
Email: ${formData.email || '[Email]'}
Telefone: ${formData.phone || '[Telefone]'}
Serviço de Interesse: ${formData.service || '[Serviço]'}

Mensagem: ${formData.message || '[Mensagem]'}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    'Limpeza Ecológica Residencial',
    'Limpeza Ecológica Empresarial',
    'Limpeza Terapêutica',
    'Sistema Rainbow',
    'Aromaterapia Aplicada',
    'Consultoria Personalizada',
    'Formações e Workshops',
    'Outro'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-teal-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Entre em Contacto
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Estamos prontos para transformar o seu espaço. Entre em contacto e receba uma proposta personalizada.
            </p>
          </div>
        </div>
      </section>

      <CoverageBanner />

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp */}
              <button
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                className="group bg-teal hover:bg-teal/90 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-teal-light mb-4">Resposta mais rápida</p>
                <p className="font-semibold">+351 913 034 241</p>
                <p className="text-xs opacity-75 mt-1">Chamada para rede móvel nacional</p>
                <p className="text-sm opacity-90 mt-2">Clique para conversar agora</p>
              </button>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group bg-gold hover:bg-gold/90 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gold-light mb-4">Mensagens detalhadas</p>
                <p className="font-semibold">{EMAIL}</p>
                <p className="text-sm opacity-90 mt-2">Resposta em 24h</p>
              </a>

              {/* Phone */}
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="group bg-gray-dark hover:bg-gray-dark/90 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-gray-400 mb-4">Falar directamente</p>
                <p className="font-semibold">+351 913 034 241</p>
                <p className="text-xs opacity-75 mt-1">Chamada para rede móvel nacional</p>
                <p className="text-sm opacity-90 mt-2">Seg-Sex: 9h-19h</p>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-dark mb-6">
                  Envie-nos uma Mensagem
                </h2>
                
                {submitted ? (
                  <div className="bg-teal/10 border-2 border-teal text-teal p-8 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                    <p>Entraremos em contacto em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        placeholder="O seu nome"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="seuemail@exemplo.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                          placeholder="+351 900 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                        placeholder="Conte-nos sobre as suas necessidades..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </button>
                      
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="flex-1 bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Enviar via WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-dark mb-6">
                    Informações de Contacto
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-dark mb-1">Telefone / WhatsApp</h3>
                        <p className="text-gray-600">+351 913 034 241</p>
                        <p className="text-xs text-gray-500 mt-1">Chamada para rede móvel nacional</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-dark mb-1">Email</h3>
                        <p className="text-gray-600">{EMAIL}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-dark mb-1">Localização</h3>
                        <p className="text-gray-600">
                          Servimos todo o território nacional<br/>
                          Portugal
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-dark mb-1">Horário de Atendimento</h3>
                        <p className="text-gray-600">
                          Segunda a Sexta: 9h - 19h<br/>
                          Sábado: 9h - 14h<br/>
                          Domingo: Encerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-gold/10 to-teal/10 p-8 rounded-2xl">
                  <h3 className="font-semibold text-gray-dark mb-4">Siga-nos nas Redes Sociais</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/servicos_limpeza_missclean/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white hover:bg-gold rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-gray-dark" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100063543883860"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white hover:bg-gold rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-gray-dark" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sónia-jesus-363b18209/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white hover:bg-gold rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-gray-dark" />
                    </a>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-teal/10 border-2 border-teal/20 p-6 rounded-2xl">
                  <h3 className="font-semibold text-teal mb-2">⚡ Resposta Rápida</h3>
                  <p className="text-sm text-gray-600">
                    Respondemos a todas as mensagens em menos de 24 horas. 
                    Para questões urgentes, contacte-nos via WhatsApp para resposta imediata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-dark mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Antes de contactar, veja se a sua dúvida já está respondida
            </p>
            <a
              href="/#faq"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Ver FAQ Completo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

