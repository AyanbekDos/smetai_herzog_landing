import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/10bd6ac5-384c-489d-85f5-2042748bae8a.png" 
            alt="SMET.ai" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#how-it-works" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Как это работает
          </a>
          <a 
            href="#form" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Заявка
          </a>
        </nav>

        <Button variant="default" size="lg" asChild>
          <a href="#form">Получить доступ</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;