
import React from 'react';

interface ScalabilitySliderProps {
  value: number;
  onChange: (value: number) => void;
}

const agentTiers = [5, 10, 20, 50];

export const ScalabilitySlider: React.FC<ScalabilitySliderProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor="agent-slider" className="block text-lg font-medium text-brand-blue mb-4">
        Select Number of AI Agents: <span className="font-bold text-2xl text-brand-teal">{value}</span>
      </label>
      <div className="w-full max-w-2xl px-4">
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full"></div>
          <div className="flex justify-between">
            {agentTiers.map((tier) => (
              <button
                key={tier}
                onClick={() => onChange(tier)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10
                  ${value === tier 
                    ? 'bg-brand-teal text-white scale-125 shadow-lg' 
                    : 'bg-white border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10'}`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
