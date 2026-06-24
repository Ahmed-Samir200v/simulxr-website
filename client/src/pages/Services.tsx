import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Wrench, ShieldAlert, Monitor, Package, Building2, Layers3, TrendingUp, Zap, Shield } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { IMAGES } from "@/lib/assets";

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "SIM-EMERGENCY",
      num: "01",
      icon: ShieldAlert,
      title: t("Emergency Response", "الاستجابة للطوارئ"),
      desc: t(
        "When a gas leak alarm sounds, your workers have seconds. Did they ever practice this? Immersive VR simulations for gas leaks, fires, and evacuations — built from your facility layout, grounded in API RP 505, NFPA 72, and ISA-84.",
        "عندما تدق إنذارات تسريب الغاز، لدى عمالك ثوانٍ معدودة. هل تدربوا على ذلك من قبل؟ محاكاة غامرة لتسريبات الغاز والحرائق والإخلاء — مبنية من تخطيط منشأتك، وفق API RP 505 وNFPA 72 وISA-84."
      ),
      img: IMAGES.simEmergency,
      items: [
        t("Gas Leak Detection — identify source using virtual monitors in facility-specific environments", "كشف تسريب الغاز — تحديد المصدر باستخدام أجهزة المراقبة الافتراضية في بيئات المنشأة"),
        t("Isolation & Shutdown Sequences — execute under time pressure with full ESD protocol", "تسلسلات العزل والإغلاق — التنفيذ تحت ضغط الوقت بموجب بروتوكول ESD الكامل"),
        t("Fire Response — suppression activation, equipment use, evacuation routes", "الاستجابة للحريق — تفعيل الإطفاء واستخدام المعدات ومسارات الإخلاء"),
        t("H2S Exposure — recognition, PPE donning, muster procedures", "التعرض لـ H2S — التعرف وارتداء معدات الوقاية وإجراءات التجمع"),
        t("Reduced-Visibility Evacuation — navigate smoke-filled corridors to assembly points", "الإخلاء في ظروف الرؤية المنخفضة — التنقل عبر ممرات مليئة بالدخان لنقاط التجمع"),
        t("Multi-Participant Team Response — coordinate field and control room roles simultaneously", "الاستجابة الجماعية متعددة المشاركين — تنسيق أدوار الميدان وغرفة التحكم في آن واحد"),
        t("Mass Evacuation — assembly, headcount, reporting protocol under realistic pressure", "الإخلاء الجماعي — التجمع وعد الأفراد وبروتوكول الإبلاغ تحت ضغط واقعي"),
        t("Chemical Spill Containment — initial response, drain protection, notification chain", "احتواء الانسكاب الكيميائي — الاستجابة الأولى وحماية المجاري وسلسلة الإشعار"),
      ],
      outcomes: [
        t("40% reduction in emergency response time after VR training", "انخفاض 40% في وقت الاستجابة للطوارئ بعد التدريب الافتراضي"),
        t("80% knowledge retention vs. 20% from classroom baseline", "معدل استيعاب 80% مقارنة بـ 20% من التدريب التقليدي"),
        t("95%+ first-attempt correct isolation sequences vs. 60% baseline", "أكثر من 95% نجاح في تسلسل العزل من المحاولة الأولى مقارنة بـ 60% في الأساس"),
        t("Unlimited VR drills at zero cost — vs. one annual physical drill", "تمارين VR غير محدودة بتكلفة صفر — مقارنة بتمرين ميداني واحد سنوياً"),
        t("$500K–$2M+ saved per prevented incident", "توفير 500 ألف دولار إلى أكثر من مليوني دولار لكل حادثة يتم تفاديها"),
      ],
    },
    {
      id: "SIM-TWIN",
      num: "02",
      icon: Monitor,
      title: t("Digital Twin Training", "التدريب بالتوأم الرقمي"),
      desc: t(
        "A photorealistic virtual replica of your facility — built from actual CAD/BIM/Navisworks files. Every screen, device, SCADA and DCS system reproduced exactly. Operators train on scenarios that would halt real production.",
        "نسخة افتراضية فائقة الواقعية من منشأتك — مبنية من ملفات CAD/BIM/Navisworks الحقيقية. كل شاشة وجهاز ونظام SCADA وDCS مُعاد إنشاؤه بدقة متناهية. يتدرب المشغّلون على سيناريوهات ستوقف الإنتاج الفعلي."
      ),
      img: IMAGES.simConfined,
      items: [
        t("Abnormal Operations — pressure, temperature, flow anomalies from your actual instrumentation", "الحالات غير الاعتيادية — شذوذات الضغط والحرارة والتدفق من أجهزتك الفعلية"),
        t("Full ESD — complete plant shutdown sequence under time pressure", "الإغلاق الاضطراري الكامل — تسلسل إغلاق المنشأة الكاملة تحت ضغط الوقت"),
        t("Power Failure — partial and full, activating backup systems", "انقطاع الطاقة الجزئي والكامل — تفعيل الأنظمة الاحتياطية"),
        t("Alarm Flood Management — prioritization and correct response to multiple simultaneous alarms", "إدارة تراكم الإنذارات — ترتيب الأولويات والاستجابة الصحيحة لإنذارات متزامنة متعددة"),
        t("Field Team Coordination — control room decisions with parallel field reports", "تنسيق الفريق الميداني — قرارات غرفة التحكم مع تقارير ميدانية متوازية"),
        t("Shift Handover Protocol — live handover during active emergency scenarios", "بروتوكول تسليم المناوبة — تسليم مباشر أثناء سيناريوهات الطوارئ النشطة"),
      ],
      outcomes: [
        t("Train a full plant shutdown without halting real production — run it weekly instead of annually", "التدريب على إغلاق كامل للمنشأة دون وقف الإنتاج الفعلي — أسبوعياً بدلاً من سنوياً"),
        t("Operators arrive on shift having survived the hardest scenarios in simulation first", "يصل المشغّلون إلى وردياتهم وقد نجوا من أصعب السيناريوهات في المحاكاة أولاً"),
        t("Audit-ready competency records for every control room training session", "سجلات كفاءة جاهزة للتدقيق لكل جلسة تدريب في غرفة التحكم"),
      ],
    },
    {
      id: "SIM-HSE",
      num: "03",
      icon: Layers3,
      title: t("HSE Competency Platform", "منصة كفاءة HSE"),
      desc: t(
        "Real-time competency scoring, performance tracking, and audit-ready HSE compliance reports for every training session. Transform training data into actionable intelligence for HSE managers and regulators.",
        "تقييم الكفاءة في الوقت الفعلي وتتبع الأداء وتقارير امتثال HSE جاهزة للتدقيق في كل جلسة تدريبية. تحويل بيانات التدريب إلى معلومات قابلة للتنفيذ لمديري HSE والجهات التنظيمية."
      ),
      img: IMAGES.simOnboarding,
      items: [
        t("Per-trainee competency scores — response time, decision accuracy, procedure sequence", "درجات الكفاءة لكل متدرب — وقت الاستجابة ودقة القرار وتسلسل الإجراءات"),
        t("HSE gap analysis — identify individuals at highest risk before an incident reveals them", "تحليل ثغرات HSE — تحديد الأفراد الأعلى خطراً قبل أن يكشف الحادث عنهم"),
        t("Competency trending — track improvement across sessions and over time", "اتجاهات الكفاءة — تتبع التحسن عبر الجلسات وبمرور الوقت"),
        t("Regulatory export — one-click compliance reports aligned with OSHA, API RP 505, IOGP", "التصدير التنظيمي — تقارير امتثال بنقرة واحدة متوافقة مع OSHA وAPI RP 505 وIOGP"),
        t("Manager dashboards — real-time visibility for HSE teams across sites", "لوحات تحكم المديرين — رؤية فورية لفرق HSE عبر المواقع"),
        t("Certification tracking — monitor renewal dates and competency expiry", "تتبع الشهادات — مراقبة تواريخ التجديد وانتهاء صلاحية الكفاءة"),
      ],
      outcomes: [
        t("Replace annual assessments with ongoing competency monitoring — catch gaps before they become incidents", "استبدال التقييمات السنوية بمراقبة مستمرة للكفاءة — اكتشاف الثغرات قبل أن تتحول إلى حوادث"),
        t("One-click regulatory export — no manual report preparation for audits", "تصدير تنظيمي بنقرة واحدة — لا تحضير يدوي للتقارير للتدقيق"),
        t("Full audit trail from day one of deployment", "مسار تدقيق كامل منذ اليوم الأول للنشر"),
      ],
    },
    {
      id: "SIM-EQUIP",
      num: "04",
      icon: Wrench,
      title: t("Equipment Operation Simulation", "محاكاة تشغيل المعدات"),
      desc: t(
        "Before your operator touches the first gas valve or starts a compressor for the first time — we make them do it a hundred times virtually, in your actual equipment environment. Zero production risk, full muscle memory.",
        "قبل أن يلمس مشغّلك صمام الغاز الأول أو يشغّل ضاغطاً لأول مرة — نجعله يفعل ذلك مئة مرة افتراضياً، في بيئة معداتك الفعلية. صفر مخاطر للإنتاج، ذاكرة عضلية كاملة."
      ),
      img: IMAGES.simEquipment,
      items: [
        t("Valves — opening, closing, isolation, position verification, full isolation sequences", "الصمامات — الفتح والإغلاق والعزل والتحقق من الوضع وتسلسلات العزل الكاملة"),
        t("Pumps — start-up, shutdown, pre-operation checks, preventive maintenance procedures", "المضخات — التشغيل والإيقاف والفحوصات الأولية وإجراءات الصيانة الوقائية"),
        t("Compressors & Turbines — operating procedures and emergency shutdown protocols", "الضواغط والتوربينات — إجراءات التشغيل وبروتوكولات الإيقاف الاضطراري"),
        t("ESD Systems — full emergency shutdown sequence under time pressure", "أنظمة ESD — تسلسل الإغلاق الاضطراري الكامل تحت ضغط الوقت"),
        t("Control Panels — reading pressure, temperature, flow and correct response to anomalies", "لوحات التحكم — قراءة الضغط والحرارة والتدفق والاستجابة الصحيحة للشذوذات"),
        t("Instrument Calibration — verification procedures for critical instrumentation", "معايرة الأجهزة — إجراءات التحقق للأجهزة الحيوية"),
      ],
      outcomes: [
        t("Reduce operational errors by up to 60% in the first months after deployment", "خفض أخطاء التشغيل بنسبة تصل إلى 60% في الأشهر الأولى بعد النشر"),
        t("Cut new employee onboarding time from weeks to days", "تقليل وقت تأهيل الموظف الجديد من أسابيع إلى أيام"),
        t("Zero production downtime during training — train any time, any site", "صفر توقف للإنتاج خلال التدريب — التدريب في أي وقت وأي موقع"),
      ],
    },
    {
      id: "SIM-LOTO",
      num: "05",
      icon: Shield,
      title: t("Confined Space & LOTO", "الفضاء المحدود والقفل والوسم (LOTO)"),
      desc: t(
        "Confined space emergencies and lockout/tagout procedures are among the most dangerous — and least practiced — scenarios in industrial settings. Workers who freeze in these moments were never truly prepared.",
        "حوادث الفضاء المحدود وإجراءات القفل والوسم (LOTO) من أخطر السيناريوهات وأقلها تدريباً في البيئات الصناعية. العمال الذين يتجمدون في هذه اللحظات لم يُعدّوا لها حقاً."
      ),
      img: IMAGES.simLoto,
      items: [
        t("Confined Space Entry — PTW process, pre-entry atmosphere testing, attendant duties", "الدخول للفضاء المحدود — عملية PTW واختبار الغلاف الجوي قبل الدخول ومهام الحارس"),
        t("Rescue Scenarios — victim identification, extraction procedures, communication protocols", "سيناريوهات الإنقاذ — تحديد الضحية وإجراءات الاستخراج وبروتوكولات التواصل"),
        t("Electrical LOTO — isolation, verification, multi-point lockout for complex systems", "LOTO الكهربائي — العزل والتحقق والقفل متعدد النقاط للأنظمة المعقدة"),
        t("Mechanical LOTO — pump, compressor, and valve isolation sequences", "LOTO الميكانيكي — تسلسلات عزل المضخات والضواغط والصمامات"),
        t("Hydraulic System Isolation — full LOTO procedures under pressure", "عزل النظام الهيدروليكي — إجراءات LOTO الكاملة تحت الضغط"),
        t("Hot Work in Confined Space — permit acquisition, continuous atmosphere monitoring", "الأعمال الساخنة في الفضاء المحدود — الحصول على التصريح والمراقبة المستمرة للغلاف الجوي"),
      ],
      outcomes: [
        t("Practice scenarios legally impossible to run in real confined spaces — no physical risk", "ممارسة سيناريوهات يستحيل قانونياً تنفيذها في الفضاءات المحدودة الحقيقية — بدون مخاطر جسدية"),
        t("Build LOTO muscle memory without halting production or requiring lockout of live systems", "بناء الذاكرة العضلية لـ LOTO دون إيقاف الإنتاج أو اشتراط قفل الأنظمة الحية"),
        t("Audit-ready LOTO documentation for every isolation sequence practiced", "توثيق LOTO جاهز للتدقيق لكل تسلسل عزل يُمارَس"),
      ],
    },
    {
      id: "SIM-AR",
      num: "06",
      icon: Zap,
      title: t("AR Field Support", "الدعم الميداني بالواقع المعزز"),
      desc: t(
        "Your field technician shouldn't need to call a senior engineer for every maintenance task. AR Field Support delivers expert guidance directly to the headset — step by step, on-site, in Arabic — without flying an expert in.",
        "الفني الميداني لديك لا ينبغي أن يحتاج إلى الاتصال بمهندس أول لكل مهمة صيانة. الدعم الميداني AR يُوصّل إرشادات الخبراء مباشرة إلى الخوذة — خطوة بخطوة، في الموقع، بالعربية — دون استدعاء خبير."
      ),
      img: IMAGES.simMaintenance,
      items: [
        t("Valve Maintenance & Replacement — AR overlay on actual equipment with torque specs and sequence", "صيانة الصمامات واستبدالها — تراكب AR على المعدة الفعلية مع مواصفات العزم والتسلسل"),
        t("Pump & Compressor Inspection — live AR checklists aligned with manufacturer SOPs", "فحص المضخات والضواغط — قوائم تفتيش AR مباشرة متوافقة مع SOPs الشركة المصنّعة"),
        t("Instrument Calibration — guided AR walkthrough for critical instrumentation", "معايرة الأجهزة — جولة AR إرشادية للأجهزة الحيوية"),
        t("Electrical Panel Inspection — live circuit overlays with safety zone identification", "فحص اللوحات الكهربائية — تراكبات الدائرة الحية مع تحديد مناطق الأمان"),
        t("Pipe Fitting & Welding Verification — dimensional overlays for quality control", "التحقق من تركيب الأنابيب واللحام — تراكبات أبعاد لضبط الجودة"),
        t("Remote Expert Collaboration — AR session shared with senior engineer anywhere in the world", "التعاون مع خبير عن بُعد — جلسة AR مشتركة مع مهندس أول في أي مكان بالعالم"),
      ],
      outcomes: [
        t("Improve first-time fix rate for maintenance tasks — reduce repeat call-outs", "تحسين معدل الإصلاح من المحاولة الأولى لمهام الصيانة — تقليل الاستدعاءات المتكررة"),
        t("Reduce expert site visits by 40–60% — same outcome without the travel cost", "تقليل زيارات الخبراء للموقع بنسبة 40-60% — نفس النتيجة بدون تكلفة السفر"),
        t("Full digital record of every maintenance activity — traceable, audit-ready", "سجل رقمي كامل لكل نشاط صيانة — قابل للتتبع وجاهز للتدقيق"),
      ],
    },
    {
      id: "SIM-LMS",
      num: "07",
      icon: TrendingUp,
      title: t("Smart Learning Platform", "منصة التعلم الذكي"),
      desc: t(
        "Training data without insight is noise. The Smart Learning Platform turns every VR session into actionable competency intelligence — adaptive scenarios, bilingual content, and offline deployment for remote sites.",
        "بيانات التدريب بدون تحليل مجرد ضوضاء. منصة التعلم الذكي تحوّل كل جلسة VR إلى معلومات استخباراتية قابلة للتنفيذ — سيناريوهات تكيّفية ومحتوى ثنائي اللغة ونشر بدون إنترنت للمواقع النائية."
      ),
      img: IMAGES.simOnboarding,
      items: [
        t("Adaptive Difficulty — scenarios auto-adjust based on real-time performance scores", "الصعوبة التكيّفية — تتكيّف السيناريوهات تلقائياً بناءً على درجات الأداء الفوري"),
        t("Competency Gap Analysis — identify and close individual skill deficits before incidents occur", "تحليل ثغرات الكفاءة — تحديد قصور المهارات الفردية وسدّها قبل وقوع الحوادث"),
        t("Arabic + English bilingual content — native language, not translated, for full comprehension", "محتوى ثنائي اللغة عربي وإنجليزي — لغة أصلية لا مترجمة، لاستيعاب كامل"),
        t("Offline Deployment — works without internet on remote oilfield and offshore sites", "النشر بدون إنترنت — يعمل بدون اتصال إنترنت في حقول النفط النائية والمنصات البحرية"),
        t("Progress Dashboards — real-time HSE manager view across trainees and sites", "لوحات متابعة التقدم — رؤية فورية لمدير HSE عبر المتدربين والمواقع"),
        t("LMS Integration — connect to existing learning management systems via API", "تكامل LMS — الاتصال بأنظمة إدارة التعلم الحالية عبر API"),
      ],
      outcomes: [
        t("Replace generic annual assessments with ongoing, data-driven competency monitoring", "استبدال التقييمات السنوية العامة بمراقبة مستمرة للكفاءة مدفوعة بالبيانات"),
        t("Identify high-risk individuals before an incident reveals them — proactive, not reactive", "تحديد الأفراد عالي المخاطر قبل أن يكشفهم الحادث — استباقي لا تفاعلي"),
        t("Full audit trail for regulatory compliance — exportable on demand", "مسار تدقيق كامل للامتثال التنظيمي — قابل للتصدير عند الطلب"),
      ],
    },
    {
      id: "SIM-ENT",
      num: "08",
      icon: Building2,
      title: t("Enterprise XR Program", "برنامج XR المؤسسي"),
      desc: t(
        "For organizations ready to modernize training at scale. A full-service engagement from safety audit to deployment — complete training modernization managed end to end by the SIMULXR team.",
        "للمؤسسات المستعدة لتحديث التدريب على نطاق واسع. برنامج متكامل من تدقيق السلامة حتى التشغيل — تحديث كامل لمنظومة التدريب بإدارة شاملة من فريق SIMULXR."
      ),
      img: IMAGES.simEquipment,
      items: [
        t("Safety Gap Audit — identify highest-risk training deficits across your workforce", "تدقيق ثغرات السلامة — تحديد أعلى مخاطر قصور التدريب في قواتك العاملة"),
        t("Custom Simulation Development — built from your facility CAD/BIM, SOPs, and incident history", "تطوير المحاكاة المخصصة — مبنية من CAD/BIM منشأتك وSOPs وسجل الحوادث"),
        t("Hardware Procurement & Setup — Meta Quest fleet sourcing, configuration, and management", "شراء الأجهزة وإعدادها — توريد أسطول Meta Quest وضبطه وإدارته"),
        t("Train-the-Trainer Program — upskill your HSE team to run and manage simulations independently", "برنامج تدريب المدربين — رفع كفاءة فريق HSE لتشغيل المحاكاة وإدارتها بشكل مستقل"),
        t("LMS Integration — connect SIMULXR data to your existing enterprise training systems", "تكامل LMS — ربط بيانات SIMULXR بأنظمة التدريب المؤسسية الحالية"),
        t("Ongoing Content Updates — as SOPs and procedures evolve, so does your simulation library", "تحديثات المحتوى المستمرة — مع تطور SOPs والإجراءات، تتطور مكتبة المحاكاة"),
      ],
      outcomes: [
        t("Full training modernization without requiring internal XR expertise — we manage everything", "تحديث كامل للتدريب دون الحاجة إلى خبرة XR داخلية — نحن ندير كل شيء"),
        t("One vendor, one contract, zero gaps — from audit to deployment to ongoing management", "مورد واحد، عقد واحد، بدون ثغرات — من التدقيق إلى النشر إلى الإدارة المستمرة"),
        t("Measurable ROI dashboard from day one — training spend tied to competency outcomes", "لوحة ROI قابلة للقياس منذ اليوم الأول — ربط الإنفاق التدريبي بنتائج الكفاءة"),
      ],
    },
  ];

  const active = services[activeService];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0F2A4A] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMAGES.simEquipment})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A4A]/80 to-[#0F2A4A]" />
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("OUR SOLUTIONS", "حلولنا")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Eight XR Solutions.", "ثماني حلول XR.")}<span className="text-gold"> </span>
            <br />
            {t("Built for Your Facility.", "مبنية لمنشأتك.")}<span className="text-gold"> </span>
          </h1>
          <p className="text-white/50 max-w-2xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "Eight integrated solutions built on your actual CAD/BIM data — emergency response, digital twin training, HSE competency, AR field support, and more. Your equipment, your procedures, your language.",
              "ثماني حلول متكاملة مبنية على بيانات CAD/BIM الفعلية — الاستجابة للطوارئ والتوأم الرقمي وكفاءة HSE والدعم الميداني AR والمزيد. معداتك، إجراءاتك، لغتك."
            )}
          </p>
        </div>
      </section>

      {/* Delivery Models */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F2A4A]">
              {t("Two Delivery Models", "نموذجا التسليم")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-light rounded-lg p-8 text-center">
              <Package className="w-10 h-10 text-[#D4622B] mx-auto mb-4" />
              <h3 className="font-display text-xl text-[#0F2A4A] mb-4">{t("Standard", "قياسي")}</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• {t("Ready-to-deploy simulations", "محاكاة جاهزة للنشر الفوري")}</li>
                <li>• {t("Deploy in 2-4 weeks", "نشر في 2-4 أسابيع")}</li>
                <li>• {t("Lower cost — entry level", "تكلفة أقل — entry level")}</li>
                <li>• {t("Best for onboarding & new hires", "للتأهيل الأولي والموظفين الجدد")}</li>
                <li>• {t("No files needed from you", "لا يحتاج ملفات منك")}</li>
              </ul>
            </div>
            <div className="card-light rounded-lg p-8 text-center border-2 border-[#D4622B]/30">
              <Building2 className="w-10 h-10 text-[#D4622B] mx-auto mb-4" />
              <h3 className="font-display text-xl text-[#0F2A4A] mb-4">{t("Facility-Specific", "مخصص")}</h3>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• {t("Built from your CAD/BIM/Navisworks files", "مبني من ملفات CAD/BIM/Navisworks الخاصة بك")}</li>
                <li>• {t("Deploy in 6-14 weeks", "نشر في 6-14 أسبوعاً حسب التعقيد")}</li>
                <li>• {t("Higher ROI — deeper impact", "ROI أعلى — أثر أعمق")}</li>
                <li>• {t("Best for advanced training & critical emergencies", "للتدريب المتقدم والطوارئ الحرجة")}</li>
                <li>• {t("Requires: CAD + SOPs + facility plans", "يحتاج: CAD + SOPs + مخططات المنشأة")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-24 md:py-32 bg-[#0F2A4A]">
        <div className="container">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeService === i
                    ? "bg-[#D4622B] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span className="font-mono text-xs mr-2 opacity-60">{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <active.icon className="w-6 h-6 text-[#D4622B]" />
                <span className="text-[#00B4D8] text-sm font-mono">{active.id}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-6">{active.title}</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{active.desc}</p>

              <h4 className="text-[#00B4D8] text-sm font-semibold uppercase tracking-wider mb-4">
                {t("Scenarios & Capabilities", "السيناريوهات والقدرات")}
              </h4>
              <ul className="space-y-3 mb-8">
                {active.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4622B] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="text-[#00B4D8] text-sm font-semibold uppercase tracking-wider mb-4">
                {t("Expected Outcomes", "النتائج المتوقعة")}
              </h4>
              <ul className="space-y-3">
                {active.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 mt-1.5 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 block" style={{ color: "#00B4D8" }}>
              {t("COMPLIANCE", "الامتثال")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0F2A4A]">
              {t("Industry Standards We Align With", "المعايير التي نلتزم بها")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { std: "API RP 505", scope: t("Emergency Response — fire & gas detection", "الاستجابة للطوارئ — كشف الحريق والغاز") },
              { std: "NFPA 72", scope: t("Emergency Response — alarm systems", "الاستجابة للطوارئ — أنظمة الإنذار") },
              { std: "ISA-84", scope: t("Emergency Response — safety instrumented systems", "الاستجابة للطوارئ — أنظمة السلامة الآلية") },
              { std: "OSHA Aligned", scope: t("All solutions — HSE compliance", "جميع الحلول — امتثال HSE") },
              { std: "EGPC", scope: t("All solutions — Egyptian market", "جميع الحلول — السوق المصري") },
              { std: "API 14C", scope: t("Equipment + Digital Twin", "المعدات + التوأم الرقمي") },
              { std: "IOGP", scope: t("HSE Competency Platform", "منصة كفاءة HSE") },
              { std: "OPITO", scope: t("HSE + Equipment Operation", "HSE + تشغيل المعدات") },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center">
                <div className="font-display text-lg text-[#0F2A4A] mb-1">{item.std}</div>
                <p className="text-gray-400 text-xs">{item.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#D4622B]">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            {t("Where Do You Start?", "من أين تبدأ؟")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Not sure which service fits best? Tell us your facility type and key training challenges — we'll recommend the right model within 48 hours.",
              "لست متأكداً من الخدمة الأنسب؟ أخبرنا بنوع المنشأة وأبرز تحديات التدريب — وسنقترح النموذج الأنسب خلال 48 ساعة."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#D4622B] font-semibold hover:bg-[#F5F6F8] transition-all hover:-translate-y-0.5">
              {t("Request Free Consultation", "اطلب استشارة مجانية")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
