import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Droplets, Factory, Snowflake, HardHat, Zap, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Industries() {
  const { t } = useLanguage();

  const industries = [
    { icon: Droplets, tag: "OIL & GAS", title: t("Upstream Oil & Gas", "النفط والغاز — المنبع"), desc: t("Exploration and production facilities, wellheads, gathering stations, and field operations across desert and offshore environments.", "منشآت الاستكشاف والإنتاج ورؤوس الآبار ومحطات التجميع والعمليات الميدانية."), scenarios: t("Gas leak & blowout response, well control, H2S awareness, pipeline isolation", "الاستجابة لتسريب الغاز والانفجار، التحكم بالآبار، الوعي بـ H2S") },
    { icon: Factory, tag: "DOWNSTREAM", title: t("Downstream Refining", "التكرير — المصب"), desc: t("Refineries, processing plants, and petrochemical facilities with complex process safety scenarios.", "المصافي ومصانع المعالجة والمنشآت البتروكيماوية مع سلامة عمليات معقدة."), scenarios: t("Process unit shutdown, fired heater operations, chemical handling", "إغلاق وحدة المعالجة، عمليات السخانات، التعامل مع المواد الكيميائية") },
    { icon: Snowflake, tag: "LNG", title: t("LNG & Gas Processing", "الغاز الطبيعي المسال"), desc: t("LNG terminals and gas processing facilities with extreme cryogenic hazards and compressor operations.", "محطات الغاز الطبيعي المسال ومنشآت معالجة الغاز مع مخاطر التبريد الشديد."), scenarios: t("LNG spill and fire response, compressor surge, cryogenic PPE", "الاستجابة لانسكاب وحريق LNG، اندفاع الضاغط، معدات الحماية المبردة") },
    { icon: HardHat, tag: "EPC", title: t("EPC & Construction", "الهندسة والمشتريات والبناء"), desc: t("Engineering, Procurement & Construction contractors managing large-scale industrial project sites.", "مقاولو الهندسة والمشتريات والبناء الذين يديرون مواقع مشاريع صناعية واسعة النطاق."), scenarios: t("Multi-contractor PTW systems, working at height, crane operations", "أنظمة PTW متعددة المقاولين، العمل على ارتفاع، عمليات الرافعات") },
    { icon: Zap, tag: "POWER", title: t("Power & Energy", "الطاقة والكهرباء"), desc: t("Power generation, transmission infrastructure, and emerging renewable energy assets.", "توليد الطاقة والبنية التحتية للنقل وأصول الطاقة المتجددة."), scenarios: t("High-voltage isolation, transformer operations, wind turbine maintenance", "عزل الجهد العالي، عمليات المحولات، صيانة توربينات الرياح") },
    { icon: GraduationCap, tag: "HSE", title: t("HSE Academies", "أكاديميات HSE"), desc: t("HSE training institutes and safety academies delivering standardized industrial safety curricula.", "معاهد تدريب HSE وأكاديميات السلامة التي تقدم مناهج سلامة صناعية موحدة."), scenarios: t("Standardized curriculum, multi-client simulation library, certification", "مناهج موحدة، مكتبة محاكاة متعددة العملاء، شهادات") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0F2A4A] overflow-hidden">
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("INDUSTRIES WE SERVE", "القطاعات التي نخدمها")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Purpose-Built for the", "مصمم خصيصاً لأصعب")}
            <br />
            {t("World's Hardest Industries", "الصناعات في العالم")}<span className="text-gold">.</span>
          </h1>
          <p className="text-white/50 max-w-xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "We don't sell generic XR experiences. Every simulation is engineered for the specific hazards, equipment, and procedures of your industry.",
              "لا نبيع تجارب XR عامة. كل محاكاة مصممة للمخاطر والمعدات والإجراءات المحددة لصناعتك."
            )}
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div key={i} className="card-light rounded-lg p-8 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#D4622B]/10 border border-[#D4622B]/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#D4622B]" />
                    </div>
                    <span className="text-xs text-gray-400 tracking-wider">{industry.tag}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#0F2A4A] mb-4 group-hover:text-[#D4622B] transition-colors">{industry.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">{industry.desc}</p>
                  <p className="text-sm text-gray-400 border-t border-gray-100 pt-4">
                    <span className="text-[#00B4D8] font-medium">{t("Key scenarios:", "السيناريوهات:")}</span> {industry.scenarios}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#D4622B]">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            {t("Don't see your industry?", "لا ترى صناعتك؟")}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
            {t(
              "We build custom simulations for any high-risk industrial environment. Tell us about your training challenges.",
              "نبني محاكاة مخصصة لأي بيئة صناعية عالية الخطورة. أخبرنا عن تحديات التدريب لديك."
            )}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#D4622B] font-semibold hover:bg-[#F5F6F8] transition-all hover:-translate-y-0.5">
            {t("Contact Us", "تواصل معنا")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
