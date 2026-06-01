import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Droplets, Factory, Snowflake, HardHat, Zap, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      icon: Droplets,
      tag: t("Primary Market", "السوق الأساسي"),
      title: t("Upstream Oil & Gas", "النفط والغاز — المنبع"),
      desc: t(
        "Exploration and production facilities, wellheads, gathering stations, and field operations across desert and offshore environments.",
        "منشآت الاستكشاف والإنتاج ورؤوس الآبار ومحطات التجميع والعمليات الميدانية عبر البيئات الصحراوية والبحرية."
      ),
      scenarios: t(
        "Gas leak & blowout response, well control, H2S awareness, pipeline isolation, EGPC & API compliance",
        "الاستجابة لتسريب الغاز والانفجار، التحكم بالآبار، الوعي بـ H2S، عزل خطوط الأنابيب"
      ),
    },
    {
      icon: Factory,
      tag: t("Core Sector", "قطاع أساسي"),
      title: t("Downstream Refining", "التكرير — المصب"),
      desc: t(
        "Refineries, processing plants, and petrochemical facilities with complex process safety and high-consequence operational scenarios.",
        "المصافي ومصانع المعالجة والمنشآت البتروكيماوية مع سلامة عمليات معقدة وسيناريوهات تشغيلية عالية العواقب."
      ),
      scenarios: t(
        "Process unit shutdown, fired heater operations, chemical handling, control room operator training",
        "إغلاق وحدة المعالجة، عمليات السخانات، التعامل مع المواد الكيميائية، تدريب مشغل غرفة التحكم"
      ),
    },
    {
      icon: Snowflake,
      tag: t("Specialist", "تخصصي"),
      title: t("LNG & Gas Processing", "الغاز الطبيعي المسال"),
      desc: t(
        "LNG terminals and gas processing facilities with extreme cryogenic hazards, compressor operations, and complex emergency procedures.",
        "محطات الغاز الطبيعي المسال ومنشآت معالجة الغاز مع مخاطر التبريد الشديد وعمليات الضاغط."
      ),
      scenarios: t(
        "LNG spill and fire response, compressor surge, cryogenic PPE, rollover and stratification hazards",
        "الاستجابة لانسكاب وحريق LNG، اندفاع الضاغط، معدات الحماية المبردة"
      ),
    },
    {
      icon: HardHat,
      tag: t("Project Sector", "قطاع المشاريع"),
      title: t("EPC & Construction", "الهندسة والمشتريات والبناء"),
      desc: t(
        "Engineering, Procurement & Construction contractors managing large-scale industrial project sites with complex workforce safety challenges.",
        "مقاولو الهندسة والمشتريات والبناء الذين يديرون مواقع مشاريع صناعية واسعة النطاق."
      ),
      scenarios: t(
        "Multi-contractor PTW systems, working at height, crane operations, site induction at scale",
        "أنظمة PTW متعددة المقاولين، العمل على ارتفاع، عمليات الرافعات، التعريف بالموقع"
      ),
    },
    {
      icon: Zap,
      tag: t("Expanding", "قطاع متوسع"),
      title: t("Power & Energy", "الطاقة والكهرباء"),
      desc: t(
        "Power generation, transmission infrastructure, and emerging renewable energy assets with high-voltage and rotating machinery hazards.",
        "توليد الطاقة والبنية التحتية للنقل وأصول الطاقة المتجددة مع مخاطر الجهد العالي والآلات الدوارة."
      ),
      scenarios: t(
        "High-voltage isolation, transformer operations, wind turbine maintenance, generator procedures",
        "عزل الجهد العالي، عمليات المحولات، صيانة توربينات الرياح، إجراءات المولدات"
      ),
    },
    {
      icon: GraduationCap,
      tag: t("Institutional", "مؤسسي"),
      title: t("HSE Academies", "أكاديميات HSE"),
      desc: t(
        "HSE training institutes and safety academies delivering standardized industrial safety curricula at national and regional scale.",
        "معاهد تدريب HSE وأكاديميات السلامة التي تقدم مناهج سلامة صناعية موحدة على المستوى الوطني والإقليمي."
      ),
      scenarios: t(
        "Standardized curriculum, multi-client simulation library, certification, Arabic-language content library",
        "مناهج موحدة، مكتبة محاكاة متعددة العملاء، شهادات، مكتبة محتوى باللغة العربية"
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] bg-grid-pattern animate-grid-drift glow-orange-bl overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag mb-6 inline-block">
            {t("Industries", "القطاعات")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mt-4 mb-6 animate-fadeUp">
            {t("Purpose-Built for the World's", "مصمم خصيصاً لأصعب")}
            <br />
            <span className="text-[#E8622A]">{t("Hardest Industries.", "الصناعات في العالم.")}</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed animate-fadeUp-delay-1">
            {t(
              "SIMUL XR is not a general-purpose XR platform repurposed for industry. Every simulation, feature, and workflow is designed specifically for high-risk industrial environments.",
              "SIMUL XR ليست منصة XR للأغراض العامة معاد توظيفها للصناعة. كل محاكاة وكل ميزة وكل سير عمل مصمم خصيصاً للبيئات الصناعية عالية الخطورة."
            )}
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div key={i} className="card-navy rounded-sm p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#00B4D8]" />
                    </div>
                    <span className="font-label text-[10px] text-[#E8622A]">{industry.tag}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">{industry.desc}</p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="font-label text-[10px] text-[#00B4D8] mb-2">{t("Key Training Scenarios", "سيناريوهات التدريب الرئيسية")}</p>
                    <p className="text-white/30 text-xs leading-relaxed">{industry.scenarios}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F1F3D]">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {t("Your Industry. Your Facility. Your Training.", "صناعتك. منشأتك. تدريبك.")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            {t(
              "Tell us your sector and we'll scope a pilot simulation tailored to your operational reality.",
              "أخبرنا عن قطاعك وسنصمم محاكاة تجريبية مخصصة لواقعك التشغيلي."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex">
              {t("Request Pilot", "اطلب تجربة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="btn-outline-cyan inline-flex">
              {t("View Case Studies", "اطلع على دراسات الحالة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
