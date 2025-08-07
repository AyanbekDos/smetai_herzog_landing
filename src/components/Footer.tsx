const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© 2025 SMET.ai</span>
            <a href="mailto:hello@smet.ai" className="hover:text-foreground transition-colors">
              hello@smet.ai
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/10bd6ac5-384c-489d-85f5-2042748bae8a.png" 
              alt="SMET.ai" 
              className="h-6 w-auto opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;