import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// ensure public script.js executes after mount (some pages also include inline scripts)
setTimeout(()=>{
  const s = document.createElement('script')
  s.src = '/script.js'
  s.async = false
  document.body.appendChild(s)
},50)
