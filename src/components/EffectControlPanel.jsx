import React from 'react';

export default function EffectControlPanel({ effects, onToggle }) {
  return (
    <div className="fixed top-24 right-4 z-50 bg-[#181828] bg-opacity-90 rounded-lg shadow-lg p-4 flex flex-col gap-3 border border-[#A259F7]/40">
      <h3 className="text-[#A259F7] font-bold text-lg mb-2">Effects</h3>
      {Object.keys(effects).map(key => (
        <label key={key} className="flex items-center gap-2 text-[#C3B1E1]">
          <input
            type="checkbox"
            checked={effects[key]}
            onChange={() => onToggle(key)}
            className="accent-[#A259F7]"
          />
          {key.replace(/([A-Z])/g, ' $1')}
        </label>
      ))}
    </div>
  );
} 