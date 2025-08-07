import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1️⃣",
      title: "Загрузите PDF",
      description: "Просто отправьте PDF-файл с техническими спецификациями в Telegram-бот. Никаких сложных форм или загрузок.",
      image: "/lovable-uploads/97048456-ec9e-4d07-bc14-b8e372933e7f.png"
    },
    {
      number: "2️⃣", 
      title: "ИИ находит таблицу",
      description: "Искусственный интеллект автоматически анализирует документ и находит таблицы с техническими данными. Вы подтверждаете правильность.",
      image: "/lovable-uploads/34bc3cca-07b0-4f6d-bade-779b069a6bd4.png"
    },
    {
      number: "3️⃣",
      title: "Находим цены и коэффициенты", 
      description: "Система автоматически подставляет актуальные цены на металлопрокат и применяет нужные коэффициенты для точного расчёта.",
      image: "/lovable-uploads/7a42c39b-10e9-4563-bedb-0daf5ff3a80b.png"
    },
    {
      number: "4️⃣",
      title: "Получите готовое КП",
      description: "Через несколько минут вы получаете профессионально оформленное коммерческое предложение, готовое для отправки клиенту.",
      image: "/lovable-uploads/7f4c5067-1e26-4d51-8b9c-4867cbef6037.png"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('[data-step]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      stepElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Как это работает
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Четыре простых шага от PDF-спецификации до готового коммерческого предложения
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="grid grid-cols-2 gap-16 h-[600px]">
                    {/* Left - Text */}
                    <div className="flex items-center">
                      <div className="flex items-start space-x-6">
                        <div className="text-5xl flex-shrink-0">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-6">
                            {step.title}
                          </h3>
                          <p className="text-xl leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right - Visual */}
                    <div className="flex items-center">
                      <div className="relative w-full h-full bg-white rounded-2xl shadow-card overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-contain p-6"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Mobile Scroll Version */}
        <div className="lg:hidden grid grid-cols-1 gap-16 max-w-7xl mx-auto">
          {/* Text steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`step-content ${activeStep === index ? 'active' : 'inactive'}`}
              >
                <div className="flex items-start space-x-4 mb-8">
                  <div className="text-4xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Image below text on mobile */}
                <div className="relative w-full h-64 bg-white rounded-2xl shadow-card overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;