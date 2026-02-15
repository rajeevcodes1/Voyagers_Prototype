import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

const MOCK_DATA = [
  { id: 1, name: "Eternal Vows", rating: 4.9, type: 'WEDDING', img: "bg-rose-200" },
  { id: 2, name: "Global MICE", rating: 4.8, type: 'MICE', img: "bg-blue-200" },
  { id: 3, name: "Royal Decor", rating: 4.7, type: 'WEDDING', img: "bg-rose-100" },
  { id: 4, name: "Tech Summits", rating: 4.9, type: 'MICE', img: "bg-blue-100" },
  { id: 5, name: "Dreamy Days", rating: 4.6, type: 'WEDDING', img: "bg-rose-50" },
  { id: 6, name: "Elite Hosts", rating: 4.8, type: 'MICE', img: "bg-blue-50" },
];

export default function VendorList({ type, onFinish }) {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    if (selected.includes(id)) setSelected(selected.filter(i => i !== id));
    else if (selected.length < 10) setSelected([...selected, id]);
  };

  const vendors = MOCK_DATA.filter(v => v.type === type);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 animate-enter pb-32">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold">Recommended Vendors</h2>
          <p className="text-slate-500">Select up to 10 vendors to get quotes.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-full font-bold shadow-sm border">
          Selected: <span className="text-rose-500">{selected.length}</span>/10
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {vendors.map(v => (
          <div key={v.id} onClick={() => toggle(v.id)}
            className={`relative p-4 bg-white rounded-2xl cursor-pointer border-2 transition-all ${selected.includes(v.id) ? 'border-rose-500 shadow-xl -translate-y-1' : 'border-transparent hover:shadow-md'}`}>
            <div className={`h-40 ${v.img} rounded-xl mb-4 w-full`}></div>
            <h3 className="font-bold text-lg">{v.name}</h3>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-sm mt-1">
              <Star size={14} fill="currentColor" /> {v.rating}
            </div>
            {selected.includes(v.id) && <CheckCircle className="absolute top-4 right-4 text-rose-500 bg-white rounded-full" />}
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 left-0 right-0 flex justify-center pointer-events-none">
        <button onClick={() => onFinish(selected)} disabled={selected.length === 0}
          className="pointer-events-auto bg-rose-600 text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all">
          Request Quotes
        </button>
      </div>
    </div>
  );
}