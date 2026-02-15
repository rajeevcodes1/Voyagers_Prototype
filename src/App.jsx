import React, { useState } from 'react'
import './App.css'
import { Sparkles, Briefcase, Heart, Star, ArrowRight, CheckCircle, Loader2, LogIn, MapPin, Calendar, Users } from 'lucide-react'

const VENDORS = [
  { id:1, name:"Eternal Vows", rating:4.9, type:'WEDDING', img:"https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac" },
  { id:2, name:"Royal Blossom Decor", rating:4.8, type:'WEDDING', img:"https://images.unsplash.com/photo-1522156373667-4c7234bbd804" },
  { id:3, name:"Dream Palace Venues", rating:4.7, type:'WEDDING', img:"https://images.unsplash.com/photo-1504805572947-34fad45aed93" },
  { id:4, name:"Luxury Moments", rating:4.9, type:'WEDDING', img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed" },

  { id:5, name:"Grandeur MICE", rating:4.9, type:'MICE', img:"https://images.unsplash.com/photo-1511578314322-379afb476865" },
  { id:6, name:"Corporate Connect", rating:4.8, type:'MICE', img:"https://images.unsplash.com/photo-1503428593586-e225b39bddfe" },
  { id:7, name:"Elite Conference Hub", rating:4.7, type:'MICE', img:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678" },
  { id:8, name:"Summit Planners", rating:4.8, type:'MICE', img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df" }
]

const ITINERARY = {
  WEDDING: [
    "Welcome brunch & guest arrivals",
    "Traditional ceremonies & decor setup",
    "Sunset wedding rituals",
    "Grand reception with live entertainment"
  ],
  MICE: [
    "Registration & networking breakfast",
    "Keynote sessions & workshops",
    "Lunch with exhibitors",
    "Closing ceremony & business mixer"
  ]
}

export default function App() {
  const [step, setStep] = useState('login')
  const [eventType, setEventType] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')
  const [selectedVendors, setSelectedVendors] = useState([])

  const toggleVendor = id => {
    setSelectedVendors(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    )
  }

  return (
    <div className="container">

      <div className="header">
        <Sparkles size={22}/> TBO Smart Event Planner
      </div>

      {/* LOGIN */}
      {step === 'login' && (
        <div className="card">
          <LogIn size={46} color="#f43f5e"/>
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Access your event dashboard</p>
          <input placeholder="Email address" />
          <input placeholder="Password" type="password" />
          <button className="btn-primary" onClick={() => setStep('type')}>
            Login Securely
          </button>
        </div>
      )}

      {/* EVENT TYPE */}
      {step === 'type' && (
        <div className="card">
          <h2 className="title">What are you planning?</h2>
          <div className="grid-2">
            <div className="selection-card" onClick={() => { setEventType('WEDDING'); setStep('details') }}>
              <Heart size={42} color="#f43f5e"/>
              <h3>Destination Wedding</h3>
              <p className="subtitle">Luxury celebrations worldwide</p>
            </div>

            <div className="selection-card" onClick={() => { setEventType('MICE'); setStep('details') }}>
              <Briefcase size={42} color="#38bdf8"/>
              <h3>MICE & Corporate Events</h3>
              <p className="subtitle">Meetings, expos & conferences</p>
            </div>
          </div>
        </div>
      )}

      {/* DETAILS */}
      {step === 'details' && (
        <div className="card">
          <h2 className="title">Event Details</h2>
          <p className="subtitle">Help us personalise your experience</p>

          <input placeholder="Event location" value={location} onChange={e => setLocation(e.target.value)} />
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />

          <select value={guests} onChange={e => setGuests(e.target.value)}>
            <option>50 – 100 Guests</option>
            <option>100 – 300 Guests</option>
            <option>300 – 500 Guests</option>
            <option>500+ Guests</option>
          </select>

          <button className="btn-primary" onClick={() => setStep('vendors')}>
            Find Vendors <ArrowRight size={18}/>
          </button>
        </div>
      )}

      {/* VENDORS */}
      {step === 'vendors' && (
        <div style={{width:'100%',maxWidth:1100}}>
          <h2 className="title">Top Rated Vendors</h2>
          <p className="subtitle">Selected for quality & reliability</p>

          <div className="grid-3">
            {VENDORS.filter(v => v.type === eventType).map(v => (
              <div
                key={v.id}
                className={`vendor-card ${selectedVendors.includes(v.id) ? 'selected' : ''}`}
                onClick={() => toggleVendor(v.id)}
              >
                <img 
                  src={v.img} 
                  alt={v.name}
                  style={{width:'100%',height:150,objectFit:'cover',borderRadius:12,marginBottom:12}}
                />
                <h3>{v.name}</h3>
                <div style={{color:'#f59e0b'}}><Star size={14}/> {v.rating}</div>
              </div>
            ))}
          </div>

          <div style={{textAlign:'center',marginTop:40}}>
            <button 
              className="btn-primary" 
              disabled={!selectedVendors.length}
              onClick={() => setStep('itinerary')}
            >
              Build Event Itinerary
            </button>
          </div>
        </div>
      )}

      {/* ITINERARY */}
      {step === 'itinerary' && (
        <div className="card">
          <h2 className="title">Your Smart Event Itinerary</h2>
          <p className="subtitle">Optimised for guest flow & logistics</p>

          {ITINERARY[eventType].map((item, i) => (
            <div key={i} style={{
              background:'#0f172a',
              padding:14,
              borderRadius:12,
              marginBottom:12,
              borderLeft:'4px solid #f43f5e'
            }}>
              {item}
            </div>
          ))}

          <button className="btn-primary" onClick={() => setStep('dashboard')}>
            Send Vendor Requests
          </button>
        </div>
      )}

      {/* FINAL */}
      {step === 'dashboard' && (
        <div className="card">
          <Loader2 className="animate-spin" size={48} color="#a855f7"/>
          <h2 className="title">Requests in Progress</h2>
          <p className="subtitle">
            {selectedVendors.length} vendors are preparing quotes for {location}
          </p>

          <div style={{marginTop:20,color:'#22c55e'}}>
            <CheckCircle size={18}/> Expected responses within 1–2 hours
          </div>
        </div>
      )}

    </div>
  )
}
