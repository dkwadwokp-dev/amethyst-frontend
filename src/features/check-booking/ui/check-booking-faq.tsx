import { Section } from '../../shared/ui/section';

const faqs = [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in starts at 3:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out is subject to availability and may incur extra fees."
  },
  {
    q: "Is breakfast included in the room rate?",
    a: "Breakfast inclusions vary by booking type. Standard rates typically include a continental buffet, while promotional rates may exclude it."
  },
  {
    q: "Do you offer airport shuttle services?",
    a: "Yes, we provide a private shuttle service for an additional fee. Please contact our concierge 24 hours in advance to arrange your pickup."
  },
  {
    q: "Are pets allowed in the rooms?",
    a: "We are a pet-friendly hotel for animals under 15kg. A specialized cleaning fee of $50 per stay applies to all pet-friendly bookings."
  },
  {
    q: "Is there parking available on-site?",
    a: "Secure underground parking is available for $25 per day. Valet services are also available upon request at the main entrance."
  },
  {
    q: "What is your cancellation policy?",
    a: "Standard bookings can be cancelled free of charge up to 48 hours before arrival. Non-refundable rates are final and cannot be modified."
  },
  {
    q: "Is there high-speed WiFi for work?",
    a: "Complimentary high-speed fiber WiFi is available throughout the property. Dedicated ethernet ports are available in Executive Suites."
  },
  {
    q: "Do rooms have private balconies?",
    a: "Our Deluxe Double and Executive Suites feature private balconies with city views. Standard rooms feature large floor-to-ceiling windows."
  }
];

const CheckBookingFaq = () => {
  return (
    <Section className="bg-[#F8F9FA] pb-24 border-t border-gray-100">
      <div className="mb-12">
        <h2 className="text-3xl font-marcellus text-gray-900">Find Answers To Your Questions Here</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-8 border border-gray-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] rounded-sm">
            <h4 className="font-bold text-sm text-gray-900 mb-4 font-manrope">{faq.q}</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-manrope">{faq.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CheckBookingFaq;
