import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Insights() {
  const { t } = useLanguage();

  const articles = [
    {
      tag: t("Industry Report", "تقرير صناعي"),
      date: "2026",
      title: t(
        "80% of Industrial Accidents Are Caused by Human Error — Here's How VR Changes That",
        "80% من الحوادث الصناعية ناتجة عن خطأ بشري — إليك كيف يغير الواقع الافتراضي ذلك"
      ),
      desc: t(
        "A deep dive into the research behind immersive training effectiveness, muscle memory formation, and why traditional classroom methods fail in high-stress scenarios.",
        "نظرة عميقة في الأبحاث وراء فعالية التدريب الغامر وتكوين الذاكرة العضلية ولماذا تفشل الأساليب التقليدية في السيناريوهات عالية الضغط."
      ),
    },
    {
      tag: t("Technical", "تقني"),
      date: "2026",
      title: t(
        "From CAD to VR: How We Convert Facility Designs into Training Environments",
        "من CAD إلى VR: كيف نحول تصاميم المنشآت إلى بيئات تدريب"
      ),
      desc: t(
        "The technical pipeline behind SIMUL XR — from ingesting Navisworks/BIM files through photorealistic rendering to interactive VR deployment on Meta Quest.",
        "خط الأنابيب التقني وراء SIMUL XR — من استيعاب ملفات Navisworks/BIM عبر العرض الواقعي إلى النشر التفاعلي بالواقع الافتراضي على Meta Quest."
      ),
    },
    {
      tag: t("Market Analysis", "تحليل سوقي"),
      date: "2026",
      title: t(
        "The $15B Training Gap: Why MENA Oil & Gas Needs Arabic-First XR Solutions",
        "فجوة التدريب بقيمة 15 مليار دولار: لماذا يحتاج النفط والغاز في المنطقة حلول XR عربية أولاً"
      ),
      desc: t(
        "Market analysis of the Arabic-language industrial training gap, Vision 2030 workforce demands, and why global XR vendors have failed to serve this region.",
        "تحليل سوقي لفجوة التدريب الصناعي باللغة العربية ومتطلبات القوى العاملة لرؤية 2030 ولماذا فشل مزودو XR العالميون في خدمة هذه المنطقة."
      ),
    },
    {
      tag: t("Case Study", "دراسة حالة"),
      date: "2026",
      title: t(
        "How EGPC Achieved 40% Incident Reduction with VR Training",
        "كيف حققت EGPC تخفيض الحوادث بنسبة 40% مع تدريب الواقع الافتراضي"
      ),
      desc: t(
        "Detailed breakdown of the EGPC deployment — methodology, implementation timeline, measurement framework, and verified outcomes.",
        "تفصيل مفصل لنشر EGPC — المنهجية والجدول الزمني للتنفيذ وإطار القياس والنتائج المُتحقق منها."
      ),
    },
    {
      tag: t("Compliance", "الامتثال"),
      date: "2026",
      title: t(
        "VR Training and HSE Compliance: Meeting OSHA, API, and EGPC Standards",
        "تدريب VR والامتثال لـ HSE: تلبية معايير OSHA وAPI وEGPC"
      ),
      desc: t(
        "How VR-based competency assessment maps to regulatory requirements and produces audit-ready documentation automatically.",
        "كيف يتوافق تقييم الكفاءة القائم على VR مع المتطلبات التنظيمية وينتج وثائق جاهزة للتدقيق تلقائياً."
      ),
    },
    {
      tag: t("Technology", "تكنولوجيا"),
      date: "2026",
      title: t(
        "Meta Quest 3 in Industrial Settings: Deployment Lessons Learned",
        "Meta Quest 3 في البيئات الصناعية: دروس مستفادة من النشر"
      ),
      desc: t(
        "Practical insights from deploying standalone VR headsets in harsh industrial environments — heat, dust, multi-shift usage, and IT-free management.",
        "رؤى عملية من نشر سماعات VR مستقلة في بيئات صناعية قاسية — الحرارة والغبار والاستخدام متعدد النوبات والإدارة بدون IT."
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] bg-grid-pattern animate-grid-drift glow-cyan-tr overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag mb-6 inline-block">
            {t("Insights & Research", "المقالات والأبحاث")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mt-4 mb-6 animate-fadeUp">
            {t("Thinking Out Loud.", "نفكر بصوت عالٍ.")}
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed animate-fadeUp-delay-1">
            {t(
              "Industry analysis, technical deep-dives, and evidence-based perspectives on the future of industrial safety training.",
              "تحليل صناعي وتعمق تقني ووجهات نظر قائمة على الأدلة حول مستقبل تدريب السلامة الصناعية."
            )}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {articles.map((article, i) => (
              <article key={i} className="card-navy rounded-sm p-8 flex flex-col group cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label text-[10px] text-[#00B4D8]">{article.tag}</span>
                  <span className="font-label text-[10px] text-white/30">{article.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-4 group-hover:text-[#E8622A] transition-colors flex-1">
                  {article.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {article.desc}
                </p>
                <div className="flex items-center gap-2 text-[#E8622A] text-sm font-medium group-hover:translate-x-2 transition-transform duration-200">
                  <span>{t("Read More", "اقرأ المزيد")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#0F1F3D]">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {t("Stay Informed", "ابقَ على اطلاع")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            {t(
              "Monthly insights on industrial safety, XR technology, and MENA market developments.",
              "رؤى شهرية حول السلامة الصناعية وتكنولوجيا XR وتطورات سوق المنطقة."
            )}
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            {t("Subscribe to Insights", "اشترك في المقالات")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
