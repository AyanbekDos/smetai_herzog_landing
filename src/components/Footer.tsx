import { useLanguage } from "@/contexts/LanguageContext";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>{t('copyright')}</span>
            <a href="mailto:founder@smetai.online" className="hover:text-foreground transition-colors">
              founder@smetai.online
            </a>
            <PrivacyPolicyModal>
              <button type="button" className="hover:text-foreground transition-colors">
                {t('privacyPolicyLink')}
              </button>
            </PrivacyPolicyModal>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold text-[hsl(var(--brand-blue))] opacity-70 tracking-tight">
              SMET.ai
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;