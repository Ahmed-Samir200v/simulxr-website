import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Insights() {
  const { t } = useLanguage();

  const articles = [
    { tag: t("Industry Report", "تقرير صناعي"), date: "2026", title: t("80% of Industrial Accidents Are Caused by Human Error — Here's How XR Changes That", "80% من الحوادث الصناعية ناتجة عن خطأ بشري — إليك كيف يغير XR ذلك"), desc: t("A deep dive into the research behind immersive training effectiveness and why traditional classroom methods fail in high-stress scenarios.", "نظرة عميقة في الأبحاث وراء فعالية التدريب الغامر ولماذا تفشل الأساليب التقليدية في السيناريوهات عالية الضغط.") },
    { tag: t("Technical", "تقني"), date: "2026", title: t("From CAD to XR: How We Convert Facility Designs into Training Environments", "من CAD إلى XR: كيف نحول تصاميم المنشآت إلى بيئات تدريب"), desc: t("The technical pipeline — from ingesting Navisworks/BIM files through photorealistic rendering to interactive XR deployment.", "خط الأنابيب التقني — من استيعاب ملفات Navisworks/BIM عبر العرض الواقعي إلى النشر التفاعلي بالواقع الممتد.") },
    { tag: t("Market Analysis", "تحليل سوقي"), date: "2026", title: t("The $15B Training Gap: Why MENA Oil & Gas Needs Arabic-First XR Solutions", "فجوة التدريب بقيمة 15 مليار دولار: لماذا يحتاج النفط والغاز في المنطقة حلول XR عربية أولاً"), desc: t("Market analysis of the Arabic-language industrial training gap and Vision 2030 workforce demands.", "تحليل سوقي لفجوة التدريب الصناعي باللغة العربية ومتطلبات القوى العاملة لرؤية 2030.") },
    { tag: t("Case Study", "دراسة حالة"), date: "2026", title: t("How EGPC Achieved 40% Incident Reduction with XR Training", "كيف حققت EGPC تخفيض الحوادث بنسبة 40% مع تدريب XR"), desc: t("Detailed breakdown of the EGPC deployment — methodology, timeline, and verified outcomes.", "تفصيل مفصل لنشر EGPC — المنهجية والجدول الزمني والنتائج المُتحقق منها.") },
    { tag: t("Compliance", "الامتثال"), date: "2026", title: t("XR Training and HSE Compliance: Meeting OSHA, API, and EGPC Standards", "تدريب XR والامتثال لـ HSE: تلبية معايير OSHA وAPI وEGPC"), desc: t("How XR-based competency assessment maps to regulatory requirements and produces audit-ready documentation.", "كيف يتوافق تقييم الكفاءة القائم على XR مع المتطلبات التنظيمية وينتج وثائق جاهزة للتدقيق.") },
    { tag: t("Technology", "تكنولوجيا"), date: "2026", title: t("Meta Quest 3 in Industrial Settings: Deployment Lessons Learned", "Meta Quest 3 في البيئات الصناعية: دروس مستفادة من النشر"), desc: t("Practical insights from deploying standalone XR headsets in harsh industrial environments.", "رؤى عملية من نشر سماعات XR مستقلة في بيئات صناعية قاسية.") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0F2A4A] overflow-hidden">
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("INSIGHTS & RESEARCH", "المقالات والأبحاث")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Thinking Out Loud", "نفكر بصوت عالٍ")}<span className="text-gold">.</span>
          </h1>
          <p className="text-white/50 max-w-xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "Industry analysis, technical deep-dives, and evidence-based perspectives on the future of industrial safety training.",
              "تحليل صناعي وتعمق تقني ووجهات نظر قائمة على الأدلة حول مستقبل تدريب السلامة الصناعية."
            )}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <article key={i} className="card-light rounded-lg p-8 flex flex-col group cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#00B4D8] text-xs font-medium tracking-wider uppercase">{article.tag}</span>
                  <span className="text-gray-400 text-xs">{article.date}</span>
                </div>
                <h3 className="font-display text-xl text-[#0F2A4A] mb-4 group-hover:text-[#D4622B] transition-colors flex-1">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{article.desc}</p>
                <div className="flex items-center gap-2 text-[#D4622B] text-sm font-medium group-hover:translate-x-2 transition-transform duration-200">
                  <span>{t("Read More", "اقرأ المزيد")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#D4622B]">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            {t("Stay Informed", "ابقَ على اطلاع")}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
            {t(
              "Monthly insights on industrial safety, XR technology, and MENA market developments.",
              "رؤى شهرية حول السلامة الصناعية وتكنولوجيا XR وتطورات سوق المنطقة."
            )}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#D4622B] font-semibold hover:bg-[#F5F6F8] transition-all hover:-translate-y-0.5">
            {t("Subscribe to Insights", "اشترك في المقالات")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
