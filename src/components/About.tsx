import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Briefcase, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor in Commerce",
      detail: "Co-op College Palakkad, Calicut University (2024)"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Python Development Internship",
      detail: "Right Soft Options, Kochi (6 months)"
    },
    {
      icon: Code,
      title: "Specialization",
      description: "Full Stack Development",
      detail: "Python, Django, React, Data Science"
    },
    {
      icon: Target,
      title: "Focus",
      description: "Continuous Learning",
      detail: "Scalable applications & Modern tech"
    }
  ];

  return (
    <section id="about" className="portfolio-section bg-portfolio-darker">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From Commerce to <span className="portfolio-gradient-text">Code</span>
          </h2>
          <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
            A unique journey combining business acumen with technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-portfolio-muted leading-relaxed">
                As an <span className="text-accent font-medium">enthusiastic and detail-oriented fresher</span> Full Stack Python Developer, 
                I bring a unique perspective to technology with my Bachelor in Commerce background from Calicut University (2024). 
                This diverse educational foundation has given me a <span className="text-primary font-medium">strong analytical mindset</span> and 
                business understanding that I now apply to software development.
              </p>
              
              <p className="text-portfolio-muted leading-relaxed">
                My transition into technology began with a <span className="text-accent font-medium">6-month Python development internship</span> at 
                Right Soft Options, Kochi, where I gained hands-on experience in both web development and data science. 
                This experience has shaped my approach to creating <span className="text-primary font-medium">efficient, scalable applications</span> that 
                solve real-world problems.
              </p>

              <p className="text-portfolio-muted leading-relaxed">
                I'm particularly passionate about the intersection of <span className="text-accent font-medium">web development and data science</span>, 
                believing that data-driven insights can significantly enhance user experiences and business outcomes. 
                My commitment to <span className="text-primary font-medium">continuous learning</span> keeps me updated with the latest technologies and best practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Team Collaboration", "Quick Learner", "Business Minded", "Detail Oriented"].map((trait) => (
                <Badge key={trait} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description, detail }, index) => (
              <Card key={title} className="portfolio-card group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">{title}</h4>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium text-accent">{description}</p>
                    <p className="text-sm text-portfolio-muted">{detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Focus Section */}
        <div className="mt-16">
          <Card className="portfolio-card border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold portfolio-gradient-text">Career Mission</h3>
                <p className="text-lg text-portfolio-muted leading-relaxed">
                  My goal is to leverage my unique combination of <span className="text-primary font-medium">business understanding</span> and 
                  <span className="text-accent font-medium"> technical skills</span> to create innovative web applications that drive business growth. 
                  I'm committed to delivering high-quality, scalable solutions while continuously expanding my expertise in emerging technologies.
                </p>
                <div className="flex justify-center mt-6">
                  <Badge className="bg-gradient-primary text-white px-6 py-2">
                    Ready to Build Amazing Things
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;