import { Section } from '../../shared/ui/section';
import { ImagePlaceholder } from '../../shared/ui/image-placeholder';
import { Button } from '../../shared/ui/button';

const ContactFormSection = () => {
  return (
    <Section className="bg-white pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ImagePlaceholder 
          className="w-full h-[300px] lg:h-[600px] rounded-sm object-cover" 
          src="/assets/reception-attendant.png" 
          text="CONTACT DESK" 
        />
        
        <div className="py-2 lg:px-8">
          <div className="mb-10">
            <h4 className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-3">WE'RE HERE TO ASSIST</h4>
            <h2 className="text-3xl md:text-4xl font-marcellus text-gray-900">Let's Talk</h2>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">NAME</label>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">SUBJECT</label>
              <input 
                type="text" 
                placeholder="How can we help?" 
                className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-gray-700 uppercase">MESSAGE</label>
              <textarea 
                placeholder="Your message here..." 
                className="w-full border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors min-h-[160px] resize-y"
              ></textarea>
            </div>
            
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="privacy" className="w-4 h-4 border-gray-300 rounded text-gray-900 focus:ring-gray-900" />
              <label htmlFor="privacy" className="text-xs text-gray-600">I agree to the privacy terms and conditions.</label>
            </div>

            <div className="pt-2">
              <Button type="button" variant="primary" className="bg-[#2A2E33] hover:bg-black text-white px-8 py-3 text-xs tracking-widest rounded-sm border-none shadow-none">
                SEND INQUIRY
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactFormSection;
