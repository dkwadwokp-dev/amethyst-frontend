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
        {menuItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 border-2 border-white shadow-sm"></div>
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
        ))}
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
