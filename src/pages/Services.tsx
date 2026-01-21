import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Cloud, Palette, Database, Settings, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Build powerful, scalable web applications using modern technologies like React, Node.js, and cloud services. We create responsive, fast, and SEO-friendly websites.",
    features: ["React & Next.js", "Node.js Backend", "RESTful APIs", "Database Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that work seamlessly on iOS and Android. Native performance with React Native and Flutter.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and visually stunning interfaces. From wireframes to final designs.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and management. AWS, Google Cloud, and Azure expertise for your hosting needs.",
    features: ["AWS & Azure", "Auto-scaling", "CI/CD Pipelines", "DevOps"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Design and optimize databases for performance and reliability. SQL and NoSQL solutions tailored to your needs.",
    features: ["PostgreSQL", "MongoDB", "Data Migration", "Performance Tuning"],
  },
  {
    icon: Settings,
    title: "API Integration",
    description: "Connect your applications with third-party services and APIs. Payment gateways, social media, and custom integrations.",
    features: ["Payment Gateways", "Social APIs", "Custom APIs", "Webhooks"],
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description: "Complete e-commerce platforms with secure payments, inventory management, and customer engagement tools.",
    features: ["Shopping Cart", "Payment Processing", "Inventory System", "Analytics"],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your applications running smoothly. Security updates and feature enhancements.",
    features: ["24/7 Monitoring", "Security Updates", "Bug Fixes", "Feature Updates"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We understand your requirements and goals" },
  { step: "02", title: "Planning", description: "Detailed project roadmap and timeline" },
  { step: "03", title: "Design", description: "UI/UX design and prototype creation" },
  { step: "04", title: "Development", description: "Building your solution with best practices" },
  { step: "05", title: "Testing", description: "Rigorous testing and quality assurance" },
  { step: "06", title: "Launch", description: "Deployment and post-launch support" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital solutions tailored to transform your business. From concept to deployment, we deliver excellence at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-card border border-border">
                <span className="text-6xl font-bold gradient-text opacity-20 absolute top-4 right-6">
                  {item.step}
                </span>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us to discuss your specific requirements. We'll create a tailored solution that fits your needs and budget.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
