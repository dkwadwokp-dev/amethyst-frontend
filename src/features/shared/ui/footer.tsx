import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Logo from "./logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2E33] text-gray-300 md:pt-16 py-8 px-4 lg:px-12 font-manrope">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        <div className="col-span-2 lg:col-span-2">
          <div className="mb-8">
            <Logo variant="light" />
          </div>
          <div className="space-y-6">
            <p className="text-sm leading-relaxed max-w-xl text-gray-400 md:w-9/10">
              Providing unparalleled luxury and warm hospitality in the heart of
              East Legon, Accra. Amethyst seamlessly blends modern
              sophistication with rich Afrocentric culture, creating an oasis of
              tranquility for global travelers. Whether you're visiting for a
              high-stakes business meeting or a relaxing weekend getaway,
              experience boundless comfort in our meticulously designed premium
              suites.
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4 text-xs text-gray-400">
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-primary font-bold" : "hover:text-white"}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-primary font-bold" : "hover:text-white"}`
                }
              >
                Rooms
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dishes"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-primary font-bold" : "hover:text-white"}`
                }
              >
                Dining
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/check-booking"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-primary font-bold" : "hover:text-white"}`
                }
              >
                Check Booking
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">
            Support
          </h4>
          <ul className="space-y-4 text-xs text-gray-400">
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-primary font-bold" : "hover:text-white"}`
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-primary font-bold" : "hover:text-white"}`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">
            Socials
          </h4>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Youtube size={16} />
            </a>
          </div>

          <div className="md:hidden py-6 space-y-3">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
                RESERVATIONS
              </span>
              <p className="text-sm text-gray-400 font-manrope">
                +233 (0) 302 123 4567 • reservations@amethysthotel.com
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
                LOCATION
              </span>
              <p className="text-sm text-gray-400 font-manrope">
                12 J.J. Rawlings St, East Legon, Accra, Ghana
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700 text-[10px] tracking-widest text-gray-500 uppercase font-bold">
        <p>© {currentYear} DEVELOPED BY WEB 36</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 hover:text-white transition-colors"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
