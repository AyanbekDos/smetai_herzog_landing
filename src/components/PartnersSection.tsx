import { Icon } from '@iconify/react';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();
  const partners = [
    { 
      name: "Google Gemini", 
      icon: "logos:google-gemini",
      url: "https://gemini.google.com/"
    },
    { 
      name: "Anthropic", 
      icon: "simple-icons:anthropic",
      url: "https://anthropic.com/"
    },
    { 
      name: "Perplexity", 
      icon: "simple-icons:perplexity",
      url: "https://perplexity.ai/"
    },
    { 
      name: "Astana Hub", 
      logo: "/logos/Astanahub_idt4jJSkVN_1.svg",
      url: "https://astanahub.com/"
    },
    { 
      name: "Cloudflare", 
      icon: "logos:cloudflare",
      url: "https://cloudflare.com/"
    },
    { 
      name: "Microsoft Azure", 
      icon: "logos:microsoft-azure",
      url: "https://azure.microsoft.com/"
    },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-muted-foreground tracking-wider uppercase">
            {t('supportedBy')}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo block hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="mb-2">
                {partner.icon ? (
                  <Icon 
                    icon={partner.icon} 
                    width={partner.name === 'Cloudflare' ? 56 : 48} 
                    height={partner.name === 'Cloudflare' ? 56 : 48}
                    className="mx-auto"
                  />
                ) : (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto mx-auto object-contain"
                  />
                )}
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {partner.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;