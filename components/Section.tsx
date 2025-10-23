
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-brand-blue mb-4 pb-2 border-b-2 border-brand-teal/50">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
};
