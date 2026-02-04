import { CheckCircle, Calendar, MapPin, Mail, Phone, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WorkshopSuccess() {
  return (
    <div className="min-h-screen bg-gray-light">
      {/* Success Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
                Inscrição Confirmada! 🎉
              </h1>
              <p className="text-xl text-gray-600">
                Parabéns! A tua inscrição no Workshop Lar Equilibrado foi realizada com sucesso.
              </p>
            </div>

            {/* Confirmation Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="space-y-6">
                {/* Email Confirmation */}
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-dark mb-1">
                      Confirmação Enviada por Email
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Receberás um email de confirmação com todos os detalhes do workshop e o recibo do pagamento.
                    </p>
                  </div>
                </div>

                {/* Workshop Details */}
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-2xl font-bold text-gray-dark mb-6">
                    Detalhes do Workshop
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Data</p>
                        <p className="font-semibold text-gray-dark text-lg">21 de Fevereiro de 2026</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Local</p>
                        <p className="font-semibold text-gray-dark text-lg">Mais q'uma Papelaria</p>
                        <p className="text-gray-600">Esgueira, Aveiro</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-dark mb-4">
                    O Que Acontece a Seguir?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <p className="text-gray-600">
                        Receberás um email de confirmação com todos os detalhes e o recibo
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <p className="text-gray-600">
                        Alguns dias antes do evento, enviaremos informações adicionais e preparação recomendada
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <p className="text-gray-600">
                        No dia do workshop, traz apenas a tua vontade de aprender. Todo o material será fornecido!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-teal/10 to-gold/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-dark mb-4 text-center">
                Tens Alguma Dúvida?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Estamos aqui para ajudar! Entra em contacto connosco:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/351913034241?text=Olá! Tenho uma pergunta sobre o Workshop Lar Equilibrado que acabei de me inscrever."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:info@missclean.pt?subject=Workshop Lar Equilibrado"
                  className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-gray-dark hover:bg-gray-dark/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              >
                <Home className="w-5 h-5" />
                Voltar à Página Inicial
              </Link>
              <Link
                to="/formacoes"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              >
                Ver Todos os Workshops
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Add to Calendar */}
            <div className="text-center mt-8">
              <button
                onClick={() => {
                  // Simple .ics file generation
                  const event = {
                    title: 'Workshop Lar Equilibrado - Miss Clean',
                    description: 'Workshop de Limpeza Ecológica, Feng Shui e Aromaterapia',
                    location: 'Mais q\'uma Papelaria, Esgueira, Aveiro',
                    startDate: '20260221',
                    endDate: '20260221'
                  };
                  
                  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startDate}T100000Z
DTEND:${event.endDate}T140000Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
                  
                  const blob = new Blob([icsContent], { type: 'text/calendar' });
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = 'workshop-lar-equilibrado.ics';
                  link.click();
                }}
                className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal/80 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Adicionar ao Calendário
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
