import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Github,
  Globe,
  Headset,
  Layers,
  Linkedin,
  Menu,
  Play,
  Shield,
  Sparkles,
  Star,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "10,000+", label: "Active Users" },
  { value: "500+", label: "Simulations Built" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Countries Served" },
];

const FEATURES = [
  {
    icon: Headset,
    title: "Real-time XR Rendering",
    description:
      "Photorealistic 3D environments at 90+ FPS across all XR headsets and browsers — no compromises.",
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Globe,
    title: "Cross-Platform Deploy",
    description:
      "Build once, deploy everywhere: Meta Quest, HoloLens, Apple Vision Pro, iOS, Android, and web.",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Brain,
    title: "AI-Powered Scenarios",
    description:
      "Dynamic environments that adapt in real-time to learner performance, behavior, and decision paths.",
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive dashboards tracking completion rates, engagement metrics, skill progression, and ROI.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Users,
    title: "Multi-User Collaboration",
    description:
      "Real-time multiplayer simulations supporting up to 50 simultaneous participants in shared environments.",
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC2 Type II certified. End-to-end encryption, SSO/SAML, role-based access, and data residency.",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

const STEPS = [
  {
    number: "01",
    icon: Layers,
    title: "Design Your Simulation",
    description:
      "Use our intuitive no-code studio to build photorealistic XR environments. Import 3D assets or choose from 500+ curated templates across industries.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Deploy to Any Device",
    description:
      "Push your simulation to any XR headset, mobile device, or browser with a single click. No device management overhead.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Track & Optimize",
    description:
      "Monitor learner performance in real-time. AI-powered insights surface opportunities to improve scenarios and maximize outcomes.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "SimulXR reduced our onboarding time by 60% while improving performance metrics across every department. The ROI was clear within two months.",
    author: "Sarah Chen",
    role: "L&D Director",
    company: "Apex Industries",
    initials: "SC",
    color: "bg-indigo-600",
  },
  {
    quote:
      "The most intuitive XR platform we've ever integrated. Our team was building production simulations within hours — not weeks.",
    author: "Marcus Rodriguez",
    role: "CTO",
    company: "NexGen Corp",
    initials: "MR",
    color: "bg-cyan-700",
  },
  {
    quote:
      "Our surgical residents now practice 10× more procedures per session. SimulXR has genuinely moved the needle on patient safety outcomes.",
    author: "Dr. Amelia Foster",
    role: "Medical Director",
    company: "City Medical Center",
    initials: "AF",
    color: "bg-purple-700",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for exploring SimulXR's capabilities.",
    features: [
      "1 simulation project",
      "Up to 5 concurrent users",
      "Basic analytics dashboard",
      "Web-based XR viewer",
      "Community support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For growing teams ready to transform training.",
    features: [
      "10 simulation projects",
      "Up to 50 concurrent users",
      "Full analytics suite",
      "AI-powered adaptive scenarios",
      "All XR device support",
      "Collaboration & multiplayer",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Unlimited scale with dedicated white-glove support.",
    features: [
      "Unlimited simulations & users",
      "White-label option",
      "SSO / SAML integration",
      "Custom integrations & API",
      "Dedicated success manager",
      "99.99% uptime SLA",
      "Data residency options",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Support", "Status"],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Security"],
};

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
            <Headset className="w-4 h-4 text-white" />
          </div>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Simul<span className="text-indigo-400">XR</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-border/60 bg-transparent text-muted-foreground hover:text-foreground"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/20 active:scale-[0.97] transition-transform"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Early Access
          </Button>
          <button
            className="md:hidden p-1.5 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 pb-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glows + grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(129,140,248,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Badge
              variant="outline"
              className="border-indigo-500/30 bg-indigo-500/10 text-indigo-300 px-4 py-1.5 text-sm gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Introducing SimulXR 2.0 — Now with AI Scenarios
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            The Future of{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              XR Simulation
            </span>{" "}
            is Here
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Empower your teams with immersive extended reality simulations. Train faster,
            learn deeper, and perform better — anywhere, on any device.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white h-12 px-8 text-base font-semibold shadow-lg shadow-indigo-500/25 active:scale-[0.97] transition-all"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/60 bg-transparent hover:bg-white/5 hover:border-indigo-500/40 h-12 px-8 text-base font-semibold active:scale-[0.97] transition-all"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 text-sm text-muted-foreground">
            No credit card required &nbsp;·&nbsp; Free plan available &nbsp;·&nbsp; Setup in 5 minutes
          </motion.p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 max-w-5xl mx-auto relative"
        >
          <div className="rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-1">
            <div className="rounded-xl bg-gradient-to-b from-card to-background px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="ml-3 h-5 w-40 rounded-full bg-white/[0.05]" />
                <div className="ml-auto flex items-center gap-2">
                  <div className="h-5 w-16 rounded-full bg-white/[0.04]" />
                  <div className="h-5 w-16 rounded-full bg-white/[0.04]" />
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[
                  { label: "Active Sessions", value: "247", delta: "+12%" },
                  { label: "Completion Rate", value: "94.2%", delta: "+3.1%" },
                  { label: "Avg. Score", value: "87.5", delta: "+5.8%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-4"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                    <p
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-xs text-emerald-400 mt-1">{s.delta}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-muted-foreground font-medium">Performance Overview</p>
                  <div className="flex gap-1">
                    {["1D", "1W", "1M"].map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2 py-0.5 rounded-md ${
                          t === "1W"
                            ? "bg-indigo-500/20 text-indigo-300"
                            : "text-muted-foreground"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-end gap-[3px] h-14">
                  {[40, 60, 52, 76, 68, 88, 82, 93, 86, 94, 90, 97].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-indigo-700/50 to-indigo-400/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress rows */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Medical Training", pct: 78, color: "bg-indigo-400/70" },
                  { label: "Safety Protocols", pct: 92, color: "bg-cyan-400/70" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${r.color}`} />
                      <p className="text-xs text-muted-foreground">{r.label}</p>
                    </div>
                    <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${r.color}`}
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-right text-muted-foreground mt-1">{r.pct}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Glow under mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-indigo-500/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 border-y border-border/40">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <p
                className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
              >
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-indigo-500/30 bg-indigo-500/10 text-indigo-300 mb-4"
            >
              Platform Features
            </Badge>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                simulate reality
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SimulXR unifies design, deployment, collaboration, and analytics in one powerful
              platform — so your team can focus on outcomes, not tooling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={fadeUp}>
                  <Card className="bg-card/50 border-border/50 hover:border-border hover:bg-card transition-all duration-300 group h-full">
                    <CardContent className="p-6">
                      <div
                        className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-5 h-5 ${f.accent}`} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.015]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-4"
            >
              How It Works
            </Badge>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              From idea to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                immersive XR
              </span>{" "}
              in minutes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three simple steps to turn your training content into powerful XR experiences that
              deliver measurable results.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(33.33%_-_24px)] right-[calc(33.33%_-_24px)] h-px bg-gradient-to-r from-indigo-500/20 via-cyan-500/30 to-indigo-500/20" />

            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} variants={fadeUp} className="text-center relative">
                  <div className="relative inline-flex mb-6">
                    <div className="w-[104px] h-[104px] rounded-2xl bg-gradient-to-br from-indigo-600/15 to-cyan-600/10 border border-indigo-500/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-indigo-600 border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{i + 1}</span>
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-purple-500/30 bg-purple-500/10 text-purple-300 mb-4"
            >
              Testimonials
            </Badge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              Trusted by industry leaders worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.author} variants={fadeUp}>
                <Card className="bg-card/50 border-border/50 h-full hover:border-border transition-colors duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}
                      >
                        <span className="text-xs font-bold text-white">{t.initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 bg-white/[0.015]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <Badge
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 mb-4"
            >
              Pricing
            </Badge>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
            >
              Simple, transparent{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                pricing
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Start free and scale as you grow. No hidden fees, no lock-in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PRICING.map((tier) => (
              <motion.div key={tier.name} variants={fadeUp}>
                <Card
                  className={`h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    tier.highlighted
                      ? "bg-gradient-to-b from-indigo-600/20 to-indigo-600/5 border-indigo-500/50 shadow-xl shadow-indigo-500/10"
                      : "bg-card/50 border-border/50 hover:border-border"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
                  )}
                  <CardContent className="p-6">
                    {tier.highlighted && (
                      <Badge className="bg-indigo-500 hover:bg-indigo-500 text-white mb-4 text-xs">
                        Most Popular
                      </Badge>
                    )}
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                    >
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-0.5 mb-2">
                      <span
                        className="text-3xl font-extrabold"
                        style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
                      >
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-sm text-muted-foreground">{tier.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                    <Button
                      className={`w-full mb-6 active:scale-[0.97] transition-all ${
                        tier.highlighted
                          ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/25"
                          : "bg-white/5 hover:bg-white/8 text-foreground border border-border/50"
                      }`}
                    >
                      {tier.cta}
                    </Button>
                    <ul className="space-y-2.5">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              tier.highlighted ? "text-indigo-400" : "text-muted-foreground"
                            }`}
                          />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 via-background to-cyan-600/5 p-10 sm:p-16 text-center"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <Badge
                variant="outline"
                className="border-indigo-500/30 bg-indigo-500/10 text-indigo-300 mb-6"
              >
                Get Early Access
              </Badge>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5"
                style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
              >
                Ready to{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  transform
                </span>{" "}
                your training?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join 10,000+ organizations already using SimulXR to create immersive training
                experiences that deliver real outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 rounded-lg bg-white/[0.06] border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm"
                />
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white h-12 px-6 shrink-0 shadow-lg shadow-indigo-500/25 active:scale-[0.97] transition-all">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No credit card required · Free plan available · Cancel anytime
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Headset className="w-4 h-4 text-white" />
              </div>
              <span
                className="font-bold text-lg tracking-tight"
                style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
              >
                Simul<span className="text-indigo-400">XR</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The next-generation XR simulation platform for enterprise training and education.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SimulXR, Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-rose-400">♥</span> for the XR community
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
