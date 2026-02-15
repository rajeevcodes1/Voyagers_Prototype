import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

export default function DetailsForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({ loc: '', date: '', guests: '50-100', custom: 'Standard' });

  return (
    <div className="flex justify-center items-center min-h-[80vh] animate-enter px-4">
      <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-2xl">
        <span className="text-xs font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full uppercase">Step 2: Details</span>
        <h2 className="text-3xl font-bold mt-4 mb-2">Tell us more</h2>
        <p className="text-slate-500 mb-8">Planning for: <strong>{type}</strong></p>

        <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-2"><MapPin size={16}/> Location</label>
              <input required type="text" className="w-full p-3 rounded-xl border bg-slate-50" placeholder="e.g. Udaipur"
                onChange={e => setFormData({...formData, loc: e.target.value})} />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-bold mb-2"><Calendar size={16}/> Date</label>
              <input required type="date" className="w-full p-3 rounded-xl border bg-slate-50"
                onChange={e => setFormData({...formData, date: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold mb-2"><Users size={16}/> Guest Count</label>
            <select className="w-full p-3 rounded-xl border bg-slate-50" onChange={e => setFormData({...formData, guests: e.target.value})}>
              <option>50 - 100 Guests</option>
              <option>100 - 300 Guests</option>
              <option>300 - 500 Guests</option>
              <option>500+ Guests</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Customization Level</label>
            <div className="grid grid-cols-3 gap-4">
              {['Standard', 'Premium', 'Luxury'].map(level => (
                <button key={level} type="button" onClick={() => setFormData({...formData, custom: level})}
                  className={`py-3 rounded-xl text-sm font-bold border transition-all ${formData.custom === level ? 'bg-rose-500 text-white border-rose-500' : 'bg-white text-slate-500 hover:border-rose-300'}`}>
                  {level}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-slate-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 mt-4 hover:bg-slate-900 transition-colors">
            Find Vendors <ArrowRight size={20}/>
          </button>
        </form>
      </div>
    </div>
  );
}