import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Aquí le avisamos que inyecte todo adentro de nuestro hermoso <main id="root-app">
createRoot(document.getElementById('root-app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)