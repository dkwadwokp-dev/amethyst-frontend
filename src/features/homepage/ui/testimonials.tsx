import { Section } from '../../shared/ui/section';
import { SectionHeading } from '../../shared/ui/section-heading';

import { reviews } from '../data/testimonials';

const Testimonials = () => {
  return (
    <Section className="bg-[#F8F9FA]">
      <SectionHeading 
        subtitle="GUEST REVIEWS"
        title="TESTIMONIALS"
        className="mb-16"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-white p-8 shadow-sm">
            <div className="text-primary mb-4 text-3xl font-serif">"</div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
              {review.text}
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <img 
                src={`https://i.pravatar.cc/150?u=${idx}`} 
                alt={review.name} 
                className="w-10 h-10 rounded-full flex-shrink-0 object-cover shadow-sm" 
              />
              <div>
                <div className="font-bold text-xs uppercase tracking-wider">{review.name}</div>
                <div className="text-[10px] text-gray-500 uppercase">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;


