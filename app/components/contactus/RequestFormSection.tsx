
"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Globe2,
  Mail,
  MessageCircle,
  Package,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

import { useTranslation } from "../../Language/translator";

interface FormData {
  fullName: string;
  companyName: string;
  phone: string;
  whatsapp: string;
  email: string;
  country: string;
  serviceType: string;
  quantity: string;
  shippingMethod: string;
  destinationCountry: string;
  description: string;
  message: string;
  agreed: boolean;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  companyName: "",
  phone: "",
  whatsapp: "",
  email: "",
  country: "",
  serviceType: "",
  quantity: "",
  shippingMethod: "",
  destinationCountry: "",
  description: "",
  message: "",
  agreed: false,
};

const WHATSAPP_NUMBER = "201008442982";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const drawerVariants = {
  hidden: {
    opacity: 0,
    x: 28,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.12,
    },
  },
};

const drawerItemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  dir?: "ltr" | "rtl";
  icon?: ReactNode;
}

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  dir,
  icon,
}: FieldProps) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-semibold text-[#34282b]">
        {label}
        {required && <span className="ml-1 text-[#cd2b55]">*</span>}
      </span>

      <div className="relative">
        {icon && (
          <span
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#8c777c] ${
              dir === "rtl" ? "right-4" : "left-4"
            }`}
          >
            {icon}
          </span>
        )}

        <input
          name={name}
          type={type}
          value={value}
          required={required}
          placeholder={placeholder}
          dir={dir}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full rounded-xl border border-[#e9e1df] bg-[#fcfaf9] px-4 py-3.5 text-sm text-[#221e20] outline-none transition-colors duration-200 placeholder:text-[#a99b9d] focus:border-[#662433] focus:bg-white focus:ring-4 focus:ring-[#421821]/[0.06] ${
            icon ? (dir === "rtl" ? "pr-11" : "pl-11") : ""
          }`}
        />
      </div>
    </label>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  required?: boolean;
  dir?: "ltr" | "rtl";
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  dir,
}: SelectFieldProps) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-semibold text-[#34282b]">
        {label}
        {required && <span className="ml-1 text-[#cd2b55]">*</span>}
      </span>

      <select
        name={name}
        value={value}
        required={required}
        dir={dir}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-[#e9e1df] bg-[#fcfaf9] px-4 py-3.5 text-sm text-[#34282b] outline-none transition-colors duration-200 focus:border-[#662433] focus:bg-white focus:ring-4 focus:ring-[#421821]/[0.06]"
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function RequestFormSection() {
  const { t, locale } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const isArabic = locale === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [agreementError, setAgreementError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const enterAnimation = prefersReducedMotion
    ? {
        initial: false as const,
        whileInView: undefined,
        variants: undefined,
      }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        variants: sectionVariants,
      };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.agreed) {
      setAgreementError(true);
      return;
    }

    setAgreementError(false);

    const message = [
      `New Inquiry — Assayl`,
      ``,
      `Full Name: ${formData.fullName}`,
      `Company: ${formData.companyName || "Not provided"}`,
      `Phone: ${formData.phone}`,
      `WhatsApp: ${formData.whatsapp || "Not provided"}`,
      `Email: ${formData.email}`,
      `Country: ${formData.country}`,
      ``,
      `Service: ${formData.serviceType}`,
      `Quantity / Volume: ${formData.quantity || "Not provided"}`,
      `Shipping Method: ${formData.shippingMethod || "Not specified"}`,
      `Destination: ${formData.destinationCountry || "Not provided"}`,
      `Product Details: ${formData.description || "Not provided"}`,
      ``,
      `Additional Message: ${formData.message || "None"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const serviceOptions = [
    {
      value: "import-export",
      label: t("requestForm.services.importExport"),
    },
    {
      value: "customs",
      label: t("requestForm.services.customs"),
    },
    {
      value: "warehousing",
      label: t("requestForm.services.warehousing"),
    },
    {
      value: "third-party-import",
      label: t("requestForm.services.thirdParty"),
    },
    {
      value: "other",
      label: t("requestForm.services.other"),
    },
  ];

  const shippingOptions = [
    {
      value: "sea",
      label: t("requestForm.shippingMethods.sea"),
    },
    {
      value: "air",
      label: t("requestForm.shippingMethods.air"),
    },
    {
      value: "land",
      label: t("requestForm.shippingMethods.land"),
    },
    {
      value: "not-sure",
      label: t("requestForm.shippingMethods.notSure"),
    },
  ];

  const checklist = [
    t("requestForm.checklist.product"),
    t("requestForm.checklist.quantity"),
    t("requestForm.checklist.shipping"),
    t("requestForm.checklist.contact"),
  ];

  return (
    <section
      id="contact"
      dir={direction}
      className="relative isolate overflow-hidden bg-[#f8f6f5] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Static background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[380px] w-[380px] rounded-full bg-[#662433]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#d1c6b9]/[0.32] blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          {...enterAnimation}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#421821]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#cd2b55]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#662433]">
              {t("requestForm.eyebrow")}
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#221e20] sm:text-4xl lg:text-5xl">
            {t("requestForm.heading")}
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#421821] via-[#cd2b55] to-[#d1c6b9]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#706467] sm:text-base sm:leading-8">
            {t("requestForm.intro")}
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid items-start gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Contact drawer */}
          <motion.aside
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={drawerVariants}
            className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#662433] via-[#421821] to-[#221e20] p-6 text-white shadow-[0_24px_70px_rgba(66,24,33,0.18)] sm:p-8 lg:p-9"
          >
            {/* Static color layers */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#cd2b55]/25 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-[#d1c6b9]/15 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_35%)]"
            />

            <motion.div
              variants={prefersReducedMotion ? undefined : drawerVariants}
              className="relative"
            >
              {/* Drawer heading */}
              <motion.div
                variants={
                  prefersReducedMotion ? undefined : drawerItemVariants
                }
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#f2d8df]">
                  <MessageCircle size={23} strokeWidth={1.7} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#e5b8c5]">
                  {t("requestForm.infoEyebrow")}
                </p>

                <h3 className="mt-3 max-w-sm text-2xl font-bold leading-snug sm:text-3xl">
                  {t("requestForm.infoTitle")}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                  {t("requestForm.infoDescription")}
                </p>
              </motion.div>

              {/* Contact options */}
              <motion.div
                variants={
                  prefersReducedMotion ? undefined : drawerItemVariants
                }
                className="mt-8 space-y-3"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 text-start"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#cd2b55]/20 text-[#f2c6d2]">
                    <MessageCircle size={20} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-white/60">
                      {t("requestForm.whatsappLabel")}
                    </span>
                    <span dir="ltr" className="mt-1 block text-sm font-semibold text-white">
                      +20 100 844 2982
                    </span>
                  </span>

                  <ArrowUpRight
                    size={18}
                    className={`shrink-0 text-white/60 ${
                      isArabic ? "-rotate-90" : ""
                    }`}
                  />
                </a>

                <a
                  href="tel:+201008442982"
                  className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 text-start"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d1c6b9]/15 text-[#e8d9c7]">
                    <Phone size={19} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-white/60">
                      {t("requestForm.phone")}
                    </span>
                    <span dir="ltr" className="mt-1 block text-sm font-semibold text-white">
                      +20 100 844 2982
                    </span>
                  </span>

                  <ArrowUpRight
                    size={18}
                    className={`shrink-0 text-white/60 ${
                      isArabic ? "-rotate-90" : ""
                    }`}
                  />
                </a>
              </motion.div>

              {/* Checklist */}
              <motion.div
                variants={
                  prefersReducedMotion ? undefined : drawerItemVariants
                }
                className="mt-8 border-t border-white/15 pt-7"
              >
                <p className="mb-4 text-sm font-semibold text-white">
                  {t("requestForm.formDescription")}
                </p>

                <ul className="space-y-3">
                  {checklist.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-white/75"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cd2b55]/25 text-[#f5d7e0]">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Privacy note */}
              <motion.div
                variants={
                  prefersReducedMotion ? undefined : drawerItemVariants
                }
                className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4"
              >
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#e5b8c5]"
                />
                <p className="text-xs leading-6 text-white/65">
                  {t("requestForm.privacyNote")}
                </p>
              </motion.div>
            </motion.div>
          </motion.aside>

          {/* Request form */}
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
            className="relative overflow-hidden rounded-3xl border border-[#eae2e0] bg-white shadow-[0_20px_65px_rgba(34,30,32,0.06)]"
          >
            {/* Static gradient top border */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#421821] via-[#cd2b55] to-[#d1c6b9]" />

            <div className="p-5 sm:p-8 lg:p-9">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#421821]/[0.07] text-[#662433]">
                  <Package size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#221e20] sm:text-2xl">
                    {t("requestForm.formTitle")}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#817477]">
                    {t("requestForm.formDescription")}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact details */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#421821] text-xs font-bold text-white">
                      01
                    </span>
                    <h4 className="text-sm font-bold text-[#34282b]">
                      {t("requestForm.contactDetails")}
                    </h4>
                    <span className="h-px flex-1 bg-[#eee7e5]" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label={t("requestForm.fullName")}
                      name="fullName"
                      value={formData.fullName}
                      onChange={(value) => setField("fullName", value)}
                      placeholder={t("requestForm.placeholders.fullName")}
                      required
                      dir={direction}
                    />

                    <FormField
                      label={t("requestForm.companyName")}
                      name="companyName"
                      value={formData.companyName}
                      onChange={(value) => setField("companyName", value)}
                      placeholder={t("requestForm.placeholders.companyName")}
                      dir={direction}
                    />

                    <FormField
                      label={t("requestForm.phone")}
                      name="phone"
                      value={formData.phone}
                      onChange={(value) => setField("phone", value)}
                      placeholder={t("requestForm.placeholders.phone")}
                      type="tel"
                      required
                      dir="ltr"
                      icon={<Phone size={16} />}
                    />

                    <FormField
                      label={t("requestForm.whatsapp")}
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={(value) => setField("whatsapp", value)}
                      placeholder={t("requestForm.placeholders.whatsapp")}
                      type="tel"
                      dir="ltr"
                      icon={<MessageCircle size={16} />}
                    />

                    <FormField
                      label={t("requestForm.email")}
                      name="email"
                      value={formData.email}
                      onChange={(value) => setField("email", value)}
                      placeholder={t("requestForm.placeholders.email")}
                      type="email"
                      required
                      dir="ltr"
                      icon={<Mail size={16} />}
                    />

                    <FormField
                      label={t("requestForm.country")}
                      name="country"
                      value={formData.country}
                      onChange={(value) => setField("country", value)}
                      placeholder={t("requestForm.placeholders.country")}
                      required
                      dir={direction}
                      icon={<Globe2 size={16} />}
                    />
                  </div>
                </div>

                {/* Shipment details */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#662433] text-xs font-bold text-white">
                      02
                    </span>
                    <h4 className="text-sm font-bold text-[#34282b]">
                      {t("requestForm.shipmentDetails")}
                    </h4>
                    <span className="h-px flex-1 bg-[#eee7e5]" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      label={t("requestForm.serviceType")}
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={(value) => setField("serviceType", value)}
                      options={serviceOptions}
                      placeholder={t("requestForm.placeholders.serviceType")}
                      required
                      dir={direction}
                    />

                    <SelectField
                      label={t("requestForm.shippingMethod")}
                      name="shippingMethod"
                      value={formData.shippingMethod}
                      onChange={(value) => setField("shippingMethod", value)}
                      options={shippingOptions}
                      placeholder={t("requestForm.placeholders.shippingMethod")}
                      dir={direction}
                    />

                    <FormField
                      label={t("requestForm.quantity")}
                      name="quantity"
                      value={formData.quantity}
                      onChange={(value) => setField("quantity", value)}
                      placeholder={t("requestForm.placeholders.quantity")}
                      dir={direction}
                    />

                    <FormField
                      label={t("requestForm.destinationCountry")}
                      name="destinationCountry"
                      value={formData.destinationCountry}
                      onChange={(value) =>
                        setField("destinationCountry", value)
                      }
                      placeholder={t(
                        "requestForm.placeholders.destinationCountry"
                      )}
                      dir={direction}
                    />
                  </div>
                </div>

                {/* Additional information */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#cd2b55] text-xs font-bold text-white">
                      03
                    </span>
                    <h4 className="text-sm font-bold text-[#34282b]">
                      {t("requestForm.requestDetails")}
                    </h4>
                    <span className="h-px flex-1 bg-[#eee7e5]" />
                  </div>

                  <div className="space-y-5">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#34282b]">
                        {t("requestForm.description")}
                      </span>

                      <textarea
                        name="description"
                        rows={3}
                        maxLength={500}
                        value={formData.description}
                        onChange={(event) =>
                          setField("description", event.target.value)
                        }
                        placeholder={t(
                          "requestForm.placeholders.description"
                        )}
                        dir={direction}
                        className="w-full resize-y rounded-xl border border-[#e9e1df] bg-[#fcfaf9] px-4 py-3.5 text-sm leading-6 text-[#221e20] outline-none transition-colors duration-200 placeholder:text-[#a99b9d] focus:border-[#662433] focus:bg-white focus:ring-4 focus:ring-[#421821]/[0.06]"
                      />

                      <span className="mt-2 block text-end text-xs text-[#a99b9d]">
                        {formData.description.length}/500
                      </span>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#34282b]">
                        {t("requestForm.message")}
                      </span>

                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={(event) =>
                          setField("message", event.target.value)
                        }
                        placeholder={t("requestForm.placeholders.message")}
                        dir={direction}
                        className="w-full resize-y rounded-xl border border-[#e9e1df] bg-[#fcfaf9] px-4 py-3.5 text-sm leading-6 text-[#221e20] outline-none transition-colors duration-200 placeholder:text-[#a99b9d] focus:border-[#662433] focus:bg-white focus:ring-4 focus:ring-[#421821]/[0.06]"
                      />
                    </label>
                  </div>
                </div>

                {/* Agreement */}
                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={formData.agreed}
                      onChange={(event) => {
                        setField("agreed", event.target.checked);
                        setAgreementError(false);
                      }}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#662433]"
                    />

                    <span className="text-xs leading-6 text-[#75696c]">
                      {t("requestForm.agreement")}
                    </span>
                  </label>

                  <AnimatePresence>
                    {agreementError && (
                      <motion.p
                        initial={
                          prefersReducedMotion
                            ? false
                            : { opacity: 0, y: -5 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-2 text-xs font-medium text-[#cd2b55]"
                      >
                        {t("requestForm.agreementError")}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit */}
                <div className="border-t border-[#eee7e5] pt-6">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#421821] to-[#662433] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(66,24,33,0.16)] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#421821]/20"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 size={19} />
                        {t("requestForm.whatsappTitle")}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t("requestForm.submit")}
                        <ArrowUpRight
                          size={18}
                          className={isArabic ? "-rotate-90" : ""}
                        />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs leading-6 text-[#938589]">
                    {t("requestForm.submitNote")}
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
