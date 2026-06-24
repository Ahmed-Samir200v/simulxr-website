import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowRight, Wrench, ShieldAlert, Monitor, Package, Building2,
  Layers3, TrendingUp, Zap, Shield, MapPin, FileCheck, Clock,
  BarChart3, CheckCircle2, ChevronDown, Users, WifiOff, Globe, Settings
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { IMAGES } from "@/lib/assets";

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      id: "SIM-EMERGENCY",
      num: "01",
      icon: ShieldAlert,
      title: t("Emergency Response", "الاستجابة للطوارئ"),
      heroHeadline: t(
        "When a Gas Leak Alarm Sounds, Your Workers Have Seconds. Did They Ever Practice This?",
        "عندما يدق إنذار تسريب الغاز، لدى عمالك ثوانٍ. هل مارسوا ذلك من قبل؟"
      ),
      desc: t(
        "SIMULXR Emergency Response Training puts workers inside photorealistic VR simulations of gas leaks, fires, evacuations, and spill containment — built from your facility's actual layout — so they develop the muscle memory to respond correctly when every second counts.",
        "يضع تدريب SIMULXR للاستجابة للطوارئ العمالَ داخل محاكاة VR فائقة الواقعية لتسريبات الغاز والحرائق والإخلاء واحتواء الانسكاب — مبنية من التخطيط الفعلي لمنشأتك — حتى يكتسبوا الذاكرة العضلية للاستجابة الصحيحة حين تُحسب كل ثانية."
      ),
      img: IMAGES.simEmergency,
      problem: [
        t(
          "Emergency response drills in oil and gas are expensive, infrequent, and impossible to run for the scenarios that matter most. You cannot recreate a gas explosion. You cannot safely simulate a confined space collapse. You cannot run a live H2S release drill without shutting down operations.",
          "تدريبات الاستجابة للطوارئ في النفط والغاز مكلفة ونادرة ويستحيل تنفيذها للسيناريوهات الأكثر أهمية. لا يمكنك إعادة خلق انفجار غاز. لا يمكنك محاكاة انهيار فضاء محدود بأمان. لا يمكنك إجراء تمرين تسريب H2S حي دون إيقاف العمليات."
        ),
        t(
          "The result: workers who know emergency procedures in theory but freeze when facing them in reality. The 3-second hesitation between alarm and action is the difference between isolation and escalation.",
          "النتيجة: عمال يعرفون إجراءات الطوارئ نظرياً لكنهم يتجمدون حين يواجهونها على أرض الواقع. التردد لمدة 3 ثوانٍ بين الإنذار والتصرف هو الفارق بين العزل والتصاعد."
        ),
        t(
          "Every year, preventable emergency incidents occur because workers were trained on slides — not on the actual scenarios they faced. SIMULXR closes that gap.",
          "كل عام تقع حوادث طوارئ كان يمكن تفاديها لأن العمال دُرِّبوا على شرائح عروض — لا على السيناريوهات الفعلية التي واجهوها. SIMULXR يُغلق هذه الفجوة."
        ),
      ],
      solution: [
        t("Detect gas leaks using virtual LEL monitors in facility-specific environments", "كشف تسريبات الغاز باستخدام أجهزة مراقبة LEL افتراضية في بيئات خاصة بالمنشأة"),
        t("Execute isolation and shutdown sequences under escalating time pressure", "تنفيذ تسلسلات العزل والإغلاق تحت ضغط زمني متصاعد"),
        t("Navigate evacuation routes in reduced-visibility smoke conditions", "التنقل عبر مسارات الإخلاء في ظروف رؤية منخفضة بسبب الدخان"),
        t("Coordinate multi-participant team response — field and control room simultaneously", "تنسيق استجابة الفريق متعدد المشاركين — الميدان وغرفة التحكم في آن واحد"),
        t("Practice until correct emergency response becomes automatic muscle memory", "التدرب حتى تصبح الاستجابة الطارئة الصحيحة ذاكرة عضلية تلقائية"),
      ],
      features: [
        { icon: MapPin, title: t("Facility-Specific", "خاص بالمنشأة"), desc: t("Built from your CAD/BIM/Navisworks data — workers train in their actual pump room and control room, not a generic environment.", "مبني من ملفات CAD/BIM/Navisworks — يتدرب العمال في غرفة المضخات وغرفة التحكم الفعلية لديهم، لا في بيئة عامة.") },
        { icon: FileCheck, title: t("SOP-Grounded", "مبني على SOPs"), desc: t("Scenarios follow API RP 505 classification zones, NFPA 72 alarm protocols, and ISA-84 safety instrumented system procedures.", "تتبع السيناريوهات مناطق تصنيف API RP 505 وبروتوكولات إنذار NFPA 72 وإجراءات أنظمة السلامة الآلية ISA-84.") },
        { icon: BarChart3, title: t("Progressive Difficulty", "صعوبة تصاعدية"), desc: t("Start with guided walkthroughs, progress to timed scenarios with escalating conditions and reduced instructor support.", "ابدأ بجولات إرشادية، وتقدم إلى سيناريوهات موقوتة بظروف متصاعدة ودعم أقل من المدرب.") },
        { icon: Globe, title: t("Arabic-First", "العربية أولاً"), desc: t("All instructions, alarms, and feedback delivered in Arabic. English toggle available for bilingual teams.", "جميع التعليمات والإنذارات والملاحظات تُقدَّم بالعربية. خيار التبديل للإنجليزية متاح للفرق ثنائية اللغة.") },
        { icon: Clock, title: t("Real-Time Scoring", "تقييم فوري"), desc: t("Response time, decision accuracy, and procedure sequence correctness tracked automatically for every trainee, every session.", "تتبع تلقائي لوقت الاستجابة ودقة القرار وصحة تسلسل الإجراءات لكل متدرب في كل جلسة.") },
        { icon: Layers3, title: t("Audit-Ready Reports", "تقارير جاهزة للتدقيق"), desc: t("Competency data exportable for HSE compliance documentation — one click, ready for regulators.", "بيانات الكفاءة قابلة للتصدير لتوثيق امتثال HSE — بنقرة واحدة، جاهزة للجهات التنظيمية.") },
      ],
      impact: [
        { metric: t("Emergency response time", "وقت الاستجابة للطوارئ"), value: t("40% reduction — muscle memory vs. theory", "انخفاض 40% — ذاكرة عضلية مقابل نظرية") },
        { metric: t("Knowledge retention at 30 days", "الاحتفاظ بالمعرفة بعد 30 يوماً"), value: t("80% vs. 20% classroom baseline", "80% مقابل 20% في التدريب التقليدي") },
        { metric: t("Correct isolation sequence, first attempt", "تسلسل العزل الصحيح من المحاولة الأولى"), value: t("95%+ vs. 60% baseline", "95%+ مقابل 60% في الأساس") },
        { metric: t("Training frequency", "تكرار التدريب"), value: t("Unlimited VR drills vs. 1 annual physical drill", "تمارين VR غير محدودة مقابل تمرين ميداني واحد سنوياً") },
        { metric: t("Cost per incident prevented", "التكلفة لكل حادثة يتم تفاديها"), value: t("$500K–$2M+ saved per gas leak incident", "توفير 500 ألف إلى أكثر من 2 مليون دولار لكل حادثة") },
        { metric: t("Training risk", "مخاطر التدريب"), value: t("Zero — vs. physical exposure in live drills", "صفر — مقابل التعرض الجسدي في التمارين الحية") },
      ],
      faq: [
        { q: t("How long does it take to build a custom emergency response simulation?", "كم من الوقت يستغرق بناء محاكاة استجابة طوارئ مخصصة؟"), a: t("From facility data ingestion to deployment: 2–6 weeks depending on zone complexity and number of scenarios.", "من استيعاب بيانات المنشأة حتى النشر: 2-6 أسابيع حسب تعقيد المنطقة وعدد السيناريوهات.") },
        { q: t("Do we need to provide CAD files, or can you work from site photos?", "هل نحتاج إلى تقديم ملفات CAD، أم يمكنكم العمل من صور الموقع؟"), a: t("We work best with CAD/BIM/Navisworks files for maximum facility accuracy. We can supplement with site photos and 360 captures.", "نعمل بأفضل صورة مع ملفات CAD/BIM/Navisworks لأقصى دقة في المنشأة. يمكننا التكميل بصور الموقع والتصوير بزاوية 360 درجة.") },
        { q: t("Can workers train without prior VR experience?", "هل يمكن للعمال التدريب بدون خبرة سابقة في VR؟"), a: t("Yes. The interface is designed for workers with zero VR background. Onboarding takes 15 minutes. All instructions in Arabic.", "نعم. الواجهة مصممة للعمال الذين ليس لديهم خلفية VR. التأهيل يستغرق 15 دقيقة. جميع التعليمات بالعربية.") },
        { q: t("How do you ensure the scenarios match our actual procedures?", "كيف تضمنون أن السيناريوهات تتوافق مع إجراءاتنا الفعلية؟"), a: t("Every scenario is built in collaboration with your HSE team and validated against your SOPs and relevant safety standards — API, OSHA, NFPA 72, ISA-84.", "كل سيناريو يُبنى بالتعاون مع فريق HSE لديكم ويُتحقق منه مقابل SOPs الخاصة بكم ومعايير السلامة ذات الصلة — API وOSHA وNFPA 72 وISA-84.") },
        { q: t("What hardware do we need?", "ما الأجهزة التي نحتاجها؟"), a: t("Meta Quest 3 headsets — standalone, no PC required. We can provide hardware as part of a full-solution engagement.", "خوذات Meta Quest 3 — مستقلة، لا تحتاج إلى كمبيوتر. يمكننا توفير الأجهزة كجزء من التعاقد على الحل الكامل.") },
      ],
    },
    {
      id: "SIM-TWIN",
      num: "02",
      icon: Monitor,
      title: t("Digital Twin Training", "التدريب بالتوأم الرقمي"),
      heroHeadline: t(
        "Your Control Room Operators Make the First Decision in Every Crisis. Are They Ready?",
        "مشغّلو غرفة التحكم لديك يتخذون القرار الأول في كل أزمة. هل هم مستعدون؟"
      ),
      desc: t(
        "SIMULXR Digital Twin Training builds a photorealistic virtual replica of your facility from actual CAD/BIM/Navisworks files — every screen, device, SCADA and DCS system reproduced exactly — so operators can train on high-stakes scenarios without touching real production.",
        "يبني تدريب التوأم الرقمي من SIMULXR نسخة افتراضية فائقة الواقعية من منشأتك من ملفات CAD/BIM/Navisworks الفعلية — كل شاشة وجهاز ونظام SCADA وDCS مُعاد إنشاؤه بدقة — حتى يتدرب المشغّلون على سيناريوهات عالية الخطورة دون لمس الإنتاج الفعلي."
      ),
      img: IMAGES.simConfined,
      problem: [
        t(
          "Control room operators are the first responders in any industrial crisis. The quality of their decisions in the first 60 seconds determines whether an incident becomes a near-miss or a catastrophe. Yet training them on real systems means halting production — sometimes for hours.",
          "مشغّلو غرفة التحكم هم أول المستجيبين في أي أزمة صناعية. جودة قراراتهم في أول 60 ثانية تحدد ما إذا كان الحادث سيصبح حادثة قريبة أو كارثة. ومع ذلك، تدريبهم على الأنظمة الفعلية يعني إيقاف الإنتاج — أحياناً لساعات."
        ),
        t(
          "Physical control room simulators exist but cost millions, require dedicated rooms, and are built around generic interfaces. They don't match your actual SCADA screens, your specific DCS configuration, or the exact alarm sequences your operators face every shift.",
          "توجد محاكيات غرف التحكم المادية لكنها تكلف الملايين وتتطلب غرفاً مخصصة وتُبنى حول واجهات عامة. إنها لا تتطابق مع شاشات SCADA الفعلية لديك، ولا مع تكوين DCS المحدد، ولا مع تسلسلات الإنذار التي يواجهها مشغّلوك في كل وردية."
        ),
        t(
          "The gap between theoretical training and real operational performance is widest for control room staff — and the consequences of that gap are the most severe.",
          "الفجوة بين التدريب النظري والأداء التشغيلي الفعلي هي الأوسع لموظفي غرفة التحكم — وعواقب هذه الفجوة هي الأشد خطورة."
        ),
      ],
      solution: [
        t("Build a photorealistic digital twin of your actual control room from CAD/BIM files", "بناء توأم رقمي فائق الواقعية لغرفة التحكم الفعلية من ملفات CAD/BIM"),
        t("Replicate every SCADA screen, DCS interface, and alarm system exactly as they appear on shift", "تكرار كل شاشة SCADA وواجهة DCS ونظام إنذار بالضبط كما تظهر أثناء الوردية"),
        t("Run high-stakes scenarios — full ESD, power failures, alarm floods — without touching real production", "تشغيل سيناريوهات عالية الخطورة — ESD كامل وانقطاع الطاقة وفيضان الإنذارات — دون لمس الإنتاج الفعلي"),
        t("Train entire shift teams simultaneously in the same virtual environment", "تدريب فرق الوردية الكاملة في آن واحد في نفس البيئة الافتراضية"),
      ],
      features: [
        { icon: MapPin, title: t("Facility-Accurate Twin", "توأم دقيق للمنشأة"), desc: t("Built from your actual CAD/BIM/Navisworks files — not a generic simulator. Your layout, your instrumentation, your alarm logic.", "مبني من ملفات CAD/BIM/Navisworks الفعلية — لا محاكي عام. تخطيطك، أجهزتك، منطق الإنذار لديك.") },
        { icon: Monitor, title: t("SCADA/DCS Replication", "تكرار SCADA/DCS"), desc: t("Every screen, device, and alarm mirrored from your real system — operators train on what they actually use.", "كل شاشة وجهاز وإنذار مُنعكَس من نظامك الفعلي — يتدرب المشغّلون على ما يستخدمونه فعلاً.") },
        { icon: ShieldAlert, title: t("High-Stakes Scenarios", "سيناريوهات عالية الخطورة"), desc: t("Full ESD, power failure, alarm flood, and shift handover under emergency conditions — run weekly instead of annually.", "ESD كامل وانقطاع الطاقة وفيضان الإنذارات وتسليم الوردية في ظروف الطوارئ — أسبوعياً بدلاً من سنوياً.") },
        { icon: Users, title: t("Multi-Operator Training", "تدريب متعدد المشغّلين"), desc: t("Train entire shift teams simultaneously in the same virtual environment — control room and field teams coordinated.", "تدريب فرق الوردية الكاملة في آن واحد في نفس البيئة الافتراضية — تنسيق غرفة التحكم والفرق الميدانية.") },
        { icon: Globe, title: t("Arabic-First Interface", "واجهة بالعربية أولاً"), desc: t("Operator HMI labels, alarms, and all instructions in Arabic — the language operators think and respond in.", "تسميات HMI للمشغّل والإنذارات وجميع التعليمات بالعربية — اللغة التي يفكر بها المشغّلون ويستجيبون فيها.") },
        { icon: BarChart3, title: t("Session Recording & Debrief", "تسجيل الجلسة والتغذية الراجعة"), desc: t("Review every decision with trainees after each session — structured debrief that accelerates learning.", "مراجعة كل قرار مع المتدربين بعد كل جلسة — تغذية راجعة منظمة تسرّع التعلم.") },
      ],
      impact: [
        { metric: t("Training frequency for full-plant shutdown scenarios", "تكرار تدريب سيناريوهات الإغلاق الكامل للمنشأة"), value: t("Weekly in VR vs. annual production-halt drills", "أسبوعياً في VR مقابل تمارين إيقاف الإنتاج السنوية") },
        { metric: t("New control room operator onboarding time", "وقت تأهيل مشغّلي غرفة التحكم الجدد"), value: t("Reduced by 30–40% through structured VR practice", "انخفض بنسبة 30-40% من خلال التدريب المنظم في VR") },
        { metric: t("Decision accuracy in first 60 seconds of emergency", "دقة القرار في أول 60 ثانية من حالات الطوارئ"), value: t("Measurable improvement after 4 VR sessions", "تحسن قابل للقياس بعد 4 جلسات VR") },
        { metric: t("Production risk during training", "مخاطر الإنتاج أثناء التدريب"), value: t("Zero — all scenarios run in VR, not live systems", "صفر — جميع السيناريوهات تُشغَّل في VR، لا في الأنظمة الحية") },
        { metric: t("Cost vs. physical control room simulator", "التكلفة مقابل محاكي غرفة التحكم المادي"), value: t("Fraction of the cost — runs on Meta Quest headsets", "جزء من التكلفة — يعمل على خوذات Meta Quest") },
      ],
      faq: [
        { q: t("What files do we need to provide to build the digital twin?", "ما الملفات التي نحتاج تقديمها لبناء التوأم الرقمي؟"), a: t("CAD/BIM/Navisworks files for facility geometry, plus SCADA screen captures, alarm list, and P&ID diagrams for control logic.", "ملفات CAD/BIM/Navisworks لهندسة المنشأة، بالإضافة إلى لقطات شاشة SCADA وقائمة الإنذارات ومخططات P&ID لمنطق التحكم.") },
        { q: t("How accurate is the digital replication of our SCADA?", "ما مدى دقة التكرار الرقمي لنظام SCADA لدينا؟"), a: t("Visual fidelity comes from actual design files. Functional logic is built from your SOPs and alarm documentation — reviewed with your control room team before deployment.", "تأتي الدقة البصرية من ملفات التصميم الفعلية. يُبنى المنطق الوظيفي من SOPs الخاصة بك ووثائق الإنذار — تُراجَع مع فريق غرفة التحكم قبل النشر.") },
        { q: t("Can multiple operators train simultaneously in the same scenario?", "هل يمكن لمشغّلين متعددين التدريب في نفس السيناريو في آن واحد؟"), a: t("Yes, up to 10 concurrent users can share the same virtual environment — control room operators, field technicians, and shift supervisors together.", "نعم، يمكن لما يصل إلى 10 مستخدمين متزامنين مشاركة نفس البيئة الافتراضية — مشغّلو غرفة التحكم والفنيون الميدانيون ومشرفو الوردية معاً.") },
        { q: t("Do operators need VR experience before training?", "هل يحتاج المشغّلون خبرة في VR قبل التدريب؟"), a: t("No. Onboarding takes 15 minutes. All interface elements are in Arabic with intuitive controls designed for industrial workers.", "لا. التأهيل يستغرق 15 دقيقة. جميع عناصر الواجهة بالعربية مع عناصر تحكم بديهية مصممة للعمال الصناعيين.") },
        { q: t("How does this differ from a traditional DCS simulator?", "كيف يختلف هذا عن محاكي DCS التقليدي؟"), a: t("Built from your actual facility at a fraction of the cost. Runs on standalone Meta Quest headsets — no dedicated room required. Bilingual Arabic-English. Deployed in weeks, not months.", "مبني من منشأتك الفعلية بجزء من التكلفة. يعمل على خوذات Meta Quest المستقلة — لا يتطلب غرفة مخصصة. ثنائي اللغة عربي-إنجليزي. يُنشر في أسابيع لا أشهر.") },
      ],
    },
    {
      id: "SIM-HSE",
      num: "03",
      icon: Layers3,
      title: t("HSE Competency Platform", "منصة كفاءة HSE"),
      heroHeadline: t(
        "Annual Safety Tests Don't Catch the Worker Who Will Freeze in an Emergency. Real-Time Competency Data Does.",
        "الاختبارات الأمنية السنوية لا تكتشف العامل الذي سيتجمد في الطوارئ. بيانات الكفاءة الفورية تفعل."
      ),
      desc: t(
        "SIMULXR's HSE Competency Platform turns every VR training session into real-time competency intelligence — per-trainee scoring, gap analysis dashboards for HSE managers, and one-click audit-ready reports for regulators.",
        "تحوّل منصة كفاءة HSE من SIMULXR كل جلسة تدريب VR إلى معلومات استخباراتية فورية للكفاءة — درجات لكل متدرب ولوحات تحليل ثغرات لمديري HSE وتقارير جاهزة للتدقيق بنقرة واحدة للجهات التنظيمية."
      ),
      img: IMAGES.simOnboarding,
      problem: [
        t(
          "Annual safety assessments are the industry standard. They are also insufficient. A single test per year does not catch competency decay between assessments. It does not identify the individual who passes on paper but freezes in the field.",
          "التقييمات الأمنية السنوية هي المعيار الصناعي. لكنها أيضاً غير كافية. اختبار واحد في السنة لا يكتشف تدهور الكفاءة بين التقييمات. ولا يحدد الفرد الذي ينجح على الورق لكنه يتجمد في الميدان."
        ),
        t(
          "HSE managers across the region manage compliance documentation manually — paper records, spreadsheets, scattered reports. When auditors arrive, assembling evidence is itself a project.",
          "يدير مديرو HSE في المنطقة وثائق الامتثال يدوياً — سجلات ورقية وجداول بيانات وتقارير متفرقة. عندما يصل المدققون، يكون تجميع الأدلة مشروعاً بحد ذاته."
        ),
        t(
          "The problem is not that organizations don't care about competency. The problem is they lack real-time visibility into who is ready and who is at risk.",
          "المشكلة ليست أن المؤسسات لا تهتم بالكفاءة. المشكلة هي أنها تفتقر إلى الرؤية الفورية حول من هو مستعد ومن هو في خطر."
        ),
      ],
      solution: [
        t("Score every VR training session automatically — response time, decision accuracy, procedure sequence", "تقييم كل جلسة تدريب VR تلقائياً — وقت الاستجابة ودقة القرار وتسلسل الإجراءات"),
        t("Surface individual competency gaps and trending risks to HSE managers in real-time dashboards", "إظهار ثغرات الكفاءة الفردية والمخاطر المتزايدة لمديري HSE في لوحات تحكم فورية"),
        t("Generate one-click audit-ready compliance reports aligned with OSHA, API RP 505, and IOGP", "إنشاء تقارير امتثال جاهزة للتدقيق بنقرة واحدة متوافقة مع OSHA وAPI RP 505 وIOGP"),
      ],
      features: [
        { icon: BarChart3, title: t("Per-Trainee Competency Scores", "درجات الكفاءة لكل متدرب"), desc: t("Response time, decision accuracy, and procedure sequence tracked automatically — for every session, every worker.", "تتبع تلقائي لوقت الاستجابة ودقة القرار وتسلسل الإجراءات — لكل جلسة، لكل عامل.") },
        { icon: ShieldAlert, title: t("Gap Analysis Dashboard", "لوحة تحليل الثغرات"), desc: t("Identify individuals at highest risk before an incident reveals them — proactive, data-driven HSE management.", "تحديد الأفراد الأعلى خطراً قبل أن يكشفهم الحادث — إدارة HSE استباقية مدفوعة بالبيانات.") },
        { icon: TrendingUp, title: t("Competency Trending", "اتجاهات الكفاءة"), desc: t("Track improvement — or decay — across sessions and over time for every trainee in your organization.", "تتبع التحسن — أو التراجع — عبر الجلسات وبمرور الوقت لكل متدرب في مؤسستك.") },
        { icon: FileCheck, title: t("One-Click Regulatory Export", "التصدير التنظيمي بنقرة واحدة"), desc: t("Compliance reports aligned with OSHA, API RP 505, IOGP, EGPC — generated instantly, no manual assembly.", "تقارير الامتثال متوافقة مع OSHA وAPI RP 505 وIOGP وEGPC — تُنشأ فوراً دون تجميع يدوي.") },
        { icon: Users, title: t("Multi-Site Manager View", "عرض المدير متعدد المواقع"), desc: t("HSE managers see all trainees across all sites in one real-time dashboard — no site visits required to check compliance.", "يرى مديرو HSE جميع المتدربين عبر جميع المواقع في لوحة تحكم فورية واحدة — دون الحاجة لزيارة مواقع للتحقق من الامتثال.") },
        { icon: Clock, title: t("Certification Expiry Tracking", "تتبع انتهاء الشهادات"), desc: t("Automatic alerts when competency certifications are due for renewal — no manual tracking required.", "تنبيهات تلقائية عند استحقاق تجديد شهادات الكفاءة — لا يلزم تتبع يدوي.") },
      ],
      impact: [
        { metric: t("Assessment frequency", "تكرار التقييم"), value: t("Continuous per-session vs. once-annual paper test", "مستمر لكل جلسة مقابل اختبار ورقي سنوي مرة واحدة") },
        { metric: t("Audit preparation time", "وقت إعداد التدقيق"), value: t("Near-zero with one-click export vs. days of manual assembly", "قريب من الصفر مع التصدير بنقرة واحدة مقابل أيام من التجميع اليدوي") },
        { metric: t("At-risk worker identification", "تحديد العمال المعرضين للخطر"), value: t("Proactive — data-driven, before incidents — vs. reactive", "استباقي — مدفوع بالبيانات، قبل الحوادث — مقابل تفاعلي") },
        { metric: t("Compliance documentation", "وثائق الامتثال"), value: t("100% audit-ready after every training session", "100% جاهزة للتدقيق بعد كل جلسة تدريب") },
        { metric: t("Regulatory findings", "النتائج التنظيمية"), value: t("Reduced through continuous competency monitoring", "منخفضة من خلال المراقبة المستمرة للكفاءة") },
      ],
      faq: [
        { q: t("Which regulatory standards does the platform align with?", "ما المعايير التنظيمية التي تتوافق معها المنصة؟"), a: t("OSHA, API RP 505, IOGP, EGPC, NFPA 72, and ISA-84. Reports are formatted to meet these standards directly.", "OSHA وAPI RP 505 وIOGP وEGPC وNFPA 72 وISA-84. التقارير مُنسَّقة للامتثال لهذه المعايير مباشرة.") },
        { q: t("Can we connect the platform to our existing LMS?", "هل يمكننا ربط المنصة بنظام LMS الحالي لدينا؟"), a: t("Yes, via API integration. Compatible with SAP SuccessFactors, Oracle HCM, Cornerstone, and custom enterprise systems.", "نعم، عبر تكامل API. متوافق مع SAP SuccessFactors وOracle HCM وCornerstone والأنظمة المؤسسية المخصصة.") },
        { q: t("How are competency scores calculated?", "كيف تُحسَب درجات الكفاءة؟"), a: t("Weighted combination of response time, decision accuracy, and procedure sequence correctness — calibrated against industry benchmarks and client SOPs.", "مزيج مرجح من وقت الاستجابة ودقة القرار وصحة تسلسل الإجراءات — مُعاير مقابل المعايير الصناعية وSOPs العميل.") },
        { q: t("Can HSE managers access dashboards without VR headsets?", "هل يمكن لمديري HSE الوصول إلى لوحات التحكم دون خوذات VR؟"), a: t("Yes. All dashboards and reports are web-based — accessible from any browser, on any device, from any location.", "نعم. جميع لوحات التحكم والتقارير مستندة إلى الويب — يمكن الوصول إليها من أي متصفح وأي جهاز ومن أي موقع.") },
        { q: t("What happens when a worker falls below a competency threshold?", "ماذا يحدث عندما ينخفض مستوى العامل دون حد الكفاءة؟"), a: t("Automatic alert is sent to their HSE manager with the specific gap identified and a recommended remediation scenario to complete.", "يُرسَل تنبيه تلقائي إلى مدير HSE الخاص به مع الثغرة المحددة المُحدَّدة وسيناريو علاجي موصى به لإكماله.") },
      ],
    },
    {
      id: "SIM-EQUIP",
      num: "04",
      icon: Wrench,
      title: t("Equipment Operation Simulation", "محاكاة تشغيل المعدات"),
      heroHeadline: t(
        "The First Time Your Operator Touches Real Equipment Should Not Be the First Time They've Done It.",
        "المرة الأولى التي يلمس فيها مشغّلك المعدات الحقيقية يجب ألا تكون المرة الأولى التي يفعل فيها ذلك."
      ),
      desc: t(
        "SIMULXR Equipment Operation Simulation builds a zero-risk practice environment from your actual facility data — so operators master valve sequences, pump startups, compressor operations, and ESD procedures before touching real production systems.",
        "تبني محاكاة تشغيل المعدات من SIMULXR بيئة تدريب خالية من المخاطر من بيانات منشأتك الفعلية — حتى يتقن المشغّلون تسلسلات الصمامات وتشغيل المضخات وعمليات الضواغط وإجراءات ESD قبل لمس أنظمة الإنتاج الفعلية."
      ),
      img: IMAGES.simEquipment,
      problem: [
        t(
          "Industrial equipment mistakes happen most often in the first 90 days. A new operator starting a centrifugal pump incorrectly damages it. A technician isolating the wrong valve triggers a chain reaction. These errors are not caused by carelessness — they're caused by insufficient practice.",
          "تحدث أخطاء المعدات الصناعية في أغلب الأحيان خلال أول 90 يوماً. مشغّل جديد يبدأ مضخة طاردة مركزية بشكل غير صحيح يتلفها. فني يعزل الصمام الخاطئ يُطلق سلسلة من ردود الفعل. هذه الأخطاء ليست بسبب الإهمال — بل بسبب التدريب غير الكافي."
        ),
        t(
          "Traditional solutions — classroom instruction, shadowing experienced operators, reading SOPs — build theoretical understanding without operational competence. The first time a worker truly operates complex equipment should not be under production conditions.",
          "الحلول التقليدية — التعليم في الفصول الدراسية ومرافقة المشغّلين ذوي الخبرة وقراءة SOPs — تبني الفهم النظري دون الكفاءة التشغيلية. المرة الأولى التي يُشغِّل فيها العامل معدات معقدة حقاً يجب ألا تكون في ظروف الإنتاج."
        ),
        t(
          "Equipment damage, production downtime, and incident risk all share a common root cause: workers who never had the chance to practice wrong until they got it right.",
          "تلف المعدات وتوقف الإنتاج ومخاطر الحوادث كلها تشترك في سبب جذري واحد: عمال لم تُتَح لهم فرصة الممارسة الخاطئة حتى يتقنوا الأمر."
        ),
      ],
      solution: [
        t("Practice valve sequences, pump startups, and compressor operations in your actual equipment environment", "ممارسة تسلسلات الصمامات وتشغيل المضخات وعمليات الضواغط في بيئة معداتك الفعلية"),
        t("Receive immediate feedback on every procedural error — correct sequences reinforced through repetition", "الحصول على ملاحظات فورية على كل خطأ إجرائي — تسلسلات صحيحة مُعزَّزة من خلال التكرار"),
        t("Progress from guided walkthroughs to timed, production-condition pressure scenarios", "التقدم من الجولات الإرشادية إلى سيناريوهات ضغط موقوتة في ظروف الإنتاج"),
        t("Train daily without touching real production systems or creating any operational risk", "التدريب يومياً دون لمس أنظمة الإنتاج الفعلية أو خلق أي مخاطر تشغيلية"),
      ],
      features: [
        { icon: Wrench, title: t("Full Equipment Library", "مكتبة معدات كاملة"), desc: t("Valves, pumps, compressors, turbines, ESD systems, and control panels — all simulated from your facility specifications.", "صمامات ومضخات وضواغط وتوربينات وأنظمة ESD ولوحات تحكم — جميعها مُحاكاة من مواصفات منشأتك.") },
        { icon: MapPin, title: t("Facility-Accurate Models", "نماذج دقيقة للمنشأة"), desc: t("Built from your actual CAD data — your equipment models, your piping layout, your instrument specifications.", "مبنية من بيانات CAD الفعلية لديك — نماذج معداتك وتخطيط أنابيبك ومواصفات أجهزتك.") },
        { icon: ShieldAlert, title: t("Instant Error Feedback", "ملاحظات فورية على الأخطاء"), desc: t("Every procedural mistake triggers immediate correction and explanation — building correct habits through repetition.", "كل خطأ إجرائي يُطلق تصحيحاً وشرحاً فورياً — بناء عادات صحيحة من خلال التكرار.") },
        { icon: BarChart3, title: t("Timed Sequences", "تسلسلات موقوتة"), desc: t("Progress from guided practice to timed production-condition scenarios — replicating real operational pressure.", "التقدم من التدريب الإرشادي إلى السيناريوهات الموقوتة في ظروف الإنتاج — محاكاة الضغط التشغيلي الفعلي.") },
        { icon: Globe, title: t("Arabic-First Instructions", "تعليمات بالعربية أولاً"), desc: t("All procedure steps, equipment labels, and feedback delivered in Arabic — the language operators work and think in.", "جميع خطوات الإجراءات وتسميات المعدات والملاحظات تُقدَّم بالعربية — اللغة التي يعمل بها المشغّلون ويفكرون فيها.") },
        { icon: TrendingUp, title: t("Progress Tracking", "تتبع التقدم"), desc: t("Per-trainee competency scores across equipment types and procedure complexity — exportable for HSE records.", "درجات الكفاءة لكل متدرب عبر أنواع المعدات وتعقيد الإجراءات — قابلة للتصدير لسجلات HSE.") },
      ],
      impact: [
        { metric: t("Operational errors in first 90 days post-deployment", "الأخطاء التشغيلية في أول 90 يوماً بعد النشر"), value: t("Reduced by up to 60%", "منخفضة بنسبة تصل إلى 60%") },
        { metric: t("New operator onboarding time", "وقت تأهيل المشغّل الجديد"), value: t("Reduced from weeks to days", "انخفض من أسابيع إلى أيام") },
        { metric: t("Equipment damage during startup or handover", "تلف المعدات أثناء التشغيل أو التسليم"), value: t("Significantly reduced through pre-production practice", "انخفض بشكل ملحوظ من خلال التدريب قبل الإنتاج") },
        { metric: t("Training cost vs. physical hands-on practice", "تكلفة التدريب مقابل التدريب العملي الجسدي"), value: t("Fraction of the cost — zero production risk", "جزء من التكلفة — صفر مخاطر إنتاج") },
        { metric: t("Trainer time required per operator", "وقت المدرب المطلوب لكل مشغّل"), value: t("Reduced through self-paced VR practice between sessions", "منخفض من خلال التدريب في VR بالسرعة الذاتية بين الجلسات") },
      ],
      faq: [
        { q: t("Can you simulate our specific equipment models and configurations?", "هل يمكنكم محاكاة نماذج المعدات والتكوينات المحددة لدينا؟"), a: t("Yes. Every simulation is built from your actual CAD drawings and equipment specifications — not generic models.", "نعم. كل محاكاة مبنية من رسومات CAD الفعلية ومواصفات المعدات الخاصة بك — لا نماذج عامة.") },
        { q: t("How many procedures can be built per service engagement?", "كم من الإجراءات يمكن بناؤها لكل تعاقد خدمة؟"), a: t("Typically 15–30 procedures per equipment category depending on facility complexity. Additional procedures can be added over time.", "عادةً 15-30 إجراء لكل فئة معدات حسب تعقيد المنشأة. يمكن إضافة إجراءات إضافية بمرور الوقت.") },
        { q: t("How do we measure when an operator is ready for real equipment?", "كيف نقيس متى يكون المشغّل مستعداً للمعدات الفعلية؟"), a: t("Competency thresholds are set per procedure — sequence accuracy, timing, and error rate. Operators must achieve threshold across multiple sessions before clearance.", "تُحدَّد حدود الكفاءة لكل إجراء — دقة التسلسل والتوقيت ومعدل الخطأ. يجب على المشغّلين تحقيق الحد عبر جلسات متعددة قبل التصريح.") },
        { q: t("Can workers practice on their own schedule between instructor-led sessions?", "هل يمكن للعمال التدريب وفق جدولهم الخاص بين الجلسات بقيادة المدرب؟"), a: t("Yes. VR headsets can be used independently for self-paced repetition practice — reinforcing correct procedures between structured sessions.", "نعم. يمكن استخدام خوذات VR بشكل مستقل للتدريب المتكرر بالسرعة الذاتية — تعزيز الإجراءات الصحيحة بين الجلسات المنظمة.") },
        { q: t("What happens when we add new equipment or update procedures?", "ماذا يحدث عند إضافة معدات جديدة أو تحديث الإجراءات؟"), a: t("Simulations are updated to reflect procedure and equipment changes — delivered as content updates as part of ongoing engagement.", "تُحدَّث المحاكاة لتعكس تغييرات الإجراءات والمعدات — تُقدَّم كتحديثات محتوى كجزء من التعاقد المستمر.") },
      ],
    },
    {
      id: "SIM-LOTO",
      num: "05",
      icon: Shield,
      title: t("Confined Space & LOTO", "الفضاء المحدود والقفل والوسم (LOTO)"),
      heroHeadline: t(
        "Confined Space Fatalities Are Preventable. The Only Reason They Still Happen Is That Workers Were Never Truly Prepared.",
        "وفيات الفضاء المحدود يمكن تفاديها. السبب الوحيد لاستمرار حدوثها هو أن العمال لم يُعدَّوا لها حقاً."
      ),
      desc: t(
        "SIMULXR Confined Space & LOTO training puts workers through photorealistic VR scenarios for confined space entry, rescue, and lockout/tagout procedures — scenarios legally impossible to run safely in real industrial environments.",
        "يضع تدريب SIMULXR للفضاء المحدود وLOTO العمالَ خلال سيناريوهات VR فائقة الواقعية للدخول للفضاء المحدود والإنقاذ وإجراءات القفل والوسم — سيناريوهات يستحيل قانونياً تشغيلها بأمان في البيئات الصناعية الفعلية."
      ),
      img: IMAGES.simLoto,
      problem: [
        t(
          "Confined space fatalities are preventable. LOTO violations remain among the top OSHA citations globally. Both are persistent causes of serious industrial injury — not because organizations don't have procedures, but because those procedures are rarely practiced under realistic conditions.",
          "وفيات الفضاء المحدود يمكن تفاديها. تظل انتهاكات LOTO من أبرز مخالفات OSHA عالمياً. كلاهما أسباب متكررة للإصابات الصناعية الخطيرة — لا لأن المؤسسات تفتقر للإجراءات، بل لأن هذه الإجراءات نادراً ما تُمارَس في ظروف واقعية."
        ),
        t(
          "You cannot run a real confined space rescue drill. You cannot safely practice LOTO on energized equipment. The physical scenarios that cause the most fatalities are the scenarios least amenable to realistic training.",
          "لا يمكنك إجراء تمرين إنقاذ فضاء محدود حقيقي. لا يمكنك التدريب بأمان على LOTO للمعدات الحية. السيناريوهات الجسدية التي تسبب أكبر عدد من الوفيات هي السيناريوهات الأقل قابلية للتدريب الواقعي."
        ),
        t(
          "Workers arrive at confined space entry with theoretical knowledge and a permit-to-work form. What they lack is the muscle memory of having done it dozens of times — until the procedure becomes automatic, not deliberate.",
          "يصل العمال إلى نقطة دخول الفضاء المحدود بمعرفة نظرية ونموذج تصريح عمل. ما يفتقرونه هو الذاكرة العضلية للقيام بذلك عشرات المرات — حتى يصبح الإجراء تلقائياً لا مقصوداً."
        ),
      ],
      solution: [
        t("Run confined space entry and rescue scenarios that are legally impossible to practice in real environments", "تشغيل سيناريوهات دخول الفضاء المحدود والإنقاذ التي يستحيل قانونياً ممارستها في البيئات الفعلية"),
        t("Build LOTO muscle memory for electrical, mechanical, and hydraulic systems without production interruption", "بناء الذاكرة العضلية لـ LOTO للأنظمة الكهربائية والميكانيكية والهيدروليكية دون انقطاع الإنتاج"),
        t("Generate audit-ready documentation for every isolation sequence and confined space entry practiced", "إنشاء وثائق جاهزة للتدقيق لكل تسلسل عزل ودخول فضاء محدود يُمارَس"),
      ],
      features: [
        { icon: Shield, title: t("Confined Space Entry Scenarios", "سيناريوهات دخول الفضاء المحدود"), desc: t("Full PTW process, pre-entry atmosphere testing, attendant duties — in a photorealistic confined space environment.", "عملية PTW الكاملة واختبار الغلاف الجوي قبل الدخول ومهام الحارس — في بيئة فضاء محدود فائقة الواقعية.") },
        { icon: Users, title: t("Rescue Practice", "ممارسة الإنقاذ"), desc: t("Victim identification, extraction procedures, communication protocols — including scenarios impossible to safely rehearse in real spaces.", "تحديد الضحية وإجراءات الاستخراج وبروتوكولات التواصل — بما في ذلك السيناريوهات التي يستحيل تمثيلها بأمان في الفضاءات الفعلية.") },
        { icon: Zap, title: t("Electrical LOTO", "LOTO الكهربائي"), desc: t("Multi-point lockout sequences for complex electrical systems — verified against NFPA 70E and client LOTO procedures.", "تسلسلات القفل متعدد النقاط للأنظمة الكهربائية المعقدة — مُتحقَّق منها وفق NFPA 70E وإجراءات LOTO للعميل.") },
        { icon: Wrench, title: t("Mechanical & Hydraulic LOTO", "LOTO الميكانيكي والهيدروليكي"), desc: t("Pump, compressor, and valve isolation sequences — practiced under realistic time and pressure conditions.", "تسلسلات عزل المضخات والضواغط والصمامات — تُمارَس في ظروف زمنية وضغط واقعية.") },
        { icon: MapPin, title: t("Hot Work in Confined Space", "الأعمال الساخنة في الفضاء المحدود"), desc: t("Permit acquisition, continuous atmosphere monitoring, and emergency response scenarios for hot work scenarios.", "الحصول على التصريح والمراقبة المستمرة للغلاف الجوي وسيناريوهات الاستجابة للطوارئ لسيناريوهات الأعمال الساخنة.") },
        { icon: FileCheck, title: t("Audit-Ready LOTO Records", "سجلات LOTO جاهزة للتدقيق"), desc: t("Full documentation of every isolation sequence practiced per worker — automatic, timestamped, exportable for OSHA compliance.", "وثائق كاملة لكل تسلسل عزل يُمارَس لكل عامل — تلقائية ومُختومة بالوقت وقابلة للتصدير لامتثال OSHA.") },
      ],
      impact: [
        { metric: t("Scenario types trainable", "أنواع السيناريوهات القابلة للتدريب"), value: t("All — including scenarios legally impossible in real confined spaces", "جميعها — بما في ذلك السيناريوهات المستحيلة قانونياً في الفضاءات المحدودة الفعلية") },
        { metric: t("Training risk to workers", "مخاطر التدريب على العمال"), value: t("Zero — vs. real confined space exposure", "صفر — مقابل التعرض للفضاء المحدود الفعلي") },
        { metric: t("LOTO procedure accuracy", "دقة إجراءات LOTO"), value: t("Measurable improvement through repetition tracking across sessions", "تحسن قابل للقياس من خلال تتبع التكرار عبر الجلسات") },
        { metric: t("Audit documentation", "وثائق التدقيق"), value: t("Automatic per session — every isolation sequence logged", "تلقائية لكل جلسة — كل تسلسل عزل مُسجَّل") },
        { metric: t("Regulatory compliance", "الامتثال التنظيمي"), value: t("Aligned with OSHA 1910.147, NFPA 70E, API RP 505", "متوافق مع OSHA 1910.147 وNFPA 70E وAPI RP 505") },
      ],
      faq: [
        { q: t("Can you simulate our actual confined spaces and entry points?", "هل يمكنكم محاكاة الفضاءات المحدودة الفعلية لدينا ونقاط الدخول؟"), a: t("Yes. Built from facility drawings and actual confined space dimensions — workers train in VR versions of their real entry points.", "نعم. مبنية من رسومات المنشأة وأبعاد الفضاء المحدود الفعلية — يتدرب العمال في إصدارات VR من نقاط الدخول الفعلية لديهم.") },
        { q: t("How do you simulate multi-gas atmosphere scenarios?", "كيف تُحاكون سيناريوهات الغلاف الجوي متعدد الغازات؟"), a: t("Simulated gas readings appear on virtual monitors with realistic LEL, O2, and H2S variations — including dynamic changes as scenarios escalate.", "تظهر قراءات الغاز المُحاكاة على أجهزة مراقبة افتراضية مع تباينات واقعية لـ LEL وO2 وH2S — بما في ذلك التغييرات الديناميكية مع تصاعد السيناريوهات.") },
        { q: t("Can we simulate rescue of an incapacitated worker?", "هل يمكننا محاكاة إنقاذ عامل عاجز؟"), a: t("Yes. Rescue scenarios include victim identification, physical extraction simulation, and communication coordination — with realistic physics.", "نعم. تشمل سيناريوهات الإنقاذ تحديد الضحية ومحاكاة الاستخراج المادي وتنسيق التواصل — مع فيزياء واقعية.") },
        { q: t("How does this integrate with our permit-to-work system?", "كيف يتكامل هذا مع نظام تصاريح العمل لدينا؟"), a: t("VR scenarios replicate your PTW process steps in sequence. The platform logs completion of each PTW step for compliance records.", "تُكرر سيناريوهات VR خطوات عملية PTW الخاصة بك بالتسلسل. تُسجِّل المنصة إكمال كل خطوة PTW لسجلات الامتثال.") },
        { q: t("Which LOTO standards are scenarios built against?", "ما معايير LOTO التي تُبنى السيناريوهات وفقها؟"), a: t("OSHA 1910.147 (Control of Hazardous Energy), NFPA 70E (Electrical Safety), and client-specific LOTO procedures validated with your HSE team.", "OSHA 1910.147 (التحكم في الطاقة الخطرة) وNFPA 70E (السلامة الكهربائية) وإجراءات LOTO الخاصة بالعميل المُتحقَّق منها مع فريق HSE.") },
      ],
    },
    {
      id: "SIM-AR",
      num: "06",
      icon: Zap,
      title: t("AR Field Support", "الدعم الميداني بالواقع المعزز"),
      heroHeadline: t(
        "Your Field Technician Shouldn't Need to Call a Senior Engineer for Every Maintenance Task.",
        "الفني الميداني لديك يجب ألا يحتاج إلى الاتصال بمهندس أول لكل مهمة صيانة."
      ),
      desc: t(
        "SIMULXR AR Field Support delivers step-by-step expert guidance directly to the headset — for maintenance, inspection, and calibration tasks — in Arabic, on-site, without flying an expert in.",
        "يُوصِّل الدعم الميداني AR من SIMULXR إرشادات الخبراء خطوة بخطوة مباشرة إلى الخوذة — لمهام الصيانة والفحص والمعايرة — بالعربية، في الموقع، دون استدعاء خبير."
      ),
      img: IMAGES.simMaintenance,
      problem: [
        t(
          "When a field technician faces an unfamiliar maintenance task, their options are limited: call a senior engineer (expensive, slow), consult a paper manual (inaccessible, incomplete), or proceed from memory (dangerous). None of these is an acceptable solution for critical industrial equipment.",
          "عندما يواجه الفني الميداني مهمة صيانة غير مألوفة، تكون خياراته محدودة: الاتصال بمهندس أول (مكلف وبطيء)، أو الرجوع إلى دليل ورقي (غير متاح وغير مكتمل)، أو المضي من الذاكرة (خطير). لا أي من هذه الخيارات مقبول للمعدات الصناعية الحيوية."
        ),
        t(
          "Knowledge transfer in industrial organizations is fragile. When experienced technicians retire, their operational expertise leaves with them. Junior technicians repeat the same mistakes their predecessors made — because there was no effective way to transfer that knowledge.",
          "نقل المعرفة في المؤسسات الصناعية هش. عندما يتقاعد الفنيون ذوو الخبرة، تذهب خبرتهم التشغيلية معهم. يكرر الفنيون الأصغر سناً نفس الأخطاء التي ارتكبها أسلافهم — لأنه لم يكن هناك طريقة فعالة لنقل تلك المعرفة."
        ),
        t(
          "Expert site visits cost thousands per day. Maintenance errors cost far more. AR Field Support changes this equation permanently.",
          "تكلف زيارات الخبراء للموقع آلاف الدولارات يومياً. أخطاء الصيانة تكلف أكثر بكثير. الدعم الميداني AR يغير هذه المعادلة بشكل دائم."
        ),
      ],
      solution: [
        t("Deliver step-by-step AR guidance directly to the headset for maintenance and inspection tasks", "تقديم إرشادات AR خطوة بخطوة مباشرة إلى الخوذة لمهام الصيانة والفحص"),
        t("Enable real-time collaboration with remote senior engineers through shared AR sessions", "تمكين التعاون الفوري مع المهندسين الأقدم عن بُعد من خلال جلسات AR مشتركة"),
        t("Generate automatic digital records of every maintenance activity for quality control and compliance", "إنشاء سجلات رقمية تلقائية لكل نشاط صيانة لضبط الجودة والامتثال"),
      ],
      features: [
        { icon: Zap, title: t("Step-by-Step AR Overlays", "تراكبات AR خطوة بخطوة"), desc: t("Visual guidance on actual equipment with torque specifications, procedure sequence, and verification checkpoints.", "إرشادات بصرية على المعدة الفعلية مع مواصفات العزم وتسلسل الإجراءات ونقاط التحقق.") },
        { icon: Users, title: t("Remote Expert Collaboration", "التعاون مع الخبير عن بُعد"), desc: t("Live AR session shared with a senior engineer anywhere in the world — via web browser, no headset required for the expert.", "جلسة AR مباشرة مشتركة مع مهندس أول في أي مكان بالعالم — عبر متصفح الويب، لا تتطلب خوذة من الخبير.") },
        { icon: Wrench, title: t("Full Equipment Coverage", "تغطية معدات كاملة"), desc: t("Valves, pumps, compressors, instruments, electrical panels — all major equipment categories covered.", "الصمامات والمضخات والضواغط والأجهزة واللوحات الكهربائية — جميع فئات المعدات الرئيسية مُغطَّاة.") },
        { icon: Globe, title: t("Arabic-First Instructions", "تعليمات بالعربية أولاً"), desc: t("All AR guidance, labels, and annotations in Arabic — with English toggle for bilingual teams.", "جميع إرشادات AR والتسميات والتعليقات التوضيحية بالعربية — مع خيار التبديل للإنجليزية للفرق ثنائية اللغة.") },
        { icon: FileCheck, title: t("Digital Maintenance Records", "سجلات الصيانة الرقمية"), desc: t("Automatic, timestamped log of every maintenance step completed — traceable, audit-ready, and quality-verifiable.", "سجل تلقائي مُختوم بالوقت لكل خطوة صيانة مكتملة — قابل للتتبع وجاهز للتدقيق وقابل للتحقق من الجودة.") },
        { icon: Settings, title: t("Calibration Guidance", "إرشادات المعايرة"), desc: t("Instrument calibration procedures with tolerance overlays — ensuring accuracy on critical measurement instruments.", "إجراءات معايرة الأجهزة مع تراكبات التفاوت — ضمان الدقة على أجهزة القياس الحيوية.") },
      ],
      impact: [
        { metric: t("First-time fix rate for maintenance tasks", "معدل الإصلاح من المحاولة الأولى لمهام الصيانة"), value: t("Improved through guided step-by-step verification", "تحسّن من خلال التحقق الإرشادي خطوة بخطوة") },
        { metric: t("Expert site visits", "زيارات الخبراء للموقع"), value: t("Reduced by 40–60% through remote AR collaboration", "انخفض بنسبة 40-60% من خلال التعاون AR عن بُعد") },
        { metric: t("Maintenance error rate", "معدل أخطاء الصيانة"), value: t("Reduced through step-by-step verification at each stage", "منخفض من خلال التحقق خطوة بخطوة في كل مرحلة") },
        { metric: t("Knowledge transfer on technician retirement", "نقل المعرفة عند تقاعد الفنيين"), value: t("Institutional knowledge encoded — deployable on any headset", "المعرفة المؤسسية مُرمَّزة — قابلة للنشر على أي خوذة") },
        { metric: t("Maintenance record accuracy", "دقة سجلات الصيانة"), value: t("100% digital, automatic, timestamped — no manual logging", "100% رقمية وتلقائية ومُختومة بالوقت — لا تسجيل يدوي") },
      ],
      faq: [
        { q: t("Does AR Field Support require internet connectivity on site?", "هل يتطلب الدعم الميداني AR اتصالاً بالإنترنت في الموقع؟"), a: t("No. Offline mode is available for all guided procedure content. Remote expert collaboration requires a connection — mobile data or WiFi.", "لا. الوضع غير المتصل متاح لجميع محتوى الإجراءات الإرشادية. التعاون مع الخبير عن بُعد يتطلب اتصالاً — بيانات الجوال أو WiFi.") },
        { q: t("What headset hardware is required?", "ما أجهزة الخوذة المطلوبة؟"), a: t("Meta Quest 3 (standalone). No PC, server, or fixed infrastructure required on-site.", "Meta Quest 3 (مستقلة). لا يلزم كمبيوتر أو خادم أو بنية تحتية ثابتة في الموقع.") },
        { q: t("Can we add our own maintenance procedures to the system?", "هل يمكننا إضافة إجراءات الصيانة الخاصة بنا إلى النظام؟"), a: t("Yes. Your client-specific procedures are built into the system during onboarding — and updated as SOPs change over time.", "نعم. يتم تضمين إجراءاتك الخاصة بالعميل في النظام أثناء التأهيل — وتُحدَّث مع تغيير SOPs بمرور الوقت.") },
        { q: t("How do remote experts connect for AR collaboration?", "كيف يتصل الخبراء عن بُعد للتعاون AR؟"), a: t("Via web browser on any device — laptop, tablet, or phone. No headset required. They see the technician's AR view and can annotate in real time.", "عبر متصفح الويب على أي جهاز — كمبيوتر محمول أو جهاز لوحي أو هاتف. لا تلزم خوذة. يرون منظور AR للفني ويمكنهم إضافة تعليقات توضيحية في الوقت الفعلي.") },
        { q: t("Is there a permanent digital record of each maintenance session?", "هل هناك سجل رقمي دائم لكل جلسة صيانة؟"), a: t("Yes. Timestamped log of every step completed, time per step, deviations noted, and technician identity — exportable for QA and compliance records.", "نعم. سجل مُختوم بالوقت لكل خطوة مكتملة والوقت المستغرق في كل خطوة والانحرافات المُلاحَظة وهوية الفني — قابل للتصدير لسجلات ضمان الجودة والامتثال.") },
      ],
    },
    {
      id: "SIM-LMS",
      num: "07",
      icon: TrendingUp,
      title: t("Smart Learning Platform", "منصة التعلم الذكي"),
      heroHeadline: t(
        "Generic Training Content Builds Generic Competency. That Is Not What Prevents Industrial Incidents.",
        "المحتوى التدريبي العام يبني كفاءة عامة. وهذا لا يمنع الحوادث الصناعية."
      ),
      desc: t(
        "SIMULXR's Smart Learning Platform delivers adaptive VR scenarios that adjust to each worker's individual performance — with bilingual Arabic-English content, offline capability for remote sites, and real-time dashboards for HSE managers.",
        "تقدم منصة التعلم الذكي من SIMULXR سيناريوهات VR تكيّفية تتكيّف مع أداء كل عامل بشكل فردي — مع محتوى ثنائي اللغة عربي-إنجليزي وإمكانية العمل بدون إنترنت للمواقع النائية ولوحات تحكم فورية لمديري HSE."
      ),
      img: IMAGES.simOnboarding,
      problem: [
        t(
          "Training data is abundant. Insight is rare. Most industrial organizations collect attendance records and annual assessment scores — and have no actionable understanding of what those numbers mean for safety risk on the floor.",
          "بيانات التدريب وفيرة. الفهم العميق نادر. تجمع معظم المؤسسات الصناعية سجلات الحضور ودرجات التقييم السنوية — دون أي فهم قابل للتنفيذ لما تعنيه هذه الأرقام لمخاطر السلامة على أرض العمل."
        ),
        t(
          "Generic VR content trains workers on hypothetical scenarios in hypothetical facilities. The competency it builds is generic. The competency that prevents incidents is site-specific, procedure-specific, and individual.",
          "محتوى VR العام يدرّب العمال على سيناريوهات افتراضية في منشآت افتراضية. الكفاءة التي يبنيها عامة. الكفاءة التي تمنع الحوادث خاصة بالموقع وخاصة بالإجراءات وفردية."
        ),
        t(
          "Workers who struggle with valve isolation get the same scenario as workers who have mastered it. Adaptive learning exists in consumer education — in industrial safety training, it barely exists at all.",
          "العمال الذين يجدون صعوبة في عزل الصمامات يحصلون على نفس السيناريو الذي يحصل عليه العمال الذين أتقنوه. التعلم التكيّفي موجود في التعليم الاستهلاكي — في تدريب السلامة الصناعية، يكاد لا يوجد على الإطلاق."
        ),
      ],
      solution: [
        t("Adaptive scenarios that automatically adjust difficulty based on each worker's real-time performance scores", "سيناريوهات تكيّفية تُعدِّل تلقائياً مستوى الصعوبة بناءً على درجات أداء كل عامل الفورية"),
        t("Individual competency gap reports — each worker gets a specific plan, not a group average", "تقارير ثغرات الكفاءة الفردية — كل عامل يحصل على خطة محددة، لا متوسط جماعي"),
        t("Offline deployment for remote sites and real-time dashboards for HSE managers across all locations", "نشر بدون إنترنت للمواقع النائية ولوحات تحكم فورية لمديري HSE عبر جميع المواقع"),
      ],
      features: [
        { icon: TrendingUp, title: t("Adaptive Difficulty Engine", "محرك الصعوبة التكيّفية"), desc: t("Scenarios auto-adjust based on real-time performance scores per worker — harder when ready, remedial when needed.", "تتكيّف السيناريوهات تلقائياً بناءً على درجات الأداء الفوري لكل عامل — أصعب عند الاستعداد، علاجية عند الحاجة.") },
        { icon: BarChart3, title: t("Individual Gap Analysis", "تحليل الثغرات الفردي"), desc: t("Each worker receives a specific competency report identifying what they need to practice more — not a group average.", "يتلقى كل عامل تقرير كفاءة محدداً يُحدِّد ما يحتاج إلى مزيد من الممارسة — لا متوسط جماعي.") },
        { icon: Globe, title: t("Arabic + English Bilingual", "ثنائي اللغة عربي + إنجليزي"), desc: t("Native language content — authored in Arabic, not translated — for full procedural comprehension and natural response.", "محتوى باللغة الأم — مُؤلَّف بالعربية لا مُترجَم — للفهم الإجرائي الكامل والاستجابة الطبيعية.") },
        { icon: WifiOff, title: t("Offline Deployment", "النشر بدون إنترنت"), desc: t("Full training capability without internet — for oilfield, offshore, and remote industrial sites with no reliable connectivity.", "قدرة تدريبية كاملة بدون إنترنت — لحقول النفط والمنصات البحرية والمواقع الصناعية النائية دون اتصال موثوق.") },
        { icon: Users, title: t("Manager Dashboards", "لوحات تحكم المديرين"), desc: t("Real-time view of all trainees across all sites — HSE managers see who is ready and who needs attention, instantly.", "رؤية فورية لجميع المتدربين عبر جميع المواقع — يرى مديرو HSE من هو مستعد ومن يحتاج إلى اهتمام، فوراً.") },
        { icon: Settings, title: t("LMS Integration", "تكامل LMS"), desc: t("Connect SIMULXR data to existing enterprise learning management systems via API — no duplicate records.", "ربط بيانات SIMULXR بأنظمة إدارة التعلم المؤسسية الحالية عبر API — لا سجلات مكررة.") },
      ],
      impact: [
        { metric: t("Training effectiveness vs. fixed-difficulty content", "فعالية التدريب مقابل المحتوى ذي الصعوبة الثابتة"), value: t("Higher — adaptive difficulty keeps every worker at optimal challenge", "أعلى — الصعوبة التكيّفية تبقي كل عامل عند التحدي الأمثل") },
        { metric: t("At-risk worker identification timing", "توقيت تحديد العمال المعرضين للخطر"), value: t("Proactive — per session — vs. annual test-based discovery", "استباقي — لكل جلسة — مقابل الاكتشاف القائم على الاختبار السنوي") },
        { metric: t("Remote site training access", "الوصول للتدريب في المواقع النائية"), value: t("Full capability without internet — any site, any shift", "قدرة كاملة بدون إنترنت — أي موقع، أي وردية") },
        { metric: t("Audit readiness", "الاستعداد للتدقيق"), value: t("100% — every session scored and logged automatically", "100% — كل جلسة مُقيَّمة ومُسجَّلة تلقائياً") },
        { metric: t("LMS system compatibility", "توافق نظام LMS"), value: t("SAP, Oracle, Cornerstone, and custom enterprise systems", "SAP وOracle وCornerstone والأنظمة المؤسسية المخصصة") },
      ],
      faq: [
        { q: t("How does the adaptive engine decide when to increase difficulty?", "كيف يقرر المحرك التكيّفي متى يزيد الصعوبة؟"), a: t("Based on consecutive correct sequences above threshold and reduced response time — the engine increases challenge when a worker demonstrates consistent competency.", "بناءً على التسلسلات الصحيحة المتتالية فوق الحد وانخفاض وقت الاستجابة — يزيد المحرك التحدي عندما يُظهر العامل كفاءة متسقة.") },
        { q: t("Is the Arabic content native or translated from English?", "هل المحتوى العربي أصلي أم مُترجَم من الإنجليزية؟"), a: t("Native. Content is authored in Arabic — not machine-translated or adapted from English. This ensures natural procedural language that matches how operators actually speak.", "أصلي. المحتوى مُؤلَّف بالعربية — لا مُترجَم آلياً أو مُكيَّف من الإنجليزية. يضمن هذا لغة إجرائية طبيعية تتطابق مع طريقة تحدث المشغّلين فعلاً.") },
        { q: t("Can we add our own facility-specific scenarios to the adaptive pool?", "هل يمكننا إضافة سيناريوهات خاصة بمنشأتنا إلى مجموعة التكيّف؟"), a: t("Yes. Custom scenarios are part of full-solution engagements and are included in the adaptive pool alongside standard content.", "نعم. السيناريوهات المخصصة جزء من تعاقدات الحل الكامل وتُضمَّن في مجموعة التكيّف جنباً إلى جنب مع المحتوى القياسي.") },
        { q: t("What LMS systems do you integrate with?", "ما أنظمة LMS التي تتكاملون معها؟"), a: t("SAP SuccessFactors, Oracle HCM, Cornerstone OnDemand, and custom enterprise systems via standard xAPI/SCORM or direct API.", "SAP SuccessFactors وOracle HCM وCornerstone OnDemand والأنظمة المؤسسية المخصصة عبر xAPI/SCORM القياسية أو API مباشرة.") },
        { q: t("What happens when a worker consistently underperforms on adaptive scenarios?", "ماذا يحدث عندما يُقصِّر عامل باستمرار في السيناريوهات التكيّفية؟"), a: t("Automatic escalation alert is sent to their HSE manager with the specific gap identified and a recommended additional session sequence.", "يُرسَل تنبيه تصعيد تلقائي إلى مدير HSE الخاص به مع الثغرة المحددة المُحدَّدة وتسلسل جلسة إضافية موصى به.") },
      ],
    },
    {
      id: "SIM-ENT",
      num: "08",
      icon: Building2,
      title: t("Enterprise XR Program", "برنامج XR المؤسسي"),
      heroHeadline: t(
        "Your Organization Knows Training Needs to Modernize. The Challenge Is Execution at Scale.",
        "مؤسستك تعلم أن التدريب يحتاج إلى التحديث. التحدي هو التنفيذ على نطاق واسع."
      ),
      desc: t(
        "SIMULXR Enterprise XR Program is a full-service engagement from safety audit to deployment — custom simulations, hardware fleet management, train-the-trainer, LMS integration, and ongoing content updates — managed end to end by the SIMULXR team.",
        "برنامج SIMULXR Enterprise XR هو تعاقد خدمة كاملة من تدقيق السلامة حتى النشر — محاكاة مخصصة وإدارة أسطول الأجهزة وتدريب المدربين وتكامل LMS وتحديثات المحتوى المستمرة — بإدارة شاملة من فريق SIMULXR."
      ),
      img: IMAGES.simEquipment,
      problem: [
        t(
          "Every organization knows training needs to modernize. The problem is not awareness — it is execution. Deploying XR training at enterprise scale requires hardware procurement, content development, instructor training, LMS integration, and ongoing maintenance. Most organizations don't have the internal expertise to coordinate all of this.",
          "كل مؤسسة تعلم أن التدريب يحتاج إلى التحديث. المشكلة ليست في الوعي — بل في التنفيذ. نشر تدريب XR على نطاق مؤسسي يتطلب شراء الأجهزة وتطوير المحتوى وتدريب المدربين وتكامل LMS والصيانة المستمرة. لا تمتلك معظم المؤسسات الخبرة الداخلية لتنسيق كل هذا."
        ),
        t(
          "Point solutions fail. A VR simulation without a competency platform is entertainment. A competency platform without content is empty software. Hardware without support becomes shelf technology. The organizations that succeed with XR training treat it as a program — not a purchase.",
          "الحلول الجزئية تفشل. محاكاة VR بدون منصة كفاءة هي مجرد ترفيه. منصة كفاءة بدون محتوى هي برنامج فارغ. الأجهزة بدون دعم تصبح تكنولوجيا على الرف. المؤسسات التي تنجح في تدريب XR تتعامل معه كبرنامج — لا كعملية شراء."
        ),
        t(
          "The Enterprise XR Program is how SIMULXR works with organizations ready to modernize training at scale — one vendor, one contract, zero gaps, from audit to deployment to ongoing management.",
          "برنامج Enterprise XR هو الطريقة التي تعمل بها SIMULXR مع المؤسسات المستعدة لتحديث التدريب على نطاق واسع — مورد واحد، عقد واحد، بدون ثغرات، من التدقيق إلى النشر إلى الإدارة المستمرة."
        ),
      ],
      solution: [
        t("Start with a safety gap audit to identify the highest-priority training deficits across your workforce", "ابدأ بتدقيق ثغرات السلامة لتحديد أعلى أولويات قصور التدريب في قواتك العاملة"),
        t("Build custom simulations from your actual facility CAD/BIM data, SOPs, and incident history", "بناء محاكاة مخصصة من بيانات CAD/BIM الفعلية لمنشأتك وSOPs وسجل الحوادث"),
        t("Manage hardware, content updates, instructor training, and LMS integration through a single ongoing engagement", "إدارة الأجهزة وتحديثات المحتوى وتدريب المدربين وتكامل LMS من خلال تعاقد مستمر واحد"),
      ],
      features: [
        { icon: FileCheck, title: t("Safety Gap Audit", "تدقيق ثغرات السلامة"), desc: t("Identify highest-risk training deficits across your workforce before building anything — evidence-based prioritization.", "تحديد أعلى مخاطر قصور التدريب في قواتك العاملة قبل بناء أي شيء — أولوية قائمة على الأدلة.") },
        { icon: MapPin, title: t("Custom Simulation Development", "تطوير المحاكاة المخصصة"), desc: t("Built from your CAD/BIM, SOPs, and incident history — not generic content adapted to your logo.", "مبنية من CAD/BIM وSOPs وسجل الحوادث الخاص بك — لا محتوى عام مُكيَّف مع شعارك.") },
        { icon: Settings, title: t("Hardware Fleet Management", "إدارة أسطول الأجهزة"), desc: t("Meta Quest procurement, configuration, deployment, and ongoing device management — sourced and managed by SIMULXR.", "شراء Meta Quest وضبطه ونشره وإدارة الأجهزة المستمرة — مصدرها وإدارتها SIMULXR.") },
        { icon: Users, title: t("Train-the-Trainer Program", "برنامج تدريب المدربين"), desc: t("Upskill your HSE team to run and manage simulations independently — reducing long-term dependency on SIMULXR.", "رفع كفاءة فريق HSE لتشغيل المحاكاة وإدارتها بشكل مستقل — تقليل الاعتماد طويل الأمد على SIMULXR.") },
        { icon: Layers3, title: t("LMS Integration", "تكامل LMS"), desc: t("Connect SIMULXR competency data to your existing enterprise training systems — one unified learning record.", "ربط بيانات كفاءة SIMULXR بأنظمة التدريب المؤسسية الحالية — سجل تعلم موحد واحد.") },
        { icon: TrendingUp, title: t("Ongoing Content Updates", "تحديثات المحتوى المستمرة"), desc: t("As SOPs and procedures evolve, so does your simulation library — content currency maintained as part of the engagement.", "مع تطور SOPs والإجراءات، تتطور مكتبة المحاكاة — يُحافَظ على حداثة المحتوى كجزء من التعاقد.") },
      ],
      impact: [
        { metric: t("Internal XR expertise required", "الخبرة الداخلية في XR المطلوبة"), value: t("None — SIMULXR manages all technical and operational aspects", "لا شيء — SIMULXR تدير جميع الجوانب التقنية والتشغيلية") },
        { metric: t("Time from audit to live training", "الوقت من التدقيق إلى التدريب الحي"), value: t("6–16 weeks depending on scope and number of simulations", "6-16 أسبوعاً حسب النطاق وعدد المحاكاة") },
        { metric: t("Vendor coordination required", "تنسيق البائعين المطلوب"), value: t("One contract, one team, zero gaps across all components", "عقد واحد، فريق واحد، بدون ثغرات عبر جميع المكونات") },
        { metric: t("ROI visibility from training spend", "رؤية العائد على الاستثمار من إنفاق التدريب"), value: t("Measurable from first training session — competency data vs. spend", "قابل للقياس من أول جلسة تدريب — بيانات الكفاءة مقابل الإنفاق") },
        { metric: t("Content currency as procedures change", "حداثة المحتوى مع تغير الإجراءات"), value: t("Maintained through ongoing updates — no stale simulations", "مُحافَظ عليها من خلال التحديثات المستمرة — لا محاكاة قديمة") },
      ],
      faq: [
        { q: t("What is the minimum scale for the Enterprise XR Program?", "ما الحد الأدنى للنطاق لبرنامج Enterprise XR؟"), a: t("Typically 100+ trainees or 3+ sites. Smaller organizations typically start with a pilot — one simulation, one site — then expand.", "عادةً 100+ متدرب أو 3+ مواقع. تبدأ المؤسسات الأصغر عادةً بتجربة تجريبية — محاكاة واحدة، موقع واحد — ثم تتوسع.") },
        { q: t("How long does a full enterprise deployment take?", "كم من الوقت يستغرق النشر المؤسسي الكامل؟"), a: t("6–16 weeks from safety audit to live training, depending on number of custom simulations, sites, and LMS integration complexity.", "6-16 أسبوعاً من تدقيق السلامة إلى التدريب الحي، حسب عدد المحاكاة المخصصة والمواقع وتعقيد تكامل LMS.") },
        { q: t("Who manages the hardware fleet on an ongoing basis?", "من يدير أسطول الأجهزة بشكل مستمر؟"), a: t("SIMULXR manages hardware fleet — replacements, firmware updates, additions, and device tracking — as part of the ongoing engagement.", "تدير SIMULXR أسطول الأجهزة — الاستبدالات وتحديثات البرامج الثابتة والإضافات وتتبع الأجهزة — كجزء من التعاقد المستمر.") },
        { q: t("What happens when our SOPs or procedures change after deployment?", "ماذا يحدث عندما تتغير SOPs أو إجراءاتنا بعد النشر؟"), a: t("Simulation content is updated as part of the ongoing engagement — no separate project or additional cost for procedure updates within scope.", "يُحدَّث محتوى المحاكاة كجزء من التعاقد المستمر — لا مشروع منفصل أو تكلفة إضافية لتحديثات الإجراءات ضمن النطاق.") },
        { q: t("Can we start with one service and expand across the portfolio?", "هل يمكننا البدء بخدمة واحدة والتوسع عبر المحفظة؟"), a: t("Yes. Most enterprise clients start with Emergency Response and expand progressively — each new service builds on the facility data and competency infrastructure already in place.", "نعم. يبدأ معظم عملاء المؤسسات بالاستجابة للطوارئ ويتوسعون تدريجياً — كل خدمة جديدة تبني على بيانات المنشأة وبنية تحتية الكفاءة الموجودة بالفعل.") },
      ],
    },
  ];

  const active = services[activeService];

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-40 pb-24 bg-[#0F2A4A] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMAGES.simEquipment})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A4A]/80 to-[#0F2A4A]" />
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("OUR SOLUTIONS", "حلولنا")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Eight XR Solutions.", "ثماني حلول XR.")}
            <br />
            {t("Built for Your Facility.", "مبنية لمنشأتك.")}
          </h1>
          <p className="text-white/50 max-w-2xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "Eight integrated solutions built on your actual CAD/BIM data — emergency response, digital twin training, HSE competency, AR field support, and more. Select a solution below to explore the full detail.",
              "ثماني حلول متكاملة مبنية على بيانات CAD/BIM الفعلية — الاستجابة للطوارئ والتوأم الرقمي وكفاءة HSE والدعم الميداني AR والمزيد. اختر حلاً أدناه لاستكشاف التفاصيل الكاملة."
            )}
          </p>
        </div>
      </section>

      {/* ═══════════════════ SERVICE TABS + DETAIL ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#0F2A4A]">
        <div className="container">

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-16">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => { setActiveService(i); setOpenFaq(null); }}
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

          {/* Service Hero Headline */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <active.icon className="w-6 h-6 text-[#D4622B]" />
              <span className="text-[#00B4D8] text-sm font-mono">{active.id}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-5">
              {active.heroHeadline}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">{active.desc}</p>
          </div>

          {/* Service Image */}
          <div className="aspect-[21/7] rounded-xl overflow-hidden mb-16">
            <img src={active.img} alt={active.title} className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Problem Statement */}
          <div className="mb-16">
            <h3 className="text-[#00B4D8] text-xs font-semibold uppercase tracking-widest mb-6">
              {t("THE PROBLEM", "المشكلة")}
            </h3>
            <div className="max-w-3xl space-y-4">
              {active.problem.map((para, i) => (
                <p key={i} className="text-white/60 text-lg leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* Solution Overview */}
          <div className="mb-16">
            <h3 className="text-[#00B4D8] text-xs font-semibold uppercase tracking-widest mb-6">
              {t("THE SOLUTION", "الحل")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {active.solution.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4622B] mt-0.5 shrink-0" />
                  <span className="text-white/70 text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="text-[#00B4D8] text-xs font-semibold uppercase tracking-widest mb-8">
              {t("KEY FEATURES", "المميزات الرئيسية")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {active.features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-[#D4622B]/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#D4622B]/10 border border-[#D4622B]/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#D4622B]" />
                    </div>
                    <h4 className="text-white font-semibold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Business Impact */}
          <div className="mb-16">
            <h3 className="text-[#00B4D8] text-xs font-semibold uppercase tracking-widest mb-8">
              {t("BUSINESS IMPACT", "الأثر التجاري")}
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10 max-w-4xl">
              <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.06] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                <span>{t("Metric", "المقياس")}</span>
                <span>{t("Impact", "الأثر")}</span>
              </div>
              {active.impact.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`}
                >
                  <span className="text-white/50 text-sm">{row.metric}</span>
                  <span className="text-white font-semibold text-sm">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h3 className="text-[#00B4D8] text-xs font-semibold uppercase tracking-widest mb-8">
              {t("FREQUENTLY ASKED QUESTIONS", "الأسئلة الشائعة")}
            </h3>
            <div className="space-y-3 max-w-3xl">
              {active.faq.map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="text-white font-medium text-sm pr-6 leading-relaxed">{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-[#D4622B]" : "text-white/30"}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 border-t border-white/10">
                      <p className="text-white/50 text-sm leading-relaxed pt-4">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
            <Link href="/contact" className="btn-gold">
              {t("Request a Pilot", "اطلب تجربة تجريبية")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-[#D4622B]/50 hover:text-[#D4622B] transition-all">
              {t("Download Safety Training ROI Guide", "حمّل دليل عائد الاستثمار في تدريب السلامة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ DELIVERY MODELS ═══════════════════ */}
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
                <li>• {t("Deploy in 2–4 weeks", "نشر في 2-4 أسابيع")}</li>
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
                <li>• {t("Deploy in 6–14 weeks", "نشر في 6-14 أسبوعاً حسب التعقيد")}</li>
                <li>• {t("Higher ROI — deeper impact", "ROI أعلى — أثر أعمق")}</li>
                <li>• {t("Best for advanced training & critical emergencies", "للتدريب المتقدم والطوارئ الحرجة")}</li>
                <li>• {t("Requires: CAD + SOPs + facility plans", "يحتاج: CAD + SOPs + مخططات المنشأة")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMPLIANCE STANDARDS ═══════════════════ */}
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
              { std: "ISA-84", scope: t("Safety instrumented systems", "أنظمة السلامة الآلية") },
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

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#D4622B]">
        <div className="container text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            {t("Not Sure Where to Start?", "لست متأكداً من أين تبدأ؟")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            {t(
              "Tell us your facility type and biggest training challenge. We'll recommend the right solution and delivery model within 48 hours.",
              "أخبرنا بنوع منشأتك وأكبر تحدي في التدريب. سنوصي بالحل ونموذج التسليم الأنسب في غضون 48 ساعة."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#D4622B] font-semibold hover:bg-[#F5F6F8] transition-all hover:-translate-y-0.5">
              {t("Request Free Consultation", "اطلب استشارة مجانية")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/40 text-white font-medium hover:border-white transition-all hover:-translate-y-0.5">
              {t("Download Company Profile", "حمّل الملف التعريفي للشركة")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
