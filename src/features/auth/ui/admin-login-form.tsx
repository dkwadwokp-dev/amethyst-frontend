import { Package, Lock } from 'lucide-react';
import { Button } from '../../shared/ui/button';
import { Link } from 'react-router-dom';

const AdminLoginForm = () => {
  return (
    <div className="bg-white p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-sm w-full max-w-md mx-auto relative bg-white">
      
      {/* Icon */}
      <div className="w-14 h-14 bg-gray-50 border border-gray-200 border-dashed rounded-md flex items-center justify-center mx-auto mb-8">
        <Package className="w-6 h-6 text-gray-400" />
      </div>

      {/* Headings */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-marcellus text-gray-900 mb-2">ADMIN ACCESS</h2>
        <p className="text-xs text-gray-500 font-manrope">Please enter your master passcode to continue</p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
            ACCESS CODE
          </label>
          <div className="relative">
            <input 
              type="password" 
              className="w-full border border-gray-200 p-4 pl-4 pr-12 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300" 
              placeholder="••••••••" 
            />
            <Lock className="w-4 h-4 text-gray-400 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="text-[9px] text-gray-400 hover:text-gray-600 font-bold tracking-widest uppercase">
            FORGOT PASSCODE?
          </button>
        </div>

        <div className="pt-2">
          {/* We'll just link directly to bookings for the demo */}
          <Link to="/bookings" className="block w-full">
            <Button variant="primary" className="w-full bg-primary hover:bg-blue-800 text-white px-6 py-4 text-[11px] font-bold tracking-widest rounded-none border-none shadow-[0_4px_14px_0_rgba(0,33,179,0.25)] hover:shadow-[0_6px_20px_rgba(0,33,179,0.3)] transition-all">
              LOGIN TO DASHBOARD
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 pt-6 border-t border-gray-100 text-center flex flex-col gap-3">
        <Link to="/" className="text-[10px] text-gray-400 hover:text-primary font-bold tracking-widest uppercase transition-colors">
          RETURN TO HOMEPAGE
        </Link>
        <div className="text-[9px] text-gray-300 font-bold tracking-widest uppercase">
          SECURE CONNECTION
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
