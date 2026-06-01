import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BRAND } from "@/config/branding";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: t("Home", "الرئيسية"), href: "/" },
    { label: t("Services", "خدماتنا"), href: "/services" },
    { label: t("Industries", "القطاعات"), href: "/industries" },
    { label: t("About", "من نحن"), href: "/about" },
    { label: t("Case Studies", "دراسات الحالة"), href: "/case-studies" },
    { label: t("Insights", "المقالات"), href: "/insights" },
    { label: t("Contact", "تواصل معنا"), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F2A4A]/95 nav-glass border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={BRAND.logo}
            alt={BRAND.name}
            className="h-9 w-auto"
            draggable={false}
          />
        </Link>

        {/* Center nav links in pill container */}
        <div className="hidden lg:flex items-center nav-pill-container">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className={`px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                  location === link.href
                    ? "text-[#D4622B]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="text-white/20 mx-1">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Right side: Language toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-xs text-white/60 hover:text-white border border-white/20 hover:border-[#D4622B]/40 px-3 py-1.5 rounded-full transition-all font-medium tracking-wide"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>

          <Link href="/contact" className="btn-gold text-sm">
            {t("Request A Demo", "اطلب عرضاً")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-xs text-white/60 hover:text-white border border-white/20 px-2 py-1 rounded-full"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0F2A4A]/98 nav-glass z-40">
          <div className="container py-8 flex flex-col gap-2">
            <img src={BRAND.logo} alt={BRAND.name} className="h-8 w-auto mb-4" draggable={false} />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-lg font-medium transition-colors ${
                  location === link.href
                    ? "text-[#D4622B]"
                    : "text-white/80 hover:text-[#D4622B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-gold mt-6 justify-center">
              {t("Request A Demo", "اطلب عرضاً")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
