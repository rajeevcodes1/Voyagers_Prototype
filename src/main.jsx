import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css' // <--- Ensure CSS is imported here too

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)