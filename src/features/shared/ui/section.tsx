import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 lg:px-12 ${className}`}>
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};
