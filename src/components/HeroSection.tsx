import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import zainabImage from '@/assets/zainab-1.jpg';
import workspaceImage from '@/assets/workspace-1.jpg';
import projectImage from '@/assets/project-1.jpg';
import readingImage from '@/assets/reading-corner.jpg';
import brainstormImage from '@/assets/brainstorm.jpg';
import successImage from '@/assets/success.jpg';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [line1Text, setLine1Text] = useState('');
  const [line2Text, setLine2Text] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [line1Complete, setLine1Complete] = useState(false);
  
  const images = [
    zainabImage,
    workspaceImage,
    projectImage,
    readingImage,
    brainstormImage,
    successImage
  ];

  const line1 = "Hi there!";
  const line2 = "I'm Zainab Tariq";

  useEffect(() => {
    // Type first line
    let i = 0;
    const typingInterval1 = setInterval(() => {
      if (i < line1.length) {
        setLine1Text(line1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval1);
        setLine1Complete(true);
        setShowCursor1(false);
        
        // Start typing second line after a brief pause
        setTimeout(() => {
          setShowCursor2(true);
          let j = 0;
          const typingInterval2 = setInterval(() => {
            if (j < line2.length) {
              setLine2Text(line2.slice(0, j + 1));
              j++;
            } else {
              clearInterval(typingInterval2);
            }
          }, 100);
        }, 500);
      }
    }, 100);

    const cursorInterval1 = setInterval(() => {
      if (!line1Complete) {
        setShowCursor1(prev => !prev);
      }
    }, 500);

    const cursorInterval2 = setInterval(() => {
      if (line1Complete) {
        setShowCursor2(prev => !prev);
      }
    }, 500);

    return () => {
      clearInterval(typingInterval1);
      clearInterval(cursorInterval1);
      clearInterval(cursorInterval2);
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Instagram-style Post */}
        <div className="flex justify-center">
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden max-w-sm w-full animate-fadeIn">
            {/* Post Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <span className="font-medium text-foreground">zainab.designs</span>
            </div>
            
            {/* Image Carousel */}
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={images[currentImage]} 
                alt={`Zainab's work ${currentImage + 1}`}
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
                Bringing creative visions to life ✨
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-4">
            <div className="text-4xl md:text-6xl font-bold text-foreground font-playfair">
              <div className="flex items-center">
                {line1Text}
                <span className={`${showCursor1 ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}>|</span>
              </div>
              <div className="flex items-center mt-2">
                {line2Text}
                <span className={`${showCursor2 ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}>|</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I'm a passionate designer and creative problem-solver who loves crafting beautiful, 
              user-centered experiences that make a difference. Let's create something amazing together!
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