import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Shield, Zap, TrendingUp, Quote } from "lucide-react";
import { Link } from "wouter";

/* ─── Image URLs (webdev-static-assets) ─── */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/hero-bg-auykFKKejJF8W8DzHQxasg.webp";
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
function useCountUp(end: number, duration = 2000) {
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

  return { count, ref };
}

export default function Home() {
  const { t } = useLanguage();

  const stat1 = useCountUp(80, 2000);
  const stat2 = useCountUp(10, 1800);
  const stat3 = useCountUp(75, 2200);
  const stat4 = useCountUp(15, 1600);

  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HERO_BG})` }} />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/95 via-[#0B1120]/75 to-[#0B1120]/40" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Eyebrow - gold italic */}
            <p className="section-eyebrow mb-6 animate-fadeUp">
              {t("EXCELLENCE IN EVERY SIMULATION", "التميز في كل محاكاة")}
            </p>

            {/* Headline - large serif */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-8 animate-fadeUp-delay-1 text-white">
              {t("Innovative training solutions for industries", "حلول تدريبية مبتكرة للصناعات")}
            </h1>

            {/* CTA - white pill with gold arrow */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeUp-delay-2">
              <Link href="/simulations" className="btn-pill">
                {t("Our Simulations", "محاكاتنا")}
                <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#0B1120]" />
                </span>
              </Link>
            </div>

            {/* Social proof - avatar stack + gold text */}
            <div className="flex items-center gap-4 animate-fadeUp-delay-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center text-gold text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-[#0B1120] text-xs font-bold">
                  +
                </div>
              </div>
              <p className="text-gold text-sm font-medium">
                {t("More than 3000+ trained workers", "أكثر من 3000+ عامل مدرّب")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHO WE ARE (Light Section) ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <span className="text-xs text-gray-400 tracking-[0.2em] uppercase">
              {t("GLOBAL LEADERS IN INDUSTRIAL XR TRAINING", "رواد عالميون في تدريب XR الصناعي")}
            </span>
            <span className="section-tag">[ {t("WHO WE ARE", "من نحن")} ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Images */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={SIM_IMAGES.emergency} alt="VR Training" className="w-full h-full object-cover" />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-4 bg-white shadow-xl rounded-lg p-6 border border-gray-100">
                <div className="font-display text-4xl text-[#0B1120]">30</div>
                <p className="text-gray-500 text-sm">{t("Years of experience", "سنة خبرة")}</p>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0B1120] mb-6">
                {t("About us", "من نحن")}<span className="text-gold">.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(
                  "SimulXR builds immersive VR simulations that turn oil & gas SOPs into life-saving muscle memory. We convert your facility's actual CAD files and procedures into photorealistic, interactive training environments — before workers face real emergencies on site.",
                  "تبني SimulXR محاكاة واقع افتراضي غامرة تحوّل إجراءات التشغيل القياسية لقطاع النفط والغاز إلى ذاكرة عضلية منقذة للأرواح. نحوّل ملفات CAD الفعلية لمنشأتك وإجراءاتها إلى بيئات تدريب واقعية وتفاعلية."
                )}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  t("Facility-specific, not generic templates", "مخصص للمنشأة، وليس قوالب عامة"),
                  t("Arabic-first interface for MENA workforce", "واجهة عربية أولاً للقوى العاملة في الشرق الأوسط"),
                  t("Real-time competency dashboards", "لوحات تحكم كفاءة في الوقت الفعلي"),
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-gold">
                {t("Learn More", "اعرف المزيد")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES / SIMULATIONS (Dark Section) ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0B1120]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="section-eyebrow mb-4 block">
                {t("WHAT WE OFFER", "ما نقدمه")}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                {t("Services", "خدماتنا")}<span className="text-gold">.</span>
              </h2>
            </div>
            <Link href="/simulations" className="btn-outline-dark">
              {t("View All", "عرض الكل")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t("Emergency Response", "الاستجابة للطوارئ"), img: SIM_IMAGES.emergency },
              { title: t("Equipment Operation", "تشغيل المعدات"), img: SIM_IMAGES.equipment },
              { title: t("Confined Space Entry", "الدخول للفراغات المغلقة"), img: SIM_IMAGES.confined },
              { title: t("New Hire Onboarding", "تأهيل الموظفين الجدد"), img: SIM_IMAGES.onboarding },
              { title: t("Maintenance Procedures", "إجراءات الصيانة"), img: SIM_IMAGES.maintenance },
              { title: t("LOTO Procedures", "إجراءات LOTO"), img: SIM_IMAGES.loto },
            ].map((sim, i) => (
              <div key={i} className="card-dark rounded-lg overflow-hidden group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sim.img}
                    alt={sim.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors">
                    {sim.title}
                  </h3>
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                    <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: "%", label: t("Accidents from human error", "حوادث ناتجة عن خطأ بشري"), gold: true },
              { ref: stat2.ref, count: stat2.count, suffix: "x", label: t("Cost reduction vs. drills", "تخفيض التكلفة مقارنة بالتدريبات"), gold: false },
              { ref: stat3.ref, count: stat3.count, suffix: "%", label: t("Higher retention rate", "معدل احتفاظ أعلى"), gold: false },
              { ref: stat4.ref, count: stat4.count, prefix: "$", suffix: "B", label: t("Annual training spend", "إنفاق سنوي على التدريب"), gold: true },
            ].map((stat, i) => (
              <div key={i} ref={stat.ref} className={`p-8 rounded-lg text-center ${stat.gold ? "stats-gold" : "stats-dark"}`}>
                <div className={`font-display text-4xl md:text-5xl mb-3 ${stat.gold ? "text-[#0B1120]" : "text-gold"}`}>
                  {stat.prefix || ""}{stat.count}{stat.suffix}
                </div>
                <p className={`text-sm leading-snug ${stat.gold ? "text-[#0B1120]/70" : "text-white/50"}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ MARQUEE / TICKER ═══════════════════ */}
      <div className="py-6 bg-gray-50 overflow-hidden border-y border-gray-200">
        <div className="flex gap-16 animate-ticker whitespace-nowrap">
          {[
            t("Emergency Response", "الاستجابة للطوارئ"),
            t("Oil & Gas", "النفط والغاز"),
            t("Materials", "المواد"),
            t("Automotive", "السيارات"),
            t("Power & Energy", "الطاقة والكهرباء"),
            t("HSE Compliance", "الامتثال لـ HSE"),
            t("LOTO Procedures", "إجراءات LOTO"),
            t("Emergency Response", "الاستجابة للطوارئ"),
            t("Oil & Gas", "النفط والغاز"),
            t("Materials", "المواد"),
            t("Automotive", "السيارات"),
            t("Power & Energy", "الطاقة والكهرباء"),
          ].map((item, i) => (
            <span key={i} className="text-gray-300 text-3xl md:text-4xl font-light tracking-wide" style={{ fontFamily: "'DM Serif Display', serif" }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════ WORK PROCESS (Dark Section) ═══════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#0B1120]">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${PROCESS_BG})` }} />
        <div className="absolute inset-0 bg-[#0B1120]/80" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block">
              {t("HOW IT WORKS", "كيف يعمل")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              {t("Work process", "مراحل العمل")}<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-gold/30 via-white/10 to-gold/30 hidden md:block" />

            {[
              { num: "01", title: t("Ingest", "الاستيعاب"), desc: t("We receive your CAD/BIM files and SOP documents. Your real facility.", "نستقبل ملفات CAD/BIM وإجراءات SOP. منشأتك الحقيقية.") },
              { num: "02", title: t("Build", "البناء"), desc: t("Our 3D team converts designs into photorealistic VR environments.", "فريقنا يحول التصاميم إلى بيئات VR واقعية.") },
              { num: "03", title: t("Deploy", "النشر"), desc: t("Training goes live on Meta Quest — on-site or remote.", "يبدأ التدريب على Meta Quest — في الموقع أو عن بعد.") },
              { num: "04", title: t("Measure", "القياس"), desc: t("Dashboards track performance and produce HSE audit reports.", "لوحات تحكم تتبع الأداء وتنتج تقارير تدقيق HSE.") },
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-gold/30 bg-[#0B1120] flex items-center justify-center mx-auto mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <span className="font-display text-xl text-gold">{step.num}</span>
                </div>
                <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THREE PILLARS (Light Section) ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block text-gold">
              {t("WHY SIMUL XR", "لماذا SIMUL XR")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0B1120] leading-tight">
              {t("Our features", "مميزاتنا")}<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t("Safe", "آمن"),
                desc: t(
                  "Practice high-risk scenarios in a controlled VR environment. No real-world hazards, no equipment damage, no downtime.",
                  "تدرّب على سيناريوهات عالية الخطورة في بيئة VR محكومة. بدون مخاطر حقيقية."
                ),
              },
              {
                icon: Zap,
                title: t("Scalable", "قابل للتوسع"),
                desc: t(
                  "Deploy to 10 or 1,000 workers. Facility-specific training runs on Meta Quest headsets — no IT infrastructure required.",
                  "انشر لـ 10 أو 1,000 عامل. بدون بنية تحتية IT مطلوبة."
                ),
              },
              {
                icon: TrendingUp,
                title: t("Measurable", "قابل للقياس"),
                desc: t(
                  "Real-time dashboards track competency, flag knowledge gaps, and auto-generate HSE audit reports.",
                  "لوحات تحكم في الوقت الفعلي تتبع الكفاءة وتنشئ تقارير تدقيق HSE تلقائياً."
                ),
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="card-light rounded-lg p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0B1120] mb-4">{pillar.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS (Dark Section) ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0B1120]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block">
              {t("TESTIMONIALS", "شهادات العملاء")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              {t("What our clients say", "ماذا يقول عملاؤنا")}<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-10 italic font-display">
              "{t(
                "SimulXR reduced our incident rate by 40% in the first year. The facility-specific training is exactly what we needed.",
                "خفضت SimulXR معدل الحوادث لدينا بنسبة 40% في السنة الأولى. التدريب المخصص للمنشأة هو بالضبط ما كنا نحتاجه."
              )}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center text-gold font-display text-lg">
                A
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{t("Ahmed Al-Mansouri", "أحمد المنصوري")}</p>
                <p className="text-white/40 text-sm">{t("HSE Director, Cairo Petroleum", "مدير HSE، القاهرة للبترول")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="py-24 md:py-32 bg-gold relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0B1120] mb-6">
            {t("Ready to transform safety training?", "مستعد لتحويل تدريب السلامة؟")}
          </h2>
          <p className="text-[#0B1120]/70 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Start with a 90-day pilot — one simulation, 50 trainees, full performance reporting. No commitment beyond the pilot.",
              "ابدأ بتجربة 90 يوماً — محاكاة واحدة، 50 متدرباً، تقرير أداء كامل. بدون التزام بعد التجربة."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B1120] text-white font-medium hover:bg-[#0B1120]/90 transition-all hover:-translate-y-0.5">
              {t("Request Pilot Package", "اطلب باقة الـ Pilot")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#0B1120]/30 text-[#0B1120] font-medium hover:border-[#0B1120] transition-all hover:-translate-y-0.5">
              {t("View Case Studies", "اطلع على دراسات الحالة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
