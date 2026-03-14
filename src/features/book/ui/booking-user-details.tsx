import React from "react";

interface BookingUserDetailsProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
  };
  errors: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BookingUserDetails = ({
  formData,
  errors,
  handleChange,
}: BookingUserDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
          FIRST NAME
        </label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          className={`w-full border-b ${
            errors.firstName ? "border-primary" : "border-gray-200"
          } p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300`}
          placeholder="e.g. Jane"
        />
        {errors.firstName && (
          <p className="text-[10px] text-primary font-bold mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div>
        <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
          LAST NAME
        </label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          className={`w-full border-b ${
            errors.lastName ? "border-primary" : "border-gray-200"
          } p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300`}
          placeholder="e.g. Doe"
        />
        {errors.lastName && (
          <p className="text-[10px] text-primary font-bold mt-1">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div className="md:col-span-2 mt-4">
        <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
          EMAIL ADDRESS
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className={`w-full border-b ${
            errors.email ? "border-primary" : "border-gray-200"
          } p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300`}
          placeholder="jane.doe@example.com"
        />
        {errors.email && (
          <p className="text-[10px] text-primary font-bold mt-1">
            {errors.email.message}
          </p>
        )}
      </div>
    </div>
  );
};
