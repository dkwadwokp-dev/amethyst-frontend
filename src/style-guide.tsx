import React, { useState } from 'react';
import { 
  FaWifi, 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook,
  FaArrowRight
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Utensils, Waves, Copy, CheckCircle2, ChevronDown, Calendar as CalendarIcon, Mail, User } from 'lucide-react';

// Reusable Color Card Component
const ColorCard = ({ name, hex, varName, labelColor = 'text-white' }: { name: string, hex: string, varName: string, labelColor?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100">
      <div 
        className={`h-32 w-full flex items-end justify-between p-4 bg-${varName} relative overflow-hidden`}
        style={{ backgroundColor: hex }} // Fallback
      >
        <button 
          onClick={copyToClipboard}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
        >
          {copied ? <CheckCircle2 className={`w-4 h-4 ${labelColor}`} /> : <Copy className={`w-4 h-4 ${labelColor}`} />}
        </button>
        <span className={`font-mono font-bold tracking-wider ${labelColor}`}>
          {hex.toUpperCase()}
        </span>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-bold text-gray-900 capitalize text-lg">{name}</h3>
        <p className="text-gray-500 font-mono text-xs mt-1">var(--color-{varName})</p>
      </div>
    </div>
  );
};

// Reusable Button Display Component
const ButtonDisplay = ({ children, variant, description }: { children: React.ReactNode, variant: string, description: string }) => (
  <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="h-20 flex items-center justify-center w-full mb-4">
      {children}
    </div>
    <div className="text-center">
      <h4 className="font-bold text-gray-900">{variant}</h4>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  </div>
);

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope text-gray-800 selection:bg-primary selection:text-white pb-32">
      
      {/* Hero Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-abhaya text-2xl font-bold shadow-lg shadow-primary/30">
              R
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Design System</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#colors" className="hover:text-primary transition-colors">Colors</a>
            <a href="#typography" className="hover:text-primary transition-colors">Typography</a>
            <a href="#components" className="hover:text-primary transition-colors">Components</a>
            <a href="#icons" className="hover:text-primary transition-colors">Icons</a>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-32">
        
        {/* Foundation: Colors */}
        <section id="colors" className="scroll-mt-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Foundation</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-marcellus">Color Palette</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our color system is designed to evoke trust, modern hospitality, and elegant simplicity. 
              The rich restaurant red anchors the warm nature of the brand, while elegant accents provide a premium touch.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <ColorCard name="Primary" hex="#941B1B" varName="primary" labelColor="text-white" />
            <ColorCard name="Secondary" hex="#C2410C" varName="secondary" labelColor="text-white" />
            <ColorCard name="Accent" hex="#D9D2C2" varName="accent" labelColor="text-gray-900" />
            <ColorCard name="Dark" hex="#62412E" varName="dark" labelColor="text-white" />
            <ColorCard name="Light" hex="#FFFFFF" varName="light" labelColor="text-gray-900" />
            <ColorCard name="Black" hex="#000000" varName="black" labelColor="text-white" />
          </div>
        </section>

        {/* Foundation: Typography */}
        <section id="typography" className="scroll-mt-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Foundation</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-marcellus">Typography</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A harmonic combination of elegant serif headings and highly legible sans-serif body text ensures a premium reading experience across all devices.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Typefaces */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-8 group hover:shadow-md transition-all">
                <div className="text-6xl text-primary font-abhaya group-hover:scale-110 transition-transform">Aa</div>
                <div>
                  <h4 className="text-2xl font-semibold mb-1">Abhaya Libre</h4>
                  <p className="text-gray-500 text-sm">Primary Display / Serif</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-8 group hover:shadow-md transition-all">
                <div className="text-6xl text-gray-900 font-marcellus group-hover:scale-110 transition-transform">Aa</div>
                <div>
                  <h4 className="text-2xl font-semibold mb-1">Marcellus</h4>
                  <p className="text-gray-500 text-sm">Secondary Headings / Serif</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-8 group hover:shadow-md transition-all">
                <div className="text-6xl text-gray-700 font-manrope font-light group-hover:scale-110 transition-transform">Aa</div>
                <div>
                  <h4 className="text-2xl font-semibold mb-1">Manrope</h4>
                  <p className="text-gray-500 text-sm">Body Text / Sans-serif</p>
                </div>
              </div>
            </div>

            {/* Hierarchy */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-12">
              <div>
                <div className="flex justify-between items-baseline mb-2 border-b border-gray-100 pb-2">
                  <span className="text-sm text-gray-400 font-mono">Display 1</span>
                  <span className="text-sm text-gray-400 font-mono">Abhaya Libre / 64px</span>
                </div>
                <h1 className="text-6xl font-abhaya text-gray-900">The quick brown fox.</h1>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mb-2 border-b border-gray-100 pb-2">
                  <span className="text-sm text-gray-400 font-mono">Heading 2</span>
                  <span className="text-sm text-gray-400 font-mono">Marcellus / 48px</span>
                </div>
                <h2 className="text-5xl font-marcellus text-gray-900 uppercase">Aesthetic Design</h2>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2 border-b border-gray-100 pb-2">
                  <span className="text-sm text-gray-400 font-mono">Body Large (Bold)</span>
                  <span className="text-sm text-gray-400 font-mono">Manrope Bold / 18px</span>
                </div>
                <p className="text-lg font-bold text-gray-900">
                  We believe in creating experiences that feel native, intuitive, and effortlessly premium.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2 border-b border-gray-100 pb-2">
                  <span className="text-sm text-gray-400 font-mono">Body Regular</span>
                  <span className="text-sm text-gray-400 font-mono">Manrope Regular / 16px</span>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vulputate felis. Fusce accumsan vel erat nec vulputate. Morbi varius erat justo, et consequat ipsum rhoncus in. Proin vel congue eros.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section id="components" className="scroll-mt-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">UI Elements</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-marcellus">Components</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Interactive elements designed with subtle micro-interactions to create a fluid, engaging user experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Action Elements */}
            <div className="space-y-8">
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 border-b border-gray-200 pb-4">Actions</h4>
              
              <div className="grid grid-cols-2 gap-6">
                <ButtonDisplay variant="Primary" description="Main call to action">
                  <button className="bg-primary text-white px-8 py-3.5 rounded-[4px] font-semibold text-sm tracking-wide shadow-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                    Book Now <FaArrowRight className="w-3 h-3" />
                  </button>
                </ButtonDisplay>

                <ButtonDisplay variant="Secondary Line" description="Alternative actions">
                  <button className="bg-transparent text-gray-900 border-b-2 border-primary px-2 py-2 font-semibold text-sm tracking-wide hover:text-primary transition-colors duration-200 cursor-pointer">
                    Discover More
                  </button>
                </ButtonDisplay>

                <ButtonDisplay variant="Outline" description="Secondary choices">
                  <button className="bg-white text-gray-900 border border-gray-300 px-8 py-3.5 rounded-[4px] font-semibold text-sm tracking-wide hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 cursor-pointer">
                    View Gallery
                  </button>
                </ButtonDisplay>

                <ButtonDisplay variant="Secondary Solid" description="Muted actions">
                  <button className="bg-secondary text-white px-8 py-3.5 rounded-[4px] font-semibold text-sm tracking-wide shadow-sm hover:opacity-90 transition-colors duration-200 cursor-pointer">
                    Check Info
                  </button>
                </ButtonDisplay>
              </div>

              {/* Checkboxes */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
                <h5 className="font-bold text-gray-900 mb-6">Selection Controls</h5>
                <div className="space-y-4">
                  <label className="flex items-center gap-4 cursor-pointer group w-fit">
                    <div className="w-5 h-5 flex-shrink-0 border-2 border-gray-300 rounded-[4px] bg-white group-hover:border-primary transition-colors flex items-center justify-center"></div>
                    <span className="text-sm font-semibold text-gray-700 select-none">Subscribe to newsletter</span>
                  </label>
                  
                  <label className="flex items-center gap-4 cursor-pointer group w-fit">
                    <div className="w-5 h-5 flex-shrink-0 border-2 border-primary rounded-[4px] bg-primary flex items-center justify-center transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 select-none">I agree to the terms and conditions</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Form Elements */}
            <div className="space-y-8">
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 border-b border-gray-200 pb-4">Inputs & Forms</h4>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black tracking-widest text-gray-500 uppercase">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block pl-11 p-3.5 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black tracking-widest text-gray-500 uppercase">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      placeholder="hello@example.com" 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block pl-11 p-3.5 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black tracking-widest text-gray-500 uppercase">Reservation Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <CalendarIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary flex items-center justify-between p-3.5 pl-11 cursor-pointer hover:bg-gray-50 transition-colors">
                      <span>March 24, 2026</span>
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black tracking-widest text-gray-500 uppercase">Special Requests</label>
                  <textarea 
                    placeholder="Any dietary requirements or special occasions?" 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary block p-4 h-32 resize-none transition-all outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icons & Media */}
        <section id="icons" className="scroll-mt-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Assets</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-marcellus">Icons & Framing</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Consistent iconography and image treatments that enhance the visual narrative.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 border-b border-gray-200 pb-4 mb-8">Brand Icons</h4>
              <div className="grid grid-cols-3 gap-8 place-items-center">
                <div className="group cursor-pointer flex flex-col items-center gap-3 mt-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:shadow-lg transition-all text-gray-700">
                    <Utensils className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="group cursor-pointer flex flex-col items-center gap-3 mt-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:shadow-lg transition-all text-gray-700">
                    <Waves className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="group cursor-pointer flex flex-col items-center gap-3 mt-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:shadow-lg transition-all text-primary">
                    <FaWifi className="w-6 h-6" />
                  </div>
                </div>

                <div className="col-span-3 border-t border-gray-100 w-full my-2"></div>

                {/* Socials */}
                <FaInstagram className="w-8 h-8 text-[#E1306C] hover:scale-110 transition-transform cursor-pointer" />
                <FaLinkedin className="w-8 h-8 text-gray-700 hover:text-primary hover:scale-110 transition-transform cursor-pointer" />
                <FaFacebook className="w-8 h-8 text-gray-700 hover:text-primary hover:scale-110 transition-transform cursor-pointer" />
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer mt-4">
                  <FaXTwitter className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
              <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-2 rounded-2xl overflow-hidden">
                <div className="row-span-2 relative group overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-80 mb-1 block">Interior</span>
                    <h5 className="font-marcellus text-2xl">Dining Area</h5>
                  </div>
                </div>
                <div className="relative group overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" alt="Restaurant Food" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative group overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600" alt="Bedroom 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="relative group overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600" alt="Bedroom 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StyleGuide;
