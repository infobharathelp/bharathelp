import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icon: Globe,
    gradient: "from-primary to-accent",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Cross-platform mobile app for patient management, appointment scheduling, and telemedicine features.",
    tech: ["React Native", "Firebase", "WebRTC"],
    icon: Smartphone,
    gradient: "from-accent to-primary",
  },
  {
    title: "CRM Dashboard",
    category: "Web Application",
    description: "Custom CRM solution with real-time analytics, lead tracking, and automated reporting.",
    tech: ["Vue.js", "Python", "PostgreSQL"],
    icon: Code,
    gradient: "from-primary to-accent",
  },
  {
    title: "Food Delivery App",
    category: "Mobile Development",
    description: "On-demand food delivery platform with real-time tracking, payment processing, and restaurant management.",
    tech: ["Flutter", "Node.js", "MongoDB"],
    icon: Smartphone,
    gradient: "from-accent to-primary",
  },
  {
    title: "Learning Management System",
    category: "Web Development",
    description: "Comprehensive LMS with course creation, video streaming, quizzes, and certification features.",
    tech: ["Next.js", "GraphQL", "AWS"],
    icon: Globe,
    gradient: "from-primary to-accent",
  },
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    description: "Financial analytics platform with real-time data visualization and automated reporting.",
    tech: ["React", "Python", "D3.js"],
    icon: Code,
    gradient: "from-accent to-primary",
  },
];

const categories = ["All", "Web Development", "Mobile Development", "Web Application"];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest projects and see how we've helped businesses achieve their digital goals. Each project showcases our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary-foreground/80" />
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-background/80 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-foreground" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-primary mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life. Our team is ready to help you build something amazing.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start a Project <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
