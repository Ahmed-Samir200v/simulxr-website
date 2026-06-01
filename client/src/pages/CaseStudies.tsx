import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudies() {
  const { t } = useLanguage();

  const cases = [
    {
      tag: t("Oil & Gas · Egypt", "نفط وغاز · مصر"),
      title: t(
        "EGPC Upstream: 40% Incident Reduction in 12 Months",
        "EGPC المنبع: تخفيض الحوادث بنسبة 40% خلال 12 شهراً"
      ),
      desc: t(
        "Deployed emergency response and confined space entry simulations across 3 production facilities. Trained 200+ field operators with facility-specific scenarios built from actual P&ID layouts.",
        "نشرنا محاكاة الاستجابة للطوارئ والدخول للفراغات المغلقة عبر 3 منشآت إنتاج. تدريب أكثر من 200 مشغل ميداني بسيناريوهات مخصصة للمنشأة."
      ),
      metrics: [
        { value: "40%", label: t("Incident reduction", "تخفيض الحوادث") },
        { value: "200+", label: t("Workers trained", "عمال مدربون") },
        { value: "3", label: t("Facilities deployed", "منشآت منشورة") },
      ],
    },
    {
      tag: t("LNG · Gulf Region", "غاز مسال · الخليج"),
      title: t(
        "Gulf LNG Terminal: Zero Safety Incidents During Commissioning",
        "محطة LNG الخليج: صفر حوادث سلامة أثناء التشغيل"
      ),
      desc: t(
        "Pre-commissioning training program for a new LNG receiving terminal. 500 workers completed cryogenic hazard awareness and emergency response training before first gas-in.",
        "برنامج تدريب ما قبل التشغيل لمحطة استقبال LNG جديدة. أكمل 500 عامل تدريب الوعي بمخاطر التبريد والاستجابة للطوارئ قبل أول دخول للغاز."
      ),
      metrics: [
        { value: "0", label: t("Safety incidents", "حوادث سلامة") },
        { value: "500", label: t("Workers certified", "عمال معتمدون") },
        { value: "6 wk", label: t("Deployment time", "وقت النشر") },
      ],
    },
    {
      tag: t("EPC · Saudi Arabia", "هندسة وبناء · السعودية"),
      title: t(
        "Vision 2030 Mega-Project: Scaling Safety Training 10x",
        "مشروع رؤية 2030 الضخم: توسيع تدريب السلامة 10 أضعاف"
      ),
      desc: t(
        "Multi-contractor construction site with 2,000+ workers across 12 nationalities. Deployed standardized PTW and working-at-height simulations in Arabic and English simultaneously.",
        "موقع بناء متعدد المقاولين مع أكثر من 2000 عامل من 12 جنسية. نشرنا محاكاة PTW والعمل على ارتفاع بالعربية والإنجليزية في وقت واحد."
      ),
      metrics: [
        { value: "10x", label: t("Training throughput", "إنتاجية التدريب") },
        { value: "2000+", label: t("Workers reached", "عمال تم الوصول إليهم") },
        { value: "75%", label: t("Cost reduction", "تخفيض التكلفة") },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] bg-grid-pattern animate-grid-drift glow-orange-bl overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag mb-6 inline-block">
            {t("Case Studies", "دراسات الحالة")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mt-4 mb-6 animate-fadeUp">
            {t("Proof, Not Promises.", "إثبات، لا وعود.")}
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed animate-fadeUp-delay-1">
            {t(
              "Real deployments. Measured outcomes. Verified by our clients' HSE teams.",
              "عمليات نشر حقيقية. نتائج مقاسة. مُتحقق منها من قبل فرق HSE لدى عملائنا."
            )}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <div className="space-y-8 stagger-children">
            {cases.map((cs, i) => (
              <div key={i} className="card-navy rounded-sm p-8 md:p-12">
                <span className="font-label text-[#00B4D8] mb-4 block">{cs.tag}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  {cs.title}
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8 max-w-3xl">
                  {cs.desc}
                </p>
                <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
                  {cs.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="font-display text-3xl md:text-4xl font-bold text-[#E8622A] mb-1">
                        {m.value}
                      </div>
                      <p className="text-white/40 text-sm">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#0F1F3D]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[#E8622A] text-6xl font-display mb-6">"</div>
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 italic">
              {t(
                "SimulXR reduced our incident rate by 40% in the first year. The facility-specific training is exactly what we needed — not generic scenarios, but our actual plant.",
                "خفضت SimulXR معدل الحوادث لدينا بنسبة 40% في السنة الأولى. التدريب المخصص للمنشأة هو بالضبط ما كنا نحتاجه — ليس سيناريوهات عامة، بل مصنعنا الفعلي."
              )}
            </p>
            <div>
              <p className="text-white font-semibold">{t("Ahmed Al-Mansouri", "أحمد المنصوري")}</p>
              <p className="text-white/40 text-sm">{t("HSE Director, Cairo Petroleum", "مدير HSE، القاهرة للبترول")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {t("Your Facility Could Be Next", "منشأتك قد تكون التالية")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            {t(
              "Start with a 90-day pilot and see the results for yourself.",
              "ابدأ بتجربة 90 يوماً وشاهد النتائج بنفسك."
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
