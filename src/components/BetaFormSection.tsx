import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";

const BetaFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Cloudflare Pages Function
      const res = await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, contact: formData.contact }),
      });
      if (!res.ok) throw new Error('Submission failed');
      
      toast({
        title: t('formSuccessTitle'),
        description: t('formSuccessDescription'),
      });

      setFormData({ name: "", contact: "" });
    } catch (error) {
      toast({
        title: t('formErrorTitle'),
        description: t('formErrorDescription'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {t('betaFormTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('betaFormSubtitle')}
          </p>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-left block">
                  {t('name')} *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t('namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-left block">
                  {t('contact')} *
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder={t('contactPlaceholder')}
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
                <p className="text-sm text-muted-foreground">
                  {t('contactHelper')}
                </p>
              </div>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full text-lg py-4 h-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submitting') : t('submitApplication')}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            {t('privacyText', { link: '' }).split('{link}')[0]}
            <PrivacyPolicyModal>
              <button type="button" className="text-primary hover:underline">
                {t('privacyPolicy')}
              </button>
            </PrivacyPolicyModal>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaFormSection;
