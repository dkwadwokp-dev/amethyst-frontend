import { Section } from "../../shared/ui/section";
import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { motion } from "framer-motion";

const team = [
  {
    name: "Emmanuel Asante",
    role: "General Manager",
    bio: "With over 20 years in luxury hospitality across three continents, Emmanuel leads AH Hotel with a vision rooted in excellence and Ghanaian warmth.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Ama Boateng",
    role: "Executive Chef",
    bio: "A culinary artist trained in Paris and Accra, Ama crafts menus that honour Ghana's rich food culture while meeting the expectations of the world's most discerning palates.",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Kwame Osei",
    role: "Director of Rooms",
    bio: "Kwame ensures every stay is seamless, overseeing the full guest journey from first arrival to fond farewell with meticulous attention to every detail.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Abena Mensah",
    role: "Head of Concierge & Guest Experience",
    bio: "Abena and her team are the heartbeat of our guest experience, anticipating needs before they arise and turning every request into a lasting memory.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const TeamSection = () => {
  return (
    <Section className="bg-white md:py-24">
      <div className="mb-12 md:mb-16">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-4"
        >
          THE PEOPLE BEHIND THE EXPERIENCE
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-marcellus text-primary uppercase"
        >
          Meet Our Team
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <ImagePlaceholder
              className="w-full h-48 md:h-72 object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500"
              src={member.image}
              text={member.name}
            />
            <h3 className="font-marcellus text-base md:text-lg text-gray-900 mb-1">
              {member.name}
            </h3>
            <div className="w-5 h-[1.5px] bg-gray-300 mb-3"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">
              {member.role}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed hidden md:block">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;
