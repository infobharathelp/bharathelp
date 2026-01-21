import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const WEB3FORMS_ACCESS_KEY = "767c65b0-a28a-402f-9e62-2e9ad07962fc";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info.bharathelp@gmail.com",
    subtext: "We'll respond within 24 hours",
  },

  {
    icon: MapPin,
    title: "Visit Us",
    content: "Tech Park, Sector 62",
    subtext: "Noida, India 201301",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    subtext: "9:00 AM - 6:00 PM IST",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ✅ FIX 1: handleChange added
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIX 2: correct access_key usage
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to learn more about our services?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>{item.content}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="p-6 rounded-xl bg-card border">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <Linkedin />
                  <Twitter />
                  <Instagram />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-card border"
              >
                <h3 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                />

                <Button type="submit" className="mt-6">
                  Send Message <Send size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
