import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";

const About = () => {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ImagePlaceholder
          className="w-full aspect-[4/3]"
          text="YOUR IMAGE PLACEMENT AREA"
        />

        <div className="space-y-8">
          <SectionHeading
            subtitle="ABOUT US"
            title="URBAN COMFORT MEETS AFROCENTRIC HOSPITALITY"
            alignment="left"
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            At AH Hotel, we redefine the meaning of a luxury stay. Balancing sophisticated modern architecture with warm, Afrocentric hospitality, we create an environment that feels both expansive and intimately familiar. Whether you are seeking a peaceful retreat or a dynamic workspace, our dedicated team is committed to making your stay profoundly memorable. Step into comfort, step into AH Hotel.
          </p>

          <div className="grid grid-cols-4 gap-4 py-6 border-y border-gray-100">
            <div>
              <div className="text-3xl font-bold font-marcellus">
                75<span className="text-primary text-2xl">+</span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 font-bold">
                Available
                <br />
                Rooms
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-marcellus">
                7<span className="text-primary text-2xl">+</span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 font-bold">
                Experienced
                <br />
                Chefs
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-marcellus">60K</div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 font-bold">
                Meals
                <br />
                Served
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold font-marcellus">
                102<span className="text-primary text-2xl">+</span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 font-bold">
                Happy
                <br />
                Guests
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
