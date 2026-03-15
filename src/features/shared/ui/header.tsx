import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./logo";
import { useGetLoggedInUser } from "../../auth/actions/use-get-user";

interface HeaderProps {
  isTransparent?: boolean;
}

const Header = ({ isTransparent: initialTransparent = false }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: user } = useGetLoggedInUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "HOME",
    "DINING",
    "ROOMS",
    "EVENTS",
    "ABOUT US",
    "CONTACT",
    user ? "BOOKINGS" : "BOOK",
  ];
  const getPath = (item: string) =>
    item === "HOME"
      ? "/"
      : item === "CONTACT"
        ? "/contact"
        : item === "DINING"
          ? "/dishes"
          : item === "ROOMS"
            ? "/rooms"
            : item === "EVENTS"
              ? "/events"
              : item === "ABOUT US"
                ? "/about-us"
                : item === "BOOKINGS"
                  ? "/bookings"
                  : item === "BOOK"
                    ? "/book"
                    : "#";

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isDark = initialTransparent && !isScrolled;

  return (
    <header
      className={`py-4 px-4 md:px-12 left-0 right-0 z-50 transition-all duration-300 ${
        initialTransparent ? "fixed top-0" : "sticky top-0"
      } ${isDark ? "bg-transparent" : "bg-white shadow-sm"}`}
    >
      <div className="max-w-8xl mx-auto w-full flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <Logo variant={isDark ? "light" : "dark"} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const path = getPath(item);
            return (
              <NavLink
                key={item}
                to={path}
                className={({ isActive }) =>
                  `text-[11px] font-bold tracking-widest uppercase transition-all pb-1 ${
                    isActive && path !== "#"
                      ? "text-primary border-b-[1.5px] border-primary"
                      : isDark
                        ? "text-white/70 hover:text-white"
                        : "text-gray-500 hover:text-primary"
                  }`
                }
              >
                {item}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <NavLink
            to="/check-booking"
            className={({ isActive }) =>
              `text-[10px] font-bold tracking-widest uppercase pb-0.5 transition-all border-b ${
                isDark
                  ? isActive
                    ? "text-primary border-primary border-b-2"
                    : "text-white/80 hover:text-white border-white/40 hover:border-white"
                  : isActive
                    ? "text-primary border-primary border-b-2"
                    : "text-gray-900 hover:text-primary border-gray-900 hover:border-primary"
              }`
            }
          >
            Check Booking
          </NavLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`lg:hidden z-50 p-2 focus:outline-none transition-colors ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col lg:hidden overflow-y-auto"
        >
          {/* Menu Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-between items-center py-4 px-6 border-b border-white/5"
          >
            <Link to="/" onClick={closeMenu}>
              <Logo variant="light" />
            </Link>
            <button
              className="p-2 text-white/70 hover:text-white transition-colors"
              onClick={closeMenu}
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex flex-col items-center justify-center py-12 px-6"
          >
            <nav className="flex flex-col gap-6 items-center w-full">
              {navItems.map((item, index) => {
                const path = getPath(item);
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  >
                    <NavLink
                      to={path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `text-3xl md:text-5xl font-marcellus tracking-tight transition-all duration-500 transform ${
                          isActive && path !== "#"
                            ? "text-primary"
                            : "text-white/40 hover:text-white"
                        }`
                      }
                    >
                      {item}
                    </NavLink>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-12 h-px bg-white/10 my-8"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <NavLink
                  to="/check-booking"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-sm font-manrope font-bold tracking-[0.3em] uppercase pb-2 transition-all border-b ${
                      isActive
                        ? "text-primary border-primary"
                        : "text-white hover:text-white border-transparent"
                    }`
                  }
                >
                  CHECK BOOKING
                </NavLink>
              </motion.div>
            </nav>
          </motion.div>

          {/* Social / Contact Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="p-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex gap-8">
              {["INSTAGRAM", "FACEBOOK", "LINKEDIN"].map((social, idx) => (
                <motion.a
                  key={social}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + idx * 0.05 }}
                  className="text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-primary transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase mb-2"
              >
                RESERVATIONS
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.25 }}
                className="text-white font-manrope text-sm"
              >
                +234 800 123 4567
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
