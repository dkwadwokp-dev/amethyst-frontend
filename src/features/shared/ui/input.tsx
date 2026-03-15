import React, { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  id,
  ...props
}) => {
  const inputId = id || props.name || Math.random().toString(36).substr(2, 9);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full p-4 bg-gray-50 border transition-all duration-200 outline-none font-manrope text-sm
          ${
            error
              ? "border-red-500 focus:border-red-500 text-red-900 placeholder-red-300"
              : "border-gray-200 hover:border-gray-300 focus:border-gray-900 text-gray-900"
          } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-[10px] text-red-500 font-bold uppercase tracking-wide animate-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};
