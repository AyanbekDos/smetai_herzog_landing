import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";

interface PrivacyPolicyModalProps {
  children: React.ReactNode;
}

export const PrivacyPolicyModal = ({ children }: PrivacyPolicyModalProps) => {
  const { t, language } = useLanguage();

  const getPrivacyContent = () => {
    switch (language) {
      case 'ru':
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Общие положения</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Настоящая Политика обработки персональных данных (далее - Политика) действует в отношении всех персональных данных, которые SMET.ai может получить о пользователе во время использования сайта и сервиса.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Собираемая информация</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Мы собираем следующую информацию:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Имя и контактные данные (email, телефон, Telegram)</li>
                <li>Информацию о компании (по желанию)</li>
                <li>Технические данные о посещении сайта</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Цели обработки данных</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ваши персональные данные обрабатываются в следующих целях:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Предоставление доступа к бета-версии SMET.ai</li>
                <li>Связь с вами по вопросам использования сервиса</li>
                <li>Улучшение качества наших услуг</li>
                <li>Исполнение договорных обязательств</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Защита данных</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Мы применяем технические и организационные меры для защиты ваших персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Ваши права</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Вы имеете право на доступ к своим персональным данным, их исправление, удаление или ограничение обработки. Для реализации своих прав обращайтесь по адресу: founder@smetai.online
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Контакты</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                По вопросам обработки персональных данных обращайтесь: founder@smetai.online
              </p>
            </section>
          </div>
        );

      case 'kz':
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Жалпы ережелер</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Осы жеке деректерді өңдеу саясаты (бұдан әрі - Саясат) SMET.ai сайт пен сервисті пайдалану кезінде пайдаланушы туралы ала алатын барлық жеке деректерге қатысты әрекет етеді.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Жиналатын ақпарат</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Біз келесі ақпаратты жинаймыз:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Аты-жөні және байланыс деректері (email, телефон, Telegram)</li>
                <li>Компания туралы ақпарат (қалауыңызша)</li>
                <li>Сайтқа кіру туралы техникалық деректер</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Деректерді өңдеу мақсаттары</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Сіздің жеке деректеріңіз келесі мақсаттарда өңделеді:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>SMET.ai бета-нұсқасына қолжетімділік беру</li>
                <li>Сервисті пайдалану мәселелері бойынша сізбен байланысу</li>
                <li>Қызмет сапасын жақсарту</li>
                <li>Шарттық міндеттемелерді орындау</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Деректерді қорғау</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Біз сіздің жеке деректеріңізді заңсыз қолжетімділіктен, өзгертуден, ашудан немесе жоюдан қорғау үшін техникалық және ұйымдастырушылық шараларды қолданамыз.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Сіздің құқықтарыңыз</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Сіздің жеке деректеріңізге қолжетімділік, оларды түзету, жою немесе өңдеуді шектеу құқығыңыз бар. Құқықтарыңызды іске асыру үшін мына мекенжайға хабарласыңыз: founder@smetai.online
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Байланыс</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Жеке деректерді өңдеу мәселелері бойынша хабарласыңыз: founder@smetai.online
              </p>
            </section>
          </div>
        );

      case 'en':
        return (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. General Provisions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Privacy Policy (hereinafter - the Policy) applies to all personal data that SMET.ai may obtain about the user during the use of the website and service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Information We Collect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We collect the following information:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Name and contact details (email, phone, Telegram)</li>
                <li>Company information (optional)</li>
                <li>Technical data about website visits</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Purposes of Data Processing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your personal data is processed for the following purposes:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Providing access to the SMET.ai beta version</li>
                <li>Contacting you regarding service usage</li>
                <li>Improving the quality of our services</li>
                <li>Fulfilling contractual obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Data Protection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We apply technical and organizational measures to protect your personal data from unauthorized access, modification, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Your Rights</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You have the right to access your personal data, correct it, delete it, or restrict its processing. To exercise your rights, please contact us at: founder@smetai.online
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Contact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For questions regarding personal data processing, please contact: founder@smetai.online
              </p>
            </section>
          </div>
        );

      default:
        return <div>Privacy Policy content not available</div>;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{t('privacyPolicyTitle')}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          {getPrivacyContent()}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};