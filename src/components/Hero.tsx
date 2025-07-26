import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Instagram, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:rahimrahi694@gmail.com", label: "Email" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/_rahi_rahi_", label: "Instagram" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-portfolio-accent-purple/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--foreground)) 2px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="portfolio-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                <span className="block text-foreground">Abdul Rahim S</span>
                <span className="portfolio-gradient-text block">Full Stack</span>
                <span className="block text-foreground">Python Developer</span>
              </h1>
              
              <p className="text-xl text-foreground/80 max-w-2xl">
                Enthusiastic <span className="text-accent font-semibold">Full Stack Python Developer</span> & 
                <span className="text-primary font-semibold"> Data Science Enthusiast</span> with 6 months of hands-on experience. 
                Combining web development expertise with data-driven insights.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-border/50 hover:border-primary/50 hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 floating-animation">
                  <img
                    src={profileImage}
                    alt="Abdul Rahim S - Full Stack Python Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 p-3 bg-card rounded-lg border border-border/50 floating-animation" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🐍</span>
              </div>
              <div className="absolute -top-4 -right-4 p-3 bg-card rounded-lg border border-border/50 floating-animation" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 bg-card rounded-lg border border-border/50 floating-animation" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl">🗄️</span>
              </div>
              <div className="absolute -bottom-4 -right-4 p-3 bg-card rounded-lg border border-border/50 floating-animation" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-portfolio-muted">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-portfolio-muted rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;