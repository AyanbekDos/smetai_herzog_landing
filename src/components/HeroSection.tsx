import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-section-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue-light text-brand-blue text-base md:text-lg font-medium">
            {t('botDescription')}
          </div>
          
          {/* Main headline */}
          <h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            dangerouslySetInnerHTML={{
              __html: t('heroTitle', {
                time: `<span class="text-brand-time">${t('time')}</span>`,
                money: `<span class="text-brand-money">${t('money')}</span>`
              })
            }}
          />
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4 h-auto">
              <a href="#form">{t('getBetaAccess')}</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="text-lg px-8 py-4 h-auto">
              <a href="#video">{t('watchDemo')}</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
