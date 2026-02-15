import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Login({ onLogin }) {
  const [role, setRole] = useState('customer');

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-enter">
      <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl w-full max-w-md border border-white">
        <div className="flex justify-center mb-6 text-rose-500">
          <Sparkles size={48} />
        </div>
        <h2 className="text-3xl font-bold text-center mb-2">Welcome to TBO</h2>
        <p className="text-center text-slate-400 mb-8">Event planning reimagined.</p>

        {/* Role Toggle */}
        <div className="flex bg-slate-100 p-1 rounded-full mb-6 relative">
          <div className={`absolute w-1/2 h-full bg-white rounded-full shadow transition-all duration-300 ${role === 'vendor' ? 'translate-x-full' : 'translate-x-0'}`} />
          <button onClick={() => setRole('customer')} className={`flex-1 py-2 z-10 text-sm font-bold relative ${role === 'customer' ? 'text-rose-500' : 'text-slate-400'}`}>Customer</button>
          <button onClick={() => setRole('vendor')} className={`flex-1 py-2 z-10 text-sm font-bold relative ${role === 'vendor' ? 'text-rose-500' : 'text-slate-400'}`}>Vendor</button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(role); }} className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white/50 border focus:border-rose-300 outline-none" required />
          <input type="password" placeholder="Password" className="w-full p-4 rounded-xl bg-white/50 border focus:border-rose-300 outline-none" required />
          <button className="w-full bg-rose-500 text-white font-bold py-4 rounded-xl hover:bg-rose-600 transition-colors shadow-lg shadow-rose-200">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}