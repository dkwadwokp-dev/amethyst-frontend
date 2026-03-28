import { Section } from "../../shared/ui/section";
import { SectionHeading } from "../../shared/ui/section-heading";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ImagePlaceholder
            className="w-full aspect-[4/3]  shadow-xl"
            text="ABOUT HOTEL"
            src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="ABOUT US"
              title="AFROCENTRIC URBAN LUXURY"
              alignment="left"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-sm leading-relaxed"
          >
            At Amethyst, we redefine the meaning of a luxury stay. Balancing
            sophisticated modern architecture with warm, Afrocentric
            hospitality, we create an environment that feels both expansive and
            intimately familiar. Whether you are seeking a peaceful retreat or a
            dynamic workspace, our dedicated team is committed to making your
            stay profoundly memorable. Step into comfort, step into Amethyst.
          </motion.p>

          <div className="grid grid-cols-4 gap-4 py-6 border-y border-gray-100">
            {[
              {
                number: "75",
                suffix: "+",
                label: (
                  <>
                    <br />
                    Available
                    <br />
                    Rooms
                  </>
                ),
              },
              {
                number: "7",
                suffix: "+",
                label: (
                  <>
                    <br />
                    Experienced
                    <br />
                    Chefs
                  </>
                ),
              },
              {
                number: "60K",
                suffix: "",
                label: (
                  <>
                    <br />
                    Meals
                    <br />
                    Served
                  </>
                ),
              },
              {
                number: "102",
                suffix: "+",
                label: (
                  <>
                    <br />
                    Happy
                    <br />
                    Guests
                  </>
                ),
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-3xl font-bold font-marcellus">
                  {stat.number}
                  {stat.suffix && (
                    <span className="text-primary text-2xl">{stat.suffix}</span>
                  )}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
