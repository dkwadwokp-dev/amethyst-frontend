import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2A2E33] text-gray-300 pt-16 pb-8 px-6 lg:px-12 font-manrope">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 text-[10px] font-bold">LOGO</div>
            <span className="font-bold text-lg tracking-widest text-white">AH HOTEL</span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm text-gray-400">
            Providing unparalleled hospitality in the heart of East Legon, Accra. Experience comfort, culture, and convenience.
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">Quick Links</h4>
          <ul className="space-y-4 text-xs text-gray-400">
            <li><NavLink to="/about-us" className={({ isActive }) => `transition-colors ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}>About Us</NavLink></li>
            <li><NavLink to="/rooms" className={({ isActive }) => `transition-colors ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}>Rooms</NavLink></li>
            <li><NavLink to="/dishes" className={({ isActive }) => `transition-colors ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}>Dining</NavLink></li>
            <li><NavLink to="/check-booking" className={({ isActive }) => `transition-colors ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}>Check Booking</NavLink></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">Support</h4>
          <ul className="space-y-4 text-xs text-gray-400">
            <li><NavLink to="/faq" className={({ isActive }) => `transition-colors ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}>FAQ</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `transition-colors ${isActive ? 'text-white font-bold' : 'hover:text-white'}`}>Contact Us</NavLink></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-6">Socials</h4>
          <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
            </ul>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700 text-[10px] tracking-widest text-gray-500 uppercase font-bold">
        <p>© {currentYear} DEVELOPED BY NERDS OF GHANA</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mt-4 md:mt-0 hover:text-white transition-colors">
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
