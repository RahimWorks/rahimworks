import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Database, BarChart3, Smartphone, Shield, Zap } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Globe,
    title: "Full Stack Web Development",
    description: "End-to-end web application development using modern technologies like Python, Django, React, and Angular.",
    features: ["Responsive Web Design", "RESTful API Development", "Database Integration", "User Authentication", "Performance Optimization"],
    price: "Starting from ₹25,000"
  }, {
    icon: Smartphone,
    title: "E-commerce Solutions",
    description: "Custom e-commerce platforms tailored for small businesses, artisans, and traditional craftspeople.",
    features: ["Product Catalog Management", "Shopping Cart & Checkout", "Payment Gateway Integration", "Order Management System", "Admin Dashboard"],
    price: "Starting from ₹35,000"
  }, {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: "Transform your business data into actionable insights with custom analytics and interactive dashboards.",
    features: ["Data Processing & Cleaning", "Statistical Analysis", "Interactive Dashboards", "Custom Reports", "Predictive Analytics"],
    price: "Starting from ₹15,000"
  }, {
    icon: Database,
    title: "Database Design & Management",
    description: "Efficient database architecture and management solutions for optimal data storage and retrieval.",
    features: ["Database Schema Design", "Query Optimization", "Data Migration", "Backup Solutions", "Performance Tuning"],
    price: "Starting from ₹20,000"
  }, {
    icon: Zap,
    title: "Web Scraping & Automation",
    description: "Automated data collection and web scraping solutions to streamline your business processes.",
    features: ["Custom Web Scrapers", "Data Extraction Tools", "Process Automation", "API Integration", "Scheduled Tasks"],
    price: "Starting from ₹12,000"
  }, {
    icon: Shield,
    title: "Website Maintenance & Support",
    description: "Ongoing support and maintenance to keep your web applications running smoothly and securely.",
    features: ["Regular Updates", "Security Monitoring", "Bug Fixes", "Performance Monitoring", "Technical Support"],
    price: "Starting from ₹8,000/month"
  }];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="services" className="portfolio-section bg-portfolio-darker">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I <span className="portfolio-gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
            Comprehensive web development and data solutions tailored to your business needs
          </p>
        </div>

        {/* Primary Service Highlight */}
        <Card className="portfolio-card border-primary/30 mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-primary p-8 text-white text-center">
              <Globe className="h-16 w-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">Primary Expertise: Web Development</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Specialized in creating responsive, dynamic web applications that help small businesses 
                and traditional artisans establish their online presence and grow their customer base.
              </p>
            </div>
            <div className="p-8 bg-card/50">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Full Stack Development</h4>
                  <p className="text-sm text-portfolio-muted">Complete end-to-end solutions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">E-commerce Focus</h4>
                  <p className="text-sm text-portfolio-muted">Specialized in online stores</p>
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-accent-purple mb-2">Data Integration</h4>
                  <p className="text-sm text-portfolio-muted">Analytics-driven development</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={service.title} className="portfolio-card group">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>

                <p className="text-portfolio-muted mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map(feature => <li key={feature} className="text-sm text-portfolio-muted flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {feature}
                      </li>)}
                  </ul>
                </div>

                <div className="mt-auto space-y-4">
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-glow" onClick={scrollToContact}>
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Value Proposition */}
        <Card className="portfolio-card border-accent/20 mt-12">
          <CardContent className="p-8 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold portfolio-gradient-text">Why Choose My Services?</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold text-primary">Business-Focused</h4>
                  <p className="text-sm text-portfolio-muted">
                    Commerce background ensures solutions align with business goals
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold text-accent">Modern Technology</h4>
                  <p className="text-sm text-portfolio-muted">
                    Latest frameworks and best practices for optimal performance
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-semibold text-portfolio-accent-purple">Collaborative Approach</h4>
                  <p className="text-sm text-portfolio-muted">
                    Working closely with clients to ensure perfect solutions
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow" onClick={scrollToContact}>
                  Start Your Project
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Services;