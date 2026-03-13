import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer text-center";

  const variants = {
    primary: "bg-primary text-white shadow-md hover:bg-black",
    secondary: "bg-secondary text-white hover:opacity-90",
    outline:
      "bg-transparent border border-gray-400 text-gray-900 hover:bg-gray-100 hover:border-primary",
    ghost:
      "bg-transparent text-gray-900 border-b border-primary !py-1 !px-0 rounded-none hover:opacity-25",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
