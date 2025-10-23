
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-brand-blue text-white shadow-lg">
      <div className="container mx-auto px-4 md:px-8 py-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Budget AI Call Center Architecture
        </h1>
        <p className="mt-2 text-lg md:text-xl text-teal-300">
          A Complete Cost Analysis for the Telecom Industry in India
        </p>
      </div>
    </header>
  );
};
