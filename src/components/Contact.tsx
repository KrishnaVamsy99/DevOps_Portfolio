import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your infrastructure and accelerate your DevOps journey? 
            Let's discuss how I can help your team succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="p-8 bg-gradient-card border-0 hover:shadow-large transition-smooth">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              Get In Touch
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Email</p>
                  <p className="text-muted-foreground">devops.engineer@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <Button variant="outline" size="icon" className="hover:bg-accent">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-accent">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Download Resume */}
            <Button variant="cta" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </Card>
          
          {/* Quick Stats */}
          <Card className="p-8 bg-gradient-card border-0 hover:shadow-large transition-smooth">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              By the Numbers
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime Achieved</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">System Monitoring</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-center text-muted-foreground text-sm">
                <strong className="text-primary">Available for new opportunities</strong> - 
                Remote or San Francisco Bay Area
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;