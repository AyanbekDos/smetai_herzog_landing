import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const BetaFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для предоставления доступа к бета-версии.",
    });

    setFormData({ name: "", telegram: "", company: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="form" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Оставьте заявку на бета‑тест
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Получите ранний доступ к SMET.ai и начните экономить время уже сегодня
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-left block">
                  Имя *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram" className="text-left block">
                  Telegram *
                </Label>
                <Input
                  id="telegram"
                  name="telegram"
                  type="text"
                  placeholder="@username или ссылка"
                  value={formData.telegram}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-left block">
                  Компания
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Название компании"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 text-lg"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full text-lg py-4 h-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправляем..." : "Отправить заявку"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="#" className="text-primary hover:underline">
              политикой обработки персональных данных
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaFormSection;