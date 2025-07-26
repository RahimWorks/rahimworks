import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Users, Database, Smartphone } from "lucide-react";
import handiqueProject from "@/assets/handique-project.jpg";

const Portfolio = () => {
  const projectFeatures = [
    {
      icon: Users,
      title: "User Management",
      description: "Complete registration, login, and profile management system"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Features",
      description: "Shopping cart, checkout, and invoice generation"
    },
    {
      icon: Database,
      title: "Admin Panel",
      description: "Comprehensive product and order management dashboard"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Optimized for all devices using Bootstrap framework"
    }
  ];

  const technologies = [
    "Python", "Django", "HTML5", "CSS3", "Bootstrap", "JavaScript", "SQLite", "MySQL"
  ];

  const keyLearnings = [
    "Full-stack development workflow",
    "User experience design principles",
    "Secure authentication implementation",
    "Database design and optimization",
    "Responsive UI/UX development",
    "E-commerce business logic"
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            Featured Project
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="portfolio-gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
            Showcasing practical experience in full-stack e-commerce development
          </p>
        </div>

        {/* Main Project Showcase */}
        <Card className="portfolio-card border-primary/20 overflow-hidden mb-12">
          <CardContent className="p-0">
            {/* Project Header */}
            <div className="bg-gradient-primary p-8 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Handique E-commerce Platform</h3>
                  <p className="text-lg opacity-90">
                    Full-stack e-commerce solution for jewelry and handicrafts marketplace
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <img 
                src={handiqueProject} 
                alt="Handique E-commerce Platform"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Project Details */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">Project Overview</h4>
                <p className="text-portfolio-muted leading-relaxed">
                  A comprehensive e-commerce web application designed specifically for <span className="text-accent font-medium">small business owners</span> and 
                  <span className="text-primary font-medium"> traditional artisans</span> to showcase and sell their jewelry and handicrafts online. 
                  The platform bridges the gap between traditional craftsmanship and modern digital commerce.
                </p>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-accent mb-2">Target Audience</h5>
                  <p className="text-sm text-portfolio-muted">
                    Small business owners, traditional artisans, jewelry makers, and handicraft creators looking to 
                    establish their online presence and reach a broader customer base.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectFeatures.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{title}</h5>
                        <p className="text-sm text-portfolio-muted">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">Key Learnings & Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {keyLearnings.map((learning) => (
                    <div key={learning} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-portfolio-muted">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Impact & Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="portfolio-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <p className="text-sm text-portfolio-muted">Months Development</p>
            </CardContent>
          </Card>
          <Card className="portfolio-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">Full-Stack</div>
              <p className="text-sm text-portfolio-muted">End-to-End Solution</p>
            </CardContent>
          </Card>
          <Card className="portfolio-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-portfolio-accent-purple mb-2">100%</div>
              <p className="text-sm text-portfolio-muted">Responsive Design</p>
            </CardContent>
          </Card>
        </div>

        {/* More Projects Coming Soon */}
        <Card className="portfolio-card border-accent/20">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold portfolio-gradient-text">More Projects Coming Soon</h3>
              <p className="text-lg text-portfolio-muted">
                I'm continuously working on new projects to expand my portfolio. Stay tuned for more 
                innovative web applications and data science projects that showcase my growing expertise.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <Badge className="bg-primary/10 text-primary px-4 py-2">
                  React Projects
                </Badge>
                <Badge className="bg-accent/10 text-accent px-4 py-2">
                  Data Analytics
                </Badge>
                <Badge className="bg-portfolio-accent-purple/10 text-portfolio-accent-purple px-4 py-2">
                  API Development
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;