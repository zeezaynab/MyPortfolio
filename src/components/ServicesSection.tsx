import { useState } from 'react';
import { Palette, Code, Lightbulb, Users, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-primary/10 to-primary/20",
      iconColor: "text-primary"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Bringing designs to life with clean, efficient code and modern web technologies",
      features: ["React & Vue.js", "Responsive Design", "Performance Optimization", "Cross-browser Testing"],
      color: "from-accent/10 to-accent/20",
      iconColor: "text-accent"
    },
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      description: "Developing comprehensive creative solutions that align with your business goals",
      features: ["Brand Strategy", "Content Planning", "Creative Direction", "Market Research"],
      color: "from-warm/10 to-warm/20",
      iconColor: "text-warm"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert guidance on design decisions, technical implementations, and creative processes",
      features: ["Design Reviews", "Code Audits", "Team Training", "Project Planning"],
      color: "from-chai/10 to-chai/20",
      iconColor: "text-chai"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick iterations and proof-of-concepts to validate ideas before full development",
      features: ["Interactive Mockups", "User Testing", "Feedback Integration", "Fast Iterations"],
      color: "from-cozy/10 to-cozy/20",
      iconColor: "text-cozy"
    },
    {
      icon: Heart,
      title: "Brand Identity",
      description: "Crafting memorable brand experiences that resonate with your target audience",
      features: ["Logo Design", "Color Palettes", "Typography", "Brand Guidelines"],
      color: "from-secondary/10 to-secondary/20",
      iconColor: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-warm to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services I Provide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design and development services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`
                  relative overflow-hidden rounded-3xl border-0 shadow-lg transition-all duration-300 cursor-pointer
                  hover:shadow-xl hover:scale-105 animate-fadeIn bg-gradient-to-br ${service.color}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Service Icon */}
                  <div className={`
                    w-16 h-16 rounded-2xl bg-card flex items-center justify-center transition-all duration-300
                    ${hoveredService === index ? 'scale-110 shadow-lg' : ''}
                  `}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className={`
                    space-y-2 transition-all duration-300
                    ${hoveredService === index ? 'opacity-100' : 'opacity-70'}
                  `}>
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace('text-', 'bg-')}`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Hover Accent */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transition-all duration-300
                    ${hoveredService === index ? 'opacity-100 h-2' : 'opacity-50'}
                  `}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;