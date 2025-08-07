const PartnersSection = () => {
  // Placeholder partner logos - in a real project, these would be actual partner logos
  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/120x60?text=PARTNER+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/120x60?text=PARTNER+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/120x60?text=PARTNER+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/120x60?text=PARTNER+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/120x60?text=PARTNER+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/120x60?text=PARTNER+6" },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-muted-foreground tracking-wider uppercase">
            При поддержке
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;