import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Shield, FileCheck, Award } from "lucide-react";
import { Link } from "wouter";

const SIM_IMAGES = {
  emergency: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-emergency-MDu2SyrPqjHMYtfLuFAMMs.webp",
  equipment: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-equipment-jXJpjtz2kpYaq7vK9oas3b.webp",
  confined: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-confined-Ux2cYqBEqiUCxLB8cvH397.webp",
  onboarding: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-onboarding-fHPPuvivUtFDGH7M2vAvm9.webp",
  maintenance: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-maintenance-AqoA7zPcBcpttopqyKJAKU.webp",
  loto: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048751930/DC4FNTfcHyvuxQWATJPrwg/sim-loto-5LrYtsPXEMPjJPyZLYC3Md.webp",
};

export default function Simulations() {
  const { t } = useLanguage();

  const simulations = [
    { id: "SIM-01", title: t("Emergency Response", "محاكاة الاستجابة للطوارئ"), desc: t("Gas leaks, fires, explosions, spill response, and full evacuation scenarios with realistic alarm systems.", "تسريبات الغاز والحرائق والانفجارات والاستجابة للانسكابات وسيناريوهات الإخلاء الكاملة."), img: SIM_IMAGES.emergency },
    { id: "SIM-02", title: t("Equipment Operation", "تشغيل المعدات"), desc: t("Valve isolation sequences, pump operations, control panel procedures — built from your actual P&ID diagrams.", "تسلسلات عزل الصمامات وتشغيل المضخات وإجراءات لوحة التحكم — مبنية من مخططات P&ID الفعلية."), img: SIM_IMAGES.equipment },
    { id: "SIM-03", title: t("Confined Space Entry", "الدخول للفراغات المغلقة"), desc: t("Atmospheric testing, PTW completion, standby rescuer positioning, safe entry sequences.", "اختبار الغلاف الجوي وإتمام PTW وتحديد موقع الإنقاذ الاحتياطي."), img: SIM_IMAGES.confined },
    { id: "SIM-04", title: t("New Hire Onboarding", "تأهيل الموظفين الجدد"), desc: t("Facility orientation tours, PPE identification and selection, hazard recognition exercises.", "جولات توجيهية بالمنشأة وتحديد معدات الوقاية الشخصية وتمارين التعرف على المخاطر."), img: SIM_IMAGES.onboarding },
    { id: "SIM-05", title: t("Maintenance Procedures", "إجراءات الصيانة"), desc: t("AR-guided step-by-step maintenance with 3D overlay instructions on actual equipment.", "إرشادات صيانة خطوة بخطوة بتقنية AR مع تعليمات تراكب ثلاثية الأبعاد."), img: SIM_IMAGES.maintenance },
    { id: "SIM-06", title: t("LOTO Procedures", "إجراءات LOTO"), desc: t("Lockout/Tagout energy isolation with consequence modeling for deviations.", "عزل طاقة LOTO مع نمذجة العواقب للانحرافات."), img: SIM_IMAGES.loto },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0B1120] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${SIM_IMAGES.emergency})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 to-[#0B1120]" />
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("SIMULATION LIBRARY", "مكتبة المحاكاة")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Every Scenario", "كل سيناريو")}<span className="text-gold">.</span>
            <br />
            {t("Zero Real Risk", "صفر مخاطر حقيقية")}<span className="text-gold">.</span>
          </h1>
          <p className="text-white/50 max-w-xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "Each simulation is built from your facility's actual designs and standard operating procedures — not generic templates.",
              "كل محاكاة مبنية من تصاميم منشأتك الفعلية وإجراءات التشغيل القياسية — وليس قوالب عامة."
            )}
          </p>
        </div>
      </section>

      {/* Featured Simulation */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img src={SIM_IMAGES.emergency} alt="Gas Pipeline Leak" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div>
              <span className="section-tag mb-4 block">[ {t("FEATURED", "مميز")} ]</span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0B1120] mb-6">
                {t("Gas Pipeline Leak Emergency", "طوارئ تسريب خط أنابيب الغاز")}<span className="text-gold">.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(
                  "Full-scale emergency response simulation for gas pipeline leak scenarios. Workers practice detection, isolation, evacuation, and reporting under realistic time pressure.",
                  "محاكاة استجابة طوارئ كاملة لسيناريوهات تسريب خطوط أنابيب الغاز. يتدرب العمال على الكشف والعزل والإخلاء والإبلاغ تحت ضغط زمني واقعي."
                )}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["EGPC", "API 14C", "OSHA 1910.119"].map((tag) => (
                  <span key={tag} className="text-xs border border-gray-300 text-gray-600 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/contact" className="btn-gold">
                {t("Request This Simulation", "اطلب هذه المحاكاة")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Simulations Grid */}
      <section className="py-24 bg-[#0B1120]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block">
              {t("ALL SIMULATIONS", "جميع المحاكاة")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              {t("Six Core Simulations", "ست محاكاة أساسية")}<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {simulations.map((sim) => (
              <div key={sim.id} className="card-dark rounded-lg overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={sim.img} alt={sim.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs font-medium tracking-wider">{sim.id}</span>
                  <h3 className="font-display text-xl text-white mt-2 mb-3 group-hover:text-gold transition-colors">{sim.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{sim.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block text-gold">
              {t("ASSESSMENT SYSTEM", "نظام التقييم")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0B1120]">
              {t("Competency tracking", "تتبع الكفاءة")}<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: t("Real-Time", "الوقت الفعلي"), desc: t("Live dashboards track every trainee's performance, decision speed, and procedural accuracy.", "لوحات تحكم حية تتبع أداء كل متدرب وسرعة القرار والدقة الإجرائية.") },
              { icon: FileCheck, title: t("Audit-Ready", "جاهز للتدقيق"), desc: t("Auto-generated reports meet OSHA, EGPC, and API documentation requirements.", "تقارير مولدة تلقائياً تلبي متطلبات وثائق OSHA وEGPC وAPI.") },
              { icon: Award, title: t("Certifiable", "قابل للاعتماد"), desc: t("Digital certificates with blockchain verification for competency validation.", "شهادات رقمية مع تحقق blockchain لتأكيد الكفاءة.") },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card-light rounded-lg p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0B1120] mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-[#0B1120] mb-6">
            {t("Ready to build your simulation?", "مستعد لبناء محاكاتك؟")}
          </h2>
          <p className="text-[#0B1120]/70 max-w-xl mx-auto mb-10 text-lg">
            {t(
              "Start with a 90-day pilot. One simulation, 50 trainees, full performance reporting.",
              "ابدأ بتجربة 90 يوماً. محاكاة واحدة، 50 متدرباً، تقرير أداء كامل."
            )}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B1120] text-white font-medium hover:bg-[#0B1120]/90 transition-all hover:-translate-y-0.5">
            {t("Request Demo", "اطلب عرضاً تجريبياً")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
