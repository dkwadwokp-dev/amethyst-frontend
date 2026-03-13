import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Package, Lock } from "lucide-react";
import { Button } from "../../shared/ui/button";
import { Link } from "react-router-dom";
import { loginSchema, type LoginFormData } from "../schema/auth-schema";
import { useLoginAdmin } from "../actions/use-login-admin";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const { mutate: loginAdmin, isPending, error } = useLoginAdmin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    loginAdmin(data.passcode, {
      onSuccess: (res) => {
        localStorage.setItem("admin_token", res.token);
        navigate("/bookings");
      },
    });
  };

  return (
    <div className="bg-white p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100  w-full max-w-md mx-auto relative bg-white">
      {/* Icon */}
      <div className="w-14 h-14 bg-gray-50 border border-gray-200 border-dashed rounded-md flex items-center justify-center mx-auto mb-8">
        <Package className="w-6 h-6 text-gray-400" />
      </div>

      {/* Headings */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-marcellus text-gray-900 mb-2">
          ADMIN ACCESS
        </h2>
        <p className="text-xs text-gray-500 font-manrope">
          Please enter your master passcode to continue
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
            ACCESS CODE
          </label>
          <div className="relative">
            <input
              {...register("passcode")}
              type="password"
              className={`w-full border ${errors.passcode ? "border-primary" : "border-gray-200"} p-4 pl-4 pr-12 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300 transition-colors`}
              placeholder="••••••••"
            />
            <Lock className="w-4 h-4 text-gray-400 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" />
          </div>
          {errors.passcode && (
            <p className="text-[10px] text-primary font-bold mt-2">
              {errors.passcode.message}
            </p>
          )}
          {error && (
            <p className="text-[10px] text-primary font-bold mt-2">
              {error.message}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isPending}
            className="w-full bg-primary hover:bg-black text-white px-6 py-4 text-[11px] font-bold tracking-widest rounded-none border-none shadow-sm transition-all disabled:opacity-50"
          >
            {isPending ? "LOGGING IN..." : "LOGIN TO DASHBOARD"}
          </Button>
        </div>
      </form>

      {/* Footer Links */}
      <div className="mt-8 pt-6 border-t border-gray-100 text-center flex flex-col gap-3">
        <Link
          to="/"
          className="text-[10px] text-gray-400 hover:text-primary font-bold tracking-widest uppercase transition-colors"
        >
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
