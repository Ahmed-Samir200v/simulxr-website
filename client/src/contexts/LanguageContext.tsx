import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, ar: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("simulxr-lang");
    return (saved === "ar" ? "ar" : "en") as Language;
  });

  useEffect(() => {
    localStorage.setItem("simulxr-lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
    if (lang === "ar") {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }
  }, [lang]);

  const t = (en: string, ar: string) => (lang === "ar" ? ar : en);
  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
