'use client';

import { useAuth } from "@/_core/hooks/useAuth";
import { toast } from "sonner";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Shield, Zap, TrendingUp, Quote, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

/* ─── image URLs (webdev-static-assets) ─── */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/hero-bg-auykFKKejJF8W8DzHQxasg.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/about-img-QJqrLprMryBPFrnEz3WUJJ.webp";
const PROCESS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/process-bg-jz2xqA9VwjaWpbsfLuaS3c.webp";

const SIM_IMAGES = {
  emergency: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-emergency-MDu2SyrPqjHMYtfLuFAMMs.webp",
  equipment: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-equipment-jXJpjtz2kpYaq7vK9oas3b.webp",
  confined: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-confined-Ux2cYqBEqiUCxLB8cvH397.webp",
  onboarding: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-onboarding-fHPPuvivUtFDGH7M2vAvm9.webp",
  maintenance: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-maintenance-AqoA7zPcBcpttopqyKJAKU.webp",
  loto: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-loto-5LrYtsPXEMPjJPyZLYC3Md.webp",
};

/* ─── Animated Counter Hook ─── */
function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref, suffix };
}

export default function Home() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: "",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    { label: "About", href: "#about" },
    { label: "Simulations", href: "#simulations" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  /* counter data */
  const stat1 = useCountUp(80, 2000);
  const stat2 = useCountUp(10, 1800);
  const stat3 = useCountUp(75, 2200);
  const stat4 = useCountUp(15, 1600);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ═══════════════════ NAVIGATION ═══════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 nav-glass border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-white">SIMUL</span>
              <span className="text-gold">XR</span>
            </span>
          </a>

          {/* Center pill nav */}
          <div className="hidden lg:flex items-center gap-1 border border-white/15 rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-pill btn-pill-primary text-sm">
              Request Demo
              <span className="w-7 h-7 rounded-full bg-navy/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy/98 nav-glass border-t border-white/5 mt-2">
            <div className="container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-white/80 hover:text-gold text-base font-medium transition-colors rounded-lg hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-pill btn-pill-primary mt-4 justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Label */}
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6 animate-fadeUp" style={{ fontStyle: "italic" }}>
              Immersive Industrial VR Training
            </p>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 animate-fadeUp-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Train for the{" "}
              <span className="text-gold">Unthinkable</span>
            </h1>

            {/* Sub */}
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed animate-fadeUp-delay-2">
              Facility-specific VR simulations for high-risk industrial scenarios. Arabic-first, outcome-driven training that reduces human error and cuts costs by 10x.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeUp-delay-3">
              <a href="#contact" className="btn-pill btn-pill-primary">
                Request Pilot Package
                <span className="w-8 h-8 rounded-full bg-navy/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a href="#simulations" className="btn-pill btn-pill-outline">
                View Simulations
                <Play className="w-4 h-4" />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 animate-fadeUp-delay-3">
              <div className="flex -space-x-3">
                {["A", "F", "M", "S"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-navy bg-gold/20 flex items-center justify-center text-gold text-sm font-bold"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-gold text-sm font-medium">
                Trusted by MENA industrial leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TICKER BAR ═══════════════════ */}
      <div className="bg-gold py-4 overflow-hidden">
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
            "Equipment Shutdown",
            "Permit to Work",
            "HSE Compliance",
          ].map((item, i) => (
            <span
              key={i}
              className="text-navy font-bold uppercase tracking-wider text-sm md:text-base"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════ ABOUT / WHO WE ARE ═══════════════════ */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container">
          {/* Top row: label + tag */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              Pioneers in Industrial VR Training
            </p>
            <span className="hidden md:inline text-xs tracking-[0.15em] uppercase text-gray-400 border border-gray-200 rounded-full px-4 py-1.5">
              [ Who We Are ]
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-16 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About us<span className="text-gold">.</span>
          </h2>

          {/* Two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ABOUT_IMG}
                  alt="VR training in industrial facility"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:right-8 bg-gold text-navy rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>6+</div>
                <div className="text-sm font-semibold mt-1">Core<br/>Simulations</div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                SimulXR delivers immersive VR simulations built from your actual facility designs and SOPs. We transform CAD files into photorealistic training environments that let workers practice high-risk scenarios safely, repeatedly, and at scale.
              </p>

              {/* Feature checklist */}
              <div className="space-y-4 mb-10">
                {[
                  "Facility-specific environments from your CAD/BIM files",
                  "Arabic-first interface with English support",
                  "Real-time competency tracking and HSE reporting",
                  "Runs on Meta Quest — zero IT infrastructure needed",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex gap-10 pt-6 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-black text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                    80<span className="text-gold">%</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Human error<br/>incidents</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                    10<span className="text-gold">x</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Cost<br/>reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SIMULATIONS / SERVICES ═══════════════════ */}
      <section id="simulations" className="py-24 md:py-32 bg-navy">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <span className="section-tag">Simulation Library</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Six Core<br />Simulations<span className="text-gold">.</span>
            </h2>
            <p className="text-white/50 max-w-md text-base leading-relaxed">
              Each simulation is built from your facility's actual designs and standard operating procedures — not generic templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Emergency Response", desc: "Respond to facility emergencies — fires, chemical spills, evacuations.", img: SIM_IMAGES.emergency },
              { num: "02", title: "Equipment Operation", desc: "Master critical equipment in a safe, repeatable environment.", img: SIM_IMAGES.equipment },
              { num: "03", title: "Confined Space Entry", desc: "Navigate confined space hazards, rescue procedures, and protocols.", img: SIM_IMAGES.confined },
              { num: "04", title: "New Hire Onboarding", desc: "Accelerate competency for new team members on day one.", img: SIM_IMAGES.onboarding },
              { num: "05", title: "Maintenance Procedures", desc: "Practice maintenance workflows without production downtime.", img: SIM_IMAGES.maintenance },
              { num: "06", title: "LOTO Procedures", desc: "Master Lockout/Tagout protocols with hands-on, interactive training.", img: SIM_IMAGES.loto },
            ].map((sim, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sim.img}
                    alt={sim.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-gold text-xs font-mono font-semibold tracking-wider mb-2">SIM-{sim.num}</div>
                  <h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {sim.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{sim.desc}</p>
                  <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:translate-x-2 transition-transform duration-200">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="py-20 bg-navy-mid border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: "%", label: "Industrial accidents caused by human error", color: "bg-gold text-navy" },
              { ref: stat2.ref, count: stat2.count, suffix: "x", label: "Cost reduction vs. physical safety drills", color: "bg-navy-light text-white" },
              { ref: stat3.ref, count: stat3.count, suffix: "%", label: "Higher retention in immersive vs. classroom", color: "bg-navy-light text-white" },
              { ref: stat4.ref, count: stat4.count, suffix: "B", label: "Annual oil & gas training spend globally", color: "bg-gold text-navy" },
            ].map((stat, i) => (
              <div
                key={i}
                ref={stat.ref}
                className={`${stat.color} rounded-xl p-8 text-center`}
              >
                <div className="text-5xl md:text-6xl font-black mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {i === 3 ? "$" : ""}{stat.count}{stat.suffix}
                </div>
                <p className="text-sm font-medium opacity-70 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS SECTION ═══════════════════ */}
      <section
        id="process"
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `url(${PROCESS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a2e3a]/90" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="section-tag mb-6 inline-block">Our Process</span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From <span className="text-gold">CAD File</span> to<br />
              Immersive Training<span className="text-gold">.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-6 text-lg">
              We ingest your actual facility designs and SOPs — and deliver a training simulation that reflects your real environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent hidden md:block" />

            {[
              { num: "01", title: "Ingest", desc: "We receive your CAD/BIM/Navisworks files and SOP documents. Your real facility, not a generic template." },
              { num: "02", title: "Build", desc: "Our 3D team converts your designs into photorealistic, interactive VR environments with your equipment." },
              { num: "03", title: "Deploy", desc: "Training goes live on Meta Quest headsets — on-site or remote. Arabic and English, zero IT overhead." },
              { num: "04", title: "Measure", desc: "Real-time dashboards track performance, flag gaps, and produce HSE audit reports automatically." },
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-gold/30 bg-[#0a2e3a] flex items-center justify-center mx-auto mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <span className="text-gold text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>{step.num}</span>
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THREE PILLARS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-tag" style={{ color: "#b8942e", borderColor: "rgba(184,148,46,0.3)" }}>Why SimulXR</span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Safe. Scalable.<br />Measurable<span className="text-gold">.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">
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
                desc: "Deploy to 10 or 1,000 workers. Facility-specific training runs on Meta Quest headsets — no IT infrastructure required.",
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
                  className="p-10 border border-gray-100 rounded-2xl hover:border-gold/40 hover:shadow-lg transition-all duration-300 group bg-white"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section id="testimonials" className="py-24 md:py-32 bg-navy">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-tag">Testimonials</span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted by Industry<br />Leaders<span className="text-gold">.</span>
            </h2>
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
                className="p-8 rounded-2xl bg-navy-mid border border-white/5 hover:border-gold/20 transition-all duration-300 hover:translate-y-[-4px] group"
              >
                <Quote className="w-10 h-10 text-gold/30 mb-6" />
                <p className="text-white/70 text-base leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-white/40 text-xs">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT FORM ═══════════════════ */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <span className="section-tag mb-6 inline-block" style={{ color: "#b8942e", borderColor: "rgba(184,148,46,0.3)" }}>Get Started</span>
              <h2
                className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request Your<br />Pilot Package<span className="text-gold">.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Let's discuss how SimulXR can transform safety training at your facility. Our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">No commitment required</h4>
                    <p className="text-gray-500 text-sm">Start with a free consultation and facility assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick turnaround</h4>
                    <p className="text-gray-500 text-sm">From CAD files to working simulation in weeks, not months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all text-sm"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all text-sm"
                  />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all text-sm"
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
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition-all text-sm resize-none"
                />

                <button
                  type="submit"
                  disabled={submitContactMutation.isPending}
                  className="btn-pill btn-pill-primary w-full justify-center"
                >
                  {submitContactMutation.isPending ? "Submitting..." : "Request Pilot Package"}
                  <span className="w-8 h-8 rounded-full bg-navy/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="bg-navy border-t border-white/5 pt-20 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-white">SIMUL</span>
                <span className="text-gold">XR</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                Immersive VR training for industrial safety. Arabic-first, facility-specific, outcome-driven.
              </p>
              <p className="text-gold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                تدرّب على ما لا يُتصوّر
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Platform</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#simulations" className="hover:text-gold transition-colors">Simulations</a></li>
                <li><a href="#" className="hover:text-gold transition-colors" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>Dashboard</a></li>
                <li><a href="#" className="hover:text-gold transition-colors" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>Reporting</a></li>
                <li><a href="#" className="hover:text-gold transition-colors" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-white/40">
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gold transition-colors" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>Blog</a></li>
                <li><a href="#" className="hover:text-gold transition-colors" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>Careers</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">Offices</h4>
              <div className="space-y-5 text-sm text-white/40">
                <div>
                  <p className="text-white font-medium mb-1">Cairo, Egypt</p>
                  <p>New Cairo, Cairo Governorate</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Dubai, UAE</p>
                  <p>Dubai Silicon Oasis, Dubai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-sm text-white/30">
            <p>&copy; 2026 SimulXR. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
