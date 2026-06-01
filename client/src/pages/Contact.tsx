import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: "",
  });

  const submitContactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success(t("Thank you! We'll be in touch within 24 hours.", "شكراً لك! سنتواصل معك خلال 24 ساعة."));
      setFormData({ name: "", company: "", email: "", role: "", message: "" });
    },
    onError: (error: any) => {
      toast.error(error.message || t("Failed to submit. Please try again.", "فشل الإرسال. يرجى المحاولة مرة أخرى."));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] bg-grid-pattern animate-grid-drift glow-orange-bl overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag mb-6 inline-block">
            {t("Get Started", "ابدأ الآن")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mt-4 mb-6 animate-fadeUp">
            {t("Let's Talk.", "لنتحدث.")}
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed animate-fadeUp-delay-1">
            {t(
              "Request a pilot package, schedule a demo, or just tell us about your facility. Our team responds within 24 hours.",
              "اطلب باقة تجريبية أو حدد موعداً لعرض توضيحي أو أخبرنا عن منشأتك. فريقنا يرد خلال 24 ساعة."
            )}
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-[#0A1628]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-navy rounded-sm p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  {t("Request Pilot Package", "اطلب باقة الـ Pilot")}
                </h2>
                <p className="text-white/40 text-sm mb-8">
                  {t(
                    "90-day pilot — one simulation, 50 trainees, full performance reporting.",
                    "تجربة 90 يوماً — محاكاة واحدة، 50 متدرباً، تقرير أداء كامل."
                  )}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-label text-white/50 mb-2 block">{t("Full Name", "الاسم الكامل")}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("Ahmed Al-Mansouri", "أحمد المنصوري")}
                        className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 text-white placeholder:text-white/20 focus:border-[#E8622A] focus:ring-1 focus:ring-[#E8622A]/30 focus:outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="font-label text-white/50 mb-2 block">{t("Company", "الشركة")}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder={t("Cairo Petroleum", "القاهرة للبترول")}
                        className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 text-white placeholder:text-white/20 focus:border-[#E8622A] focus:ring-1 focus:ring-[#E8622A]/30 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-label text-white/50 mb-2 block">{t("Email", "البريد الإلكتروني")}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ahmed@company.com"
                        className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 text-white placeholder:text-white/20 focus:border-[#E8622A] focus:ring-1 focus:ring-[#E8622A]/30 focus:outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="font-label text-white/50 mb-2 block">{t("Role", "الدور الوظيفي")}</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 text-white focus:border-[#E8622A] focus:ring-1 focus:ring-[#E8622A]/30 focus:outline-none transition-all text-sm"
                      >
                        <option value="">{t("Select Role", "اختر الدور")}</option>
                        <option value="HSE Manager">{t("HSE Manager", "مدير HSE")}</option>
                        <option value="Operations Manager">{t("Operations Manager", "مدير العمليات")}</option>
                        <option value="Training Lead">{t("Training Lead", "قائد التدريب")}</option>
                        <option value="Facility Manager">{t("Facility Manager", "مدير المنشأة")}</option>
                        <option value="CTO / Technology">{t("CTO / Technology", "CTO / التكنولوجيا")}</option>
                        <option value="Procurement">{t("Procurement", "المشتريات")}</option>
                        <option value="Other">{t("Other", "أخرى")}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-label text-white/50 mb-2 block">{t("Message", "الرسالة")}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t(
                        "Tell us about your facility, workforce size, and training challenges...",
                        "أخبرنا عن منشأتك وحجم القوى العاملة وتحديات التدريب..."
                      )}
                      className="w-full px-4 py-3 bg-[#0A1628] border border-white/10 text-white placeholder:text-white/20 focus:border-[#E8622A] focus:ring-1 focus:ring-[#E8622A]/30 focus:outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitContactMutation.isPending}
                    className="btn-primary w-full justify-center"
                  >
                    {submitContactMutation.isPending
                      ? t("Submitting...", "جاري الإرسال...")
                      : t("Submit Request", "إرسال الطلب")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Offices */}
              <div className="card-navy rounded-sm p-8">
                <h3 className="font-display text-lg font-bold text-white mb-6">
                  {t("Our Offices", "مكاتبنا")}
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      city: t("Cairo, Egypt", "القاهرة، مصر"),
                      address: t("77 Road 104, Maadi", "٧٧ شارع ١٠٤، المعادي"),
                      tag: "HQ",
                    },
                    {
                      city: t("Dubai, UAE", "دبي، الإمارات"),
                      address: t("Gulf Operations Hub", "مركز عمليات الخليج"),
                      tag: "OPS",
                    },
                    {
                      city: t("Riyadh, KSA", "الرياض، السعودية"),
                      address: t("Business Development", "تطوير الأعمال"),
                      tag: "BD",
                    },
                  ].map((office, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#00B4D8]" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{office.city}</p>
                        <p className="text-white/40 text-sm">{office.address}</p>
                        <span className="font-label text-[10px] text-[#E8622A] mt-1 inline-block">{office.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="card-navy rounded-sm p-8">
                <h3 className="font-display text-lg font-bold text-white mb-6">
                  {t("Direct Contact", "تواصل مباشر")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#E8622A]/10 border border-[#E8622A]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#E8622A]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{t("Email", "البريد")}</p>
                      <p className="text-white text-sm">hello@simulxr.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#E8622A]/10 border border-[#E8622A]/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#E8622A]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{t("Phone", "الهاتف")}</p>
                      <p className="text-white text-sm">+20 2 2516 8000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pilot Info */}
              <div className="card-navy rounded-sm p-8 border-l-2 border-[#E8622A]">
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {t("What's in the Pilot?", "ماذا يتضمن الـ Pilot؟")}
                </h3>
                <ul className="text-white/40 text-sm space-y-2 leading-relaxed">
                  <li>• {t("1 custom simulation from your CAD files", "محاكاة مخصصة واحدة من ملفات CAD الخاصة بك")}</li>
                  <li>• {t("Up to 50 trainees", "حتى 50 متدرباً")}</li>
                  <li>• {t("Meta Quest headsets provided", "سماعات Meta Quest مقدمة")}</li>
                  <li>• {t("90-day deployment period", "فترة نشر 90 يوماً")}</li>
                  <li>• {t("Full performance analytics dashboard", "لوحة تحليلات أداء كاملة")}</li>
                  <li>• {t("HSE compliance reporting", "تقارير امتثال HSE")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
