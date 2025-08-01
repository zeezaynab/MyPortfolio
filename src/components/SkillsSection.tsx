import { useState } from 'react';

const SkillsSection = () => {
  const [hoveredStack, setHoveredStack] = useState<number | null>(null);

  const skillStacks = [
    {
      title: "Design & Creative",
      description: "I craft beautiful and intuitive designs that tell stories and solve problems. From concept to completion, I focus on creating meaningful user experiences.",
      books: [
        { title: "UI/UX Design", color: "bg-primary" },
        { title: "Visual Design", color: "bg-accent" },
        { title: "Branding", color: "bg-warm" },
        { title: "Typography", color: "bg-chai" },
        { title: "Color Theory", color: "bg-cozy" },
        { title: "Prototyping", color: "bg-secondary" },
      ]
    },
    {
      title: "Technical & Development",
      description: "I bridge the gap between design and development, ensuring designs come to life exactly as envisioned with clean, efficient code.",
      books: [
        { title: "Frontend Dev", color: "bg-primary" },
        { title: "React & JS", color: "bg-accent" },
        { title: "CSS & SCSS", color: "bg-warm" },
        { title: "Responsive", color: "bg-chai" },
        { title: "Figma Pro", color: "bg-cozy" },
        { title: "Git & Tools", color: "bg-secondary" },
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cozy to-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of creativity and technical expertise to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {skillStacks.map((stack, stackIndex) => (
            <div 
              key={stackIndex} 
              className="space-y-8 animate-fadeIn"
              style={{ animationDelay: `${stackIndex * 0.2}s` }}
            >
              
              {/* Book Stack */}
              <div className="flex justify-center">
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredStack(stackIndex)}
                  onMouseLeave={() => setHoveredStack(null)}
                >
                  <div className="space-y-1">
                    {stack.books.map((book, bookIndex) => (
                      <div
                        key={bookIndex}
                        className={`
                          relative h-12 w-64 rounded-md shadow-lg transition-all duration-300 
                          ${book.color} hover:scale-105 hover:z-10 hover:shadow-xl
                          ${hoveredStack === stackIndex ? 'animate-float' : ''}
                        `}
                        style={{
                          animationDelay: `${bookIndex * 0.1}s`,
                          transform: hoveredStack === stackIndex ? `translateX(${bookIndex * 2}px)` : 'none'
                        }}
                      >
                        {/* Book Spine */}
                        <div className="absolute inset-y-0 left-0 w-3 bg-black/20 rounded-l-md"></div>
                        
                        {/* Book Title */}
                        <div className="flex items-center justify-center h-full text-white font-semibold text-sm px-4">
                          {book.title}
                        </div>
                        
                        {/* Book Pages Effect */}
                        <div className="absolute inset-y-1 right-0 w-1 bg-white/30 rounded-r-sm"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Shadow Base */}
                  <div className="absolute bottom-0 left-2 right-2 h-2 bg-black/10 rounded-full blur-sm"></div>
                </div>
              </div>

              {/* Description */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {stack.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  {stack.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;