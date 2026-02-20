export type Language = 'pt' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    workshops: string;
    business: string;
    residential: string;
    unique: string;
    contact: string;
    contactButton: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    contact: string;
    followUs: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
    mobileCallNote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    whatsappDesc: string;
    whatsappSubtext: string;
    email: string;
    emailDesc: string;
    emailSubtext: string;
    phone: string;
    phoneDesc: string;
    phoneSubtext: string;
    mobileCallNote: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendWhatsAppButton: string;
    messageSent: string;
    messageSentDesc: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    memberIPA: string;
    memberIPADesc: string;
    professionalAroma: string;
    professionalAromaDesc: string;
    training200h: string;
    training200hDesc: string;
    footSoak: string;
    footSoakDesc: string;
    ccpIEFP: string;
    ccpIEFPDesc: string;
    ctaButton: string;
  };
  common: {
    portugal: string;
    learnMore: string;
    viewAll: string;
    viewAllServices: string;
    readMore: string;
  };
  coverage: {
    servicesLine: string;
    formationsLine: string;
  };
  home: {
    uniqueBadge: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    trust100: string;
    trust100Label: string;
    trust5Star: string;
    trust5StarLabel: string;
    trust200Plus: string;
    trust200PlusLabel: string;
    trustUnique: string;
    trustUniqueLabel: string;
    uniqueInPortugal: string;
    uniqueTitle: string;
    uniqueDescription: string;
    uniqueLink: string;
    servicesTitle: string;
    servicesSubtitle: string;
    service1Title: string;
    service1Desc: string;
    service2Title: string;
    service2Desc: string;
    service3Title: string;
    service3Desc: string;
    service4Title: string;
    service4Desc: string;
    benefitsTitle: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    benefit4Title: string;
    benefit4Desc: string;
    benefit5Title: string;
    benefit5Desc: string;
    benefit6Title: string;
    benefit6Desc: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    faqTitle: string;
    faqSubtitle: string;
    ctaFinalTitle: string;
    ctaFinalDesc: string;
    ctaFinalButton: string;
    ctaFinalButtonSecondary: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      workshops: 'Formações',
      business: 'Empresas',
      residential: 'Residências',
      unique: 'Único em Portugal',
      contact: 'Contactos',
      contactButton: 'Contactar',
    },
    hero: {
      badge: '✨ Único em Portugal',
      title: 'Limpeza Ecológica e',
      titleHighlight: 'Terapêutica',
      subtitle: 'Transformamos ambientes físicos e emocionais através da sustentabilidade, aromaterapia e bem-estar. Mais do que limpeza — é equilíbrio e harmonia.',
      ctaPrimary: 'Receber Proposta Personalizada',
      ctaSecondary: 'Conhecer a Miss Clean',
    },
    footer: {
      description: 'Transformamos ambientes físicos e emocionais através da limpeza ecológica, aromaterapia e bem-estar. O único serviço em Portugal que alia sustentabilidade e terapia.',
      quickLinks: 'Links Rápidos',
      services: 'Serviços',
      contact: 'Contacto',
      followUs: 'Siga-nos',
      allRightsReserved: 'Todos os direitos reservados.',
      privacyPolicy: 'Política de Privacidade',
      termsOfService: 'Termos de Serviço',
      mobileCallNote: 'Chamada para rede móvel nacional',
    },
    contact: {
      title: 'Entre em Contacto',
      subtitle: 'Estamos prontos para transformar o seu espaço. Entre em contacto e receba uma proposta personalizada.',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Resposta mais rápida',
      whatsappSubtext: 'Clique para conversar agora',
      email: 'Email',
      emailDesc: 'Mensagens detalhadas',
      emailSubtext: 'Resposta em 24h',
      phone: 'Telefone',
      phoneDesc: 'Falar directamente',
      phoneSubtext: 'Seg-Sex: 9h-19h',
      mobileCallNote: 'Chamada para rede móvel nacional',
      formTitle: 'Envie-nos uma Mensagem',
      nameLabel: 'Nome Completo',
      namePlaceholder: 'O seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'seuemail@exemplo.com',
      phoneLabel: 'Telefone',
      phonePlaceholder: '+351 900 000 000',
      serviceLabel: 'Serviço de Interesse',
      servicePlaceholder: 'Selecione um serviço',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-nos sobre as suas necessidades...',
      sendButton: 'Enviar Mensagem',
      sendWhatsAppButton: 'Enviar via WhatsApp',
      messageSent: 'Mensagem Enviada!',
      messageSentDesc: 'Entraremos em contacto em breve.',
    },
    certifications: {
      title: 'Autoridade & Certificações',
      subtitle: 'Formação reconhecida e prática profissional para cuidar de si com segurança.',
      memberIPA: 'Membro IPA — Aromaterapeuta',
      memberIPADesc: 'Afiliação e reconhecimento profissional no Instituto Português de Aromaterapia.',
      professionalAroma: 'Aromaterapeuta Profissional',
      professionalAromaDesc: 'Certificação profissional emitida pelo IPA — formação estruturada e validada.',
      training200h: 'Formação Profissional (200h)',
      training200hDesc: 'Base sólida e prática para protocolos seguros e personalizados.',
      footSoak: 'Escalda-Pés Terapêutico',
      footSoakDesc: 'Aplicação prática com óleos essenciais para relaxamento e bem-estar.',
      ccpIEFP: 'CCP — Competências Pedagógicas (IEFP)',
      ccpIEFPDesc: 'Capacidade certificada para orientar e explicar com clareza.',
      ctaButton: 'Quero marcar a minha sessão',
    },
    common: {
      portugal: 'Portugal',
      learnMore: 'Saber mais',
      viewAll: 'Ver Todos',
      viewAllServices: 'Ver Todos os Serviços',
      readMore: 'Ler mais',
    },
    coverage: {
      servicesLine: 'Serviços disponíveis em toda a região de Aveiro.',
      formationsLine: 'Formações e workshops em todo o país (Portugal).',
    },
    home: {
      uniqueBadge: '✨ Único em Portugal',
      heroTitle: 'Limpeza Ecológica e',
      heroTitleHighlight: 'Terapêutica',
      heroSubtitle: 'Transformamos ambientes físicos e emocionais através da sustentabilidade, aromaterapia e bem-estar. Mais do que limpeza — é equilíbrio e harmonia.',
      heroCtaPrimary: 'Receber Proposta Personalizada',
      heroCtaSecondary: 'Conhecer a Miss Clean',
      trust100: '100%',
      trust100Label: 'Ecológico',
      trust5Star: '5★',
      trust5StarLabel: 'Avaliação',
      trust200Plus: '+200',
      trust200PlusLabel: 'Clientes',
      trustUnique: 'Único',
      trustUniqueLabel: 'em Portugal',
      uniqueInPortugal: 'O Único Serviço em Portugal',
      uniqueTitle: 'O Único Serviço em Portugal',
      uniqueDescription: 'Somos pioneiros na integração de limpeza ecológica com aromaterapia e harmonização terapêutica. Não fazemos apenas limpeza — transformamos espaços em ambientes de bem-estar e equilíbrio.',
      uniqueLink: 'Descubra o que nos torna únicos',
      servicesTitle: 'Nossos Serviços',
      servicesSubtitle: 'Soluções completas que aliam sustentabilidade, saúde e bem-estar',
      service1Title: 'Limpeza Ecológica',
      service1Desc: 'Produtos biodegradáveis e naturais, seguros para pessoas, animais e meio ambiente.',
      service2Title: 'Limpeza Terapêutica',
      service2Desc: 'Integração de aromaterapia e técnicas de harmonização energética do espaço.',
      service3Title: 'Aromaterapia Aplicada',
      service3Desc: 'Sinergias personalizadas com óleos essenciais para equilíbrio emocional.',
      service4Title: 'Sistema Rainbow',
      service4Desc: 'Limpeza profunda com aspiração aquática, ideal para alergias e problemas respiratórios.',
      benefitsTitle: 'Por Que Escolher a Miss Clean?',
      benefit1Title: '100% Seguro',
      benefit1Desc: 'Produtos naturais e biodegradáveis, seguros para toda a família e animais de estimação.',
      benefit2Title: 'Terapêutico',
      benefit2Desc: 'Aromaterapia e harmonização energética para o bem-estar físico e emocional.',
      benefit3Title: 'Resultados Comprovados',
      benefit3Desc: 'Mais de 200 clientes satisfeitos com ambientes transformados e energia renovada.',
      benefit4Title: 'Equipa Qualificada',
      benefit4Desc: 'Profissionais formados em limpeza ecológica, aromaterapia e harmonização de espaços.',
      benefit5Title: 'Serviço Premium',
      benefit5Desc: 'Atendimento personalizado e consultoria para criar o ambiente perfeito.',
      benefit6Title: 'Sustentável',
      benefit6Desc: 'Compromisso com o meio ambiente e práticas de responsabilidade ecológica.',
      testimonialsTitle: 'O Que Dizem os Nossos Clientes',
      testimonialsSubtitle: 'Histórias reais de transformação e bem-estar',
      faqTitle: 'Perguntas Frequentes',
      faqSubtitle: 'Tudo o que precisa saber sobre os nossos serviços',
      ctaFinalTitle: 'Pronto para Transformar o Seu Espaço?',
      ctaFinalDesc: 'Entre em contacto connosco e receba uma proposta personalizada para o seu lar ou empresa.',
      ctaFinalButton: 'Falar no WhatsApp',
      ctaFinalButtonSecondary: 'Ver Serviços',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      workshops: 'Workshops',
      business: 'Business',
      residential: 'Residential',
      unique: 'Unique in Portugal',
      contact: 'Contact',
      contactButton: 'Contact',
    },
    hero: {
      badge: '✨ Unique in Portugal',
      title: 'Ecological and',
      titleHighlight: 'Therapeutic Cleaning',
      subtitle: 'We transform physical and emotional environments through sustainability, aromatherapy, and well-being. More than cleaning — it\'s balance and harmony.',
      ctaPrimary: 'Get Personalized Quote',
      ctaSecondary: 'Learn About Miss Clean',
    },
    footer: {
      description: 'We transform physical and emotional environments through ecological cleaning, aromatherapy, and well-being. The only service in Portugal that combines sustainability and therapy.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      mobileCallNote: 'Call to national mobile network',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'re ready to transform your space. Contact us and receive a personalized proposal.',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Fastest response',
      whatsappSubtext: 'Click to chat now',
      email: 'Email',
      emailDesc: 'Detailed messages',
      emailSubtext: 'Response within 24h',
      phone: 'Phone',
      phoneDesc: 'Talk directly',
      phoneSubtext: 'Mon-Fri: 9am-7pm',
      mobileCallNote: 'Call to national mobile network',
      formTitle: 'Send Us a Message',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'youremail@example.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '+351 900 000 000',
      serviceLabel: 'Service of Interest',
      servicePlaceholder: 'Select a service',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your needs...',
      sendButton: 'Send Message',
      sendWhatsAppButton: 'Send via WhatsApp',
      messageSent: 'Message Sent!',
      messageSentDesc: 'We\'ll be in touch soon.',
    },
    certifications: {
      title: 'Authority & Certifications',
      subtitle: 'Recognized training and professional practice to care for you safely.',
      memberIPA: 'IPA Member — Aromatherapist',
      memberIPADesc: 'Professional affiliation and recognition at the Portuguese Institute of Aromatherapy.',
      professionalAroma: 'Professional Aromatherapist',
      professionalAromaDesc: 'Professional certification issued by IPA — structured and validated training.',
      training200h: 'Professional Training (200h)',
      training200hDesc: 'Solid and practical foundation for safe and personalized protocols.',
      footSoak: 'Therapeutic Foot Soak',
      footSoakDesc: 'Practical application with essential oils for relaxation and well-being.',
      ccpIEFP: 'CCP — Pedagogical Skills (IEFP)',
      ccpIEFPDesc: 'Certified ability to guide and explain with clarity.',
      ctaButton: 'I want to book my session',
    },
    common: {
      portugal: 'Portugal',
      learnMore: 'Learn more',
      viewAll: 'View All',
      viewAllServices: 'View All Services',
      readMore: 'Read more',
    },
    coverage: {
      servicesLine: 'Services available across the Aveiro region.',
      formationsLine: 'Training and workshops across the country (Portugal).',
    },
    home: {
      uniqueBadge: '✨ Unique in Portugal',
      heroTitle: 'Ecological and',
      heroTitleHighlight: 'Therapeutic Cleaning',
      heroSubtitle: 'We transform physical and emotional environments through sustainability, aromatherapy, and well-being. More than cleaning — it\'s balance and harmony.',
      heroCtaPrimary: 'Get Personalized Quote',
      heroCtaSecondary: 'Learn About Miss Clean',
      trust100: '100%',
      trust100Label: 'Ecological',
      trust5Star: '5★',
      trust5StarLabel: 'Rating',
      trust200Plus: '+200',
      trust200PlusLabel: 'Clients',
      trustUnique: 'Unique',
      trustUniqueLabel: 'in Portugal',
      uniqueInPortugal: 'The Only Service in Portugal',
      uniqueTitle: 'The Only Service in Portugal',
      uniqueDescription: 'We are pioneers in integrating ecological cleaning with aromatherapy and therapeutic harmonization. We don\'t just clean — we transform spaces into environments of well-being and balance.',
      uniqueLink: 'Discover what makes us unique',
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Complete solutions that combine sustainability, health, and well-being',
      service1Title: 'Ecological Cleaning',
      service1Desc: 'Biodegradable and natural products, safe for people, animals, and the environment.',
      service2Title: 'Therapeutic Cleaning',
      service2Desc: 'Integration of aromatherapy and energy harmonization techniques for spaces.',
      service3Title: 'Applied Aromatherapy',
      service3Desc: 'Personalized synergies with essential oils for emotional balance.',
      service4Title: 'Rainbow System',
      service4Desc: 'Deep cleaning with water aspiration, ideal for allergies and respiratory problems.',
      benefitsTitle: 'Why Choose Miss Clean?',
      benefit1Title: '100% Safe',
      benefit1Desc: 'Natural and biodegradable products, safe for the whole family and pets.',
      benefit2Title: 'Therapeutic',
      benefit2Desc: 'Aromatherapy and energy harmonization for physical and emotional well-being.',
      benefit3Title: 'Proven Results',
      benefit3Desc: 'Over 200 satisfied clients with transformed environments and renewed energy.',
      benefit4Title: 'Qualified Team',
      benefit4Desc: 'Professionals trained in ecological cleaning, aromatherapy, and space harmonization.',
      benefit5Title: 'Premium Service',
      benefit5Desc: 'Personalized service and consulting to create the perfect environment.',
      benefit6Title: 'Sustainable',
      benefit6Desc: 'Commitment to the environment and ecological responsibility practices.',
      testimonialsTitle: 'What Our Clients Say',
      testimonialsSubtitle: 'Real stories of transformation and well-being',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Everything you need to know about our services',
      ctaFinalTitle: 'Ready to Transform Your Space?',
      ctaFinalDesc: 'Contact us and receive a personalized proposal for your home or business.',
      ctaFinalButton: 'Chat on WhatsApp',
      ctaFinalButtonSecondary: 'View Services',
    },
  },
};

