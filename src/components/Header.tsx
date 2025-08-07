import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a 
            href="https://smetai.online" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="/logo.svg" alt="SMET.ai Logo" className="h-8" />
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#how-it-works" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('howItWorks')}
            </a>
            <a 
              href="#form" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('application')}
            </a>
          </nav>
          
          <LanguageToggle />
          
          <Button variant="default" size="lg" asChild>
            <a href="#form">{t('getAccess')}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;