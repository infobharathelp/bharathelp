import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Cloud, Palette, Zap, Shield, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver seamless user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment for your business needs.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and beautiful interfaces that users love to interact with.",
  },
];

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security standards" },
  { icon: Users, title: "Dedicated Team", description: "Expert developers at your service" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-background/70 z-10" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Building Digital Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transform Your Ideas Into{" "}
              <span className="gradient-text">Powerful Web Apps</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              BhartHelp delivers cutting-edge web and mobile solutions that help businesses thrive in the digital age. From concept to deployment, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20" />
        </div>
        <div className="absolute top-40 right-40 hidden lg:block animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/20" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground">
              We offer comprehensive digital solutions to help your business succeed in the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/services">
                Explore All Services <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">BhartHelp?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with creative innovation to deliver solutions that exceed expectations. Our team is dedicated to your success.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="gradient-border p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">What We Guarantee</h3>
                <ul className="space-y-4">
                  {[
                    "100% Custom Solutions",
                    "On-Time Delivery",
                    "24/7 Support",
                    "Scalable Architecture",
                    "Modern Tech Stack",
                    "Transparent Pricing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden gradient-border p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's turn your vision into reality. Get in touch with our team today and start your digital transformation journey.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free Consultation <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
