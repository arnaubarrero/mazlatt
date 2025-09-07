"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Language = "es" | "en" | "fr" | "uk" | "ru"

interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "es",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "mazlatt-language",
    },
  ),
)

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
    },
    hero: {
      title: "Innovación Tecnológica",
      subtitle: "para tu Negocio",
      description:
        "Desarrollamos software a medida, creamos soluciones de Inteligencia Artificial y entrenamos modelos personalizados para impulsar tu empresa hacia el futuro.",
      cta: "Comenzar Proyecto",
    },
    stats: {
      title: "¿Por qué Elegir Mazlatt?",
      description: "Ofrecemos soluciones tecnológicas de alta calidad con el mejor valor del mercado",
      competitivePrices: "Precios Competitivos",
      competitivePricesDesc: "Tarifas justas sin comprometer la calidad del producto final",
      quality: "Calidad Premium",
      qualityDesc: "Estándares de excelencia y mejores prácticas en cada línea de código",
      support7days: "Soporte 7 Días",
      support7daysDesc: "Asistencia técnica disponible toda la semana para tu tranquilidad",
      fastDelivery: "Entrega Rápida",
      fastDeliveryDesc: "Metodologías ágiles para cumplir con los plazos acordados",
    },
    about: {
      title: "Sobre Mazlatt",
      description:
        "Somos una consultora tecnológica especializada en transformar ideas innovadoras en soluciones digitales de vanguardia que impulsan el crecimiento empresarial.",
      team: {
        title: "Equipo Experto",
        description: "Profesionales altamente calificados en desarrollo y AI",
      },
      quality: {
        title: "Calidad Premium",
        description: "Estándares de excelencia en cada proyecto",
      },
      experience: {
        title: "5+ Años",
        description: "De experiencia en tecnologías emergentes",
      },
      global: {
        title: "Alcance Global",
        description: "Clientes en múltiples países y continentes",
      },
      mission: {
        title: "Nuestra Misión",
        description:
          "Democratizar el acceso a tecnologías avanzadas, ayudando a empresas de todos los tamaños a aprovechar el poder de la inteligencia artificial y el desarrollo de software personalizado para alcanzar sus objetivos estratégicos.",
      },
      automation: {
        description:
          "Además de nuestros servicios principales, nos especializamos en automatización de procesos empresariales, creando flujos de trabajo inteligentes que optimizan operaciones, reducen costos y mejoran la productividad de nuestros clientes.",
      },
    },
    portfolio: {
      title: "Nuestro Portafolio",
      description:
        "Descubre algunos de nuestros proyectos más destacados que demuestran nuestra experiencia en desarrollo de software e inteligencia artificial.",
      project1: {
        title: "Sistema de Gestión Inteligente",
        description: "Plataforma completa con IA para optimización de procesos empresariales y análisis predictivo.",
        extendedDescription:
          "Esta solución integra algoritmos de machine learning avanzados para automatizar la toma de decisiones, reducir costos operativos y mejorar la eficiencia empresarial. Incluye dashboards interactivos, reportes en tiempo real y capacidades de predicción que han transformado la operación de nuestros clientes.",
      },
      project2: {
        title: "Análisis de Visión por Computadora",
        description: "Sistema avanzado de reconocimiento de imágenes para control de calidad industrial.",
        extendedDescription:
          "Implementamos redes neuronales convolucionales de última generación para detectar defectos microscópicos en líneas de producción. El sistema procesa miles de imágenes por minuto con 99.7% de precisión, reduciendo significativamente los costos de control de calidad manual.",
      },
      project3: {
        title: "Aplicación Web Moderna",
        description: "Desarrollo full-stack con arquitectura escalable y experiencia de usuario optimizada.",
        extendedDescription:
          "Construida con tecnologías de vanguardia como Next.js, TypeScript y microservicios en la nube. La aplicación maneja millones de transacciones diarias con tiempos de respuesta inferiores a 200ms, ofreciendo una experiencia de usuario fluida y confiable.",
      },
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Clientes",
      description:
        "La confianza de nuestros clientes es nuestro mayor logro. Descubre sus experiencias trabajando con Mazlatt.",
      client1: {
        name: "María González",
        content:
          "Mazlatt transformó completamente nuestros procesos con una solución de IA que superó todas nuestras expectativas. Su profesionalismo es excepcional.",
      },
      client2: {
        name: "Carlos Rodríguez",
        content:
          "El equipo de Mazlatt entregó un software a medida que revolucionó nuestra operación. La calidad y atención al detalle son impresionantes.",
      },
      client3: {
        name: "Ana Martínez",
        content:
          "Trabajar con Mazlatt fue una experiencia extraordinaria. Su expertise en IA nos ayudó a automatizar procesos críticos con resultados increíbles.",
      },
    },
    services: {
      title: "Nuestros Servicios",
      software: {
        title: "Software a Medida",
        description:
          "Desarrollamos aplicaciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
      },
      ai: {
        title: "Inteligencia Artificial",
        description:
          "Implementamos soluciones de IA avanzadas para automatizar procesos y mejorar la toma de decisiones.",
      },
      training: {
        title: "Entrenamiento de Modelos",
        description:
          "Entrenamos y optimizamos modelos de machine learning específicos para tu industria y casos de uso.",
      },
    },
    contact: {
      title: "Contactanos",
      subtitle: "¿Listo para transformar tu negocio? Hablemos sobre tu próximo proyecto.",
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "¿En qué podemos ayudarte?",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o consulta...",
      send: "Enviar Mensaje",
      sendMessage: "Enviar Mensaje",
      getInTouch: "Ponte en Contacto",
      phone: "Teléfono",
      location: "Ubicación",
      address: "Madrid, España",
    },
    footer: {
      description: "Consultoría tecnológica especializada en desarrollo de software, IA y entrenamiento de modelos.",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "Technological Innovation",
      subtitle: "for your Business",
      description:
        "We develop custom software, create Artificial Intelligence solutions and train personalized models to drive your company into the future.",
      cta: "Start Project",
    },
    stats: {
      title: "Why Choose Mazlatt?",
      description: "We offer high-quality technological solutions with the best market value",
      competitivePrices: "Competitive Prices",
      competitivePricesDesc: "Fair rates without compromising the quality of the final product",
      quality: "Premium Quality",
      qualityDesc: "Excellence standards and best practices in every line of code",
      support7days: "7-Day Support",
      support7daysDesc: "Technical assistance available all week for your peace of mind",
      fastDelivery: "Fast Delivery",
      fastDeliveryDesc: "Agile methodologies to meet agreed deadlines",
    },
    about: {
      title: "About Mazlatt",
      description:
        "We are a technology consulting firm specialized in transforming innovative ideas into cutting-edge digital solutions that drive business growth.",
      team: {
        title: "Expert Team",
        description: "Highly qualified professionals in development and AI",
      },
      quality: {
        title: "Premium Quality",
        description: "Excellence standards in every project",
      },
      experience: {
        title: "5+ Years",
        description: "Of experience in emerging technologies",
      },
      global: {
        title: "Global Reach",
        description: "Clients across multiple countries and continents",
      },
      mission: {
        title: "Our Mission",
        description:
          "Democratize access to advanced technologies, helping businesses of all sizes harness the power of artificial intelligence and custom software development to achieve their strategic goals.",
      },
      automation: {
        description:
          "In addition to our core services, we specialize in business process automation, creating intelligent workflows that optimize operations, reduce costs and improve our clients' productivity.",
      },
    },
    portfolio: {
      title: "Our Portfolio",
      description:
        "Discover some of our most outstanding projects that demonstrate our expertise in software development and artificial intelligence.",
      project1: {
        title: "Intelligent Management System",
        description: "Complete AI-powered platform for business process optimization and predictive analytics.",
        extendedDescription:
          "This solution integrates advanced machine learning algorithms to automate decision-making, reduce operational costs and improve business efficiency. It includes interactive dashboards, real-time reports and prediction capabilities that have transformed our clients' operations.",
      },
      project2: {
        title: "Computer Vision Analysis",
        description: "Advanced image recognition system for industrial quality control.",
        extendedDescription:
          "We implemented state-of-the-art convolutional neural networks to detect microscopic defects in production lines. The system processes thousands of images per minute with 99.7% accuracy, significantly reducing manual quality control costs.",
      },
      project3: {
        title: "Modern Web Application",
        description: "Full-stack development with scalable architecture and optimized user experience.",
        extendedDescription:
          "Built with cutting-edge technologies like Next.js, TypeScript and cloud microservices. The application handles millions of daily transactions with response times under 200ms, offering a smooth and reliable user experience.",
      },
    },
    testimonials: {
      title: "What Our Clients Say",
      description: "Our clients' trust is our greatest achievement. Discover their experiences working with Mazlatt.",
      client1: {
        name: "Maria González",
        content:
          "Mazlatt completely transformed our processes with an AI solution that exceeded all our expectations. Their professionalism is exceptional.",
      },
      client2: {
        name: "Carlos Rodriguez",
        content:
          "Mazlatt's team delivered custom software that revolutionized our operation. The quality and attention to detail are impressive.",
      },
      client3: {
        name: "Ana Martinez",
        content:
          "Working with Mazlatt was an extraordinary experience. Their AI expertise helped us automate critical processes with incredible results.",
      },
    },
    services: {
      title: "Our Services",
      software: {
        title: "Custom Software",
        description: "We develop personalized applications that perfectly adapt to your business specific needs.",
      },
      ai: {
        title: "Artificial Intelligence",
        description: "We implement advanced AI solutions to automate processes and improve decision making.",
      },
      training: {
        title: "Model Training",
        description: "We train and optimize machine learning models specific to your industry and use cases.",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to transform your business? Let's talk about your next project.",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      subject: "Subject",
      subjectPlaceholder: "How can we help you?",
      message: "Message",
      messagePlaceholder: "Tell us about your project or inquiry...",
      send: "Send Message",
      sendMessage: "Send Message",
      getInTouch: "Get in Touch",
      phone: "Phone",
      location: "Location",
      address: "Madrid, Spain",
    },
    footer: {
      description: "Technology consulting specialized in software development, AI and model training.",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "Innovation Technologique",
      subtitle: "pour votre Entreprise",
      description:
        "Nous développons des logiciels sur mesure, créons des solutions d'Intelligence Artificielle et entraînons des modèles personnalisés pour propulser votre entreprise vers l'avenir.",
      cta: "Commencer le Projet",
    },
    stats: {
      title: "Pourquoi Choisir Mazlatt?",
      description: "Nous offrons des solutions technologiques de haute qualité avec la meilleure valeur du marché",
      competitivePrices: "Prix Concurrentiels",
      competitivePricesDesc: "Tarifs justes sans compromettre la qualité du produit final",
      quality: "Qualité Premium",
      qualityDesc: "Standards d'excellence et meilleures pratiques dans chaque ligne de code",
      support7days: "Support 7 Jours",
      support7daysDesc: "Assistance technique disponible toute la semaine pour votre tranquillité",
      fastDelivery: "Livraison Rapide",
      fastDeliveryDesc: "Méthodologies agiles pour respecter les délais convenus",
    },
    about: {
      title: "À propos de Mazlatt",
      description:
        "Nous sommes une société de conseil technologique spécialisée dans la transformation d'idées innovantes en solutions numériques de pointe qui stimulent la croissance des entreprises.",
      team: {
        title: "Équipe Experte",
        description: "Professionnels hautement qualifiés en développement et IA",
      },
      quality: {
        title: "Qualité Premium",
        description: "Standards d'excellence dans chaque projet",
      },
      experience: {
        title: "5+ Années",
        description: "D'expérience dans les technologies émergentes",
      },
      global: {
        title: "Portée Mondiale",
        description: "Clients dans plusieurs pays et continents",
      },
      mission: {
        title: "Notre Mission",
        description:
          "Démocratiser l'accès aux technologies avancées, en aidant les entreprises de toutes tailles à exploiter la puissance de l'intelligence artificielle et du développement logiciel personnalisé pour atteindre leurs objectifs stratégiques.",
      },
      automation: {
        description:
          "En plus de nos services principaux, nous nous spécialisons dans l'automatisation des processus métier, créant des flux de travail intelligents qui optimisent les opérations, réduisent les coûts et améliorent la productivité de nos clients.",
      },
    },
    portfolio: {
      title: "Notre Portfolio",
      description:
        "Découvrez quelques-uns de nos projets les plus remarquables qui démontrent notre expertise en développement logiciel et intelligence artificielle.",
      project1: {
        title: "Système de Gestion Intelligent",
        description:
          "Plateforme complète alimentée par l'IA pour l'optimisation des processus métier et l'analyse prédictive.",
        extendedDescription:
          "Cette solution intègre des algorithmes de machine learning avancés pour automatiser la prise de décision, réduire les coûts opérationnels et améliorer l'efficacité métier. Elle comprend des tableaux de bord interactifs, des rapports en temps réel et des capacités de prédiction qui ont transformé les opérations de nos clients.",
      },
      project2: {
        title: "Analyse de Vision par Ordinateur",
        description: "Système avancé de reconnaissance d'images pour le contrôle qualité industriel.",
        extendedDescription:
          "Nous avons mis en œuvre des réseaux neuronaux convolutifs de dernière génération pour détecter les défauts microscopiques sur les lignes de production. Le système traite des milliers d'images par minute avec une précision de 99,7%, réduisant significativement les coûts de contrôle qualité manuel.",
      },
      project3: {
        title: "Application Web Moderne",
        description: "Développement full-stack avec architecture évolutive et expérience utilisateur optimisée.",
        extendedDescription:
          "Construite avec des technologies de pointe comme Next.js, TypeScript et microservices cloud. L'application gère des millions de transactions quotidiennes avec des temps de réponse inférieurs à 200ms, offrant une expérience utilisateur fluide et fiable.",
      },
    },
    testimonials: {
      title: "Ce que Disent Nos Clients",
      description:
        "La confiance de nos clients est notre plus grande réussite. Découvrez leurs expériences en travaillant avec Mazlatt.",
      client1: {
        name: "Maria González",
        content:
          "Mazlatt a complètement transformé nos processus avec une solution d'IA qui a dépassé toutes nos attentes. Leur professionnalisme est exceptionnel.",
      },
      client2: {
        name: "Carlos Rodriguez",
        content:
          "L'équipe de Mazlatt a livré un logiciel sur mesure qui a révolutionné notre opération. La qualité et l'attention aux détails sont impressionnantes.",
      },
      client3: {
        name: "Ana Martinez",
        content:
          "Travailler avec Mazlatt a été une expérience extraordinaire. Leur expertise en IA nous a aidés à automatiser des processus critiques avec des résultats incroyables.",
      },
    },
    services: {
      title: "Nos Services",
      software: {
        title: "Logiciel Sur Mesure",
        description:
          "Nous développons des applications personnalisées qui s'adaptent parfaitement aux besoins spécifiques de votre entreprise.",
      },
      ai: {
        title: "Intelligence Artificielle",
        description:
          "Nous implémentons des solutions d'IA avancées pour automatiser les processus et améliorer la prise de décision.",
      },
      training: {
        title: "Entraînement de Modèles",
        description:
          "Nous entraînons et optimisons des modèles d'apprentissage automatique spécifiques à votre industrie et cas d'usage.",
      },
    },
    contact: {
      title: "Nous Contacter",
      subtitle: "Prêt à transformer votre entreprise? Parlons de votre prochain projet.",
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "Email",
      emailPlaceholder: "votre@email.com",
      subject: "Sujet",
      subjectPlaceholder: "Comment pouvons-nous vous aider?",
      message: "Message",
      messagePlaceholder: "Dites-nous à propos de votre projet ou de votre interrogation...",
      send: "Envoyer le Message",
      sendMessage: "Envoyer le Message",
      getInTouch: "Contactez-nous",
      phone: "Téléphone",
      location: "Localisation",
      address: "Madrid, Espagne",
    },
    footer: {
      description:
        "Conseil technologique spécialisé dans le développement logiciel, l'IA et l'entraînement de modèles.",
      rights: "Tous droits réservés.",
    },
  },
  uk: {
    nav: {
      home: "Головна",
      about: "Про нас",
      services: "Послуги",
      portfolio: "Портфоліо",
      contact: "Контакти",
    },
    hero: {
      title: "Технологічні Інновації",
      subtitle: "для вашого Бізнесу",
      description:
        "Ми розробляємо програмне забезпечення на замовлення, створюємо рішення штучного інтелекту та навчаємо персоналізовані моделі для просування вашої компанії в майбутнє.",
      cta: "Почати Проект",
    },
    stats: {
      title: "Почому Вибрати Mazlatt?",
      description: "Ми пропонуємо високоякісні технологічні рішення з найкращим ринковим значенням",
      competitivePrices: "Компетитивні Ціни",
      competitivePricesDesc: "Відповідні тарифи без компромісів якості кінцевого продукту",
      quality: "Преміум Якість",
      qualityDesc: "Стандарти досконалості та найкращі практики в кожному рядку коду",
      support7days: "Підтримка 7 Днів",
      support7daysDesc: "Технічна підтримка доступна всі тижні для вашого спокою",
      fastDelivery: "Швидка Доставка",
      fastDeliveryDesc: "Агільні методології для виконання згодених термінів",
    },
    about: {
      title: "Про Mazlatt",
      description:
        "Ми - технологічна консалтингова компанія, що спеціалізується на перетворенні інноваційних ідей у передові цифрові рішення, які стимулюють зростання бізнесу.",
      team: {
        title: "Експертна Команда",
        description: "Висококваліфіковані професіонали в розробці та ШІ",
      },
      quality: {
        title: "Преміум Якість",
        description: "Стандарти досконалості в кожному проекті",
      },
      experience: {
        title: "5+ Років",
        description: "Досвіду в новітніх технологіях",
      },
      global: {
        title: "Глобальний Охват",
        description: "Клієнти в багатьох країнах і континентах",
      },
      mission: {
        title: "Наша Місія",
        description:
          "Демократизувати доступ до передових технологій, допомагаючи підприємствам будь-якого розміру використовувати силу штучного інтелекту та розробки програмного забезпечення на замовлення для досягнення стратегічних цілей.",
      },
      automation: {
        description:
          "Окрім наших основних послуг, ми спеціалізуємося на автоматизації бізнес-процесів, створюючи інтелектуальні робочі потоки, які оптимізують операції, знижують витрати та покращують продуктивність наших клієнтів.",
      },
    },
    portfolio: {
      title: "Наше Портфоліо",
      description:
        "Відкрийте для себе деякі з наших найвидатніших проектів, які демонструють наш досвід у розробці програмного забезпечення та штучному інтелекті.",
      project1: {
        title: "Інтелектуальна Система Управління",
        description: "Повна платформа на базі ШІ для оптимізації бізнес-процесів та прогнозної аналітики.",
        extendedDescription:
          "Це рішення інтегрує передові алгоритми машинного навчання для автоматизації прийняття рішень, зниження операційних витрат та покращення ефективності бізнесу. Вона включає інтерактивні дашборди, звіти в реальному часі та можливості прогнозування, які перетворили операції наших клієнтів.",
      },
      project2: {
        title: "Аналіз Комп'ютерного Зору",
        description: "Передова система розпізнавання зображень для промислового контролю якості.",
        extendedDescription:
          "Ми реалізували передові сверточні нейронні мережі для виявлення мікро-дефектів на лініях виробництва. Система обробляє тисячі зображень за хвилину з точністю 99,7%, значно знижуючи витрати на ручний контроль якості.",
      },
      project3: {
        title: "Сучасний Веб-Додаток",
        description: "Full-stack розробка з масштабованою архітектурою та оптимізованим користувацьким досвідом.",
        extendedDescription:
          "Створено з використанням передових технологій, таких як Next.js, TypeScript та облічні мікросервіси. Додаток обробляє мільйони дневних транзакцій з часом відповіді нижче 200мс, надаючи плавний та надійний користувацький досвід.",
      },
    },
    testimonials: {
      title: "Що Кажуть Наші Клієнти",
      description: "Довіра наших клієнтів - наше найбільше досягнення. Дізнайтеся про їхній досвід роботи з Mazlatt.",
      client1: {
        name: "Марія Гонсалес",
        content:
          "Mazlatt повністю трансформував наші процеси за допомогою рішення ШІ, яке перевершило всі наші очікування. Їхній професіоналізм винятковий.",
      },
      client2: {
        name: "Карлос Родрігес",
        content:
          "Команда Mazlatt створила програмне забезпечення на замовлення, яке революціонізувало нашу діяльність. Якість та увага до деталей вражають.",
      },
      client3: {
        name: "Ана Мартінес",
        content:
          "Робота з Mazlatt була надзвичайним досвідом. Їхня експертиза в ШІ допомогла нам автоматизувати критичні процеси з неймовірними результатами.",
      },
    },
    services: {
      title: "Наші Послуги",
      software: {
        title: "ПЗ на Замовлення",
        description:
          "Ми розробляємо персоналізовані додатки, які ідеально адаптуються до специфічних потреб вашого бізнесу.",
      },
      ai: {
        title: "Штучний Інтелект",
        description: "Ми впроваджуємо передові рішення ШІ для автоматизації процесів та покращення прийняття рішень.",
      },
      training: {
        title: "Навчання Моделей",
        description:
          "Ми навчаємо та оптимізуємо моделі машинного навчання, специфічні для вашої галузі та випадків використання.",
      },
    },
    contact: {
      title: "Зв'яжіться з нами",
      subtitle: "Готові перетворити ваш бізнес? Давайте поговоримо про ваш наступний проект.",
      name: "Ім'я",
      namePlaceholder: "Ваше повне ім'я",
      email: "Email",
      emailPlaceholder: "your@email.com",
      subject: "Тема",
      subjectPlaceholder: "Як ми можемо вам допомогти?",
      message: "Повідомлення",
      messagePlaceholder: "Розкажіть нам про ваш проект або запит...",
      send: "Надіслати Повідомлення",
      sendMessage: "Надіслати Повідомлення",
      getInTouch: "Зв'яжіться з нами",
      phone: "Телефон",
      location: "Місцезнаходження",
      address: "Мадрид, Іспанія",
    },
    footer: {
      description:
        "Технологічне консультування, що спеціалізується на розробці програмного забезпечення, ШІ та навчанні моделей.",
      rights: "Всі права захищені.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      portfolio: "Портфолио",
      contact: "Контакты",
    },
    hero: {
      title: "Технологические Инновации",
      subtitle: "для вашего Бизнеса",
      description:
        "Мы разрабатываем программное обеспечение на заказ, создаем решения искусственного интеллекта и обучаем персонализированные модели для продвижения вашей компании в будущее.",
      cta: "Начать Проект",
    },
    stats: {
      title: "Почему Выбирать Mazlatt?",
      description: "Мы предлагаем высококачественные технологические решения с лучшим рыночным значением",
      competitivePrices: "Компетитивные Цены",
      competitivePricesDesc: "Приемлемые тарифы без компромиссов по качеству конечного продукта",
      quality: "Премиум Качество",
      qualityDesc: "Стандарты совершенства и лучшие практики в каждой строке кода",
      support7days: "Поддержка 7 Дней",
      support7daysDesc: "Техническая поддержка доступна каждый день для вашей спокойствия",
      fastDelivery: "Быстрая Доставка",
      fastDeliveryDesc: "Агильные методологии для соблюдения согласованных сроков",
    },
    about: {
      title: "О Mazlatt",
      description:
        "Мы - технологическая консалтинговая компания, специализирующаяся на превращении инновационных идей в передовые цифровые решения, которые стимулируют рост бизнеса.",
      team: {
        title: "Экспертная Команда",
        description: "Высококвалифицированные профессионалы в разработке и ИИ",
      },
      quality: {
        title: "Премиум Качество",
        description: "Стандарты совершенства в каждом проекте",
      },
      experience: {
        title: "5+ Лет",
        description: "Опыта в новейших технологиях",
      },
      global: {
        title: "Глобальный Охват",
        description: "Клиенты во многих странах и континентах",
      },
      mission: {
        title: "Наша Миссия",
        description:
          "Демократизировать доступ к передовым технологиям, помогая предприятиям любого размера использовать силу искусственного интеллекта и разработки программного обеспечения на заказ для достижения стратегических целей.",
      },
      automation: {
        description:
          "Помимо наших основных услуг, мы специализируемся на автоматизации бизнес-процессов, создавая интеллектуальные рабочие потоки, которые оптимизируют операции, снижают расходы и повышают продуктивность наших клиентов.",
      },
    },
    portfolio: {
      title: "Наше Портфолио",
      description:
        "Откройте для себя некоторые из наших самых выдающихся проектов, которые демонстрируют наш опыт в разработке программного обеспечения и искусственном интеллекте.",
      project1: {
        title: "Интеллектуальная Система Управления",
        description: "Полная платформа на базе ИИ для оптимизации бизнес-процессов и прогнозной аналитики.",
        extendedDescription:
          "Это решение интегрирует передовые алгоритмы машинного обучения для автоматизации принятия решений, снижения операционных расходов и повышения эффективности бизнеса. Включает интерактивные дашборды, отчеты в реальном времени и возможности прогнозирования, которые преобразовали операции наших клиентов.",
      },
      project2: {
        title: "Анализ Компьютерного Зрения",
        description: "Передовая система распознавания изображений для промышленного контроля качества.",
        extendedDescription:
          "Мы внедрили передовые сверточные нейронные сети для обнаружения микроскопических дефектов на производственных линиях. Система обрабатывает тысячи изображений в минуту с точностью 99,7%, значительно снижая расходы на ручной контроль качества.",
      },
      project3: {
        title: "Современное Веб-Приложение",
        description: "Full-stack разработка с масштабируемой архитектурой и оптимизированным пользовательским опытом.",
        extendedDescription:
          "Создано с использованием передовых технологий, таких как Next.js, TypeScript и облачные микросервисы. Приложение обрабатывает миллионы ежедневных транзакций с временем ответа менее 200мс, предлагая плавный и надежный пользовательский опыт.",
      },
    },
    testimonials: {
      title: "Что Говорят Наши Клиенты",
      description: "Доверие наших клиентов - наше величайшее достижение. Узнайте об их опыте работы с Mazlatt.",
      client1: {
        name: "Мария Гонсалес",
        content:
          "Mazlatt полностью трансформировал наши процессы с помощью решения ИИ, которое превзошло все наши ожидания. Их профессионализм исключительный.",
      },
      client2: {
        name: "Карлос Родригес",
        content:
          "Команда Mazlatt создала программное обеспечение на заказ, которое революционизировало нашу деятельность. Качество и внимание к деталям впечатляют.",
      },
      client3: {
        name: "Ана Мартинес",
        content:
          "Работа с Mazlatt была необыкновенным опытом. Их экспертиза в ИИ помогла нам автоматизировать критические процессы с невероятными результатами.",
      },
    },
    services: {
      title: "Наши Услуги",
      software: {
        title: "ПО на Заказ",
        description:
          "Мы разрабатываем персонализированные приложения, которые идеально адаптируются к специфическим потребностям вашего бизнеса.",
      },
      ai: {
        title: "Искусственный Интеллект",
        description: "Мы внедряем передовые решения ИИ для автоматизации процессов и улучшения принятия решений.",
      },
      training: {
        title: "Обучение Моделей",
        description:
          "Мы обучаем и оптимизируем модели машинного обучения, специфичные для вашей отрасли и случаев использования.",
      },
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Готовы перетрансформировать ваш бизнес? Давайте поговорим о вашем следующем проекте.",
      name: "Имя",
      namePlaceholder: "Ваше полное имя",
      email: "Email",
      emailPlaceholder: "your@email.com",
      subject: "Тема",
      subjectPlaceholder: "Как мы можем вам помочь?",
      message: "Сообщение",
      messagePlaceholder: "Расскажите нам о вашем проекте или вопросе...",
      send: "Отправить Сообщение",
      sendMessage: "Отправить Сообщение",
      getInTouch: "Свяжитесь с нами",
      phone: "Телефон",
      location: "Местоположение",
      address: "Мадрид, Испания",
    },
    footer: {
      description:
        "Технологическое консультирование, специализирующееся на разработке программного обеспечения, ИИ и обучении моделей.",
      rights: "Все права защищены.",
    },
  },
}
