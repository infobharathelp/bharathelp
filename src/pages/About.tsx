import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Users, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in code quality, design, and project delivery.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in transparent communication and treating our clients as partners.",
  },
];

const team = [
  { name: "Rahul Sharma", role: "CEO & Founder", avatar: "RS" },
  { name: "Priya Patel", role: "Lead Developer", avatar: "PP" },
  { name: "Amit Kumar", role: "UI/UX Designer", avatar: "AK" },
  { name: "Sneha Gupta", role: "Project Manager", avatar: "SG" },
];

const milestones = [
  { year: "2019", title: "Founded", description: "BhartHelp was established with a vision to transform digital experiences." },
  { year: "2020", title: "First Major Project", description: "Delivered our first enterprise-level web application." },
  { year: "2021", title: "Team Expansion", description: "Grew to a team of 15+ talented professionals." },
  { year: "2022", title: "International Clients", description: "Started serving clients across 5+ countries." },
  { year: "2023", title: "100+ Projects", description: "Milestone of 100 successful project deliveries." },
  { year: "2024", title: "AI Integration", description: "Incorporated AI solutions into our service offerings." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="gradient-text">BhartHelp</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We are a passionate team of developers, designers, and innovators dedicated to building digital solutions that make a difference. Since our founding, we've helped businesses of all sizes achieve their digital transformation goals.
              </p>
              <p className="text-muted-foreground mb-8">
                Our approach combines technical expertise with creative thinking, ensuring that every project we deliver is not just functional but also delightful to use. We believe in building long-term partnerships with our clients.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">150+</div>
                  <div className="text-muted-foreground text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">20+</div>
                  <div className="text-muted-foreground text-sm">Team Members</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="gradient-border p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-background/50 text-center">
                    <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Our Vision</h4>
                    <p className="text-sm text-muted-foreground">To be the leading IT partner for businesses worldwide</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 text-center">
                    <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Our Mission</h4>
                    <p className="text-sm text-muted-foreground">Empowering businesses through innovative technology</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 text-center">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Global Reach</h4>
                    <p className="text-sm text-muted-foreground">Serving clients in 10+ countries</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">Always available when you need us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at BhartHelp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-background border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The talented people behind BhartHelp's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary-foreground">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              Key milestones in our growth story.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h4>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals to join our growing team. Check out our open positions.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
