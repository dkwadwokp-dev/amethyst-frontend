import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "../../shared/ui/section";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { Button } from "../../shared/ui/button";
import { contactSchema, type ContactFormData } from "../schema/contact-schema";

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // In a real app, you would send this to your API
    console.log("Form Submitted:", data);
    alert("Thank you! Your inquiry has been sent.");
    reset();
  };

  return (
    <Section className="bg-white pt-12 md:pt-24 pb-12 md:pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ImagePlaceholder
          className="w-full h-[300px] lg:h-[600px]  object-cover"
          src="/assets/reception-attendant.png"
          text="CONTACT DESK"
        />

        <div className="py-2 lg:px-8">
          <div className="mb-6 md:mb-10">
            <h4 className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-3">
              WE'RE HERE TO ASSIST
            </h4>
            <h2 className="text-3xl md:text-4xl font-marcellus text-primary">
              Let's Talk
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
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
              </div>
              <div className="space-y-2">
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
              </div>
            </div>

            <div className="space-y-2">
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
            </div>

            <div className="space-y-2">
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
            </div>

            <div className="space-y-2">
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
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="bg-[#2A2E33] hover:bg-black text-white px-8 py-3 text-xs tracking-widest  border-none shadow-none disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactFormSection;
