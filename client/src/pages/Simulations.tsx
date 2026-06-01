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
    {
      id: "SIM-01",
      title: t("Emergency Response", "محاكاة الاستجابة للطوارئ"),
      desc: t(
        "Gas leaks, fires, explosions, spill response, and full evacuation scenarios with realistic alarm systems and time-pressured decision making.",
        "تسريبات الغاز والحرائق والانفجارات والاستجابة للانسكابات وسيناريوهات الإخلاء الكاملة مع أنظمة إنذار واقعية."
      ),
      img: SIM_IMAGES.emergency,
    },
    {
      id: "SIM-02",
      title: t("Equipment Operation", "تشغيل المعدات"),
      desc: t(
        "Valve isolation sequences, pump operations, control panel procedures — built from your actual P&ID diagrams and equipment specifications.",
        "تسلسلات عزل الصمامات وتشغيل المضخات وإجراءات لوحة التحكم — مبنية من مخططات P&ID الفعلية."
      ),
      img: SIM_IMAGES.equipment,
    },
    {
      id: "SIM-03",
      title: t("Confined Space Entry", "الدخول للفراغات المغلقة"),
      desc: t(
        "Atmospheric testing, PTW completion, standby rescuer positioning, safe entry sequences and emergency retrieval procedures.",
        "اختبار الغلاف الجوي وإتمام PTW وتحديد موقع الإنقاذ الاحتياطي وتسلسلات الدخول الآمن."
      ),
      img: SIM_IMAGES.confined,
    },
    {
      id: "SIM-04",
      title: t("New Hire Onboarding", "تأهيل الموظفين الجدد"),
      desc: t(
        "Facility orientation tours, PPE identification and selection, hazard recognition exercises, and emergency muster point navigation.",
        "جولات توجيهية بالمنشأة وتحديد معدات الوقاية الشخصية وتمارين التعرف على المخاطر."
      ),
      img: SIM_IMAGES.onboarding,
    },
    {
      id: "SIM-05",
      title: t("Maintenance Procedures", "إجراءات الصيانة"),
      desc: t(
        "AR-guided step-by-step maintenance walkthroughs with 3D overlay instructions on real equipment models, reducing errors and downtime.",
        "إرشادات صيانة خطوة بخطوة بتقنية AR مع تعليمات تراكب ثلاثية الأبعاد على نماذج المعدات الحقيقية."
      ),
      img: SIM_IMAGES.maintenance,
    },
    {
      id: "SIM-06",
      title: t("LOTO Procedures", "إجراءات LOTO"),
      desc: t(
        "Lockout/Tagout energy isolation for electrical, hydraulic, and pneumatic systems with consequence modeling for deviations.",
        "عزل طاقة LOTO للأنظمة الكهربائية والهيدروليكية والهوائية مع نمذجة العواقب للانحرافات."
      ),
      img: SIM_IMAGES.loto,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] bg-grid-pattern animate-grid-drift glow-cyan-tr overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag mb-6 inline-block">
            {t("Simulation Library", "مكتبة المحاكاة")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mt-4 mb-6 animate-fadeUp">
            {t("Every Scenario.", "كل السيناريوهات.")}
            <br />
            <span className="text-[#00B4D8]">{t("Zero Real Risk.", "بدون أي مخاطر حقيقية.")}</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed animate-fadeUp-delay-1">
            {t(
              "Six core simulation categories. Hundreds of branching scenarios. All built from your actual facility CAD files and HSE procedures.",
              "ستة فئات محاكاة أساسية. مئات السيناريوهات المتفرعة. كلها مبنية من ملفات CAD الخاصة بمنشأتك وإجراءات HSE الفعلية."
            )}
          </p>
        </div>
      </section>

      {/* Featured Simulation */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <div className="card-navy p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-label text-[#00B4D8] mb-4 block">SIM-OG-002 · {t("Featured", "مميز")}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  {t(
                    "Gas Pipeline Leak Emergency",
                    "طوارئ تسريب خط أنابيب الغاز"
                  )}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">
                  {t(
                    "The full gas pipeline leak response sequence — from initial alarm through isolation, evacuation, and incident report. Built on actual P&ID layouts and EGPC emergency protocols.",
                    "تسلسل الاستجابة الكامل لتسريب خط أنابيب الغاز — من إنذار الإنذار الأولي حتى العزل والإخلاء وتقرير الحادث."
                  )}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["EGPC", "API 14C", "OSHA 1910.119"].map((tag) => (
                    <span key={tag} className="font-label text-[10px] text-[#00B4D8] border border-[#00B4D8]/30 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary inline-flex">
                  {t("Request Demo", "اطلب عرضاً تجريبياً")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <img
                  src={SIM_IMAGES.emergency}
                  alt="Gas Pipeline Leak Emergency Simulation"
                  className="w-full h-auto object-cover aspect-[16/10]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
            {t("Core Simulation Categories", "فئات المحاكاة الأساسية")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {simulations.map((sim) => (
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
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-20 bg-[#0F1F3D]">
        <div className="container">
          <span className="section-tag mb-6 inline-block">
            {t("Assessment System", "نظام التقييم")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-12">
            {t("Competency Assessment & HSE Reporting", "تقييم الكفاءة وتقارير HSE")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: t("Real-Time", "الوقت الفعلي"),
                desc: t(
                  "Every trainee action is timed, scored, and benchmarked against SOP compliance thresholds in real time during simulation.",
                  "يتم توقيت وتسجيل كل إجراء للمتدرب وقياسه مقارنة بحدود امتثال SOP في الوقت الفعلي أثناء المحاكاة."
                ),
              },
              {
                icon: FileCheck,
                title: t("Audit-Ready", "جاهز للتدقيق"),
                desc: t(
                  "Automated reports aligned with EGPC, API 14C, and OSHA 1910.119 standards. Print-ready for HSE audits and regulatory submissions.",
                  "تقارير آلية تتوافق مع معايير EGPC وAPI 14C وOSHA 1910.119. جاهز للطباعة لعمليات التدقيق HSE."
                ),
              },
              {
                icon: Award,
                title: t("Certifiable", "قابل للشهادة"),
                desc: t(
                  "Digital certification with scoring history, pass/fail thresholds, and remedial pathway tracking for each individual worker.",
                  "شهادة رقمية مع سجل التسجيل وحدود النجاح/الفشل وتتبع المسار العلاجي لكل عامل منفرد."
                ),
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="card-navy rounded-sm p-8">
                  <div className="w-12 h-12 rounded-sm bg-[#E8622A]/10 border border-[#E8622A]/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#E8622A]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="py-12 bg-[#0A1628] border-y border-white/5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Unity 2023 LTS", "Meta Quest 3", "Blender 4.x", "Firebase", "Arabic NLP"].map((tech) => (
              <span key={tech} className="font-label text-white/30 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {t("Ready to See It in Action?", "مستعد لرؤيتها على أرض الواقع؟")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            {t(
              "Start with a 90-day pilot — one simulation, 50 trainees, full performance reporting.",
              "ابدأ بـ pilot مدته 90 يوماً — محاكاة واحدة، 50 متدرباً، تقرير أداء كامل."
            )}
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            {t("Request Pilot Package", "اطلب باقة الـ Pilot")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
