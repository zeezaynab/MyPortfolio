import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/ae10ea33-ef18-4d99-9904-ab86f424545e.png",
      caption: "Hi there! I'm Zainab Tariq, a 5th semester Cybersecurity student passionate about digital security and technology."
    },
    {
      src: "/lovable-uploads/bc3469b6-ba89-4cc6-a57a-866705048da7.png",
      caption: "I'm an active member of IEEE where I've been teaching cybersecurity courses for over a year, covering fundamentals like network security, threat analysis, and security best practices."
    },
    {
      src: "/lovable-uploads/89a767be-409f-4616-a6fb-67f3a76ee559.png",
      caption: "I recently completed my internship at NECOP, working with the ICS department where I gained hands-on experience in Industrial Control Systems security and OT SOC development (NDAs have been signed so here's a goofy picture instead :D)"
    },
    {
      src: "/lovable-uploads/19949cf4-9558-4401-95f5-6e2c3acf634e.png",
      caption: "I'm passionate about cysec content writing and researching cybersecurity topics that matter. My current areas of interests are DFIR and ICS/OT systems."
    },
    {
      src: "/lovable-uploads/cc642c89-23f1-45f8-a3e9-1d5d25f8b579.png",
      caption: "This was a peek into my world, scroll below for all the professional jazz!"
    }
  ];


  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Instagram-style Post */}
        <div className="flex justify-center">
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden max-w-sm w-full animate-fadeIn">
            {/* Post Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <div className="w-8 h-8 rounded-full border-2 border-pink-400 bg-background flex items-center justify-center">
                <span className="text-pink-400 font-bold text-sm">Z</span>
              </div>
              <span className="font-medium text-foreground">zainab_tariq</span>
            </div>
            
            {/* Image Carousel */}
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={images[currentImage].src} 
                alt={`Zainab's story ${currentImage + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Navigation Buttons */}
              <Button
                variant="secondary"
                size="sm"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-card/80 hover:bg-card"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="secondary"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-card/80 hover:bg-card"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? 'bg-primary' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Post Actions */}
            <div className="p-4 space-y-3">
              <div className="flex gap-4">
                <Heart className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
                <MessageCircle className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
                <Share className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
              </div>
              <div className="text-sm text-muted-foreground">
                {images[currentImage].caption}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-4">
            <div className="text-4xl md:text-6xl font-bold text-foreground font-playfair">
              <div>Hi there!</div>
              <div className="mt-2">I'm Zainab Tariq</div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Passionate about Digital forensics and ICS and OT Systems | cyber security content writing and research
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;