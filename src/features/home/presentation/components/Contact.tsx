"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  acceptTerms: boolean;
};

const RECIPIENT_EMAIL = "";
const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function Contact() {
  const isDarkMode = false;
  const reduceMotion = useReducedMotion();
  const sectionClassName = isDarkMode ? "bg-dark text-white" : "bg-white text-black";
  const inputClassName = isDarkMode
    ? "h-11 w-full rounded-sm border border-[#5E3BEE66] bg-zinc-900 px-3 outline-none transition focus:border-primary"
    : "h-11 w-full rounded-sm border border-[#5E3BEE66] bg-white px-3 outline-none transition focus:border-primary";
  const textareaClassName = isDarkMode
    ? "w-full resize-none rounded-sm border border-[#5E3BEE66] bg-zinc-900 px-3 py-2 outline-none transition focus:border-primary"
    : "w-full resize-none rounded-sm border border-[#5E3BEE66] bg-white px-3 py-2 outline-none transition focus:border-primary";
  const mutedTextClassName = isDarkMode ? "text-zinc-300" : "text-zinc-700";

  const sectionVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: easeInOut,
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.4, ease: easeInOut },
    },
  } as const;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    const subject = `Portfolio contact from ${values.firstName} ${values.lastName}`;
    const body = [
      `Name: ${values.firstName} ${values.lastName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phoneNumber || "N/A"}`,
      "",
      "Message:",
      values.message,
    ].join("\n");

    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    reset();
  };

  return (
    <section id="contact" className={`${sectionClassName} px-5 py-14 sm:px-8 lg:px-12`}>
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.p className="text-center text-sm font-semibold text-primary" variants={itemVariants}>
          Get In Touch
        </motion.p>
        <motion.h2
          className="mt-2 text-center text-3xl font-bold tracking-tight text-primary sm:text-5xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          variants={itemVariants}
        >
          Contact me
        </motion.h2>

        <motion.form
          className="mx-auto mt-10 max-w-[820px] space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          variants={itemVariants}
        >
          <motion.div className="grid gap-3 sm:grid-cols-2" variants={itemVariants}>
            <motion.div className="space-y-1.5" variants={itemVariants}>
              <label htmlFor="firstName" className="text-sm font-medium">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                className={inputClassName}
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <p className="text-xs text-red-600">{errors.firstName.message}</p>
              )}
            </motion.div>

            <motion.div className="space-y-1.5" variants={itemVariants}>
              <label htmlFor="lastName" className="text-sm font-medium">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                className={inputClassName}
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-xs text-red-600">{errors.lastName.message}</p>
              )}
            </motion.div>
          </motion.div>

          <motion.div className="grid gap-3 sm:grid-cols-2" variants={itemVariants}>
            <motion.div className="space-y-1.5" variants={itemVariants}>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={inputClassName}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
            </motion.div>

            <motion.div className="space-y-1.5" variants={itemVariants}>
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className={inputClassName}
                {...register("phoneNumber")}
              />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-1.5" variants={itemVariants}>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className={textareaClassName}
              placeholder="Type your message..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message should be at least 10 characters",
                },
              })}
            />
            {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
          </motion.div>

          <motion.div className="space-y-1" variants={itemVariants}>
            <label className={`inline-flex items-center gap-2 text-xs sm:text-sm ${mutedTextClassName}`}>
              <input
                type="checkbox"
                className="h-4 w-4 accent-primary"
                {...register("acceptTerms", {
                  required: "Please accept the terms before submitting",
                })}
              />
              I accept the terms
            </label>
            {errors.acceptTerms && (
              <p className="text-xs text-red-600">{errors.acceptTerms.message}</p>
            )}
          </motion.div>

          <motion.div className="pt-2 text-center" variants={itemVariants}>
            <motion.button
              type="submit"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-7 py-2 text-sm font-semibold text-white transition hover:bg-[#4b2dca] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
