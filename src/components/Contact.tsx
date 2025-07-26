import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahimrahi694@gmail.com",
      href: "mailto:rahimrahi694@gmail.com"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 98097 00124",
      href: "tel:+919809700124"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Palakkad, Kerala, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rahimrahi694@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/_rahi_rahi_",
      color: "text-pink-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "text-blue-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="portfolio-section bg-portfolio-darker">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="portfolio-gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
            Ready to start your next project? I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="portfolio-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry, collaboration, etc."
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="portfolio-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{label}</h4>
                        {href === '#' ? (
                          <p className="text-portfolio-muted">{value}</p>
                        ) : (
                          <a 
                            href={href} 
                            className="text-portfolio-muted hover:text-primary transition-colors"
                          >
                            {value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="portfolio-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                    >
                      <Icon className={`h-5 w-5 ${color} group-hover:scale-110 transition-transform`} />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="portfolio-card border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-accent font-medium">Available for Projects</span>
                  </div>
                  <h3 className="text-xl font-bold">Ready to Start</h3>
                  <p className="text-portfolio-muted">
                    I'm currently available for new projects and collaborations. 
                    Let's discuss how I can help bring your ideas to life!
                  </p>
                  <div className="flex justify-center gap-2 text-sm text-portfolio-muted">
                    <span>⚡ Quick Response</span>
                    <span>•</span>
                    <span>🤝 Collaborative</span>
                    <span>•</span>
                    <span>💡 Creative Solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="portfolio-card border-primary/20 mt-12">
          <CardContent className="p-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold portfolio-gradient-text">Let's Build Something Amazing Together</h3>
              <p className="text-lg text-portfolio-muted">
                Whether you're a small business looking to go digital, an artisan wanting to showcase your work online, 
                or need data insights for your business - I'm here to help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow"
                  onClick={() => window.location.href = 'mailto:rahimrahi694@gmail.com'}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me Directly
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border/50 hover:border-primary/50 hover:bg-primary/10"
                  onClick={() => window.location.href = 'tel:+919809700124'}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Me
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;