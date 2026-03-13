import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { Button } from "../../shared/ui/button";

const Contact = () => {
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

          <form className="space-y-6 max-w-md">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                  NAME *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-gray-300 py-2 text-sm focus:border-black outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                  EMAIL *
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-b border-gray-300 py-2 text-sm focus:border-black outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                SUBJECT *
              </label>
              <input
                type="text"
                placeholder="What is this regarding?"
                className="w-full border-b border-gray-300 py-2 text-sm focus:border-black outline-none transition-colors"
              />
            </div>

            <div className="space-y-2 pt-4">
              <label className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                MESSAGE *
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full border-b border-gray-300 py-2 text-sm focus:border-black outline-none transition-colors min-h-[100px] resize-y"
              ></textarea>
            </div>

            <div className="pt-6">
              <Button
                type="button"
                variant="ghost"
                className="tracking-widest flex items-center gap-2"
              >
                SUBMIT <span className="text-lg leading-none">&rarr;</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
