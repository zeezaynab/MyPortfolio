import { useState } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isPouring, setIsPouring] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPouring(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! I'll get back to you soon. ☕",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsPouring(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-cozy via-warm to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Grab Some Chai
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's chat over a cup of chai and bring your ideas to life!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Chai Animation Side */}
          <div className="flex justify-center items-center">
            <div className="relative animate-fadeIn">
              
              {/* Kettle */}
              <div className={`
                relative transition-all duration-1000 ${isPouring ? 'animate-pour' : 'animate-float'}
              `}>
                <svg width="200" height="160" viewBox="0 0 200 160" className="drop-shadow-lg">
                  {/* Kettle Body */}
                  <ellipse cx="100" cy="100" rx="60" ry="40" fill="hsl(var(--chai))" className="drop-shadow-md"/>
                  
                  {/* Kettle Handle */}
                  <path 
                    d="M 40 85 Q 15 85 15 110 Q 15 135 40 135" 
                    stroke="hsl(var(--chai-foreground))" 
                    strokeWidth="6" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                  
                  {/* Kettle Spout */}
                  <path 
                    d="M 160 90 Q 180 85 185 95 Q 190 105 180 110" 
                    stroke="hsl(var(--chai))" 
                    strokeWidth="8" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                  
                  {/* Steam */}
                  {isPouring && (
                    <g className="animate-pulse">
                      <path d="M 185 105 Q 190 120 185 135" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none" opacity="0.6"/>
                      <path d="M 190 108 Q 195 123 190 138" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none" opacity="0.4"/>
                      <path d="M 195 110 Q 200 125 195 140" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none" opacity="0.3"/>
                    </g>
                  )}
                </svg>
              </div>

              {/* Chai Cup */}
              <div className="absolute -bottom-8 -right-12">
                <svg width="80" height="60" viewBox="0 0 80 60">
                  {/* Cup Body */}
                  <ellipse cx="40" cy="45" rx="25" ry="12" fill="hsl(var(--card))"/>
                  <rect x="15" y="25" width="50" height="20" fill="hsl(var(--card))" rx="2"/>
                  
                  {/* Chai Liquid */}
                  <ellipse cx="40" cy="35" rx="20" ry="8" fill="hsl(var(--primary))" opacity="0.8"/>
                  
                  {/* Cup Handle */}
                  <path 
                    d="M 65 35 Q 75 35 75 45 Q 75 55 65 55" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeWidth="3" 
                    fill="none"
                  />
                  
                  {/* Steam from Cup */}
                  <g className="animate-pulse" opacity="0.6">
                    <path d="M 35 25 Q 37 15 35 10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none"/>
                    <path d="M 40 25 Q 42 15 40 10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none"/>
                    <path d="M 45 25 Q 47 15 45 10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none"/>
                  </g>
                </svg>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-8 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 left-8 w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-8 -right-4 w-2 h-2 bg-warm rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <Card className="rounded-3xl shadow-xl border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="rounded-xl border-0 bg-muted/50 h-12"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="rounded-xl border-0 bg-muted/50 h-12"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello! ☕"
                      className="rounded-xl border-0 bg-muted/50 min-h-32 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isPouring}
                    className="w-full rounded-xl h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isPouring ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Brewing your message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;