import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A1628] border-t border-white/5 pt-20 pb-8">
      <div className="container">
        {/* Gradient bar top */}
        <div className="gradient-bar w-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-white">SIMUL</span>
                <span className="text-[#E8622A]">XR</span>
              </span>
              <div className="h-[2px] w-16 bg-[#E8622A] mt-1" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-3 max-w-xs">
              {t(
                "Immersive VR training for industrial safety. Arabic-first, facility-specific, outcome-driven.",
                "تدريب واقع افتراضي غامر للسلامة الصناعية. عربي أولاً، مخصص للمنشأة، قائم على النتائج."
              )}
            </p>
            <p className="text-[#E8622A] text-sm font-arabic">
              {t("Train for the Unthinkable.", "تدرّب على ما لا يُتصوّر.")}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-label text-white mb-6">{t("Platform", "المنصة")}</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li><Link href="/simulations" className="hover:text-[#E8622A] transition-colors">{t("Simulations", "المحاكاة")}</Link></li>
              <li><Link href="/industries" className="hover:text-[#E8622A] transition-colors">{t("Industries", "القطاعات")}</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#E8622A] transition-colors">{t("Case Studies", "دراسات الحالة")}</Link></li>
              <li><Link href="/insights" className="hover:text-[#E8622A] transition-colors">{t("Insights", "المقالات")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-label text-white mb-6">{t("Company", "الشركة")}</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li><Link href="/about" className="hover:text-[#E8622A] transition-colors">{t("About", "من نحن")}</Link></li>
              <li><Link href="/contact" className="hover:text-[#E8622A] transition-colors">{t("Contact", "تواصل معنا")}</Link></li>
              <li><span className="text-white/20">{t("Careers", "وظائف")}</span></li>
              <li><span className="text-white/20">{t("Privacy Policy", "سياسة الخصوصية")}</span></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-label text-white mb-6">{t("Offices", "المكاتب")}</h4>
            <div className="space-y-4 text-sm text-white/40">
              <div>
                <p className="text-white font-medium mb-0.5">{t("Cairo, Egypt", "القاهرة، مصر")}</p>
                <p>{t("77 Road 104, Maadi", "٧٧ شارع ١٠٤، المعادي")}</p>
                <p className="font-label text-[10px] text-[#00B4D8] mt-1">HQ</p>
              </div>
              <div>
                <p className="text-white font-medium mb-0.5">{t("Dubai, UAE", "دبي، الإمارات")}</p>
                <p>{t("Gulf Operations Hub", "مركز عمليات الخليج")}</p>
              </div>
              <div>
                <p className="text-white font-medium mb-0.5">{t("Riyadh, KSA", "الرياض، السعودية")}</p>
                <p>{t("Business Development", "تطوير الأعمال")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2026 SIMUL XR. {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </p>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <span className="font-label text-[10px]">EGPC</span>
            <span className="font-label text-[10px]">API 14C</span>
            <span className="font-label text-[10px]">OSHA 1910.119</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
