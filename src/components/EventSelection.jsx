import React from 'react';
import { Briefcase, Heart } from 'lucide-react';

export default function EventSelection({ onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-enter px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">What are you planning?</h1>
      
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <button onClick={() => onSelect('MICE')} className="group bg-white p-10 rounded-3xl border hover:border-blue-300 hover:shadow-xl transition-all text-left">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
            <Briefcase size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">MICE Event</h3>
          <p className="text-slate-400">Corporate meetings, incentives, and exhibitions.</p>
        </button>

        <button onClick={() => onSelect('WEDDING')} className="group bg-white p-10 rounded-3xl border hover:border-rose-300 hover:shadow-xl transition-all text-left">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6">
            <Heart size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Destination Wedding</h3>
          <p className="text-slate-400">Curated venues for your special day.</p>
        </button>
      </div>
    </div>
  );
}