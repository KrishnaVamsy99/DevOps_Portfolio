import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead DevOps initiatives for a high-growth SaaS platform serving 50K+ users. Architected cloud-native infrastructure and implemented GitOps workflows.",
    achievements: [
      "Reduced infrastructure costs by 35% through optimization",
      "Implemented zero-downtime deployments for 20+ microservices",
      "Led migration from monolith to microservices architecture"
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "ArgoCD", "Prometheus"]
  },
  {
    title: "DevOps Engineer",
    company: "CloudScale Inc",
    location: "Austin, TX",
    period: "2020 - 2022",
    description: "Built and maintained CI/CD pipelines for enterprise applications. Focused on automation, monitoring, and security best practices.",
    achievements: [
      "Automated 90% of manual deployment processes",
      "Established comprehensive monitoring and alerting",
      "Achieved SOC2 compliance for all production systems"
    ],
    technologies: ["Azure", "Docker", "Jenkins", "Ansible", "Grafana"]
  },
  {
    title: "Systems Administrator",
    company: "DataFlow Systems",
    location: "Denver, CO",
    period: "2018 - 2020",
    description: "Managed on-premises and hybrid cloud infrastructure. Specialized in Linux administration, network configuration, and backup solutions.",
    achievements: [
      "Maintained 99.8% system uptime",
      "Migrated legacy systems to cloud infrastructure",
      "Implemented automated backup and disaster recovery"
    ],
    technologies: ["Linux", "VMware", "Python", "Bash", "MySQL"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            A journey of continuous learning and impactful contributions
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-large transition-smooth bg-gradient-card border-0 relative overflow-hidden group"
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-smooth" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column - Company info */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right column - Details */}
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-card-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start space-x-2 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-card-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;