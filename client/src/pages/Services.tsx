import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Wrench, ShieldAlert, Monitor, Drill, Package, Building2 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { IMAGES } from "@/lib/assets";

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "SIM-EQUIP",
      num: "01",
      icon: Wrench,
      title: t("Equipment & Machinery Simulation", "محاكاة المعدات والآلات الصناعية"),
      desc: t(
        "Before your operator touches the first gas valve or starts a compressor for the first time — we make them do it a hundred times virtually.",
        "قبل أن يلمس مشغّلك صمام الغاز الأول أو يشغّل ضاغطاً لأول مرة — نجعله يفعل ذلك مئة مرة في الافتراضي."
      ),
      img: IMAGES.simEquipment,
      items: [
        t("Valves — Opening, closing, isolation, position verification, full isolation sequence", "صمامات — فتح، إغلاق، عزل، تحقق من الوضع، تسلسل العزل الكامل"),
        t("Pumps — Start-up, shutdown, pre-operation checks, preventive maintenance", "مضخات — التشغيل والإيقاف والفحص الأولي والصيانة الوقائية"),
        t("Compressors & Turbines — Operating procedures and emergency shutdown protocols", "ضواغط وتوربينات — إجراءات التشغيل وبروتوكولات الإيقاف الاضطراري"),
        t("ESD Systems — Full emergency shutdown sequence under time pressure", "أنظمة ESD — تسلسل الإغلاق الاضطراري الكامل تحت ضغط الوقت"),
        t("Control Panels — Reading pressure, temperature, flow and correct response", "لوحات التحكم — قراءة الضغط والحرارة والتدفق والاستجابة الصحيحة"),
        t("AR Maintenance — Step-by-step AR overlay instructions on real equipment", "صيانة AR — إرشادات خطوة بخطوة بتراكب ثلاثي الأبعاد على المعدة الحقيقية"),
      ],
      outcomes: [
        t("Reduce operational errors by up to 60% in the first months", "خفض أخطاء التشغيل بنسبة تصل لـ 60% في الأشهر الأولى"),
        t("Cut new employee onboarding time from weeks to days", "تقليل وقت تأهيل الموظف الجديد من أسابيع إلى أيام"),
        t("Zero production downtime during training", "صفر توقف للإنتاج خلال التدريب"),
      ],
    },
    {
      id: "SIM-HSE",
      num: "02",
      icon: ShieldAlert,
      title: t("HSE Safety Scenarios & Emergency Response", "محاكاة سيناريوهات السلامة وحالات الطوارئ"),
      desc: t(
        "You cannot train someone to face a gas leak with words. Correct response requires muscle memory — and this only builds through repeated practice under realistic pressure.",
        "لا يمكنك تدريب شخص على مواجهة تسريب غاز بالكلام. الاستجابة السليمة تحتاج ذاكرة عضلية — وهذه لا تتكوّن إلا بالممارسة المتكررة تحت ضغط واقعي."
      ),
      img: IMAGES.simEmergency,
      items: [
        t("Gas Leak & First Response — Alarm recognition, source isolation, ESD, evacuation", "تسريب الغاز والاستجابة الأولى — التعرف على الإنذار، عزل المصدر، ESD، الإخلاء"),
        t("Facility Fire Response — Fire suppression activation, equipment use, evacuation routes", "الحريق في المنشأة — تفعيل الإطفاء، استخدام المعدات، مسارات الإخلاء"),
        t("Chemical Spill Response — Initial containment, drain protection, notification", "الانسكاب الكيميائي — الاحتواء الأولي، حماية المجاري، الإشعار"),
        t("Full Emergency Shutdown — Facility-wide ESD sequence", "الإغلاق الاضطراري الكامل — تسلسل ESD على مستوى المنشأة"),
        t("Confined Space Entry — PTW, air testing, backup rescue", "الدخول للأماكن المغلقة — PTW، اختبار الهواء، الإنقاذ الاحتياطي"),
        t("LOTO Procedures — Electrical, mechanical, and hydraulic isolation", "إجراءات LOTO — عزل الكهرباء والميكانيكا والهيدروليكا"),
        t("Hot Work Permits — Permit acquisition, hazard zones", "الأعمال الساخنة — الحصول على التصاريح، مناطق الخطر"),
        t("Mass Evacuation — Assembly, headcount, reporting protocol", "الإخلاء الجماعي — التجمع، عد الأفراد، بروتوكول الإبلاغ"),
      ],
      outcomes: [
        t("Raise HSE assessment pass rates by 30-40%", "رفع معدل اجتياز تقييمات HSE بنسبة 30-40%"),
        t("Reduce emergency response time in real drills", "تقليل وقت الاستجابة للطوارئ في التمارين الحقيقية"),
        t("Full audit-ready documentation — ready for regulators", "توثيق كامل قابل للتدقيق — جاهز للجهات الرقابية"),
      ],
    },
    {
      id: "SIM-VCR",
      num: "03",
      icon: Monitor,
      title: t("Virtual Control Room", "غرفة التحكم الافتراضية"),
      desc: t(
        "The control room operator makes the first decision in any crisis. We build a virtual replica of your control room — every screen, device, and SCADA/DCS system — where operators train on the hardest scenarios.",
        "مشغّل غرفة التحكم هو القرار الأول في أي أزمة. نبني نسخة افتراضية مطابقة لغرفة تحكمك — بكل الشاشات والأجهزة وأنظمة SCADA/DCS — ويتدرب فيها مشغّلوك على أصعب السيناريوهات."
      ),
      img: IMAGES.simConfined,
      items: [
        t("Abnormal Operations — pressure, temperature, flow anomalies", "الحالات غير الاعتيادية — ضغط، حرارة، تدفق"),
        t("Full ESD — complete plant shutdown sequence under time pressure", "الإغلاق الاضطراري الكامل — تحت ضغط الوقت"),
        t("Power Failure — partial and full, activating backup systems", "انقطاع الطاقة الجزئي والكامل — تفعيل الأنظمة الاحتياطية"),
        t("Alarm Flood — prioritization and correct response to multiple alarms", "تراكم الإنذارات — ترتيب الأولويات والاستجابة الصحيحة"),
        t("Field Team Coordination — decisions with parallel field reports", "التنسيق مع الفريق الميداني — قرارات مع تقارير ميدانية متوازية"),
        t("Shift Handover — handover protocol during active emergency", "تسليم المناوبة تحت الضغط — بروتوكول التسليم أثناء الطوارئ"),
      ],
      outcomes: [
        t("Training a full plant shutdown on the real system means hours of downtime. With Virtual Control Room — this happens weekly.", "التدريب على سيناريو إغلاق كامل للمنشأة على النظام الحقيقي يعني إيقاف الإنتاج لساعات. مع Virtual Control Room — يحدث هذا التدريب أسبوعياً."),
      ],
    },
    {
      id: "SIM-DRILL",
      num: "04",
      icon: Drill,
      title: t("Drilling & Well Control XR Simulation", "محاكاة الحفر وضبط الآبار"),
      desc: t(
        "Train drillers and assistant drillers on critical operations and well control scenarios — with immersive XR on Meta Quest. Same training outcome at a fraction of the cost without freezing drilling production.",
        "تدريب حفريّو الآبار ومشغّلو الحفر على العمليات الحرجة وسيناريوهات well control — بتقنية XR غامرة على Meta Quest. نفس نتيجة التدريب الفعلي بعُشر التكلفة وبدون تجميد إنتاج الحفر."
      ),
      img: IMAGES.simOnboarding,
      items: [
        t("Basic Drilling Operations — running, making hole, connections (IADC)", "عمليات الحفر الأساسية — IADC"),
        t("Well Control Scenarios — kick detection, shut-in, kill procedures (IWCF L3/L4)", "التحكم في الآبار — well control — IWCF L3/L4"),
        t("Drilling Equipment Malfunctions — BOP, mud pumps, top drive (IADC)", "أعطال معدات الحفر — BOP, mud pumps, top drive"),
        t("Tripping and Connection Operations (IADC)", "عمليات الكشط والتوصيل — IADC"),
        t("Drilling Indicators — pit gain, pump pressure anomalies (IWCF)", "قراءة مؤشرات الحفر — IWCF"),
        t("Directional Drilling Operations — inclination, azimuth control (IADC)", "الحفر الاتجاهي — directional — IADC"),
        t("Kick Detection and Initial Response (IWCF L3)", "Kick الاستجابة الأولى — IWCF L3"),
        t("BOP Operation and Well Killing Procedures (IWCF L4)", "إجراءات Blowout Prevention — IWCF L4"),
      ],
      outcomes: [
        t("DrillSIM systems cost $200K-$2M and need dedicated rooms. SIMUL XR runs on Meta Quest — portable, any location, in Arabic.", "أنظمة DrillSIM تكلف $200K-$2M وتحتاج غرفة مخصصة. محاكاة SIMUL XR تعمل على Meta Quest — محمولة، في أي موقع، بالعربية."),
      ],
    },
  ];

  const active = services[activeService];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0F2A4A] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMAGES.simEquipment})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A4A]/80 to-[#0F2A4A]" />
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("OUR DIGITAL SERVICES", "خدماتنا الرقمية")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Real Industrial Simulation", "محاكاة صناعية حقيقية")}<span className="text-gold">.</span>
            <br />
            {t("Built for Your Facility", "لمنشأتك بالتحديد")}<span className="text-gold">.</span>
          </h1>
          <p className="text-white/50 max-w-2xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "Four integrated digital services built on your actual facility data — no generic templates. Your equipment, your procedures, your language.",
              "أربع خدمات رقمية متكاملة مبنية على بيانات موقعك الفعلي — لا قوالب جاهزة، لا محتوى عام. محاكاة بمعداتك، بإجراءاتك، بلغتك."
            )}
          </p>
        </div>
      </section>

      {/* Delivery Models */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F2A4A]">
              {t("Two Delivery Models", "نموذجا التسليم")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-light rounded-lg p-8 text-center">
              <Package className="w-10 h-10 text-[#D4622B] mx-auto mb-4" />
              <h3 className="font-display text-xl text-[#0F2A4A] mb-4">{t("Standard", "قياسي")}</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• {t("Ready-to-deploy simulations", "محاكاة جاهزة للنشر الفوري")}</li>
                <li>• {t("Deploy in 2-4 weeks", "نشر في 2-4 أسابيع")}</li>
                <li>• {t("Lower cost — entry level", "تكلفة أقل — entry level")}</li>
                <li>• {t("Best for onboarding & new hires", "للتأهيل الأولي والموظفين الجدد")}</li>
                <li>• {t("No files needed from you", "لا يحتاج ملفات منك")}</li>
              </ul>
            </div>
            <div className="card-light rounded-lg p-8 text-center border-2 border-[#D4622B]/30">
              <Building2 className="w-10 h-10 text-[#D4622B] mx-auto mb-4" />
              <h3 className="font-display text-xl text-[#0F2A4A] mb-4">{t("Facility-Specific", "مخصص")}</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• {t("Built from your CAD/BIM/Navisworks files", "مبني من ملفات CAD/BIM/Navisworks الخاصة بك")}</li>
                <li>• {t("Deploy in 6-14 weeks", "نشر في 6-14 أسبوعاً حسب التعقيد")}</li>
                <li>• {t("Higher ROI — deeper impact", "ROI أعلى — أثر أعمق")}</li>
                <li>• {t("Best for advanced training & critical emergencies", "للتدريب المتقدم والطوارئ الحرجة")}</li>
                <li>• {t("Requires: CAD + SOPs + facility plans", "يحتاج: CAD + SOPs + مخططات المنشأة")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-24 md:py-32 bg-[#0F2A4A]">
        <div className="container">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeService === i
                    ? "bg-[#D4622B] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span className="font-mono text-xs mr-2 opacity-60">{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <active.icon className="w-6 h-6 text-[#D4622B]" />
                <span className="text-[#00B4D8] text-sm font-mono">{active.id}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-6">{active.title}</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{active.desc}</p>

              <h4 className="text-[#00B4D8] text-sm font-semibold uppercase tracking-wider mb-4">
                {t("Scenarios & Capabilities", "السيناريوهات والقدرات")}
              </h4>
              <ul className="space-y-3 mb-8">
                {active.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4622B] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="text-[#00B4D8] text-sm font-semibold uppercase tracking-wider mb-4">
                {t("Expected Outcomes", "النتائج المتوقعة")}
              </h4>
              <ul className="space-y-3">
                {active.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("COMPLIANCE", "الامتثال")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F2A4A]">
              {t("Industry Standards We Align With", "المعايير التي نلتزم بها")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { std: "EGPC", scope: t("All services — Egyptian market", "كل الخدمات — السوق المصري") },
              { std: "API 14C", scope: t("Equipment + VCR", "محاكاة المعدات + VCR") },
              { std: "OSHA 1910.119", scope: t("All services — HSE compliance", "جميع الخدمات — HSE") },
              { std: "IOGP", scope: t("HSE Safety Scenarios", "محاكاة السلامة") },
              { std: "OPITO", scope: t("HSE + Drill Simulation", "HSE + محاكاة الحفر") },
              { std: "IWCF", scope: t("Drill Simulation — Level 3 & 4", "محاكاة الحفر — Level 3 & 4") },
              { std: "IADC", scope: t("Drill Simulation", "محاكاة الحفر") },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center">
                <div className="font-display text-lg text-[#0F2A4A] mb-1">{item.std}</div>
                <p className="text-gray-400 text-xs">{item.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#D4622B]">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            {t("Where Do You Start?", "من أين تبدأ؟")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Not sure which service fits best? Tell us your facility type and key training challenges — we'll recommend the right model within 48 hours.",
              "لست متأكداً من الخدمة الأنسب؟ أخبرنا بنوع المنشأة وأبرز تحديات التدريب — وسنقترح النموذج الأنسب خلال 48 ساعة."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#D4622B] font-semibold hover:bg-[#F5F6F8] transition-all hover:-translate-y-0.5">
              {t("Request Free Consultation", "اطلب استشارة مجانية")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
