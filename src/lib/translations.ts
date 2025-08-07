export type Language = 'ru' | 'kz' | 'en';

export const translations = {
  ru: {
    // Header
    howItWorks: 'Как это работает',
    application: 'Заявка',
    getAccess: 'Получить доступ',

    // Hero Section
    botDescription: 'AI‑бот для смет по металлоконструкциям',
    heroTitle: 'Ваши сметы всё ещё крадут {time} и {money}.',
    time: 'Время',
    money: 'Деньги',
    heroSubtitle: 'SMET.ai сокращает работу сметчика на 90 % и делает расчёт в 13 раз быстрее конкурентов.',
    getBetaAccess: 'Получить бета‑доступ',
    watchDemo: 'Смотреть в деле',

    // Partners Section
    supportedBy: 'ПРИ ПОДДЕРЖКЕ',

    // How It Works Section
    howItWorksTitle: 'Как это работает',
    howItWorksSubtitle: 'Четыре простых шага от PDF-спецификации до готового коммерческого предложения',
    pause: 'Пауза',
    play: 'Воспроизвести',
    step: 'Шаг',
    of: 'из',

    // Steps
    step1: {
      title: 'Загрузите PDF',
      description: 'Просто отправьте PDF-файл с техническими спецификациями в Telegram-бот. Никаких сложных форм или загрузок.'
    },
    step2: {
      title: 'ИИ находит таблицу',
      description: 'Искусственный интеллект автоматически анализирует документ и находит таблицы с техническими данными. Вы подтверждаете правильность.'
    },
    step3: {
      title: 'Находим цены и коэффициенты',
      description: 'Система автоматически подставляет актуальные цены на металлопрокат и применяет нужные коэффициенты для точного расчёта.'
    },
    step4: {
      title: 'Получите готовое КП',
      description: 'Через несколько минут вы получаете профессионально оформленное коммерческое предложение, готовое для отправки клиенту.'
    },

    // Beta Form Section
    betaFormTitle: 'Оставьте заявку на бета‑тест',
    betaFormSubtitle: 'Получите ранний доступ к SMET.ai и начните экономить время уже сегодня',
    name: 'Имя',
    namePlaceholder: 'Ваше имя',
    contact: 'Способ связи',
    contactPlaceholder: 'Ваши контакты: email, телефон или Telegram аккаунт',
    contactHelper: 'Можете указать любой удобный способ связи',
    submitApplication: 'Отправить заявку',
    submitting: 'Отправляем...',
    privacyText: 'Нажимая кнопку, вы соглашаетесь с {link}',
    privacyPolicy: 'политикой обработки персональных данных',

    // Toast messages
    formSuccessTitle: 'Заявка отправлена!',
    formSuccessDescription: 'Мы свяжемся с вами в ближайшее время для предоставления доступа к бета-версии.',
    formErrorTitle: 'Ошибка при отправке',
    formErrorDescription: 'Попробуйте отправить заявку позже или свяжитесь с нами напрямую.',

    // Footer
    copyright: '© 2025 SMET.ai',
    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyTitle: 'Политика обработки персональных данных'
  },

  kz: {
    // Header
    howItWorks: 'Қалай жұмыс істейді',
    application: 'Өтінім',
    getAccess: 'Қолжетімділік алу',

    // Hero Section
    botDescription: 'Металл конструкциялар бойынша смета жасауға арналған AI‑бот',
    heroTitle: 'Сіздің сметаларыңыз әлі де {time} мен {money} ұрлап жатыр.',
    time: 'Уақыт',
    money: 'Ақша',
    heroSubtitle: 'SMET.ai сметашының жұмысын 90%-ға қысқартады және есептеуді бәсекелестерден 13 есе жылдам жасайды.',
    getBetaAccess: 'Бета‑қолжетімділік алу',
    watchDemo: 'Іс‑жүзінде көру',

    // Partners Section
    supportedBy: 'ҚОЛДАУ КӨРСЕТУІМЕН',

    // How It Works Section
    howItWorksTitle: 'Қалай жұмыс істейді',
    howItWorksSubtitle: 'PDF-спецификациядан дайын коммерциялық ұсынысқа дейін төрт қарапайым қадам',
    pause: 'Тоқтату',
    play: 'Ойнату',
    step: 'Қадам',
    of: 'дан',

    // Steps
    step1: {
      title: 'PDF жүктеу',
      description: 'Техникалық спецификациялары бар PDF-файлды Telegram-ботқа жіберіңіз. Ешқандай күрделі формалар немесе жүктемелер жоқ.'
    },
    step2: {
      title: 'AI кесте табады',
      description: 'Жасанды интеллект құжатты автоматты түрде талдайды және техникалық деректері бар кестелерді табады. Сіз дұрыстығын растайсыз.'
    },
    step3: {
      title: 'Бағалар мен коэффициенттерді табамыз',
      description: 'Жүйе автоматты түрде металл прокатының өзекті бағаларын қойып, дәл есептеу үшін қажетті коэффициенттерді қолданады.'
    },
    step4: {
      title: 'Дайын КҰ алыңыз',
      description: 'Бірнеше минут ішінде сіз клиентке жіберуге дайын кәсіби ресімделген коммерциялық ұсынысты аласыз.'
    },

    // Beta Form Section
    betaFormTitle: 'Бета‑тестке өтінім қалдырыңыз',
    betaFormSubtitle: 'SMET.ai-ға ерте қолжетімділік алып, бүгіннен бастап уақытты үнемдей бастаңыз',
    name: 'Аты',
    namePlaceholder: 'Сіздің атыңыз',
    contact: 'Байланыс тәсілі',
    contactPlaceholder: 'Сіздің байланысыңыз: email, телефон немесе Telegram аккаунт',
    contactHelper: 'Кез келген ыңғайлы байланыс тәсілін көрсете аласыз',
    submitApplication: 'Өтінім жіберу',
    submitting: 'Жібереміз...',
    privacyText: 'Батырманы басу арқылы сіз {link} келісесіз',
    privacyPolicy: 'жеке деректерді өңдеу саясатымен',

    // Toast messages
    formSuccessTitle: 'Өтінім жіберілді!',
    formSuccessDescription: 'Біз сізбен жақын арада бета-нұсқаға қолжетімділік беру үшін байланысамыз.',
    formErrorTitle: 'Жіберу кезінде қате',
    formErrorDescription: 'Өтінімді кейінірек жіберіп көріңіз немесе бізбен тікелей байланысыңыз.',

    // Footer
    copyright: '© 2025 SMET.ai',
    privacyPolicyLink: 'Құпиялылық саясаты',
    privacyPolicyTitle: 'Жеке деректерді өңдеу саясаты'
  },

  en: {
    // Header
    howItWorks: 'How It Works',
    application: 'Application',
    getAccess: 'Get Access',

    // Hero Section
    botDescription: 'AI-bot for metal structure estimates',
    heroTitle: 'Your estimates are still stealing {time} and {money}.',
    time: 'Time',
    money: 'Money',
    heroSubtitle: 'SMET.ai reduces estimator work by 90% and performs calculations 13 times faster than competitors.',
    getBetaAccess: 'Get Beta Access',
    watchDemo: 'Watch Demo',

    // Partners Section
    supportedBy: 'SUPPORTED BY',

    // How It Works Section
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Four simple steps from PDF specification to ready commercial proposal',
    pause: 'Pause',
    play: 'Play',
    step: 'Step',
    of: 'of',

    // Steps
    step1: {
      title: 'Upload PDF',
      description: 'Simply send a PDF file with technical specifications to the Telegram bot. No complex forms or uploads.'
    },
    step2: {
      title: 'AI Finds Tables',
      description: 'Artificial intelligence automatically analyzes the document and finds tables with technical data. You confirm accuracy.'
    },
    step3: {
      title: 'Find Prices and Coefficients',
      description: 'The system automatically substitutes current metal prices and applies necessary coefficients for accurate calculation.'
    },
    step4: {
      title: 'Get Ready Proposal',
      description: 'In a few minutes you receive a professionally formatted commercial proposal ready to send to the client.'
    },

    // Beta Form Section
    betaFormTitle: 'Apply for Beta Test',
    betaFormSubtitle: 'Get early access to SMET.ai and start saving time today',
    name: 'Name',
    namePlaceholder: 'Your name',
    contact: 'Contact Method',
    contactPlaceholder: 'Your contacts: email, phone, or Telegram account',
    contactHelper: 'You can specify any convenient contact method',
    submitApplication: 'Submit Application',
    submitting: 'Submitting...',
    privacyText: 'By clicking the button, you agree to the {link}',
    privacyPolicy: 'privacy policy',

    // Toast messages
    formSuccessTitle: 'Application Sent!',
    formSuccessDescription: 'We will contact you shortly to provide access to the beta version.',
    formErrorTitle: 'Sending Error',
    formErrorDescription: 'Try sending the application later or contact us directly.',

    // Footer
    copyright: '© 2025 SMET.ai',
    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyTitle: 'Privacy Policy'
  }
};

export const getTranslation = (lang: Language, key: string, params?: Record<string, string>): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  if (typeof value !== 'string') {
    return key; // Fallback to key if translation not found
  }
  
  // Replace parameters in the translation
  if (params) {
    return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
      return params[paramKey] || match;
    });
  }
  
  return value;
};