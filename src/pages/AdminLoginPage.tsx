import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import AdminLoginForm from "../features/auth/ui/admin-login-form";

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      
      {/* Short dark hero to allow form overlapping */}
      <div className="bg-[#2A2E33] pt-24 pb-48 text-center px-6">
        <h4 className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-4">
          RESTRICTED AREA
        </h4>
      </div>

      <div className="flex-grow flex items-center justify-center -mt-36 pb-24 px-4 relative z-10 w-full">
        <AdminLoginForm />
      </div>

      <Footer />
    </div>
  );
};

export default AdminLoginPage;
