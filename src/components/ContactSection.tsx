import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 font-inter">
            Connect With Me
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        {/* Contact Methods - Centered Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/zainab-tariq-a26992285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group text-center animate-fadeIn hover:scale-105 transition-transform duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">LinkedIn</h4>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:zaynab.tae12@gmail.com" 
              className="group text-center animate-fadeIn hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-medium text-foreground">Email</h4>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/zeezaynab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group text-center animate-fadeIn hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">GitHub</h4>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;