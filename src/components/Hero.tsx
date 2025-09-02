import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/devops-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          DevOps
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Engineer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Automating infrastructure, optimizing workflows, and building scalable systems 
          that power modern applications
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a href="#" className="text-blue-200 hover:text-white transition-smooth">
            <Github size={24} />
          </a>
          <a href="#" className="text-blue-200 hover:text-white transition-smooth">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-blue-200 hover:text-white transition-smooth">
            <Mail size={24} />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-blue-200 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;