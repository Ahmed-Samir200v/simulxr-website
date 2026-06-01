import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B1120] border-t border-white/5 pt-20 pb-8">
      <div className="container">
        {/* Large centered logo */}
        <div className="text-center mb-16">
          <span className="text-5xl md:text-7xl font-bold tracking-widest text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
            SIMUL<span className="text-gold">XR</span>
          </span>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            {t(
              "Immersive VR training for industrial safety. Arabic-first, facility-specific, outcome-driven.",
              "تدريب واقع افتراضي غامر للسلامة الصناعية. عربي أولاً، مخصص للمنشأة، قائم على النتائج."
            )}
          </p>
        </div>

        {/* 4-column links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">{t("Platform", "المنصة")}</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/services" className="hover:text-gold transition-colors">{t("Services", "خدماتنا")}</Link></li>
              <li><Link href="/industries" className="hover:text-gold transition-colors">{t("Industries", "القطاعات")}</Link></li>
              <li><Link href="/case-studies" className="hover:text-gold transition-colors">{t("Case Studies", "دراسات الحالة")}</Link></li>
              <li><Link href="/insights" className="hover:text-gold transition-colors">{t("Insights", "المقالات")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">{t("Company", "الشركة")}</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-gold transition-colors">{t("About", "من نحن")}</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">{t("Contact", "تواصل معنا")}</Link></li>
              <li><span className="text-white/25">{t("Careers", "وظائف")}</span></li>
              <li><span className="text-white/25">{t("Privacy Policy", "سياسة الخصوصية")}</span></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">{t("Offices", "المكاتب")}</h4>
            <div className="space-y-4 text-sm text-white/50">
              <div>
                <p className="text-white/70 font-medium">{t("Cairo, Egypt", "القاهرة، مصر")}</p>
                <p className="text-white/40">{t("77 Road 104, Maadi", "٧٧ شارع ١٠٤، المعادي")}</p>
              </div>
              <div>
                <p className="text-white/70 font-medium">{t("Dubai, UAE", "دبي، الإمارات")}</p>
                <p className="text-white/40">{t("Gulf Operations Hub", "مركز عمليات الخليج")}</p>
              </div>
              <div>
                <p className="text-white/70 font-medium">{t("Riyadh, KSA", "الرياض، السعودية")}</p>
                <p className="text-white/40">{t("Business Development", "تطوير الأعمال")}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">{t("Get in Touch", "تواصل معنا")}</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>info@simulxr.com</p>
              <p>+20 2 2516 0000</p>
              <div className="flex items-center gap-3 mt-4">
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.7 1.8-1.56 2.46-2.55z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2026 SimulXR. {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30 tracking-wider uppercase">
            <span>EGPC</span>
            <span>API 14C</span>
            <span>OSHA 1910.119</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
