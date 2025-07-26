import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Github, Linkedin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'E-commerce Solutions',
    'Data Analysis',
    'Database Design',
    'Web Scraping',
    'Maintenance & Support'
  ];

  const contactInfo = [
    { icon: Mail, text: 'rahimrahi694@gmail.com', href: 'mailto:rahimrahi694@gmail.com' },
    { icon: Phone, text: '+91 98097 00124', href: 'tel:+919809700124' },
    { icon: MapPin, text: 'Palakkad, Kerala, India', href: '#' }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:rahimrahi694@gmail.com', label: 'Email' },
    { icon: Instagram, href: 'https://instagram.com/_rahi_rahi_', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-portfolio-darker border-t border-border/50">
      {/* Back to Top Button */}
      <div className="text-center py-8 border-b border-border/20">
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="sm"
          className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
        >
          <ArrowUp className="h-4 w-4 mr-2" />
          Back to Top
        </Button>
      </div>

      <div className="portfolio-container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold portfolio-gradient-text mb-4">
                Abdul Rahim S
              </h3>
              <p className="text-portfolio-muted leading-relaxed">
                Full Stack Python Developer & Data Science Enthusiast creating 
                innovative web solutions for businesses and artisans.
              </p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-secondary/30 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-portfolio-muted hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-accent">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-portfolio-muted">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-portfolio-accent-purple">Contact</h4>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  {href === '#' ? (
                    <span className="text-portfolio-muted text-sm">{text}</span>
                  ) : (
                    <a
                      href={href}
                      className="text-portfolio-muted text-sm hover:text-foreground transition-colors"
                    >
                      {text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20 py-6">
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-portfolio-muted">
              <span>© 2024 Abdul Rahim S. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-portfolio-muted">
              <span>Available for opportunities</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;