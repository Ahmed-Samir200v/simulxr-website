'use client';

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { Menu, X, ChevronRight, Shield, Zap, TrendingUp, Quote } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Home() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: "",
  });

  const submitContactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", company: "", email: "", role: "", message: "" });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to submit form. Please try again.");
    },
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navLinks = [
    { label: "Why Us", href: "#why-us" },
    { label: "Simulations", href: "#simulations" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold font-display">
            <span className="text-white">SIMUL</span>
            <span className="text-orange">XR</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-display uppercase tracking-wider hover:text-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block btn btn-primary">Request Demo</button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-navy-mid">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-display uppercase tracking-wider hover:text-orange transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn btn-primary w-full">Request Demo</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, var(--orange) 1px, transparent 1px), linear-gradient(-45deg, var(--orange) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            animation: "gridShift 20s linear infinite",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="tag mb-6">Industrial VR Training</div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-display leading-tight mb-8 animate-fadeUp">
              Train for the <span className="text-orange">Unthinkable</span>
            </h1>

            <p className="text-lg md:text-xl text-muted max-w-2xl mb-8 animate-fadeUp">
              Immersive VR simulations for high-risk industrial scenarios. Arabic-first, facility-specific, outcome-driven training that reduces human error and cuts costs by 10×.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">
                  <span className="text-orange">80</span>%
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Incidents caused by human error
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">
                  <span className="text-orange">10</span>×
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Lower cost vs. physical drills
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">
                  <span className="text-orange">6</span>+
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Core simulation categories
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-2">2</div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  Languages — English & Arabic
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn btn-primary">Request Pilot Package</button>
              <button className="btn btn-outline">View Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Bar */}
      <div className="bg-orange py-4 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {[
            "Emergency Response",
            "Gas Leak Scenarios",
            "Confined Space Entry",
            "Equipment Shutdown",
            "Permit to Work",
            "HSE Compliance",
            "LOTO Procedures",
            "Competency Assessment",
            "Emergency Response",
            "Gas Leak Scenarios",
            "Confined Space Entry",
          ].map((item, i) => (
            <span
              key={i}
              className="text-navy font-display font-bold uppercase tracking-wider text-sm md:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Three Pillars Section */}
      <section id="why-us" className="section">
        <div className="container mx-auto px-4">
          <div className="section-header center mb-16">
            <div className="tag">Why SimulXR</div>
            <h2 className="mb-4">Safe. Scalable. Measurable.</h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Three pillars that define immersive industrial training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe",
                desc: "Practice high-risk scenarios in a controlled VR environment. No real-world hazards, no equipment damage, no downtime.",
              },
              {
                icon: Zap,
                title: "Scalable",
                desc: "Deploy to 10 or 1,000 workers. Facility-specific training runs on Meta Quest headsets—no IT infrastructure required.",
              },
              {
                icon: TrendingUp,
                title: "Measurable",
                desc: "Real-time dashboards track competency, flag knowledge gaps, and auto-generate HSE audit reports.",
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-8 border border-border rounded-sm hover:border-orange hover:shadow-glow transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-orange mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-display font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simulation Library */}
      <section id="simulations" className="section bg-navy-mid">
        <div className="container mx-auto px-4">
          <div className="section-header center mb-16">
            <div className="tag">Simulation Library</div>
            <h2 className="mb-4">Six Core Simulations</h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Each simulation is facility-specific and outcome-driven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "SIM-01", title: "Emergency Response", desc: "Respond to facility emergencies—fires, chemical spills, evacuations." },
              { num: "SIM-02", title: "Equipment Operation", desc: "Master critical equipment in a safe, repeatable environment." },
              { num: "SIM-03", title: "Confined Space Entry", desc: "Navigate confined space hazards, rescue procedures, and protocols." },
              { num: "SIM-04", title: "New Hire Onboarding", desc: "Accelerate competency for new team members on day one." },
              { num: "SIM-05", title: "Maintenance Procedures", desc: "Practice maintenance workflows without production downtime." },
              { num: "SIM-06", title: "LOTO Procedures", desc: "Master Lockout/Tagout protocols with hands-on, interactive training." },
            ].map((sim, i) => (
              <div
                key={i}
                className="p-8 border border-border rounded-sm hover:border-cyan hover:shadow-glow-cyan transition-all duration-300 group cursor-pointer"
              >
                <div className="text-sm font-mono text-orange mb-4">{sim.num}</div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-orange transition-colors">
                  {sim.title}
                </h3>
                <p className="text-muted mb-6">{sim.desc}</p>
                <div className="flex items-center text-cyan group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-display uppercase tracking-wider">Explore</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-navy-light to-navy-mid border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-border">
            {[
              { display: "80", unit: "%", label: "Industrial accidents — human error root cause" },
              { display: "10", unit: "×", label: "Cost reduction vs. physical safety drills" },
              { display: "75", unit: "%", label: "Higher retention in immersive vs. classroom" },
              { display: "$15", unit: "B", label: "Annual oil & gas training spend globally" },
            ].map((stat, i) => (
              <div key={i} className="py-12 px-6 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-cyan" />
                <div className="text-5xl font-black mb-2">
                  <span className="text-orange">{stat.display}</span>
                  {stat.unit}
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section id="process" className="section">
        <div className="container mx-auto px-4">
          <div className="section-header center mb-16">
            <div className="tag">Process</div>
            <h2 className="mb-4">
              From <span className="text-orange">CAD File</span> to<br />
              Immersive Training
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              We ingest your actual facility designs and SOPs — and deliver a training simulation that reflects your real environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent hidden md:block" />

            {[
              { num: "01", title: "Ingest", desc: "We receive your CAD/BIM/Navisworks files and SOP documents. Your real facility, not a generic template." },
              { num: "02", title: "Build", desc: "Our 3D team converts your designs into photorealistic, interactive VR environments with your equipment, your layout." },
              { num: "03", title: "Deploy", desc: "Training goes live on Meta Quest headsets — on-site or remote. Arabic and English interface, zero IT overhead." },
              { num: "04", title: "Measure", desc: "Real-time dashboards track performance, flag gaps, and produce HSE audit reports automatically." },
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-20 h-20 rounded-full border-2 border-border bg-navy-mid flex items-center justify-center mx-auto mb-6 font-display text-2xl font-black text-orange group hover:border-orange hover:bg-orange/10 transition-all cursor-pointer">
                  {step.num}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-navy-mid">
        <div className="container mx-auto px-4">
          <div className="section-header center mb-16">
            <div className="tag">Testimonials</div>
            <h2 className="mb-4">Trusted by Industry Leaders</h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              MENA industrial leaders are transforming their safety culture with SimulXR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "SimulXR reduced our incident rate by 40% in the first year. The facility-specific training is exactly what we needed.",
                author: "Ahmed Al-Mansouri",
                role: "HSE Director",
                company: "Cairo Petroleum",
              },
              {
                quote: "We trained 500 workers in 3 months instead of 18. The cost savings alone justified the investment.",
                author: "Fatima Al-Kaabi",
                role: "Operations Manager",
                company: "Dubai Industrial Group",
              },
              {
                quote: "The Arabic interface was crucial for our team. Competency improved 65% compared to traditional classroom training.",
                author: "Mohammed Al-Shehri",
                role: "Training Lead",
                company: "Saudi Energy Solutions",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 border border-border rounded-sm hover:border-cyan hover:shadow-glow-cyan transition-all duration-300 hover:translate-y-[-4px]"
              >
                <Quote className="w-8 h-8 text-orange mb-6 opacity-50" />
                <p className="text-base leading-relaxed mb-8 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange/20 border border-orange flex items-center justify-center font-display font-bold text-orange">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted">{testimonial.role}</p>
                    <p className="text-xs text-muted">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section">
        <div className="container mx-auto px-4">
          <div className="section-header center mb-16">
            <div className="tag">Get Started</div>
            <h2 className="mb-4">Request Your Pilot Package</h2>
            <p className="text-base text-muted max-w-2xl mx-auto">
              Let's discuss how SimulXR can transform safety training at your facility
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-navy-light border border-border rounded-sm focus:border-orange focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-navy-light border border-border rounded-sm focus:border-orange focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-navy-light border border-border rounded-sm focus:border-orange focus:outline-none transition-colors"
                />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-navy-light border border-border rounded-sm focus:border-orange focus:outline-none transition-colors"
                >
                  <option value="">Select Your Role</option>
                  <option value="HSE Manager">HSE Manager</option>
                  <option value="Operations Manager">Operations Manager</option>
                  <option value="Training Lead">Training Lead</option>
                  <option value="Facility Manager">Facility Manager</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your facility and training needs..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-navy-light border border-border rounded-sm focus:border-orange focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={submitContactMutation.isPending}
                className="btn btn-primary w-full"
              >
                {submitContactMutation.isPending ? "Submitting..." : "Request Pilot Package"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-mid border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold font-display mb-4">
                <span className="text-white">SIMUL</span>
                <span className="text-orange">XR</span>
              </div>
              <p className="text-sm text-muted mb-4">
                Immersive VR training for industrial safety. Arabic-first, facility-specific, outcome-driven.
              </p>
              <p className="text-lg font-display text-orange">تدرّب على ما لا يُتصوّر</p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-display font-bold uppercase tracking-wider mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-orange transition-colors">Simulations</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Reporting</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-bold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-orange transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h4 className="font-display font-bold uppercase tracking-wider mb-4">Offices</h4>
              <div className="space-y-4 text-sm text-muted">
                <div>
                  <p className="font-display font-bold text-white mb-1">Cairo, Egypt</p>
                  <p>New Cairo, Cairo Governorate</p>
                </div>
                <div>
                  <p className="font-display font-bold text-white mb-1">Dubai, UAE</p>
                  <p>Dubai Silicon Oasis, Dubai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted">
            <p>&copy; 2026 SimulXR. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
