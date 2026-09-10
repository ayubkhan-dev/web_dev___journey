import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ayub from './Ayub.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ayub/>
  </StrictMode>,
)
