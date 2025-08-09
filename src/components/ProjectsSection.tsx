import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Zarker",
      description: "AI-powered PCAP analysis with anomaly detection and data decoding.",
      image: "/lovable-uploads/workspace-1.jpg",
      tech: ["AI", "Python", "Docker", "FastAPI", "Streamlit"],
      color: "from-primary/20 to-accent/20",
      github: "https://github.com/zeezaynab/zarker",
      live: "#"
    },
    {
      title: "Omnilog",
      description: "Comprehensive log analysis platform for security incident detection and forensic investigation.",
      image: "/lovable-uploads/project-1.jpg",
      tech: ["Java SceneBuilder", "OpenIP.io", "Web Scraping", "Whois"],
      color: "from-warm/20 to-cozy/20",
      github: "https://github.com/zeezaynab/omnilog",
      live: "#"
    },
    {
      title: "Phoolbazar",
      description: "E-commerce security framework with advanced fraud detection and secure payment processing.",
      image: "/lovable-uploads/brainstorm.jpg",
      tech: ["Flask", "MongoDB", "API Integrations", "MySQL"],
      color: "from-chai/20 to-secondary/20",
      github: "https://github.com/zeezaynab/phoolBazar",
      live: "#"
    },
    {
      title: "Momo",
      description: "Mobile security application for threat assessment and vulnerability scanning on Android devices.",
      image: "/lovable-uploads/reading-corner.jpg",
      tech: ["Java SceneBuilder", "JNA Libraries", "Low-level Systems"],
      color: "from-accent/20 to-warm/20",
      github: "https://github.com/zeezaynab/momo",
      live: "#"
    },
    {
      title: "OT SOC Development",
      description: "Security Operations Center implementation for Operational Technology environments with specialized monitoring.",
      image: "/lovable-uploads/success.jpg",
      tech: ["Python", "SIEM", "OT Protocols"],
      color: "from-cozy/20 to-primary/20",
      github: "#",
      live: "https://medium.com/@zainabtariq18.zt"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 font-inter">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of work that showcases my passion for creating meaningful digital experiences
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className={`
                    relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-300 cursor-pointer
                    hover:shadow-xl hover:scale-105 animate-fadeIn bg-gradient-to-br from-card via-card to-accent/5
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className={`h-48 w-full relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
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
                          {project.live !== "#" && (
                            <Button
                              size="sm"
                              variant="secondary"
                              className="rounded-full bg-white/90 hover:bg-white text-foreground"
                              asChild
                            >
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Eye className="w-4 h-4 mr-2" />
                                View
                              </a>
                            </Button>
                          )}
                          {project.github !== "#" && (
                            <Button
                              size="sm"
                              variant="secondary"
                              className="rounded-full bg-white/90 hover:bg-white text-foreground"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;