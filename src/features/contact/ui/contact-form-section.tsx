import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "../../shared/ui/section";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { Button } from "../../shared/ui/button";
import { contactSchema, type ContactFormData } from "../schema/contact-schema";
import { useSubmitContact } from "../actions/use-submit-contact";
import { CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const { mutate, isPending } = useSubmitContact();
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmitStatus({ type: null, message: null });
    mutate(data, {
      onSuccess: () => {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your inquiry has been received. We will get back to you shortly.",
        });
        reset();
      },
      onError: (error: any) => {
        console.error("Contact form error:", error);
        setSubmitStatus({
          type: "error",
          message:
            error.response?.data?.message ||
            error.message ||
            "Something went wrong. Please try again or email us directly.",
        });
      },
    });
  };

  const isLoading = isSubmitting || isPending;

  return (
    <Section className="bg-white pt-12 md:pt-24 pb-12 md:pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ImagePlaceholder
            className="w-full h-[300px] lg:h-[600px]  object-cover"
            src="/assets/reception-attendant.png"
            text="CONTACT DESK"
          />
        </motion.div>

        <div className="py-2 lg:px-8">
          <div className="mb-6 md:mb-10">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-3"
            >
              WE'RE HERE TO ASSIST
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-marcellus text-primary"
            >
              Let's Talk
            </motion.h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
                  NAME
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Full Name"
                  className={`w-full border ${errors.name ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
                />
                {errors.name && (
                  <p className="text-[10px] text-primary font-bold">
                    {errors.name.message}
                  </p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
                  EMAIL
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email@example.com"
                  className={`w-full border ${errors.email ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="text-[10px] text-primary font-bold">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2"
            >
              <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
                SUBJECT
              </label>
              <input
                {...register("subject")}
                type="text"
                placeholder="How can we help?"
                className={`w-full border ${errors.subject ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors`}
              />
              {errors.subject && (
                <p className="text-[10px] text-primary font-bold">
                  {errors.subject.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-2"
            >
              <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">
                MESSAGE
              </label>
              <textarea
                {...register("message")}
                placeholder="Your message here..."
                className={`w-full border ${errors.message ? "border-primary" : "border-gray-200"} p-3 text-sm focus:border-black outline-none transition-colors min-h-[160px] resize-y`}
              ></textarea>
              {errors.message && (
                <p className="text-[10px] text-primary font-bold">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3 py-2">
                <input
                  {...register("privacy")}
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 border-gray-300 rounded text-gray-900 focus:ring-gray-900"
                />
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  I agree to the privacy terms and conditions.
                </label>
              </div>
              {errors.privacy && (
                <p className="text-[10px] text-primary font-bold">
                  {errors.privacy.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-2"
            >
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="bg-[#2A2E33] hover:bg-black text-white px-8 py-3 text-xs tracking-widest  border-none shadow-none disabled:opacity-50"
              >
                {isLoading ? "SENDING..." : "SEND INQUIRY"}
              </Button>
            </motion.div>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mt-6 p-4 border flex items-start gap-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-1">
                    {submitStatus.type === "success" ? "Success" : "Error"}
                  </h4>
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactFormSection;
