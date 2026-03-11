import { Section } from '../../shared/ui/section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What are the check-in and check-out times?", a: "Check-in starts at 3:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out is subject to availability and may incur extra fees." },
      { q: "Is there parking available on-site?", a: "Secure underground parking is available for $25 per day. Valet services are also available upon request at the main entrance." },
      { q: "Do you offer airport shuttle services?", a: "Yes, we provide a private shuttle service for an additional fee. Please contact our concierge 24 hours in advance to arrange your pickup." },
      { q: "What is your cancellation policy?", a: "Standard bookings can be cancelled free of charge up to 48 hours before arrival. Non-refundable rates are final and cannot be modified." }
    ]
  },
  {
    category: "Rooms & Amenities",
    questions: [
      { q: "Is high-speed WiFi available?", a: "Complimentary high-speed fiber WiFi is available throughout the property. Dedicated ethernet ports are available in Executive Suites." },
      { q: "Are pets allowed in the rooms?", a: "We are a pet-friendly hotel for animals under 15kg. A specialized cleaning fee of $50 per stay applies to all pet-friendly bookings." },
      { q: "Do rooms have private balconies?", a: "Our Deluxe Double and Executive Suites feature private balconies with city views. Standard rooms feature large floor-to-ceiling windows." },
      { q: "Are cribs available for infants?", a: "Yes, complimentary cribs are available upon request for children under 2 years old, subject to availability." }
    ]
  },
  {
    category: "Dining",
    questions: [
      { q: "Is breakfast included in the room rate?", a: "Breakfast inclusions vary by booking type. Standard rates typically include a continental buffet, while promotional rates may exclude it." },
      { q: "Do you have vegan and gluten-free options?", a: "Yes, our restaurants offer a variety of vegetarian, vegan, and gluten-free dietary options. Please inform your server or add a note to your reservation." },
      { q: "What is the dress code for the main restaurant?", a: "We ask that guests dress in smart casual attire. We kindly request no athletic wear or excessively casual attire in the main dining areas." },
      { q: "Can I make a dining reservation if I am not a hotel guest?", a: "Absolutely! Our dining facilities are open to the public. We recommend making a reservation in advance through our Dining page." }
    ]
  }
];

const FaqList = () => {
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({});

  const toggleItem = (catIdx: number, qIdx: number) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Section className="bg-[#F8F9FA] py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        {faqs.map((category, catIdx) => (
          <div key={catIdx}>
            <h3 className="text-2xl font-marcellus text-gray-900 mb-8 border-b border-gray-200 pb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.questions.map((faq, qIdx) => {
                const isOpen = openItems[`${catIdx}-${qIdx}`];
                return (
                  <div key={qIdx} className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <button 
                      onClick={() => toggleItem(catIdx, qIdx)}
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                      <h4 className={`text-sm tracking-wide font-manrope pr-8 transition-colors ${isOpen ? 'font-bold text-[#0021B3]' : 'font-semibold text-gray-900 hover:text-gray-600'}`}>
                        {faq.q}
                      </h4>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#0021B3] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-xs text-gray-500 font-manrope leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FaqList;
