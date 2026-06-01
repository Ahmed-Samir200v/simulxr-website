import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      num: "01",
      title: t("Safety is Non-Negotiable", "السلامة غير قابلة للتفاوض"),
      desc: t(
        "Every product decision, partnership, and business model choice is tested against: does it make industrial workers safer?",
        "كل قرار منتج وشراكة ونموذج عمل يُختبر مقابل: هل يجعل العمال الصناعيين أكثر أماناً؟"
      ),
    },
    {
      num: "02",
      title: t("Precision Over Simplification", "الدقة فوق التبسيط"),
      desc: t(
        "Oil & gas is unforgiving. We work with HSE engineers to build scenarios that reflect operational reality, not approximations.",
        "النفط والغاز لا يرحم. نعمل مع مهندسي HSE لبناء سيناريوهات تعكس الواقع التشغيلي، وليس التقريبات."
      ),
    },
    {
      num: "03",
      title: t("Human-Centered Technology", "التكنولوجيا المحورها الإنسان"),
      desc: t(
        "Technology without empathy is just engineering. We design for real workers in stressful conditions who need training that builds confidence.",
        "التكنولوجيا بدون تعاطف هي مجرد هندسة. نصمم لعمال حقيقيين في ظروف مرهقة يحتاجون تدريباً يبني الثقة."
      ),
    },
    {
      num: "04",
      title: t("Trust Through Evidence", "الثقة من خلال الدليل"),
      desc: t(
        "In an industry full of technology promises, SIMUL XR earns trust through proof — we measure outcomes, publish data, build case studies.",
        "في صناعة مليئة بوعود التكنولوجيا، تكسب SIMUL XR الثقة من خلال الإثبات — نقيس النتائج وننشر البيانات ونبني دراسات الحالة."
      ),
    },
    {
      num: "05",
      title: t("Resilience by Design", "المرونة بالتصميم"),
      desc: t(
        "Desert refineries, offshore rigs, LNG terminals — our deployment zones. Built to perform where other software fails.",
        "مصافي الصحراء، منصات البحر، محطات LNG — مناطق نشرنا. مبنية للعمل حيث تفشل البرامج الأخرى."
      ),
    },
    {
      num: "06",
      title: t("Partnership, Not Transactions", "شراكة لا معاملات"),
      desc: t(
        "We co-create safety infrastructure with our clients. Long-term relationships with HSE teams are how we improve our product.",
        "نشارك في إنشاء بنية تحتية للسلامة مع عملائنا. العلاقات طويلة الأمد مع فرق HSE هي كيف نحسن منتجنا."
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] bg-grid-pattern animate-grid-drift glow-cyan-tr overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag mb-6 inline-block">
            {t("Our Story", "قصتنا")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mt-4 mb-6 animate-fadeUp">
            {t("Built for the Field.", "مصمم للميدان.")}
            <br />
            <span className="text-[#00B4D8]">{t("Trusted in the Boardroom.", "موثوق في مجلس الإدارة.")}</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed animate-fadeUp-delay-1">
            {t(
              "SIMUL XR was founded on a single belief: the only way to truly prepare a worker for a gas explosion is to let them survive one — in simulation first.",
              "تأسست SIMUL XR على اعتقاد راسخ: الطريقة الوحيدة لإعداد عامل حقاً لمواجهة انفجار غاز هي تمكينه من النجاة منه أولاً — في المحاكاة."
            )}
          </p>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <div className="max-w-4xl">
            <span className="section-tag mb-6 inline-block">
              {t("The Problem We Solve", "المشكلة التي نحلها")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
              {t(
                "Every Year, Workers Face Emergencies They Have Never Practiced",
                "كل عام، يواجه العمال حالات طوارئ لم يتدربوا عليها قط"
              )}
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              {t(
                "Emergency response training was either a slide deck, a classroom lecture, or an occasional physical drill that couldn't replicate the pressure, confusion, and split-second decisions of a real crisis. Incident investigations reveal the same finding: the worker knew the procedure in theory. They had never practiced it under realistic conditions.",
                "كان التدريب على الاستجابة للطوارئ إما عروض شرائح أو محاضرات في الفصول الدراسية، أو في أحسن الأحوال تمريناً ميدانياً عرضياً لا يمكنه محاكاة الضغط والارتباك وقرارات الثانية الحرجة في أزمة حقيقية."
              )}
            </p>

            {/* Founding Quote */}
            <div className="border-l-2 border-[#E8622A] pl-8 py-4 my-12">
              <p className="text-white text-xl md:text-2xl font-display font-bold italic mb-4">
                {t(
                  '"You can\'t train courage by reading about it."',
                  '"لا يمكنك تدريب الشجاعة بالقراءة عنها."'
                )}
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                {t(
                  "The only way to build muscle memory for a gas leak response is to experience it. To feel the disorientation. To make the decision under pressure. To practice until it becomes instinct. That is what SIMUL XR was built to deliver.",
                  "الطريقة الوحيدة لبناء ذاكرة عضلية للاستجابة لتسريب الغاز هي تجربتها. الشعور بالارتباك. اتخاذ القرار تحت الضغط. الممارسة حتى تصبح غريزة. هذا ما بُنيت SIMUL XR لتقديمه."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0F1F3D]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-navy rounded-sm p-8 md:p-10">
              <span className="font-label text-[#E8622A] mb-4 block">{t("Our Mission", "مهمتنا")}</span>
              <p className="text-white/70 text-lg leading-relaxed">
                {t(
                  "To eliminate preventable industrial accidents by transforming how the world trains its most critical workforce — through immersive simulation, intelligent data, and the relentless belief that every worker deserves to go home safely.",
                  "القضاء على الحوادث الصناعية القابلة للوقاية من خلال تحويل طريقة تدريب العالم لقوته العاملة الأكثر أهمية — عبر المحاكاة الغامرة والبيانات الذكية والإيمان الراسخ بأن كل عامل يستحق العودة إلى المنزل بسلامة."
                )}
              </p>
            </div>
            <div className="card-navy rounded-sm p-8 md:p-10">
              <span className="font-label text-[#00B4D8] mb-4 block">{t("Our Vision", "رؤيتنا")}</span>
              <p className="text-white/70 text-lg leading-relaxed">
                {t(
                  "A world where no worker ever faces a high-stakes industrial situation without having survived it in simulation first — and where XR-powered training becomes the universal standard for industrial safety across the globe.",
                  "عالم لا يواجه فيه أي عامل وضعاً صناعياً عالي المخاطر دون أن يكون قد نجا منه في المحاكاة أولاً — وأن يصبح التدريب بتقنية XR المعيار العالمي للسلامة الصناعية."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <span className="section-tag mb-6 inline-block">
            {t("Core Values", "القيم الأساسية")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-12">
            {t("What Drives Us", "ما يحركنا")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {values.map((value) => (
              <div key={value.num} className="card-navy rounded-sm p-8">
                <span className="font-display text-4xl font-bold text-[#E8622A]/20 mb-4 block">{value.num}</span>
                <h3 className="font-display text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENA First */}
      <section className="py-20 bg-[#0F1F3D]">
        <div className="container">
          <div className="max-w-4xl">
            <span className="section-tag mb-6 inline-block">
              {t("MENA First", "المنطقة أولاً")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
              {t("Built for This Region, This Moment", "مصمم لهذه المنطقة وهذه اللحظة")}
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              {t(
                "The Gulf region is building the most ambitious industrial infrastructure in the world. Saudi Vision 2030. UAE downstream expansion. Egypt LNG development. These projects demand a new generation of trained, competent industrial workers — at a speed and scale traditional training cannot match.",
                "تبني منطقة الخليج بعضاً من أكثر البنى التحتية الصناعية طموحاً في العالم. رؤية السعودية 2030. التوسع في المعالجة السفلية للإمارات. تطوير الغاز الطبيعي المسال في مصر. تتطلب هذه المشاريع جيلاً جديداً من العمال الصناعيين المدربين والمؤهلين."
              )}
            </p>
            <div className="card-navy rounded-sm p-6 border-l-2 border-[#00B4D8]">
              <p className="text-[#00B4D8] text-sm leading-relaxed">
                {t(
                  "Arabic-language VR training content is our primary competitive differentiator. No major competitor fills this gap — creating SIMUL XR's most defensible market position.",
                  "محتوى التدريب بالواقع الافتراضي باللغة العربية هو ميزتنا التنافسية الأساسية. لا يملأ أي منافس رئيسي هذا الفراغ — مما يخلق المركز السوقي الأكثر دفاعية لـ SIMUL XR."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {t("Let's Build Something Together", "لنبني شيئاً معاً")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-8">
            {t(
              "We co-create safety infrastructure with our clients. Tell us about your facility.",
              "نشارك في إنشاء بنية تحتية للسلامة مع عملائنا. أخبرنا عن منشأتك."
            )}
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            {t("Get in Touch", "تواصل معنا")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
