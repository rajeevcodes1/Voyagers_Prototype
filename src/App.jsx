import React, { useState } from 'react'
import './App.css'
import { Sparkles, Briefcase, Heart, Star, ArrowRight, CheckCircle, Loader2, LogIn } from 'lucide-react'

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
    "Guest welcome & luxury brunch",
    "Decor setup & ceremonies",
    "Sunset wedding rituals",
    "Reception with live entertainment"
  ],
  MICE: [
    "Registration & networking",
    "Keynote sessions",
    "Lunch + expo walkthrough",
    "Closing & cocktail meet"
  ]
}

export default function App() {
  const [step, setStep] = useState('login')
  const [eventType, setEventType] = useState('')
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
          <p className="subtitle">Plan & manage premium events effortlessly</p>
          <input placeholder="Email address" />
          <input placeholder="Password" type="password" />
          <button className="btn-primary" onClick={() => setStep('type')}>
            Secure Login
          </button>
        </div>
      )}

      {/* EVENT TYPE */}
      {step === 'type' && (
        <div className="card">
          <h2 className="title">Choose Your Event</h2>
          <div className="grid-2">
            <div className="selection-card" onClick={() => { setEventType('WEDDING'); setStep('vendors') }}>
              <Heart size={42} color="#f43f5e"/>
              <h3>Destination Wedding</h3>
              <p className="subtitle">Luxury celebrations worldwide</p>
            </div>

            <div className="selection-card" onClick={() => { setEventType('MICE'); setStep('vendors') }}>
              <Briefcase size={42} color="#38bdf8"/>
              <h3>MICE & Corporate</h3>
              <p className="subtitle">Meetings & conferences</p>
            </div>
          </div>
        </div>
      )}

      {/* VENDORS */}
      {step === 'vendors' && (
        <div className="vendors-wrap">
          <h2 className="title">Top Curated Vendors</h2>
          <p className="subtitle">Trusted premium partners</p>

          <div className="grid-3">
            {VENDORS.filter(v => v.type === eventType).map(v => (
              <div
                key={v.id}
                className={`vendor-card ${selectedVendors.includes(v.id) ? 'selected' : ''}`}
                onClick={() => toggleVendor(v.id)}
              >
                <img src={v.img} alt={v.name} />
                <h3>{v.name}</h3>
                <div className="rating"><Star size={14}/> {v.rating}</div>
              </div>
            ))}
          </div>

          <div className="center-btn">
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
          <h2 className="title">Your Smart Event Plan</h2>
          <p className="subtitle">Optimized experience flow</p>

          {ITINERARY[eventType].map((item, i) => (
            <div key={i} className="itinerary-item">
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
          <Loader2 className="spin" size={48}/>
          <h2 className="title">Requests Sent</h2>
          <p className="subtitle">{selectedVendors.length} vendors preparing quotes</p>
          <div className="success">
            <CheckCircle size={18}/> Responses in 1–2 hours
          </div>
        </div>
      )}

    </div>
  )
}
