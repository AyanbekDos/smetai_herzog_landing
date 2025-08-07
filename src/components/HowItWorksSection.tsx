import { useEffect, useState, useRef, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause } from "lucide-react";
import { ImageViewer } from "./ImageViewer";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();
  const progressIntervalRef = useRef<NodeJS.Timeout>();

  const AUTOPLAY_DELAY = 5000; // 5 seconds
  const PROGRESS_UPDATE_INTERVAL = 50; // Update progress every 50ms

  const steps = [
    {
      number: "1️⃣",
      title: t('step1.title'),
      description: t('step1.description'),
      image: "/lovable-uploads/97048456-ec9e-4d07-bc14-b8e372933e7f.png"
    },
    {
      number: "2️⃣", 
      title: t('step2.title'),
      description: t('step2.description'),
      image: "/lovable-uploads/34bc3cca-07b0-4f6d-bade-779b069a6bd4.png"
    },
    {
      number: "3️⃣",
      title: t('step3.title'),
      description: t('step3.description'),
      image: "/lovable-uploads/7a42c39b-10e9-4563-bedb-0daf5ff3a80b.png"
    },
    {
      number: "4️⃣",
      title: t('step4.title'),
      description: t('step4.description'),
      image: "/lovable-uploads/7f4c5067-1e26-4d51-8b9c-4867cbef6037.png"
    }
  ];

  const startProgress = useCallback(() => {
    setProgress(0);
    let progressValue = 0;
    
    progressIntervalRef.current = setInterval(() => {
      progressValue += (100 / (AUTOPLAY_DELAY / PROGRESS_UPDATE_INTERVAL));
      setProgress(progressValue);
      
      if (progressValue >= 100) {
        clearInterval(progressIntervalRef.current);
      }
    }, PROGRESS_UPDATE_INTERVAL);
  }, []);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  }, []);

  const goToNext = useCallback(() => {
    if (!api) return;
    const nextIndex = (activeStep + 1) % steps.length;
    api.scrollTo(nextIndex);
  }, [api, activeStep, steps.length]);

  const startAutoplay = useCallback(() => {
    if (!isPlaying) return;
    
    clearTimers();
    startProgress();
    
    intervalRef.current = setInterval(() => {
      goToNext();
    }, AUTOPLAY_DELAY);
  }, [isPlaying, clearTimers, startProgress, goToNext]);

  const stopAutoplay = useCallback(() => {
    clearTimers();
    setProgress(0);
  }, [clearTimers]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveStep(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => clearTimers();
  }, [isPlaying, activeStep, startAutoplay, stopAutoplay, clearTimers]);

  // Mobile scroll logic (keep existing for mobile)
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
            {t('howItWorksTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorksSubtitle')}
          </p>
        </div>

        {/* Desktop Modern Carousel */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={togglePlayPause}
                className="flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isPlaying ? t('pause') : t('play')}</span>
              </Button>
              <div className="text-sm text-muted-foreground">
                {activeStep + 1} {t('of')} {steps.length}
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="flex-1 max-w-xs mx-8">
              <Progress value={progress} className="h-2" />
            </div>
            
            {/* Step indicators */}
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {steps.map((step, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center min-h-[500px]">
                        {/* Text Content */}
                        <div className="lg:col-span-2 space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="text-5xl">{step.number}</div>
                            <div className="w-12 h-0.5 bg-primary"></div>
                          </div>
                          
                          <h3 className="text-3xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                          
                          <div className="pt-4">
                            <div className="text-sm font-medium text-primary mb-2">
                              {t('step')} {index + 1} {t('of')} {steps.length}
                            </div>
                            <Progress value={((index + 1) / steps.length) * 100} className="h-1" />
                          </div>
                        </div>
                        
                        {/* Visual Content */}
                        <div className="lg:col-span-3">
                          <div className="relative aspect-video bg-white rounded-2xl shadow-lg overflow-hidden border">
                            <ImageViewer 
                              src={step.image}
                              alt={step.title}
                              className="block w-full h-full hover:opacity-90 transition-opacity cursor-pointer"
                            >
                              <div className="w-full h-full flex items-center justify-center">
                                <img
                                  src={step.image}
                                  alt={step.title}
                                  className="w-full h-full object-contain p-6"
                                />
                              </div>
                            </ImageViewer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-gray-200" />
              <CarouselNext className="right-4 bg-white/90 hover:bg-white border-gray-200" />
            </Carousel>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              data-step={index}
              className={`transition-all duration-500 ${
                activeStep === index ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                <div className="aspect-video bg-gray-50 rounded-xl overflow-hidden">
                  <ImageViewer 
                    src={step.image}
                    alt={step.title}
                    className="block w-full h-full hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </ImageViewer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;