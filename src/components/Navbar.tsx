import { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'What I Offer', id: 'what-i-offer' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-card/80 backdrop-blur-md shadow-lg border-b border-border/50' 
        : 'bg-transparent'
      }
    `}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
            <span className="font-bold text-xl text-foreground">Zainab Tariq</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center">
                <Github className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm" 
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Let's Chat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-4 space-y-4 border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center">
                  <Github className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm" 
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Let's Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;