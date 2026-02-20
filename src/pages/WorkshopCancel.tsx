import { XCircle, ArrowLeft, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WorkshopCancel() {
  return (
    <div className="min-h-screen bg-gray-light">
      {/* Cancel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Cancel Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-6">
                <XCircle className="w-16 h-16 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-dark mb-4">
                Inscrição Não Finalizada
              </h1>
              <p className="text-xl text-gray-600">
                Não te preocupes, nada foi cobrado no teu cartão.
              </p>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    O processo de inscrição foi cancelado e nenhum pagamento foi efetuado. 
                    Se cancelaste por acidente ou mudaste de ideias, ainda podes inscrever-te!
                  </p>
                  <p className="text-gray-500">
                    As vagas são limitadas, por isso não percas muito tempo! 😊
                  </p>
                </div>

                {/* Reasons Section */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-dark mb-4 text-center">
                    Cancelaste por algum motivo específico?
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Se tiveste problemas com o pagamento, experimenta outro método</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Se tens dúvidas sobre o workshop, contacta-nos - estamos aqui para ajudar!</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Se a data não é ideal, temos outros workshops durante o ano</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action */}
            <div className="bg-gradient-to-br from-gold/20 to-teal/20 rounded-2xl p-8 mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">
                Mudaste de Ideias?
              </h3>
              <p className="text-gray-600 mb-6">
                Ainda há vagas disponíveis! Volta ao workshop e completa a tua inscrição.
              </p>
              <Link
                to="/workshop-lar-equilibrado"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Tentar Novamente
              </Link>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-dark mb-4 text-center">
                Precisas de Ajuda ou Tens Dúvidas?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Estamos à disposição para esclarecer qualquer questão sobre o workshop!
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="https://wa.me/351913034241?text=Olá! Tenho uma dúvida sobre o Workshop Lar Equilibrado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-dark">WhatsApp</span>
                  <span className="text-xs text-gray-500">Resposta rápida</span>
                </a>

                <a
                  href="tel:+351913034241"
                  className="flex flex-col items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-dark">Telefone</span>
                  <span className="text-xs text-gray-500">+351 913 034 241</span>
                </a>

                <a
                  href="mailto:info@missclean.pt?subject=Dúvida sobre Workshop Lar Equilibrado"
                  className="flex flex-col items-center gap-2 p-4 bg-teal/10 hover:bg-teal/20 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-dark">Email</span>
                  <span className="text-xs text-gray-500">info@missclean.pt</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/formacoes"
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              >
                Ver Todos os Workshops
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-dark px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Voltar à Página Inicial
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Queres receber informações sobre futuros workshops?{' '}
                <Link to="/contactos" className="text-teal font-semibold hover:underline">
                  Contacta-nos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
