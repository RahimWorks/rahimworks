import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "text-primary",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React JS", level: 75 },
        { name: "Angular", level: 70 },
        { name: "Bootstrap", level: 85 },
        { name: "jQuery", level: 80 },
        { name: "AJAX", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "text-accent",
      skills: [
        { name: "Python", level: 90 },
        { name: "Django", level: 85 },
        { name: "Flask", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "SQLite", level: 90 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "Data Science",
      color: "text-portfolio-accent-purple",
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 85 },
        { name: "Plotly", level: 75 },
        { name: "Scikit-learn", level: 80 },
        { name: "SciPy", level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      color: "text-orange-400",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "BeautifulSoup", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 75 },
        { name: "Docker", level: 70 },
        { name: "API Development", level: 80 },
        { name: "Web Scraping", level: 85 }
      ]
    }
  ];

  const getSkillColor = (categoryIndex: number) => {
    const colors = ['primary', 'accent', 'portfolio-accent-purple', 'orange-400'];
    return colors[categoryIndex];
  };

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            Technical Skills
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="portfolio-gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="portfolio-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-portfolio-muted">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            background: categoryIndex === 0 ? 'hsl(var(--primary))' :
                                       categoryIndex === 1 ? 'hsl(var(--accent))' :
                                       categoryIndex === 2 ? 'hsl(var(--portfolio-accent-purple))' :
                                       '#fb923c'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack Overview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Python", "Django", "Flask", "React", "Angular", "JavaScript",
              "HTML5", "CSS3", "Bootstrap", "MySQL", "PostgreSQL", "MongoDB",
              "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Git", "Linux"
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 bg-secondary/30 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <Card className="portfolio-card border-accent/20 mt-12">
          <CardContent className="p-8 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold portfolio-gradient-text">Continuous Learning</h3>
              <p className="text-lg text-portfolio-muted leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with emerging trends and best practices. 
                I regularly explore new frameworks, tools, and methodologies to enhance my development capabilities and 
                deliver cutting-edge solutions.
              </p>
              <div className="flex justify-center mt-6">
                <Badge className="bg-gradient-primary text-white px-6 py-2">
                  Always Growing, Always Learning
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;