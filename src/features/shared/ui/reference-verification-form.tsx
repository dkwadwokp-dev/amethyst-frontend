import { useState, useEffect } from "react";
import { Input } from "./input";
import { Button } from "./button";

export interface ReferenceVerificationFormProps {
  initialValue?: string;
  onSubmit: (value: string) => void;
  onCancel: () => void;
  submitLabel?: string;
  cancelLabel?: string;
  className?: string; // Additional classes for the form container
  layout?: "stack" | "row";
  placeholder?: string;
}

export const ReferenceVerificationForm = ({
  initialValue = "",
  onSubmit,
  onCancel,
  submitLabel = "VERIFY",
  cancelLabel = "CANCEL",
  className = "",
  layout = "stack",
  placeholder = "e.g. PY-XXXXXXXX",
}: ReferenceVerificationFormProps) => {
  const [value, setValue] = useState(initialValue);

  // Sync internal state if initialValue changes (useful when URL param updates)
  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="mb-4">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-center font-mono uppercase tracking-widest text-sm"
          required
        />
      </div>
      <div
        className={
          layout === "row"
            ? "flex flex-col  md:flex-row gap-2  w-full"
            : "space-y-3 w-full"
        }
      >
        <Button
          type="submit"
          variant="primary"
          className={`justify-center py-4 text-xs font-bold tracking-widest bg-black text-white hover:bg-gray-800 ${
            layout === "row" ? "w-full md:flex-2" : "w-full"
          }`}
        >
          {submitLabel}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className={`justify-center py-4 text-xs font-bold tracking-widest ${
            layout === "row" ? "w-full md:flex-1 px-6" : "w-full"
          }`}
        >
          {cancelLabel}
        </Button>
      </div>
    </form>
  );
};
