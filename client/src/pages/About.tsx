import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Shield, Target, Heart, BarChart3, Mountain, Handshake, MapPin, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { IMAGES } from "@/lib/assets";

export default function About() {
  const { t } = useLanguage();
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      icon: Shield,
      title: t("Safety is Non-Negotiable", "السلامة غير قابلة للتفاوض"),
      desc: t(
        "Every decision we make is tested with one question: does it make workers safer? If the answer isn't yes, we don't ship it.",
        "كل قرار نتخذه يُختبر بسؤال واحد: هل يجعل العمال أكثر أماناً؟ إذا لم تكن الإجابة نعم، لا ننشره."
      ),
      img: IMAGES.simEmergency,
    },
    {
      icon: Target,
      title: t("Precision Over Simplification", "الدقة فوق التبسيط"),
      desc: t(
        "Oil & gas is unforgiving. We build scenarios that reflect exact operational reality — not approximations. Every valve, every alarm, every procedure matches your facility.",
        "صناعة النفط لا تقبل التقريب. نبني سيناريوهات تعكس الواقع التشغيلي بدقة — كل صمام، كل إنذار، كل إجراء يطابق منشأتك."
      ),
      img: IMAGES.simEquipment,
    },
    {
      icon: Heart,
      title: t("Human-Centered Technology", "التكنولوجيا المحورها الإنسان"),
      desc: t(
        "We design for real workers in high-pressure conditions who need confidence, not just compliance. The interface disappears — the experience stays.",
        "نصمم لعمال حقيقيين في ظروف ضاغطة يحتاجون ثقة لا مجرد امتثال. الواجهة تختفي — التجربة تبقى."
      ),
      img: IMAGES.simConfined,
    },
    {
      icon: BarChart3,
      title: t("Trust Through Evidence", "الثقة من خلال الدليل"),
      desc: t(
        "We measure outcomes, publish data, and build case studies. Our clients don't take our word for it — they see the numbers.",
        "نقيس النتائج وننشر البيانات ونبني دراسات الحالة. عملاؤنا لا يأخذون كلامنا — يرون الأرقام."
      ),
      img: IMAGES.simOnboarding,
    },
    {
      icon: Mountain,
      title: t("Resilience by Design", "المرونة بالتصميم"),
      desc: t(
        "Desert refineries, offshore rigs, LNG terminals — these are our deployment zones. We build for the harshest environments because that's where training matters most.",
        "مصافي الصحراء والمنصات البحرية ومحطات LNG — بيئات عملنا. نبني للبيئات الأقسى لأن هناك يكون التدريب أهم."
      ),
      img: IMAGES.simMaintenance,
    },
    {
      icon: Handshake,
      title: t("Partnership, Not Transactions", "شراكة لا معاملات"),
      desc: t(
        "We co-create safety infrastructure with our clients. Long-term relationships develop our product — and their workforce.",
        "نبني بنية تحتية للسلامة مع عملائنا. العلاقات طويلة الأمد هي ما يطوّر منتجنا — وقوتهم العاملة."
      ),
      img: IMAGES.simLoto,
    },
  ];

  const activeVal = values[activeValue];

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-40 pb-24 bg-[#0F2A4A] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMAGES.heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A4A]/70 to-[#0F2A4A]" />
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("OUR STORY", "قصتنا")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Built for the Field", "مصمم للميدان")}<span className="text-gold">.</span>
            <br />
            {t("Trusted in the Boardroom", "موثوق في مجلس الإدارة")}<span className="text-gold">.</span>
          </h1>
          <p className="text-white/50 max-w-2xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "SIMUL XR was founded on one belief: the only way to truly prepare a worker for a gas explosion is to let them survive one first — in simulation.",
              "تأسست SIMUL XR على اعتقاد راسخ: الطريقة الوحيدة لإعداد عامل حقاً لمواجهة انفجار غاز هي تمكينه من النجاة منه أولاً — في المحاكاة."
            )}
          </p>
        </div>
      </section>

      {/* ═══════════════════ THE PROBLEM WE SOLVE ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
                {t("THE PROBLEM", "المشكلة")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0F2A4A] mb-6">
                {t("Traditional Training Doesn't Prepare for Real Emergencies", "التدريب التقليدي لا يُجهّز للطوارئ الحقيقية")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t(
                  "Every year, oil & gas workers face emergencies they've never trained for. Training was either PowerPoint presentations or theoretical lectures — or at best, an occasional field drill that can't simulate the pressure of a critical second in a real crisis.",
                  "كل عام، يواجه عمال النفط والغاز حالات طوارئ لم يتدربوا عليها قط. كان التدريب إما عروض PowerPoint أو محاضرات نظرية، أو في أحسن الأحوال تمريناً ميدانياً عرضياً لا يمكنه محاكاة ضغط الثانية الحرجة في الأزمة الحقيقية."
                )}
              </p>

              <div className="space-y-3">
                {[
                  { problem: t("Traditional training doesn't prepare for real emergencies", "التدريب التقليدي لا يُجهّز للطوارئ الحقيقية"), solution: t("Realistic simulation under real-time pressure", "محاكاة واقعية تحت ضغط الوقت الفعلي") },
                  { problem: t("Field drills are expensive and rare", "التدريبات الميدانية مكلفة ونادرة"), solution: t("Unlimited repeatable simulation at minimal cost", "محاكاة قابلة للتكرار بلا حدود وبأقل تكلفة") },
                  { problem: t("No Arabic content in the market", "لا يوجد محتوى عربي في السوق"), solution: t("Native Arabic — not machine translation", "عربي أصلي — لا ترجمة آلية") },
                  { problem: t("Generic content doesn't reflect your site", "المحتوى العام لا يعكس موقعك الفعلي"), solution: t("Built from your facility's CAD files", "مبني من ملفات CAD منشأتك بالتحديد") },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-sm text-gray-600">
                      <span className="text-red-400 font-bold mr-2">✕</span>{row.problem}
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-3 text-sm text-gray-700">
                      <span className="text-green-500 font-bold mr-2">✓</span>{row.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={IMAGES.simEmergency} alt="Industrial XR Training" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0F2A4A] rounded-lg p-6 shadow-xl max-w-[280px]">
                <blockquote className="text-white/80 text-sm italic leading-relaxed">
                  {t(
                    "\"You can't train courage by reading about it.\"",
                    "\"لا يمكنك تدريب الشجاعة بالقراءة عنها.\""
                  )}
                </blockquote>
                <p className="text-[#D4622B] text-xs mt-2 font-medium">— SIMUL XR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MISSION & VISION ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0F2A4A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-dark rounded-lg p-10">
              <span className="text-[#00B4D8] text-sm font-semibold uppercase tracking-wider mb-4 block">
                {t("MISSION", "الرسالة")}
              </span>
              <p className="text-white/80 text-lg leading-relaxed">
                {t(
                  "To eliminate preventable industrial accidents by transforming how the world trains its most critical workforce — through immersive simulation, intelligent data, and the relentless belief that every worker deserves to go home safely.",
                  "القضاء على الحوادث الصناعية القابلة للوقاية من خلال تحويل طريقة تدريب العالم لقوته العاملة الأكثر أهمية — عبر المحاكاة الغامرة والبيانات الذكية والإيمان الراسخ بأن كل عامل يستحق العودة إلى المنزل بسلامة."
                )}
              </p>
            </div>
            <div className="card-dark rounded-lg p-10">
              <span className="text-[#00B4D8] text-sm font-semibold uppercase tracking-wider mb-4 block">
                {t("VISION", "الرؤية")}
              </span>
              <p className="text-white/80 text-lg leading-relaxed">
                {t(
                  "A world where no worker ever faces a high-stakes industrial situation without having survived it in simulation first — and where XR-powered training becomes the universal standard for industrial safety.",
                  "عالم لا يواجه فيه أي عامل وضعاً صناعياً عالي المخاطر دون أن يكون قد نجا منه في المحاكاة أولاً — وأن يصبح التدريب بتقنية XR المعيار العالمي للسلامة الصناعية."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VALUES ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("OUR VALUES", "قيمنا")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0F2A4A] mb-4">
              {t("We Live Our Values, Every Day.", "نعيش قيمنا، كل يوم.")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {t(
                "Our values define how we build, how we serve, and how we measure success.",
                "قيمنا تحدد كيف نبني، كيف نخدم، وكيف نقيس النجاح."
              )}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {values.map((val, i) => (
              <button
                key={i}
                onClick={() => setActiveValue(i)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeValue === i
                    ? "bg-[#D4622B] text-white shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                }`}
              >
                {val.title}
              </button>
            ))}
          </div>

          <div className="bg-[#0F2A4A] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <activeVal.icon className="w-8 h-8 text-[#D4622B]" />
                  <span className="text-[#00B4D8] text-sm font-mono">0{activeValue + 1}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white mb-6 flex items-center gap-3">
                  {activeVal.title}
                  <ChevronRight className="w-6 h-6 text-[#D4622B]" />
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {activeVal.desc}
                </p>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto">
                <img
                  src={activeVal.img}
                  alt={activeVal.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY MENA FIRST ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0F2A4A]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="section-eyebrow mb-4 block">
              {t("WHY MENA FIRST", "لماذا MENA أولاً")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
              {t("The Gap We Fill", "الفراغ الذي نملؤه")}
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              {t(
                "There is no major industrial XR training provider offering native Arabic content specialized in oil & gas. This gap is SIMUL XR's reason for existing.",
                "لا يوجد أي مزود رئيسي لتدريب XR الصناعي يقدم محتوى عربياً أصلياً متخصصاً في النفط والغاز. هذا الفراغ هو وجود SIMUL XR."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t("Saudi Vision 2030", "رؤية السعودية 2030"), desc: t("Billions in industrial infrastructure + millions of workers needing training", "مليارات الدولارات في البنية التحتية الصناعية + ملايين العمال يحتاجون تدريباً") },
              { title: t("ADNOC Expansion — UAE", "توسع ADNOC — الإمارات"), desc: t("Massive downstream plans requiring rapidly trained workforce at scale", "خطط downstream ضخمة تتطلب كوادر مدرّبة بسرعة وعلى نطاق واسع") },
              { title: t("Egypt LNG Development", "تطوير LNG في مصر"), desc: t("New facilities needing custom simulation for their actual environments", "منشآت جديدة تحتاج محاكاة مخصصة لبيئاتها الفعلية") },
              { title: t("No Arabic in Industrial XR", "غياب العربية في XR الصناعي"), desc: t("Neither Pixaera, 3T, TSC, nor Luminous offer real Arabic content", "لا Pixaera ولا 3T ولا TSC ولا Luminous يقدم عربياً فعلياً") },
              { title: t("Gulf Procurement Culture", "ثقافة المشتريات الخليجية"), desc: t("We understand approval cycles, relationships, and local challenges", "نفهم دورات الموافقة والعلاقات والتحديات المحلية") },
              { title: t("MENA Expansion Plan", "خطة التوسع في MENA"), desc: t("Egypt Phase 1 → UAE & KSA Phase 2 → Qatar, Kuwait, Oman Phase 3", "مصر المرحلة 1 → الإمارات وKSA المرحلة 2 → قطر، الكويت، عُمان المرحلة 3") },
            ].map((item, i) => (
              <div key={i} className="card-dark rounded-lg p-6">
                <h4 className="font-display text-lg text-white mb-2">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("THE TEAM", "الفريق")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0F2A4A]">
              {t("Built by Industry Experts", "بناه خبراء الصناعة")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                role: t("Founder & XR Lead", "المؤسس — قائد XR"),
                desc: t(
                  "Team Lead 3D Artist & XR Designer — built SIMUL XR combining industrial domain expertise with immersive technology.",
                  "خبرة في 3D Art وXR Design — بنى SIMUL XR من الصفر بخلفية تقنية وإبداعية متخصصة في البيئات الصناعية."
                ),
              },
              {
                role: t("HSE Advisory Board", "المجلس الاستشاري — HSE"),
                desc: t(
                  "Former HSE directors and safety engineers from NOCs and EPCs — ensuring every scenario reflects operational reality.",
                  "مهندسو سلامة ومديرو HSE سابقون من NOCs وشركات EPC في MENA — يضمنون دقة كل سيناريو وامتثاله للواقع التشغيلي."
                ),
              },
              {
                role: t("3D Studio", "استوديو 3D"),
                desc: t(
                  "Unity developers, Blender artists, XR engineers — building photorealistic environments on Meta Quest and PCVR.",
                  "مطورو Unity وفنانو Blender ومهندسو XR — يبنون البيئات الافتراضية الفائقة الواقعية على Meta Quest وPCVR."
                ),
              },
            ].map((member, i) => (
              <div key={i} className="card-light rounded-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4622B]/10 border border-[#D4622B]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-xl text-[#D4622B]">0{i + 1}</span>
                </div>
                <h4 className="font-display text-lg text-[#0F2A4A] mb-3">{member.role}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TECHNOLOGY STACK ═══════════════════ */}
      <section className="py-20 bg-[#0F2A4A]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 block">
              {t("TECHNOLOGY", "التقنية")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white">
              {t("Our Technology Stack", "التقنية المستخدمة")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Unity 2023 LTS", desc: t("3D interactive environments", "البيئات التفاعلية ثلاثية الأبعاد") },
              { name: "Meta Quest 3", desc: t("Primary training device", "الجهاز الأساسي للتدريب") },
              { name: "Blender 4.x", desc: t("3D models from CAD", "النماذج ثلاثية الأبعاد") },
              { name: "Navisworks", desc: t("Facility file conversion", "تحويل ملفات المنشأة") },
              { name: "Firebase", desc: t("Real-time analytics", "لوحات بيانات الأداء") },
              { name: "Cloud Platform", desc: t("Remote browser training", "التدريب عن بُعد") },
            ].map((tech, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-white text-sm font-semibold mb-1">{tech.name}</div>
                <p className="text-white/30 text-xs">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ OFFICES ═══════════════════ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("OUR OFFICES", "مكاتبنا")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F2A4A]">
              {t("Three Offices Across MENA", "ثلاثة مكاتب في MENA")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { city: t("Cairo — HQ", "القاهرة — المقر الرئيسي"), address: t("77 Road 104, Maadi, Cairo, Egypt", "77 طريق 104، المعادي، القاهرة، مصر") },
              { city: t("Dubai — UAE", "دبي — الإمارات"), address: t("Gulf Center, Dubai, UAE", "مركز الخليج، دبي، الإمارات العربية المتحدة") },
              { city: t("Riyadh — KSA", "الرياض — السعودية"), address: t("Riyadh, Kingdom of Saudi Arabia", "الرياض، المملكة العربية السعودية") },
            ].map((office, i) => (
              <div key={i} className="card-light rounded-lg p-6 text-center">
                <MapPin className="w-6 h-6 text-[#D4622B] mx-auto mb-3" />
                <h4 className="font-display text-lg text-[#0F2A4A] mb-2">{office.city}</h4>
                <p className="text-gray-400 text-sm">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#D4622B]">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            {t("Ready to Transform Your Training?", "مستعد لتحويل تدريبك؟")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Let's discuss how SIMUL XR can build the right simulation for your facility — in Arabic, from your actual data.",
              "لنناقش كيف يمكن لـ SIMUL XR بناء المحاكاة المناسبة لمنشأتك — بالعربية، من بياناتك الفعلية."
            )}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#D4622B] font-semibold hover:bg-[#F5F6F8] transition-all hover:-translate-y-0.5">
            {t("Get in Touch", "تواصل معنا")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
