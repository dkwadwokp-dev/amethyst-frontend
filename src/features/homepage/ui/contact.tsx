import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { Button } from "../../shared/ui/button";
import { homepageContactSchema, type HomepageContactFormData } from "../../contact/schema/contact-schema";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HomepageContactFormData>({
    resolver: zodResolver(homepageContactSchema),
  });

  const onSubmit = (data: HomepageContactFormData) => {
    console.log("Homepage Form Submitted:", data);
    alert("Thank you! Your inquiry has been sent.");
    reset();
  };

  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <ImagePlaceholder
          className="w-full h-[300px] lg:h-[600px] object-cover  shadow-lg"
          text="CONTACT"
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2600&auto=format&fit=crop"
        />

        <div className="py-4 md:py-8">
          <SectionHeading
            subtitle="GET IN TOUCH"
            title="WE'RE HERE TO ASSIST"
            alignment="left"
            className="mb-6 md:mb-10"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                  NAME *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border-b ${errors.name ? 'border-primary' : 'border-gray-300'} py-2 text-sm focus:border-black outline-none transition-colors`}
                />
                {errors.name && (
                  <p className="text-[10px] text-primary font-bold">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                  EMAIL *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className={`w-full border-b ${errors.email ? 'border-primary' : 'border-gray-300'} py-2 text-sm focus:border-black outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="text-[10px] text-primary font-bold">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                SUBJECT *
              </label>
              <input
                {...register("subject")}
                type="text"
                placeholder="What is this regarding?"
                className={`w-full border-b ${errors.subject ? 'border-primary' : 'border-gray-300'} py-2 text-sm focus:border-black outline-none transition-colors`}
              />
              {errors.subject && (
                <p className="text-[10px] text-primary font-bold">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2 pt-4">
              <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                MESSAGE *
              </label>
              <textarea
                {...register("message")}
                placeholder="Write your message here..."
                className={`w-full border-b ${errors.message ? 'border-primary' : 'border-gray-300'} py-2 text-sm focus:border-black outline-none transition-colors min-h-[100px] resize-y`}
              ></textarea>
              {errors.message && (
                <p className="text-[10px] text-primary font-bold">{errors.message.message}</p>
              )}
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                variant="ghost"
                disabled={isSubmitting}
                className="tracking-widest flex items-center gap-2"
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"} <span className="text-lg leading-none">&rarr;</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
