import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight,
  Layers3,
  Quote,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/assets";
import { BRAND } from "@/config/branding";

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

const compareRows = [
  {
    feature: "Language & localization",
    simulxr: "Native Arabic content",
    competitors: "No real Arabic in industrial VR",
  },
  {
    feature: "Facility fidelity",
    simulxr: "Built from your actual facility CAD",
    competitors: "Generic templates that don't reflect your site",
  },
  {
    feature: "Delivery scope",
    simulxr: "8 integrated solutions under one roof",
    competitors: "Each competitor covers only a part",
  },
  {
    feature: "Regional execution",
    simulxr: "MENA team — understands procurement culture",
    competitors: "Western companies far from the market",
  },
  {
    feature: "Time to deployment",
    simulxr: "Delivery in 2-14 weeks",
    competitors: "3-18 months with competitors",
  },
  {
    feature: "Commercial fit",
    simulxr: "Affordable for mid-market",
    competitors: "$200K-$2M with TSC & 3T Drilling",
  },
];

function PositiveIndicator() {
  const label = `${BRAND.name} includes this feature`;

  return (
    <svg
      aria-label={label}
      className="h-5 w-5 shrink-0"
      fill="none"
      role="img"
      viewBox="0 0 24 24"
    >
      <title>{label}</title>
      <path d="M12 3v18M3 12h18" stroke="#00B4D8" strokeOpacity="0.28" />
      <path d="M7.5 12.2 10.6 15 16.8 8.5" stroke="#00B4D8" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.2" />
      <rect height="18" rx="2" stroke="#00B4D8" strokeOpacity="0.9" width="18" x="3" y="3" />
    </svg>
  );
}

function NegativeIndicator() {
  return (
    <svg
      aria-label="Competitors do not include this feature"
      className="h-5 w-5 shrink-0 opacity-55"
      fill="none"
      role="img"
      viewBox="0 0 24 24"
    >
      <title>Competitors do not include this feature</title>
      <path d="M6 6h12v12H6z" stroke="#64748B" strokeOpacity="0.55" />
      <path d="m8.25 8.25 7.5 7.5M15.75 8.25l-7.5 7.5" stroke="#64748B" strokeLinecap="square" strokeWidth="1.8" />
    </svg>
  );
}

function ComparisonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${BRAND.name} vs Traditional Industrial VR`,
    itemListElement: compareRows.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: row.feature,
      description: `${BRAND.name}: ${row.simulxr}. Competitors: ${row.competitors}.`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function CompareSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="comparison-heading"
      className="relative overflow-hidden bg-[#0F2A4A] py-24 md:py-32"
    >
      <ComparisonSchema />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,180,216,0.20),transparent_32%),radial-gradient(circle_at_86%_22%,rgba(212,98,43,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.045),rgba(255,255,255,0)_42%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4622B]/45 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <span className="section-eyebrow mb-4 block">
            {t("COMPETITIVE ADVANTAGE", "COMPETITIVE ADVANTAGE")}
          </span>
          <img
            alt={`${BRAND.name} logo`}
            className="mx-auto mb-7 h-12 w-auto"
            decoding="async"
            src={BRAND.logo}
          />
          <h2
            id="comparison-heading"
            className="font-display text-4xl leading-tight text-white sm:text-5xl"
          >
            {t(`${BRAND.name} vs. Traditional Industrial VR`, `${BRAND.name} vs. Traditional Industrial VR`)}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/58">
            {t(
              "A focused comparison for enterprise training teams evaluating Arabic-first industrial XR, digital twin fidelity, procurement readiness, and deployment speed.",
              "A focused comparison for enterprise training teams evaluating Arabic-first industrial XR, digital twin fidelity, procurement readiness, and deployment speed."
            )}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#00B4D8]/20 bg-[#0D2040]/82 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-12 border-b border-white/10 bg-[#0A1E36]/80 text-xs font-semibold uppercase tracking-[0.14em] text-white/58">
            <div className="col-span-12 px-5 py-4 md:col-span-3 md:px-7">
              {t("Evaluation axis", "Evaluation axis")}
            </div>
            <div className="col-span-7 flex items-center gap-3 border-t border-white/10 px-5 py-4 text-[#00B4D8] md:col-span-5 md:border-l md:border-t-0 md:px-7">
              <img
                alt=""
                aria-hidden="true"
                className="h-6 w-auto"
                decoding="async"
                src={BRAND.logo}
              />
              <span>{t(`${BRAND.name} platform`, `${BRAND.name} platform`)}</span>
            </div>
            <div className="col-span-5 border-l border-t border-white/10 px-5 py-4 md:col-span-4 md:border-t-0 md:px-7">
              {t("Typical competitors", "Typical competitors")}
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {compareRows.map((row, index) => (
              <motion.article
                key={row.feature}
                className="group grid grid-cols-12 bg-[#0F2A4A]/54 transition-colors duration-200 hover:bg-[#1A3A5C]/62"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                transition={{ duration: 0.42, delay: 0.06 * index, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, amount: 0.22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              >
                <div className="col-span-12 flex items-center gap-3 px-5 py-5 md:col-span-3 md:px-7">
                  <span className="font-mono text-xs text-[#00B4D8]/70">0{index + 1}</span>
                  <h3 className="text-sm font-semibold text-white/82">{t(row.feature, row.feature)}</h3>
                </div>

                <div className="relative col-span-7 border-t border-white/10 px-5 py-5 md:col-span-5 md:border-l md:border-t-0 md:px-7">
                  <div className="absolute inset-y-3 left-0 hidden w-px bg-[#00B4D8]/50 md:block" />
                  <div className="flex items-start gap-3 rounded-xl border border-[#00B4D8]/28 bg-[#00B4D8]/[0.075] p-4 shadow-[0_12px_36px_rgba(0,180,216,0.08)] transition-colors duration-200 group-hover:border-[#00B4D8]/60 group-hover:bg-[#00B4D8]/[0.11]">
                    <PositiveIndicator />
                    <p className="text-sm font-semibold leading-relaxed text-white">
                      {t(row.simulxr, row.simulxr)}
                    </p>
                  </div>
                </div>

                <div className="col-span-5 border-l border-t border-white/10 px-5 py-5 md:col-span-4 md:border-t-0 md:px-7">
                  <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4">
                    <NegativeIndicator />
                    <p className="text-sm leading-relaxed text-white/46">
                      {t(row.competitors, row.competitors)}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLanguage();

  const stat1 = useCountUp(80, 2000);
  const stat2 = useCountUp(4, 1800);
  const stat3 = useCountUp(100, 2200);
  const stat4 = useCountUp(40, 1600);

  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${IMAGES.heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/95 via-[#0F2A4A]/75 to-[#0F2A4A]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F2A4A] to-transparent" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-6 animate-fadeUp">
              {t("XR INDUSTRIAL TRAINING — EGYPT | GULF | MENA", "محاكاة XR الصناعية — مصر | الخليج | MENA")}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fadeUp-delay-1 text-white">
              {t(
                "Your Workers Know the Procedure. Do They Know It Under Pressure?",
                "موظفوك يعرفون الإجراء. هل يعرفونه تحت الضغط؟"
              )}
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fadeUp-delay-2">
              {t(
                "SIMULXR transforms your facility CAD/BIM data into photorealistic VR training environments — emergency scenarios in Arabic and English, grounded in your real SOPs and scored for competency.",
                "SIMULXR تُحوّل بيانات CAD/BIM الخاصة بمنشأتك إلى بيئات تدريب افتراضية فائقة الواقعية — سيناريوهات الطوارئ بالعربية والإنجليزية، مبنية على SOPs الحقيقية وتُقيَّم بمعايير الكفاءة."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeUp-delay-2">
              <Link href="/contact" className="btn-gold">
                {t("Request a Free Demo", "اطلب عرضاً تجريبياً")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-[#D4622B]/50 hover:text-[#D4622B] transition-all">
                {t("Explore Our Services", "استكشف خدماتنا")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeUp-delay-3">
            {[
              { icon: TrendingUp, value: "80%", label: t("Knowledge retention vs. 20% classroom baseline", "معدل استيعاب 80% مقارنة بـ 20% في التدريب التقليدي") },
              { icon: Zap, value: "4×", label: t("Faster training completion vs. traditional methods", "أسرع 4 مرات في إتمام التدريب عن الأساليب التقليدية") },
              { icon: Shield, value: "$0", label: t("Risk during VR training — zero physical exposure", "صفر مخاطر خلال التدريب الافتراضي — لا تعرض جسدي") },
              { icon: Layers3, value: "100%", label: t("Audit-ready competency data exported per session", "بيانات كفاءة جاهزة للتدقيق تُصدَّر بعد كل جلسة") },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative min-h-32 overflow-hidden rounded-lg border border-white/12 bg-white/[0.055] p-4 text-center backdrop-blur-sm transition-colors duration-200 hover:border-[#00B4D8]/40 hover:bg-[#0F2A4A]/72"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B4D8]/45 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-md border border-[#00B4D8]/25 bg-[#00B4D8]/10 text-[#00B4D8]">
                  <stat.icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <div className="font-display mb-1 text-2xl text-[#D4622B] md:text-3xl">{stat.value}</div>
                <p className="text-xs leading-tight text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THREE PILLARS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("WHY SIMUL XR", "لماذا SIMUL XR")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#0F2A4A] leading-tight">
              {t("Three Reasons SIMUL XR is the Industry Standard", "ثلاثة أسباب تجعل SIMUL XR الاختيار الأول")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t("Safe", "آمن"),
                desc: t(
                  "Workers rehearse gas explosions, equipment failures and evacuations in a zero-risk virtual environment.",
                  "يتدرب العمال على تسريبات الغاز والانفجارات وإجراءات الإخلاء في بيئة افتراضية خالية تماماً من المخاطر."
                ),
              },
              {
                icon: Zap,
                title: t("Scalable", "قابل للتوسع"),
                desc: t(
                  "One simulation trains hundreds simultaneously — on-site or remote — at a fraction of drill costs.",
                  "محاكاة واحدة تُدرّب مئات المشغّلين في آنٍ واحد — في الموقع أو عن بُعد — بجزء من تكلفة التدريبات الميدانية."
                ),
              },
              {
                icon: TrendingUp,
                title: t("Measurable", "قابل للقياس"),
                desc: t(
                  "Real-time competency scoring, performance tracking, and audit-ready HSE compliance reports.",
                  "تقييم الكفاءة في الوقت الفعلي وتتبع الأداء وتقارير HSE جاهزة للتدقيق الرقابي."
                ),
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="card-light rounded-lg p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4622B]/10 border border-[#D4622B]/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#D4622B]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0F2A4A] mb-4">{pillar.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES OVERVIEW (Dark Section) ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0F2A4A]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
            <div>
              <span className="section-eyebrow mb-4 block">
                {t("OUR SOLUTIONS", "حلولنا")}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                {t("Eight Integrated XR Solutions for Industrial Safety", "ثماني حلول XR متكاملة للسلامة الصناعية")}
              </h2>
            </div>
            <Link href="/services" className="btn-outline-dark">
              {t("View All Services", "عرض كل الخدمات")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-white/50 max-w-3xl mb-12 text-lg">
            {t(
              "Purpose-built from your facility CAD/BIM data — emergency response, equipment operation, and competency assessment in one connected platform.",
              "مبنية خصيصاً من بيانات CAD/BIM لمنشأتك — الاستجابة للطوارئ وتشغيل المعدات وتقييم الكفاءة في منصة واحدة متكاملة."
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: t("Emergency Response", "الاستجابة للطوارئ"), desc: t("When a gas leak alarm sounds, your workers have seconds. Did they ever practice this? Immersive VR simulations for gas leaks, fires, and evacuations — built from your facility layout.", "عندما تدق إنذارات تسريب الغاز، لدى عمالك ثوانٍ معدودة. هل تدربوا على ذلك من قبل؟ محاكاة غامرة لتسريبات الغاز والحرائق والإخلاء — مبنية من تخطيط منشأتك."), img: IMAGES.simEmergency },
              { num: "02", title: t("Digital Twin Training", "التدريب بالتوأم الرقمي"), desc: t("A photorealistic virtual replica of your facility — built from actual CAD/BIM/Navisworks files, every device and system reproduced exactly.", "نسخة افتراضية فائقة الواقعية من منشأتك — مبنية من ملفات CAD/BIM/Navisworks الحقيقية، بجميع الأجهزة والأنظمة بدقة متناهية."), img: IMAGES.simConfined },
              { num: "03", title: t("HSE Competency Platform", "منصة كفاءة HSE"), desc: t("Real-time competency scoring, performance tracking, and audit-ready HSE compliance reports for every training session.", "تقييم الكفاءة في الوقت الفعلي وتتبع الأداء وتقارير امتثال HSE جاهزة للتدقيق في كل جلسة تدريبية."), img: IMAGES.simOnboarding },
              { num: "04", title: t("Equipment Operation Simulation", "محاكاة تشغيل المعدات"), desc: t("Before your operator touches the first gas valve — we make them do it a hundred times virtually, in your actual equipment environment.", "قبل أن يلمس مشغّلك صمام الغاز الأول — نجعله يفعل ذلك مئة مرة افتراضياً، في بيئة معداتك الفعلية."), img: IMAGES.simEquipment },
              { num: "05", title: t("Confined Space & LOTO", "الفضاء المحدود والقفل والوسم (LOTO)"), desc: t("Confined space emergencies and lockout/tagout procedures practiced under realistic pressure — with zero physical risk.", "حالات طوارئ الفضاء المحدود وإجراءات القفل والوسم (LOTO) تُمارَس تحت ضغط واقعي — بدون أي مخاطر جسدية."), img: IMAGES.simLoto },
              { num: "06", title: t("AR Field Support", "الدعم الميداني بالواقع المعزز"), desc: t("Step-by-step AR guidance for maintenance and inspection — expert knowledge delivered on-site, on the headset, without flying an expert in.", "إرشاد AR خطوة بخطوة للصيانة والفحص — خبرة فورية في الموقع على الخوذة، دون استدعاء خبير."), img: IMAGES.simMaintenance },
              { num: "07", title: t("Smart Learning Platform", "منصة التعلم الذكي"), desc: t("Adaptive VR scenarios that adjust difficulty based on competency scores, with bilingual support and offline deployment for remote sites.", "سيناريوهات VR تكيّفية تُعدّل مستوى الصعوبة بناءً على درجات الكفاءة، بدعم ثنائي اللغة ونشر بدون إنترنت للمواقع النائية."), img: IMAGES.simOnboarding },
              { num: "08", title: t("Enterprise XR Program", "برنامج XR المؤسسي"), desc: t("A full-service engagement from safety audit to deployment — complete training modernization, managed end to end.", "برنامج متكامل من تدقيق السلامة حتى التشغيل — تحديث كامل لمنظومة التدريب بإدارة شاملة من البداية للنهاية."), img: IMAGES.simEquipment },
            ].map((service, i) => (
              <Link key={i} href="/services" className="card-dark rounded-lg overflow-hidden group cursor-pointer flex flex-col md:flex-row">
                <div className="md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center md:w-3/5">
                  <span className="text-[#D4622B]/60 text-sm font-mono mb-2">{service.num}</span>
                  <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#D4622B] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#0F2A4A]">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMAGES.processBg})` }} />
        <div className="absolute inset-0 bg-[#0F2A4A]/80" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block">
              {t("HOW IT WORKS", "كيف نعمل")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              {t("From CAD File to Live Simulation — 4 Steps", "من ملف CAD إلى محاكاة حية — 4 خطوات")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#D4622B]/30 via-white/10 to-[#D4622B]/30 hidden md:block" />

            {[
              { num: "01", title: t("Ingest", "الاستقبال"), desc: t("We receive your CAD/BIM/Navisworks files and SOP documents. Your real facility — no templates.", "نستقبل ملفات CAD/BIM/Navisworks ووثائق SOP. منشأتك الحقيقية — لا قوالب جاهزة.") },
              { num: "02", title: t("Build", "البناء"), desc: t("Our 3D team converts your designs into a photorealistic XR environment with your actual equipment and layout.", "فريقنا ثلاثي الأبعاد يُحوّل تصاميمك إلى بيئة XR فائقة الواقعية بمعداتك وتخطيطك الفعلي.") },
              { num: "03", title: t("Customize", "التخصيص"), desc: t("We design scenarios based on your site SOPs, incident history, and training priorities.", "نُصمّم السيناريوهات على أساس SOPs موقعك وسجل الحوادث وأولويات التدريب.") },
              { num: "04", title: t("Deploy & Measure", "النشر والقياس"), desc: t("Instant training on Meta Quest — on-site or remote. Real-time dashboards and HSE reports.", "تدريب فوري على Meta Quest — في الموقع أو عن بُعد. لوحات أداء فورية وتقارير HSE.") },
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10 group">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-[#D4622B]/30 bg-[#0F2A4A] flex items-center justify-center mx-auto mb-6 group-hover:border-[#D4622B] group-hover:bg-[#D4622B]/10 transition-all duration-300">
                  <span className="font-display text-xl text-[#D4622B]">{step.num}</span>
                </div>
                <h3 className="font-display text-xl text-white mb-3 group-hover:text-[#D4622B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CompareSection />

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: "%", label: t("Knowledge retention vs. 20% classroom baseline", "معدل الاستيعاب مقارنة بـ 20% في التدريب التقليدي") },
              { ref: stat2.ref, count: stat2.count, suffix: "×", label: t("Faster training completion vs. traditional methods", "أسرع في إتمام التدريب عن الأساليب التقليدية") },
              { ref: stat3.ref, count: stat3.count, suffix: "%", label: t("Audit-ready competency data exported per session", "بيانات كفاءة جاهزة للتدقيق تُصدَّر بعد كل جلسة") },
              { ref: stat4.ref, count: stat4.count, suffix: "%", label: t("Reduction in emergency response time after VR training", "انخفاض وقت الاستجابة للطوارئ بعد التدريب الافتراضي") },
            ].map((stat, i) => (
              <div key={i} ref={stat.ref} className="text-center p-8">
                <div className="font-display text-4xl md:text-5xl mb-3 text-[#D4622B]">
                  {stat.prefix || ""}{stat.count}{stat.suffix}
                </div>
                <p className="text-white/40 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("TESTIMONIALS", "شهادات العملاء")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0F2A4A] leading-tight">
              {t("What Our Clients Say", "ماذا يقول عملاؤنا")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: t(
                  "SIMUL XR transformed how we train for emergencies. Our operators arrive on site having survived the gas leak scenario in XR dozens of times.",
                  "SIMUL XR غيّرت طريقة تدريبنا على الطوارئ. مشغّلونا الآن وصلوا إلى الموقع وقد عاشوا سيناريو تسريب الغاز في XR عشرات المرات."
                ),
                role: t("HSE Director — Upstream Operator, Egypt", "مدير HSE — مشغّل upstream، مصر"),
              },
              {
                quote: t(
                  "Arabic language support was the deciding factor for us. No other vendor offered this.",
                  "دعم اللغة العربية كان القرار الفاصل بالنسبة لنا. لا يوجد مورد آخر قدّم هذا."
                ),
                role: t("L&D Director — Gulf Company", "مدير التدريب والتطوير — شركة خليجية"),
              },
              {
                quote: t(
                  "We trained 200 employees in 90 days at two-thirds of the traditional cost. The numbers speak for themselves.",
                  "درّبنا 200 موظف في 90 يوماً بثلثي التكلفة التقليدية. الأرقام تتحدث عن نفسها."
                ),
                role: t("VP Operations — EPC Contractor, UAE", "نائب رئيس العمليات — مقاول EPC، الإمارات"),
              },
            ].map((testimonial, i) => (
              <div key={i} className="card-light rounded-lg p-8">
                <Quote className="w-8 h-8 text-[#D4622B]/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-400 text-sm font-medium">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#D4622B] relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {t("Ready to Train for the Unthinkable?", "هل أنتم مستعدون للتدريب على ما لا يُتصوَّر؟")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Start with a 90-day pilot — one simulation, 50 trainees, full competency report. Zero operational disruption. Your workforce prepared before real danger strikes.",
              "ابدأ بـ pilot مدته 90 يوماً — محاكاة واحدة، 50 متدرباً، تقرير كفاءة كامل. بدون تعطل للعمليات. فريقك مستعد قبل أن يواجه الخطر الحقيقي."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#D4622B] font-semibold hover:bg-[#F5F6F8] transition-all hover:-translate-y-0.5">
              {t("Request Pilot Package", "اطلب باقة الـ Pilot")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/40 text-white font-medium hover:border-white transition-all hover:-translate-y-0.5">
              {t("View Case Studies", "اطلع على دراسات الحالة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
