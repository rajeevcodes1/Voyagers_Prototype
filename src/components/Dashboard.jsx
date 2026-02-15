import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Dashboard({ count }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-enter px-4 text-center">
      <div className="bg-white/60 backdrop-blur-xl p-12 rounded-[2rem] shadow-2xl max-w-2xl border border-white">
        <Loader2 className="w-16 h-16 text-rose-500 animate-spin mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Connecting with Vendors...</h2>
        <p className="text-slate-500 text-lg mb-8">
          We have sent your requirements to <strong>{count} vendors</strong>. 
          The TBO algorithm is aggregating itineraries and budgets.
        </p>
        
        <div className="bg-slate-50 border border-dashed border-slate-300 p-6 rounded-2xl">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Estimated Wait Time</p>
          <p className="text-3xl font-bold text-slate-800">~ 2 Hours</p>
        </div>
      </div>
    </div>
  );
}