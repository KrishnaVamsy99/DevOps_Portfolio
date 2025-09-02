import { Card } from "@/components/ui/card";
import { 
  Cloud, 
  Container, 
  Database, 
  GitBranch, 
  Monitor, 
  Server, 
  Settings, 
  Shield,
  Workflow,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: <Cloud className="w-8 h-8" />,
    skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    color: "from-blue-500 to-sky-500"
  },
  {
    title: "Containerization",
    icon: <Container className="w-8 h-8" />,
    skills: ["Docker", "Kubernetes", "Helm", "Docker Swarm"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "CI/CD & Automation",
    icon: <GitBranch className="w-8 h-8" />,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Infrastructure as Code",
    icon: <Settings className="w-8 h-8" />,
    skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Monitoring & Logging",
    icon: <Monitor className="w-8 h-8" />,
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Security & Compliance",
    icon: <Shield className="w-8 h-8" />,
    skills: ["Vault", "Security Scanning", "Compliance", "IAM"],
    color: "from-red-500 to-rose-500"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skills across the entire DevOps lifecycle, from development to deployment and monitoring
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-large transition-smooth bg-gradient-card border-0 group hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4 group-hover:shadow-glow transition-smooth`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;