import React, { useState } from 'react'
import './App.css'
import { Sparkles, Briefcase, Heart, Star, Loader2, CheckCircle, LogIn, Send, ArrowRight } from 'lucide-react'

const IMAGE_POOL = [
  "1519741497674-611481863552",
  "1505373877841-8d25f7d46678",
  "1511578314322-379afb476865",
  "1523906834658-6e24ef2386f9",
  "1503428593586-e225b39bddfe",
  "1519225421980-715cb0215aed",
  "1504805572947-34fad45aed93",
  "1529634806980-85c3dd6d34ac",
  "1497366216548-37526070297c",
  "1551836022-d5d88e9218df"
]

const VENDORS = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Premium Vendor ${i + 1}`,
  rating: (4.6 + Math.random() * 0.4).toFixed(1),
  type: i < 10 ? 'WEDDING' : 'MICE',
  img: `https://images.unsplash.com/photo-${IMAGE_POOL[i % IMAGE_POOL.length]}?auto=format&fit=crop&w=600&q=80`
}))

const STEPS = ['home','login','type','details','vendors','chat','done']

export default function App() {
  const [step, setStep] = useState(0)
  const [eventType, setEventType] = useState('')
  const [venue, setVenue] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('100 - 300')
  const [budget, setBudget] = useState(200000)
  const [selectedVendors, setSelectedVendors] = useState([])

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1))

  const toggleVendor = id =>
    setSelectedVendors(v =>
      v.includes(id) ? v.filter(x => x !== id) : [...v, id]
    )

  return (
    <div className="container">

      <div className="header">
        <Sparkles size={22}/> TBO Smart Event Planner
      </div>

      {/* HOME PAGE */}
      {STEPS[step] === 'home' && (
        <div className="home animate">
          <h1>Simplifying Premium Group Experiences</h1>
          <p>
            From complex corporate MICE events to dreamy destination weddings and large group travel —
            we connect you instantly with trusted vendors, smart itineraries, and real-time planning.
          </p>

          <div className="home-features">
            <span>✈️ Group Travel Made Easy</span>
            <span>🏢 Corporate & MICE Events</span>
            <span>💍 Destination Weddings</span>
            <span>🤝 Verified Premium Vendors</span>
            <span>📊 Smart Budget Planning</span>
          </div>

          <button className="btn-primary hero-btn" onClick={next}>
            Start Planning <ArrowRight size={18}/>
          </button>
        </div>
      )}

      {/* PROGRESS AFTER HOME */}
      {step > 1 && (
        <div className="progress-wrap">
          <div
            className="progress"
            style={{ width: `${((step-1) / (STEPS.length - 2)) * 100}%` }}
          />
        </div>
      )}

      <div className="step-wrapper">

        {STEPS[step] === 'login' && (
          <div className="card animate">
            <LogIn size={42}/>
            <h2>Welcome Back</h2>
            <input placeholder="Email"/>
            <input placeholder="Password" type="password"/>
            <button className="btn-primary" onClick={next}>Login</button>
          </div>
        )}

        {STEPS[step] === 'type' && (
          <div className="card animate">
            <h2>Select Event Type</h2>
            <div className="grid-2">
              <div className="selection-card" onClick={()=>{setEventType('WEDDING');next()}}>
                <Heart size={40}/> Destination Wedding
              </div>
              <div className="selection-card" onClick={()=>{setEventType('MICE');next()}}>
                <Briefcase size={40}/> Corporate / MICE
              </div>
            </div>
          </div>
        )}

        {STEPS[step] === 'details' && (
          <div className="card animate">
            <h2>Event Details</h2>
            <input placeholder="Venue / City" value={venue} onChange={e=>setVenue(e.target.value)}/>
            <input type="date" value={date} onChange={e=>setDate(e.target.value)}/>
            <select value={guests} onChange={e=>setGuests(e.target.value)}>
              <option>50 – 100 Guests</option>
              <option>100 – 300 Guests</option>
              <option>300 – 500 Guests</option>
              <option>500+ Guests</option>
            </select>

            <div className="budget">
              Budget ₹{budget.toLocaleString()}
              <input type="range" min="50000" max="1000000" value={budget}
                     onChange={e=>setBudget(+e.target.value)} />
            </div>

            <button className="btn-primary" onClick={next}>Find Vendors</button>
          </div>
        )}

        {STEPS[step] === 'vendors' && (
          <div className="vendors-wrap animate">
            <h2>Premium Vendors</h2>

            <div className="grid-3">
              {VENDORS.filter(v=>v.type===eventType).map(v=>(
                <div
                  key={v.id}
                  className={`vendor-card ${selectedVendors.includes(v.id)?'selected':''}`}
                  onClick={()=>toggleVendor(v.id)}
                >
                  <img src={v.img} alt={v.name}/>
                  <h3>{v.name}</h3>
                  ⭐ {v.rating}
                </div>
              ))}
            </div>

            <button className="btn-primary" disabled={!selectedVendors.length} onClick={next}>
              Chat with Vendors
            </button>
          </div>
        )}

        {STEPS[step] === 'chat' && (
          <div className="card animate chat">
            <div className="msg vendor">We can plan something amazing in {venue}!</div>
            <div className="msg user">Please share packages.</div>
            <div className="chat-input">
              <input placeholder="Type message"/>
              <Send size={18}/>
            </div>
            <button className="btn-primary" onClick={next}>Confirm</button>
          </div>
        )}

        {STEPS[step] === 'done' && (
          <div className="card animate">
            <Loader2 className="spin"/>
            <CheckCircle/>
            <p>Requests sent successfully!</p>
          </div>
        )}

      </div>
    </div>
  )
}
