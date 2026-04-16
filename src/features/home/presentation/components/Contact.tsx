"use client";

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

export default function Contact() {
  const isDarkMode = false;
  const sectionClassName = isDarkMode ? "bg-dark text-white" : "bg-white text-black";
  const inputClassName = isDarkMode
    ? "h-11 w-full rounded-sm border border-[#5E3BEE66] bg-zinc-900 px-3 outline-none transition focus:border-primary"
    : "h-11 w-full rounded-sm border border-[#5E3BEE66] bg-white px-3 outline-none transition focus:border-primary";
  const textareaClassName = isDarkMode
    ? "w-full resize-none rounded-sm border border-[#5E3BEE66] bg-zinc-900 px-3 py-2 outline-none transition focus:border-primary"
    : "w-full resize-none rounded-sm border border-[#5E3BEE66] bg-white px-3 py-2 outline-none transition focus:border-primary";
  const mutedTextClassName = isDarkMode ? "text-zinc-300" : "text-zinc-700";

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
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-semibold text-primary">Get In Touch</p>
        <h2
          className="mt-2 text-center text-3xl font-bold tracking-tight text-primary sm:text-5xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          Contact me
        </h2>

        <form
          className="mx-auto mt-10 max-w-[820px] space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
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
            </div>

            <div className="space-y-1.5">
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
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
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
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className={inputClassName}
                {...register("phoneNumber")}
              />
            </div>
          </div>

          <div className="space-y-1.5">
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
          </div>

          <div className="space-y-1">
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
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-7 py-2 text-sm font-semibold text-white transition hover:bg-[#4b2dca] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
