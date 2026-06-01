import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: t("Home", "الرئيسية"), href: "/" },
    { label: t("Simulations", "المحاكاة"), href: "/simulations" },
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
          ? "bg-[#0A1628]/95 nav-glass border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold tracking-tight">
              <span className="text-white">SIMUL</span>
              <span className="text-[#E8622A]">XR</span>
            </span>
            <div className="h-[2px] w-full bg-[#E8622A] mt-0.5" />
          </div>
        </Link>

        {/* Center nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                location === link.href
                  ? "text-[#E8622A]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Language toggle + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-label text-xs text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 transition-all"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>

          {/* CTA */}
          <Link href="/contact" className="btn-primary text-sm">
            {t("Request Demo", "اطلب عرضاً تجريبياً")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="font-label text-xs text-white/60 hover:text-white border border-white/20 px-2 py-1"
          >
            {lang === "en" ? "AR" : "EN"}
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
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0A1628]/98 nav-glass z-40">
          <div className="container py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-lg font-medium transition-colors ${
                  location === link.href
                    ? "text-[#E8622A]"
                    : "text-white/80 hover:text-[#E8622A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-6 justify-center">
              {t("Request Demo", "اطلب عرضاً تجريبياً")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
