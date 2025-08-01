import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern shopping experience with intuitive design",
      image: "bg-gradient-to-br from-primary to-accent",
      tech: ["React", "TypeScript", "Tailwind"],
      color: "from-primary/20 to-accent/20"
    },
    {
      title: "Wellness App",
      description: "Mental health and mindfulness companion",
      image: "bg-gradient-to-br from-warm to-cozy",
      tech: ["React Native", "Node.js", "MongoDB"],
      color: "from-warm/20 to-cozy/20"
    },
    {
      title: "Creative Portfolio",
      description: "Showcase for digital artists and designers",
      image: "bg-gradient-to-br from-chai to-secondary",
      tech: ["Next.js", "Framer Motion", "Sanity"],
      color: "from-chai/20 to-secondary/20"
    },
    {
      title: "Food Delivery",
      description: "Seamless ordering experience for local restaurants",
      image: "bg-gradient-to-br from-accent to-warm",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      color: "from-accent/20 to-warm/20"
    },
    {
      title: "Learning Platform",
      description: "Interactive education with gamification",
      image: "bg-gradient-to-br from-cozy to-primary",
      tech: ["React", "Django", "WebSockets"],
      color: "from-cozy/20 to-primary/20"
    },
    {
      title: "Business Dashboard",
      description: "Analytics and insights for growing companies",
      image: "bg-gradient-to-br from-secondary to-chai",
      tech: ["Angular", "D3.js", "Firebase"],
      color: "from-secondary/20 to-chai/20"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of work that showcases my passion for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`
                relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-300 cursor-pointer
                hover:shadow-xl hover:scale-105 animate-fadeIn bg-gradient-to-br ${project.color}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                {/* Project Image/Gradient */}
                <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                  {/* Overlay */}
                  <div className={`
                    absolute inset-0 bg-black/20 transition-all duration-300
                    ${hoveredProject === index ? 'bg-black/40' : ''}
                  `}>
                    {/* Tech Stack Pills */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Hover Actions */}
                    <div className={`
                      absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300
                      ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}
                    `}>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/90 hover:bg-white text-foreground"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/90 hover:bg-white text-foreground"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;