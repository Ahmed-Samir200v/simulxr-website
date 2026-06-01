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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/50" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern animate-grid-drift opacity-40" />
        {/* Radial glows */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse,rgba(0,180,216,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse,rgba(232,98,42,0.08)_0%,transparent_70%)]" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="font-label text-[#00B4D8] mb-6 animate-fadeUp">
              {t("XR Industrial Training — MENA & Global", "تدريب XR صناعي — الشرق الأوسط والعالم")}
            </p>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 animate-fadeUp-delay-1">
              <span className="text-white">{t("Train for the", "تدرّب على ما")}</span>
              <br />
              <span className="text-[#E8622A]">{t("Unthinkable.", "لا يُتصوّر.")}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed animate-fadeUp-delay-2">
              {t(
                "Immersive VR simulations that turn oil & gas SOPs into life-saving muscle memory — before workers face real emergencies on site.",
                "محاكاة واقع افتراضي غامرة تحوّل إجراءات التشغيل القياسية لقطاع النفط والغاز إلى ذاكرة عضلية منقذة للأرواح — قبل أن يواجه العمال حالات الطوارئ الحقيقية على أرض الواقع."
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeUp-delay-3">
              <Link href="/contact" className="btn-primary">
                {t("Request Demo", "اطلب عرضاً تجريبياً")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/simulations" className="btn-outline-cyan">
                {t("Explore Simulations", "استكشف المحاكاة")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 animate-fadeUp-delay-4">
              <div className="flex flex-wrap gap-3">
                {["EGPC", "API 14C", "OSHA 1910.119"].map((tag) => (
                  <span key={tag} className="font-label text-[10px] text-[#00B4D8] border border-[#00B4D8]/30 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TICKER BAR ═══════════════════ */}
      <div className="bg-[#E8622A] py-4 overflow-hidden">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {[
            t("Emergency Response", "الاستجابة للطوارئ"),
            t("Gas Leak Scenarios", "سيناريوهات تسريب الغاز"),
            t("Confined Space Entry", "الدخول للفراغات المغلقة"),
            t("Equipment Shutdown", "إغلاق المعدات"),
            t("Permit to Work", "تصريح العمل"),
            t("HSE Compliance", "الامتثال لـ HSE"),
            t("LOTO Procedures", "إجراءات LOTO"),
            t("Competency Assessment", "تقييم الكفاءة"),
            t("Emergency Response", "الاستجابة للطوارئ"),
            t("Gas Leak Scenarios", "سيناريوهات تسريب الغاز"),
            t("Confined Space Entry", "الدخول للفراغات المغلقة"),
            t("Equipment Shutdown", "إغلاق المعدات"),
            t("Permit to Work", "تصريح العمل"),
            t("HSE Compliance", "الامتثال لـ HSE"),
          ].map((item, i) => (
            <span key={i} className="font-display text-sm md:text-base font-bold text-white/90">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════ THREE PILLARS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0A1628]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-tag mb-6 inline-block">
              {t("Why SIMUL XR", "لماذا SIMUL XR")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
              {t("Safe. Scalable.", "آمن. قابل للتوسع.")}
              <br />
              <span className="text-[#E8622A]">{t("Measurable.", "قابل للقياس.")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                icon: Shield,
                title: t("Safe", "آمن"),
                desc: t(
                  "Practice high-risk scenarios in a controlled VR environment. No real-world hazards, no equipment damage, no downtime.",
                  "تدرّب على سيناريوهات عالية الخطورة في بيئة VR محكومة. بدون مخاطر حقيقية، بدون تلف معدات، بدون توقف."
                ),
              },
              {
                icon: Zap,
                title: t("Scalable", "قابل للتوسع"),
                desc: t(
                  "Deploy to 10 or 1,000 workers. Facility-specific training runs on Meta Quest headsets — no IT infrastructure required.",
                  "انشر لـ 10 أو 1,000 عامل. التدريب المخصص للمنشأة يعمل على سماعات Meta Quest — بدون بنية تحتية IT."
                ),
              },
              {
                icon: TrendingUp,
                title: t("Measurable", "قابل للقياس"),
                desc: t(
                  "Real-time dashboards track competency, flag knowledge gaps, and auto-generate HSE audit reports.",
                  "لوحات تحكم في الوقت الفعلي تتبع الكفاءة وتحدد فجوات المعرفة وتنشئ تقارير تدقيق HSE تلقائياً."
                ),
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="card-navy rounded-sm p-10">
                  <div className="w-14 h-14 rounded-sm bg-[#E8622A]/10 border border-[#E8622A]/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#E8622A]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-white/40 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SIMULATIONS OVERVIEW ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0F1F3D]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="section-tag mb-6 inline-block">
                {t("Simulation Library", "مكتبة المحاكاة")}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
                {t("Six Core", "ست محاكاة")}
                <br />
                <span className="text-[#00B4D8]">{t("Simulations.", "أساسية.")}</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-md text-base leading-relaxed">
              {t(
                "Each simulation is built from your facility's actual designs and standard operating procedures — not generic templates.",
                "كل محاكاة مبنية من تصاميم منشأتك الفعلية وإجراءات التشغيل القياسية — وليس قوالب عامة."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              { id: "SIM-01", title: t("Emergency Response", "الاستجابة للطوارئ"), desc: t("Gas leaks, fires, explosions, spill response, and full evacuation scenarios.", "تسريبات الغاز والحرائق والانفجارات والاستجابة للانسكابات وسيناريوهات الإخلاء الكاملة."), img: SIM_IMAGES.emergency },
              { id: "SIM-02", title: t("Equipment Operation", "تشغيل المعدات"), desc: t("Valve isolation, pump operations, control panel procedures from your P&ID.", "عزل الصمامات وتشغيل المضخات وإجراءات لوحة التحكم من مخططات P&ID."), img: SIM_IMAGES.equipment },
              { id: "SIM-03", title: t("Confined Space Entry", "الدخول للفراغات المغلقة"), desc: t("Atmospheric testing, PTW completion, standby rescuer positioning.", "اختبار الغلاف الجوي وإتمام PTW وتحديد موقع الإنقاذ الاحتياطي."), img: SIM_IMAGES.confined },
              { id: "SIM-04", title: t("New Hire Onboarding", "تأهيل الموظفين الجدد"), desc: t("Facility orientation, PPE identification, hazard recognition exercises.", "جولات توجيهية بالمنشأة وتحديد معدات الوقاية وتمارين التعرف على المخاطر."), img: SIM_IMAGES.onboarding },
              { id: "SIM-05", title: t("Maintenance Procedures", "إجراءات الصيانة"), desc: t("AR-guided step-by-step maintenance with 3D overlay instructions.", "إرشادات صيانة خطوة بخطوة بتقنية AR مع تعليمات تراكب ثلاثية الأبعاد."), img: SIM_IMAGES.maintenance },
              { id: "SIM-06", title: t("LOTO Procedures", "إجراءات LOTO"), desc: t("Lockout/Tagout energy isolation with consequence modeling.", "عزل طاقة LOTO مع نمذجة العواقب للانحرافات."), img: SIM_IMAGES.loto },
            ].map((sim) => (
              <div key={sim.id} className="card-navy rounded-sm overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sim.img}
                    alt={sim.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="font-label text-[#E8622A] mb-2 block">{sim.id}</span>
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#E8622A] transition-colors">
                    {sim.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{sim.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/simulations" className="btn-outline-cyan inline-flex">
              {t("View All Simulations", "عرض جميع المحاكاة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="py-20 bg-[#0A1628] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: "%", label: t("Industrial accidents caused by human error", "حوادث صناعية ناتجة عن خطأ بشري") },
              { ref: stat2.ref, count: stat2.count, suffix: "x", label: t("Cost reduction vs. physical drills", "تخفيض التكلفة مقارنة بالتدريبات الميدانية") },
              { ref: stat3.ref, count: stat3.count, suffix: "%", label: t("Higher retention in immersive training", "احتفاظ أعلى في التدريب الغامر") },
              { ref: stat4.ref, count: stat4.count, prefix: "$", suffix: "B", label: t("Annual oil & gas training spend", "إنفاق سنوي على تدريب النفط والغاز") },
            ].map((stat, i) => (
              <div key={i} ref={stat.ref} className="text-center">
                <div className="font-display text-5xl md:text-6xl font-bold text-[#E8622A] mb-3">
                  {stat.prefix || ""}{stat.count}{stat.suffix}
                </div>
                <p className="text-white/40 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS SECTION ═══════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundImage: `url(${PROCESS_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#0A1628]/92" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="section-tag mb-6 inline-block">
              {t("How It Works", "كيف يعمل")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
              {t("From", "من")} <span className="text-[#00B4D8]">{t("CAD File", "ملف CAD")}</span> {t("to", "إلى")}
              <br />
              <span className="text-[#E8622A]">{t("Immersive Training.", "تدريب غامر.")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#E8622A]/30 via-[#00B4D8]/30 to-[#E8622A]/30 hidden md:block" />

            {[
              { num: "01", title: t("Ingest", "الاستيعاب"), desc: t("We receive your CAD/BIM/Navisworks files and SOP documents. Your real facility, not a generic template.", "نستقبل ملفات CAD/BIM/Navisworks وإجراءات SOP الخاصة بك. منشأتك الحقيقية، وليس قالباً عاماً.") },
              { num: "02", title: t("Build", "البناء"), desc: t("Our 3D team converts your designs into photorealistic, interactive VR environments.", "فريقنا ثلاثي الأبعاد يحول تصاميمك إلى بيئات VR واقعية وتفاعلية.") },
              { num: "03", title: t("Deploy", "النشر"), desc: t("Training goes live on Meta Quest headsets — on-site or remote. Arabic and English.", "يبدأ التدريب على سماعات Meta Quest — في الموقع أو عن بعد. بالعربية والإنجليزية.") },
              { num: "04", title: t("Measure", "القياس"), desc: t("Real-time dashboards track performance, flag gaps, and produce HSE audit reports.", "لوحات تحكم في الوقت الفعلي تتبع الأداء وتحدد الفجوات وتنتج تقارير تدقيق HSE.") },
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-[4.5rem] h-[4.5rem] border-2 border-[#E8622A]/30 bg-[#0A1628] flex items-center justify-center mx-auto mb-6 group-hover:border-[#E8622A] group-hover:bg-[#E8622A]/10 transition-all duration-300">
                  <span className="font-display text-xl font-bold text-[#E8622A]">{step.num}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#E8622A] transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0A1628]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-tag mb-6 inline-block">
              {t("Testimonials", "شهادات العملاء")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
              {t("Trusted by Industry", "موثوق من قادة")}
              <br />
              <span className="text-[#E8622A]">{t("Leaders.", "الصناعة.")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                quote: t(
                  "SimulXR reduced our incident rate by 40% in the first year. The facility-specific training is exactly what we needed.",
                  "خفضت SimulXR معدل الحوادث لدينا بنسبة 40% في السنة الأولى. التدريب المخصص للمنشأة هو بالضبط ما كنا نحتاجه."
                ),
                author: t("Ahmed Al-Mansouri", "أحمد المنصوري"),
                role: t("HSE Director", "مدير HSE"),
                company: t("Cairo Petroleum", "القاهرة للبترول"),
              },
              {
                quote: t(
                  "We trained 500 workers in 3 months instead of 18. The cost savings alone justified the investment.",
                  "دربنا 500 عامل في 3 أشهر بدلاً من 18. وفورات التكلفة وحدها بررت الاستثمار."
                ),
                author: t("Fatima Al-Kaabi", "فاطمة الكعبي"),
                role: t("Operations Manager", "مدير العمليات"),
                company: t("Gulf LNG Terminal", "محطة LNG الخليج"),
              },
              {
                quote: t(
                  "The Arabic interface was crucial for our team. Competency improved 65% compared to traditional classroom training.",
                  "الواجهة العربية كانت حاسمة لفريقنا. تحسنت الكفاءة بنسبة 65% مقارنة بالتدريب التقليدي."
                ),
                author: t("Mohammed Al-Shehri", "محمد الشهري"),
                role: t("Training Lead", "قائد التدريب"),
                company: t("Saudi Energy Solutions", "حلول الطاقة السعودية"),
              },
            ].map((testimonial, i) => (
              <div key={i} className="card-navy rounded-sm p-8">
                <Quote className="w-10 h-10 text-[#E8622A]/30 mb-6" />
                <p className="text-white/70 text-base leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-sm bg-[#E8622A]/15 border border-[#E8622A]/30 flex items-center justify-center text-[#E8622A] font-display font-bold">
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

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0F1F3D] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse,rgba(232,98,42,0.08)_0%,transparent_70%)]" />

        <div className="container relative z-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {t("Ready to Transform", "مستعد لتحويل")}
            <br />
            <span className="text-[#E8622A]">{t("Safety Training?", "تدريب السلامة؟")}</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Start with a 90-day pilot — one simulation, 50 trainees, full performance reporting. No commitment beyond the pilot.",
              "ابدأ بتجربة 90 يوماً — محاكاة واحدة، 50 متدرباً، تقرير أداء كامل. بدون التزام بعد التجربة."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {t("Request Pilot Package", "اطلب باقة الـ Pilot")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="btn-ghost">
              {t("View Case Studies", "اطلع على دراسات الحالة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
