import React, { useState } from 'react';
import './App.css'; // <--- IMPORTING THE CSS FILE
import { Sparkles, Briefcase, Heart, MapPin, Calendar, Users, Star, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

const VENDORS = [
  { id: 1, name: "Eternal Vows", rating: 4.9, type: 'WEDDING' },
  { id: 2, name: "Grandeur MICE", rating: 4.8, type: 'MICE' },
  { id: 3, name: "Rose Decor", rating: 4.7, type: 'WEDDING' },
  { id: 4, name: "Corporate Connect", rating: 4.9, type: 'MICE' },
  { id: 5, name: "Dreamy Days", rating: 4.6, type: 'WEDDING' },
  { id: 6, name: "Elite Hosts", rating: 4.8, type: 'MICE' },
];

export default function App() {
  const [step, setStep] = useState('login');
  const [role, setRole] = useState('customer');
  const [eventType, setEventType] = useState('');
  const [selectedVendors, setSelectedVendors] = useState([]);

  // --- HANDLERS ---
  const handleLogin = (e) => { e.preventDefault(); setStep('type'); };
  const handleType = (type) => { setEventType(type); setStep('details'); };
  const handleDetails = (e) => { e.preventDefault(); setStep('vendors'); };
  
  const toggleVendor = (id) => {
    if (selectedVendors.includes(id)) setSelectedVendors(prev => prev.filter(v => v !== id));
    else if (selectedVendors.length < 10) setSelectedVendors(prev => [...prev, id]);
  };

  return (
    <div className="container">
      <div className="header"><Sparkles size={24} style={{display:'inline', marginRight:8}}/> TBO</div>

      {/* LOGIN STEP */}
      {step === 'login' && (
        <div className="card">
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Login to your dashboard</p>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button className="btn-primary">Sign In</button>
          </form>
        </div>
      )}

      {/* TYPE SELECTION */}
      {step === 'type' && (
        <>
          <h1 className="title">What are you planning?</h1>
          <div className="grid-2">
            <div className="selection-card" onClick={() => handleType('MICE')}>
              <Briefcase size={40} color="#3b82f6" style={{marginBottom:15}}/>
              <h3>MICE Event</h3>
              <p className="subtitle" style={{marginBottom:0}}>Corporate meetings & expos.</p>
            </div>
            <div className="selection-card" onClick={() => handleType('WEDDING')}>
              <Heart size={40} color="#f43f5e" style={{marginBottom:15}}/>
              <h3>Destination Wedding</h3>
              <p className="subtitle" style={{marginBottom:0}}>Curated venues & decor.</p>
            </div>
          </div>
        </>
      )}

      {/* DETAILS FORM */}
      {step === 'details' && (
        <div className="card">
          <h2 className="title">Event Details</h2>
          <p className="subtitle">Planning for {eventType}</p>
          <form onSubmit={handleDetails}>
            <input type="text" placeholder="Location (e.g. Dubai)" required />
            <input type="date" required />
            <select>
              <option>50 - 100 Guests</option>
              <option>100 - 300 Guests</option>
              <option>500+ Guests</option>
            </select>
            <button className="btn-primary">Find Vendors <ArrowRight size={18} style={{marginLeft:8}}/></button>
          </form>
        </div>
      )}

      {/* VENDOR LIST */}
      {step === 'vendors' && (
        <div style={{width: '100%', maxWidth: 1000}}>
          <h2 className="title">Select Vendors ({selectedVendors.length}/10)</h2>
          <div className="grid-3">
            {VENDORS.filter(v => v.type === eventType).map(v => (
              <div key={v.id} onClick={() => toggleVendor(v.id)} 
                   className={`vendor-card ${selectedVendors.includes(v.id) ? 'selected' : ''}`}>
                <div style={{height: 100, background: '#f1f5f9', borderRadius: 10, marginBottom: 15}}></div>
                <h3 style={{fontWeight:'bold'}}>{v.name}</h3>
                <div style={{color:'#f59e0b', marginTop:5}}>★ {v.rating}</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop: 40}}>
             <button className="btn-primary" style={{width: 'auto', padding: '15px 50px'}} onClick={() => setStep('dashboard')}>
               Request Quotes
             </button>
          </div>
        </div>
      )}

      {/* DASHBOARD */}
      {step === 'dashboard' && (
        <div className="card">
          <Loader2 className="animate-spin" size={48} color="#f43f5e" style={{margin:'0 auto 20px'}}/>
          <h2 className="title">Connecting...</h2>
          <p className="subtitle">We sent your request to {selectedVendors.length} vendors.</p>
          <div style={{background: '#f8fafc', padding: 20, borderRadius: 10, border: '1px dashed #cbd5e1'}}>
            <strong>ESTIMATED WAIT TIME:</strong>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#334155'}}>~ 2 Hours</div>
          </div>
        </div>
      )}
    </div>
  );
}