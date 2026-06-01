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
      <section className="relative pt-40 pb-24 bg-[#0F2A4A] overflow-hidden">
        <div className="container relative z-10">
          <span className="section-eyebrow mb-4 block animate-fadeUp">
            {t("GET STARTED", "ابدأ الآن")}
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-tight animate-fadeUp-delay-1">
            {t("Let's Build Your", "لنبني محاكاة")}
            <br />
            {t("Training Simulation", "التدريب الخاصة بك")}<span className="text-gold">.</span>
          </h1>
          <p className="text-white/50 max-w-xl mt-6 text-lg leading-relaxed animate-fadeUp-delay-2">
            {t(
              "Request a pilot package, schedule a demo, or just tell us about your facility. Our team responds within 24 hours.",
              "اطلب باقة تجريبية أو حدد موعداً لعرض توضيحي أو أخبرنا عن منشأتك. فريقنا يرد خلال 24 ساعة."
            )}
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-light rounded-lg p-8 md:p-10">
                <h2 className="font-display text-2xl text-[#0F2A4A] mb-2">
                  {t("Request Pilot Package", "اطلب باقة الـ Pilot")}
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  {t(
                    "90-day pilot — one simulation, 50 trainees, full performance reporting.",
                    "تجربة 90 يوماً — محاكاة واحدة، 50 متدرباً، تقرير أداء كامل."
                  )}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-600 font-medium mb-2 block">{t("Full Name", "الاسم الكامل")}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("Ahmed Al-Mansouri", "أحمد المنصوري")}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0F2A4A] placeholder:text-gray-400 rounded-lg focus:border-[#D4622B] focus:ring-1 focus:ring-[#D4622B]/30 focus:outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 font-medium mb-2 block">{t("Company", "الشركة")}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder={t("Cairo Petroleum", "القاهرة للبترول")}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0F2A4A] placeholder:text-gray-400 rounded-lg focus:border-[#D4622B] focus:ring-1 focus:ring-[#D4622B]/30 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-600 font-medium mb-2 block">{t("Email", "البريد الإلكتروني")}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ahmed@company.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0F2A4A] placeholder:text-gray-400 rounded-lg focus:border-[#D4622B] focus:ring-1 focus:ring-[#D4622B]/30 focus:outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 font-medium mb-2 block">{t("Role", "الدور الوظيفي")}</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0F2A4A] rounded-lg focus:border-[#D4622B] focus:ring-1 focus:ring-[#D4622B]/30 focus:outline-none transition-all text-sm"
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
                    <label className="text-sm text-gray-600 font-medium mb-2 block">{t("Message", "الرسالة")}</label>
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#0F2A4A] placeholder:text-gray-400 rounded-lg focus:border-[#D4622B] focus:ring-1 focus:ring-[#D4622B]/30 focus:outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitContactMutation.isPending}
                    className="btn-gold w-full justify-center"
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
              <div className="card-light rounded-lg p-8">
                <h3 className="font-display text-xl text-[#0F2A4A] mb-6">
                  {t("Our Offices", "مكاتبنا")}
                </h3>
                <div className="space-y-6">
                  {[
                    { city: t("Cairo, Egypt", "القاهرة، مصر"), address: t("77 Road 104, Maadi", "٧٧ شارع ١٠٤، المعادي"), tag: "HQ" },
                    { city: t("Dubai, UAE", "دبي، الإمارات"), address: t("Gulf Operations Hub", "مركز عمليات الخليج"), tag: "OPS" },
                    { city: t("Riyadh, KSA", "الرياض، السعودية"), address: t("Business Development", "تطوير الأعمال"), tag: "BD" },
                  ].map((office, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#D4622B]/10 border border-[#D4622B]/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#D4622B]" />
                      </div>
                      <div>
                        <p className="text-[#0F2A4A] font-medium text-sm">{office.city}</p>
                        <p className="text-gray-500 text-sm">{office.address}</p>
                        <span className="text-[#D4622B] text-xs font-medium mt-1 inline-block">{office.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-light rounded-lg p-8">
                <h3 className="font-display text-xl text-[#0F2A4A] mb-6">
                  {t("Direct Contact", "تواصل مباشر")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4622B]/10 border border-[#D4622B]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#D4622B]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{t("Email", "البريد")}</p>
                      <p className="text-[#0F2A4A] text-sm font-medium">hello@simulxr.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4622B]/10 border border-[#D4622B]/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#D4622B]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{t("Phone", "الهاتف")}</p>
                      <p className="text-[#0F2A4A] text-sm font-medium">+20 2 2516 8000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F2A4A] rounded-lg p-8">
                <h3 className="font-display text-xl text-white mb-4">
                  {t("What's in the Pilot?", "ماذا يتضمن الـ Pilot؟")}
                </h3>
                <ul className="text-white/50 text-sm space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2"><span className="text-[#D4622B]">•</span> {t("1 custom simulation from your CAD files", "محاكاة مخصصة واحدة من ملفات CAD الخاصة بك")}</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4622B]">•</span> {t("Up to 50 trainees", "حتى 50 متدرباً")}</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4622B]">•</span> {t("Meta Quest headsets provided", "سماعات Meta Quest مقدمة")}</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4622B]">•</span> {t("90-day deployment period", "فترة نشر 90 يوماً")}</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4622B]">•</span> {t("Full performance analytics dashboard", "لوحة تحليلات أداء كاملة")}</li>
                  <li className="flex items-start gap-2"><span className="text-[#D4622B]">•</span> {t("HSE compliance reporting", "تقارير امتثال HSE")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
