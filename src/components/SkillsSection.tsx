import { Shield, Terminal, Search, Network, FileText, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced", color: "bg-primary" },
        { name: "Java", level: "Intermediate", color: "bg-accent" },
        { name: "C++", level: "Intermediate", color: "bg-warm" },
        { name: "PowerShell", level: "Advanced", color: "bg-chai" },
        { name: "Go", level: "Beginner", color: "bg-cozy" },
        { name: "Ladder Logic", level: "Intermediate", color: "bg-secondary" },
      ]
    },
    {
      title: "Cybersecurity Specialties",
      icon: Shield,
      skills: [
        { name: "OT Penetration Testing", level: "Advanced", color: "bg-primary" },
        { name: "Digital Forensics & DFIR", level: "Advanced", color: "bg-accent" },
        { name: "SOC Development", level: "Intermediate", color: "bg-warm" },
        { name: "Network Security", level: "Advanced", color: "bg-chai" },
        { name: "ICS Security", level: "Advanced", color: "bg-cozy" },
        { name: "Linux Security Tools", level: "Advanced", color: "bg-secondary" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 font-inter">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Cybersecurity student specializing in OT security, digital forensics, and penetration testing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={categoryIndex}
                className="relative overflow-hidden rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm animate-fadeIn"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground font-inter">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                      >
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${skill.color}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;