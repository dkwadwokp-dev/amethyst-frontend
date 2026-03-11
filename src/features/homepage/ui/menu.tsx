import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { Button } from "../../shared/ui/button";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menu";

const Menu = () => {
  return (
    <Section className="bg-white border-t border-gray-100">
      <SectionHeading
        subtitle="SOME MEALS"
        title="FROM OUR MENU"
        className="mb-16"
      />

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {menuItems.map((item, idx) => {
          let src = '';
          switch(idx) {
            case 0: src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200&auto=format&fit=crop'; break; // Vegetarian
            case 1: src = 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=200&auto=format&fit=crop'; break; // Plantains
            case 2: src = 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=200&auto=format&fit=crop'; break; // Moi Moi
            case 3: src = 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=200'; break; // Spicy Wings
            case 4: src = 'https://images.pexels.com/photos/3575510/pexels-photo-3575510.jpeg?auto=compress&cs=tinysrgb&w=200'; break; // Calamari
            case 5: src = 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=200&auto=format&fit=crop'; break; // Steak Tips
            case 6: src = 'https://images.pexels.com/photos/2625501/pexels-photo-2625501.jpeg?auto=compress&cs=tinysrgb&w=200'; break; // Grilled Fish
            case 7: src = 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=200&auto=format&fit=crop'; break; // Sweet Potato
            default: src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200&auto=format&fit=crop';
          }
          return (
          <div key={idx} className="flex items-center gap-6 group cursor-pointer">
            <img 
              src={src}
              alt={item.name}
              className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-white shadow-md object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1 relative overflow-hidden">
                <h4 className="font-bold text-[13px] tracking-wider uppercase bg-white pr-2 relative z-10">
                  {item.name}
                </h4>
                <div className="absolute left-0 bottom-1.5 w-full border-b-[1.5px] border-dotted border-gray-300 z-0"></div>
                <span className="font-bold text-sm bg-white pl-2 relative z-10">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-500 text-xs italic">{item.desc}</p>
            </div>
          </div>
        )})}
      </div>


      <div className="mt-16 text-center">
        <Link to="/dishes">
          <Button variant="ghost">View All Menu</Button>
        </Link>
      </div>
    </Section>
  );
};

export default Menu;
