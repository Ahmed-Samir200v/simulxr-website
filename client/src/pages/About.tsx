import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const { t } = useLanguage();

  const values = [
    { num: "01", title: t("Safety is Non-Negotiable", "السلامة غير قابلة للتفاوض"), desc: t("Every product decision is tested against: does it make industrial workers safer?", "كل قرار منتج يُختبر مقابل: هل يجعل العمال الصناعيين أكثر أماناً؟") },
    { num: "02", title: t("Precision Over Simplification", "الدقة فوق التبسيط"), desc: t("We work with HSE engineers to build scenarios that reflect operational reality.", "نعمل مع مهندسي HSE لبناء سيناريوهات تعكس الواقع التشغيلي.") },
    { num: "03", title: t("Human-Centered Technology", "التكنولوجيا المحورها الإنسان"), desc: t("We design for real workers in stressful conditions who need training that builds confidence.", "نصمم لعمال حقيقيين في ظروف مرهقة يحتاجون تدريباً يبني الثقة.") },
    { num: "04", title: t("Trust Through Evidence", "الثقة من خلال الدليل"), desc: t("We measure outcomes, publish data, and build case studies.", "نقيس النتائج وننشر البيانات ونبني دراسات الحالة.") },
    { num: "05", title: t("Resilience by Design", "المرونة بالتصميم"), desc: t("Built to perform where other software fails — desert refineries, offshore rigs, LNG terminals.", "مبنية للعمل حيث تفشل البرامج الأخرى — مصافي الصحراء، منصات البحر، محطات LNG.") },
    { num: "06", title: t("Partnership, Not Transactions", "شراكة لا معاملات"), desc: t("We co-create safety infrastructure with our clients.", "نشارك في إنشاء بنية تحتية للسلامة مع عملائنا.") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0B1120] overflow-hidden">
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("ABOUT SIMULXR", "عن SIMULXR")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Built for the Field", "مبني للميدان")}<span className="text-gold">.</span>
            <br />
            {t("Trusted in the Boardroom", "موثوق في مجلس الإدارة")}<span className="text-gold">.</span>
          </h1>
          <p className="text-white/50 max-w-xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "SIMUL XR was founded on a single belief: the only way to truly prepare a worker for a gas explosion is to let them survive one — in simulation first.",
              "تأسست SIMUL XR على اعتقاد راسخ: الطريقة الوحيدة لإعداد عامل حقاً لمواجهة انفجار غاز هي تمكينه من النجاة منه أولاً — في المحاكاة."
            )}
          </p>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag mb-4 block">[ {t("THE PROBLEM", "المشكلة")} ]</span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0B1120] mb-6">
                {t("The Problem We Solve", "المشكلة التي نحلها")}<span className="text-gold">.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t(
                  "Emergency response training was either a slide deck, a classroom lecture, or an occasional physical drill that couldn't replicate the pressure, confusion, and split-second decisions of a real crisis.",
                  "كان التدريب على الاستجابة للطوارئ إما عروض شرائح أو محاضرات في الفصول الدراسية، أو تمريناً ميدانياً عرضياً لا يمكنه محاكاة الضغط والارتباك وقرارات الثانية الحرجة."
                )}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  "SimulXR bridges this gap with immersive VR simulations built from your actual facility designs — giving workers real muscle memory without real risk.",
                  "SimulXR تسد هذه الفجوة بمحاكاة VR غامرة مبنية من تصاميم منشأتك الفعلية — تمنح العمال ذاكرة عضلية حقيقية بدون مخاطر حقيقية."
                )}
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#0B1120] rounded-lg p-10 text-center">
                <div className="font-display text-6xl text-gold mb-4">80%</div>
                <p className="text-white/60 text-lg">{t("of industrial accidents caused by human error", "من الحوادث الصناعية ناتجة عن خطأ بشري")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Quote */}
      <section className="py-20 bg-[#0B1120]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-gold text-5xl font-display mb-6">"</div>
            <p className="font-display text-2xl sm:text-3xl text-white italic leading-relaxed mb-6">
              {t(
                "You can't train courage by reading about it.",
                "لا يمكنك تدريب الشجاعة بالقراءة عنها."
              )}
            </p>
            <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              {t(
                "The only way to build muscle memory for a gas leak response is to experience it. To feel the disorientation. To make the decision under pressure. To practice until it becomes instinct.",
                "الطريقة الوحيدة لبناء ذاكرة عضلية للاستجابة لتسريب الغاز هي تجربتها. الشعور بالارتباك. اتخاذ القرار تحت الضغط. الممارسة حتى تصبح غريزة."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-light rounded-lg p-10 border-t-4 border-gold">
              <span className="section-eyebrow mb-4 block">{t("MISSION", "المهمة")}</span>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t(
                  "To eliminate preventable industrial accidents by transforming how the world trains its most critical workforce — through immersive simulation, intelligent data, and the relentless belief that every worker deserves to go home safely.",
                  "القضاء على الحوادث الصناعية القابلة للوقاية من خلال تحويل طريقة تدريب العالم لقوته العاملة الأكثر أهمية — عبر المحاكاة الغامرة والبيانات الذكية والإيمان الراسخ بأن كل عامل يستحق العودة إلى المنزل بسلامة."
                )}
              </p>
            </div>
            <div className="card-light rounded-lg p-10 border-t-4 border-gold">
              <span className="section-eyebrow mb-4 block">{t("VISION", "الرؤية")}</span>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t(
                  "A world where no worker ever faces a high-stakes industrial situation without having survived it in simulation first — and where XR-powered training becomes the universal standard for industrial safety.",
                  "عالم لا يواجه فيه أي عامل وضعاً صناعياً عالي المخاطر دون أن يكون قد نجا منه في المحاكاة أولاً — وأن يصبح التدريب بتقنية XR المعيار العالمي للسلامة الصناعية."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0B1120]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block">{t("CORE VALUES", "القيم الأساسية")}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              {t("What Drives Us", "ما يحركنا")}<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.num} className="card-dark rounded-lg p-8 group">
                <span className="font-display text-4xl text-gold/20 mb-4 block">{value.num}</span>
                <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold transition-colors">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENA First */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 block text-gold">{t("MENA FIRST", "الشرق الأوسط أولاً")}</span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0B1120]">
              {t("Built for This Region", "مصمم لهذه المنطقة")}<span className="text-gold">.</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-10">
            {t(
              "The Gulf region is building the most ambitious industrial infrastructure in the world. These projects demand a new generation of trained, competent industrial workers — at a speed and scale traditional training cannot match.",
              "تبني منطقة الخليج بعضاً من أكثر البنى التحتية الصناعية طموحاً في العالم. تتطلب هذه المشاريع جيلاً جديداً من العمال الصناعيين المدربين والمؤهلين."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["EGPC", "ADNOC", "Saudi Aramco", "OSHA", "API"].map((tag) => (
              <span key={tag} className="text-sm border border-gold/40 text-gold px-5 py-2 rounded-full bg-gold/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-[#0B1120] mb-6">
            {t("Let's Build Something Together", "لنبني شيئاً معاً")}
          </h2>
          <p className="text-[#0B1120]/70 max-w-xl mx-auto mb-10 text-lg">
            {t(
              "We co-create safety infrastructure with our clients. Tell us about your facility.",
              "نشارك في إنشاء بنية تحتية للسلامة مع عملائنا. أخبرنا عن منشأتك."
            )}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B1120] text-white font-medium hover:bg-[#0B1120]/90 transition-all hover:-translate-y-0.5">
            {t("Get in Touch", "تواصل معنا")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
