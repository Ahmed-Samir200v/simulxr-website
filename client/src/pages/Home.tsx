import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Shield, Zap, TrendingUp, Quote, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "wouter";
import { IMAGES } from "@/lib/assets";

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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${IMAGES.heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A]/95 via-[#0F2A4A]/75 to-[#0F2A4A]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F2A4A] to-transparent" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-6 animate-fadeUp">
              {t("XR INDUSTRIAL TRAINING — EGYPT | GULF | MENA", "محاكاة XR الصناعية — مصر | الخليج | MENA")}
            </p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-6 animate-fadeUp-delay-1 text-white">
              {t("Before It Happens", "قبل أن يحدث")}<span className="text-gold">.</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fadeUp-delay-2">
              {t(
                "Industrial XR simulations that turn oil & gas safety procedures into real muscle memory — before facing real danger on site.",
                "محاكاة واقع افتراضي صناعية تُحوّل إجراءات السلامة ومعدات النفط والغاز إلى ذاكرة عضلية حقيقية — قبل مواجهة الخطر الحقيقي."
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
              { value: "80%", label: t("Industrial accidents caused by human error", "من الحوادث الصناعية سببها الخطأ البشري"), source: "IOGP" },
              { value: "10×", label: t("Cost reduction vs. physical drills", "توفير في التكلفة مقارنة بالتدريبات الميدانية"), source: "Industry" },
              { value: "4", label: t("Integrated digital services", "خدمات رقمية متكاملة تحت سقف واحد"), source: "SIMUL XR" },
              { value: "2", label: t("Languages — Arabic & English", "لغة — عربي وإنجليزي"), source: "SIMUL XR" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                <div className="font-display text-2xl md:text-3xl text-[#D4622B] mb-1">{stat.value}</div>
                <p className="text-white/50 text-xs leading-tight">{stat.label}</p>
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
                {t("OUR DIGITAL SERVICES", "خدماتنا الرقمية")}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                {t("Four Specialized Digital Services for Oil & Gas", "أربع خدمات رقمية متخصصة لصناعة النفط والغاز")}
              </h2>
            </div>
            <Link href="/services" className="btn-outline-dark">
              {t("View All Services", "عرض كل الخدمات")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-white/50 max-w-3xl mb-12 text-lg">
            {t(
              "Complete XR solutions — standard simulations ready to deploy, or fully custom built from your facility data.",
              "حلول XR متكاملة — بمحاكاة قياسية جاهزة أو مخصصة بالكامل من بيانات منشأتك الفعلية."
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: t("Equipment & Machinery Simulation", "محاكاة المعدات والآلات"), desc: t("Before your operator touches the first gas valve — we make them do it a hundred times virtually.", "قبل أن يلمس مشغّلك صمام الغاز الأول — نجعله يفعل ذلك مئة مرة في الافتراضي."), img: IMAGES.simEquipment },
              { num: "02", title: t("HSE Safety Scenarios", "محاكاة سيناريوهات السلامة"), desc: t("Correct response requires muscle memory — built through repeated practice under realistic pressure.", "الاستجابة السليمة تحتاج ذاكرة عضلية — لا تتكوّن إلا بالممارسة المتكررة تحت ضغط واقعي."), img: IMAGES.simEmergency },
              { num: "03", title: t("Virtual Control Room", "غرفة التحكم الافتراضية"), desc: t("A virtual replica of your control room — every screen, device, and SCADA/DCS system.", "نسخة افتراضية مطابقة لغرفة تحكمك — بكل الشاشات والأجهزة وأنظمة SCADA/DCS."), img: IMAGES.simConfined },
              { num: "04", title: t("Drill & Well Control Simulation", "محاكاة الحفر وضبط الآبار"), desc: t("Same training outcome as DrillSIM at a fraction of the cost — on Meta Quest, in Arabic.", "نفس نتيجة التدريب بعُشر التكلفة — على Meta Quest، بالعربية."), img: IMAGES.simOnboarding },
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

      {/* ═══════════════════ DIFFERENTIATION TABLE ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("WHY SIMUL XR", "لماذا SIMUL XR")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0F2A4A] leading-tight">
              {t("How We Compare", "ما يميزنا")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { us: t("Native Arabic content", "عربي أصلي — Native Arabic content"), them: t("No real Arabic in industrial VR", "لا أحد يقدم عربي فعلي في VR الصناعية") },
              { us: t("Built from your actual facility CAD", "مبني من CAD منشأتك الفعلية"), them: t("Generic templates that don't reflect your site", "قوالب عامة لا تعكس موقعك") },
              { us: t("4 integrated services under one roof", "4 خدمات متكاملة تحت سقف واحد"), them: t("Each competitor covers only a part", "كل منافس يغطي جزءاً فقط") },
              { us: t("MENA team — understands procurement culture", "فريق MENA — يفهم ثقافة المشتريات"), them: t("Western companies far from the market", "شركات غربية بعيدة عن السوق") },
              { us: t("Delivery in 2-14 weeks", "تسليم في 2-14 أسبوع"), them: t("3-18 months with competitors", "3-18 شهر عند المنافسين") },
              { us: t("Affordable for mid-market", "سعر مناسب للـ mid-market"), them: t("$200K-$2M with TSC & 3T Drilling", "$200K-$2M عند TSC و3T Drilling") },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{row.us}</span>
                </div>
                <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-500 text-sm">{row.them}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: "%", label: t("Industrial accidents caused by human error", "من الحوادث الصناعية سببها الخطأ البشري") },
              { ref: stat2.ref, count: stat2.count, suffix: "×", label: t("Lower cost vs. physical drills", "توفير في التكلفة مقارنة بالتدريبات الميدانية") },
              { ref: stat3.ref, count: stat3.count, suffix: "%", label: t("Higher retention vs. classroom", "ارتفاع معدل الاستيعاب مقارنة بالتدريب التقليدي") },
              { ref: stat4.ref, count: stat4.count, prefix: "$", suffix: "B", label: t("Annual O&G training spend globally", "الإنفاق العالمي السنوي على تدريب النفط والغاز") },
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
            {t("Your Workforce Deserves to Be Prepared.", "فريقك يستحق أن يكون مستعداً.")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Start with a 90-day pilot — one simulation, 50 trainees, full performance report. Zero operational disruption.",
              "ابدأ بـ pilot مدته 90 يوماً — محاكاة واحدة، 50 متدرباً، تقرير أداء كامل. بدون تعطل للعمليات."
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
