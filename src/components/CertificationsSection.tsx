import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to CIP",
      issuer: "OPSWAT",
      year: "2024",
      description: "Critical Infrastructure Protection fundamentals",
      icon: Award
    },
    {
      title: "Connect and Protect",
      issuer: "Google",
      year: "2024",
      description: "Cybersecurity foundations and network security",
      icon: Award
    },
    {
      title: "Git Essential Training",
      issuer: "LinkedIn",
      year: "2024",
      description: "Version control and collaboration skills",
      icon: Award
    },
    {
      title: "CCNA Introduction to Networks",
      issuer: "Cisco",
      year: "2024",
      description: "Network fundamentals and protocols",
      icon: Award
    },
    {
      title: "CC by ISC2",
      issuer: "ISC2",
      year: "2024",
      description: "Cybersecurity foundations and principles",
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 font-inter">
            My Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my cybersecurity expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl border-0 shadow-lg bg-card/50 backdrop-blur-sm animate-fadeIn hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Certificate Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* View Certificate Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl mt-4"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;