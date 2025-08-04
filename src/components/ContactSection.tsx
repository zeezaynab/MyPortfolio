import { useState } from 'react';
import { Send, Mail, MessageSquare, User, Linkedin, Github } from 'lucide-react';
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
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 font-inter">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next cybersecurity project? Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info Side */}
          <div className="flex justify-center items-center animate-fadeIn">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground">
                  I'm always excited to discuss cybersecurity projects, share insights, or explore collaboration opportunities. Feel free to reach out through any of these channels.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/zainab-tariq-a26992285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">Professional networking</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/zeezaynab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">GitHub</h4>
                    <p className="text-sm text-muted-foreground">View my projects & code</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:zaynab.tae12@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-warm" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">zaynab.tae12@gmail.com</p>
                  </div>
                </a>
              </div>
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
        
        {/* Footer */}
        <div className="text-center mt-16 animate-fadeIn">
          <p className="text-muted-foreground">
            Convinced you to hire me or do we need a few chocolates here?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;