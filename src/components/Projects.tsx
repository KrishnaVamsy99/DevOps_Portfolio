import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, Cloud, Zap, Shield } from "lucide-react";

const projects = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    description: "Designed and implemented a production-ready Kubernetes platform spanning AWS, Azure, and GCP with automated failover and disaster recovery.",
    technologies: ["Kubernetes", "Terraform", "Helm", "Istio", "ArgoCD"],
    achievements: [
      "99.9% uptime across all environments",
      "40% reduction in deployment time",
      "Automated scaling for 100+ microservices"
    ],
    icon: <Cloud className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "CI/CD Pipeline Optimization",
    description: "Built enterprise-grade CI/CD pipelines using GitOps principles, reducing deployment failures by 80% and improving developer velocity.",
    technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "SonarQube"],
    achievements: [
      "80% reduction in deployment failures",
      "Sub-10 minute build times",
      "Integrated security scanning in pipeline"
    ],
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Infrastructure as Code Framework",
    description: "Developed a comprehensive IaC framework using Terraform modules, enabling consistent infrastructure provisioning across multiple environments.",
    technologies: ["Terraform", "Ansible", "AWS", "Azure", "Vault"],
    achievements: [
      "90% faster environment provisioning",
      "100% infrastructure version control",
      "Zero-drift infrastructure management"
    ],
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Security & Compliance Automation",
    description: "Implemented automated security scanning, compliance monitoring, and vulnerability management across the entire infrastructure stack.",
    technologies: ["Vault", "Falco", "OPA", "Trivy", "SIEM Integration"],
    achievements: [
      "100% automated compliance reporting",
      "Real-time security threat detection",
      "SOC2 Type II certification achieved"
    ],
    icon: <Shield className="w-6 h-6" />,
    color: "from-red-500 to-pink-500"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world DevOps implementations that delivered measurable business impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-large transition-smooth bg-card border-0 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} text-white group-hover:shadow-glow transition-smooth`}>
                  {project.icon}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="hover:bg-accent">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-accent">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-card-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Achievements */}
              <div>
                <h4 className="font-semibold mb-3 text-card-foreground">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;