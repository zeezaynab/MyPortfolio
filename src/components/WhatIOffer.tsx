import { useState } from 'react';
import { Code, Shield, Users, FileText, Briefcase, Trophy } from 'lucide-react';

const WhatIOffer = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const cards = [
    {
      icon: Code,
      title: "Programming & Development",
      subtitle: "Full-stack development capabilities",
      details: [
        "Languages: Python, C++, Java, PowerShell, Go, HTML, CSS, JavaScript",
        "Tools: Git, GitHub, MongoDB, MySQL",
        "Cross-platform development experience",
        "Version control and collaboration tools"
      ],
      color: "from-primary/10 to-primary/20",
      iconColor: "text-primary"
    },
    {
      icon: Shield,
      title: "Cybersecurity Skills",
      subtitle: "Advanced security expertise",
      details: [
        "Linux and its security tools",
        "Network security and analysis",
        "Digital forensics and incident response",
        "OT and ICS Security assessment",
        "OT penetration testing methodologies"
      ],
      color: "from-accent/10 to-accent/20",
      iconColor: "text-accent"
    },
    {
      icon: Users,
      title: "Soft Skills",
      subtitle: "Professional capabilities",
      details: [
        "Strong communication and collaboration",
        "Critical thinking and analytical mindset",
        "Technical writing and documentation",
        "Research and problem-solving skills",
        "Teaching and knowledge transfer"
      ],
      color: "from-warm/10 to-warm/20",
      iconColor: "text-warm"
    },
    {
      icon: FileText,
      title: "Non-Technical Expertise",
      subtitle: "Content creation & communication",
      details: [
        "Cybersecurity-focused content writing",
        "SEO writing and optimization",
        "Article and blog writing",
        "Technical documentation",
        "Research and analysis reports"
      ],
      color: "from-chai/10 to-chai/20",
      iconColor: "text-chai"
    },
    {
      icon: Briefcase,
      title: "Services I Provide",
      subtitle: "Consulting & professional services",
      details: [
        "OT security assessments",
        "DFIR consulting and analysis",
        "Network security services",
        "Cybersecurity content writing",
        "SOC development and implementation",
        "Security training and workshops"
      ],
      color: "from-cozy/10 to-cozy/20",
      iconColor: "text-cozy"
    },
    {
      icon: Trophy,
      title: "Platforms & CTFs",
      subtitle: "Competitive cybersecurity",
      details: [
        "TryHackMe - Active participant",
        "PicoCTF - Competition experience",
        "HackTheBox - Practical challenges",
        "Continuous learning and skill development"
      ],
      color: "from-secondary/10 to-secondary/20",
      iconColor: "text-secondary"
    }
  ];

  return (
    <section id="offers" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            You must be Wondering
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 font-inter">
            What I Offer
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity skills and services to secure your digital assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const isFlipped = flippedCards.includes(index);

            return (
              <div
                key={index}
                className="relative h-80 cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggleCard(index)}
              >
                <div className={`
                  relative w-full h-full transition-transform duration-700 preserve-3d
                  ${isFlipped ? 'rotate-y-180' : ''}
                `}>
                  
                  {/* Front of card */}
                  <div className={`
                    absolute inset-0 w-full h-full backface-hidden
                    rounded-3xl border-0 shadow-lg bg-gradient-to-br ${card.color}
                    flex flex-col items-center justify-center p-8 text-center
                    hover:shadow-xl hover:scale-105 transition-all duration-300
                  `}>
                    <div className={`
                      w-16 h-16 rounded-2xl bg-card flex items-center justify-center mb-6
                      shadow-lg
                    `}>
                      <IconComponent className={`w-8 h-8 ${card.iconColor}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {card.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {card.subtitle}
                    </p>
                    
                    <div className="mt-4 text-xs text-muted-foreground opacity-70">
                      Click to explore
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className={`
                    absolute inset-0 w-full h-full backface-hidden rotate-y-180
                    rounded-3xl border-0 shadow-lg bg-card/95 backdrop-blur-sm
                    p-6 flex flex-col justify-center
                  `}>
                    <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                      {card.title}
                    </h3>
                    
                    <div className="space-y-2 flex-1">
                      {card.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${card.iconColor.replace('text-', 'bg-')}`}></div>
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-xs text-muted-foreground opacity-70 text-center">
                      Click to go back
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;