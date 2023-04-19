import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Footer from './Components/Footer/Footer'
import Formula from './Components/Formulario/Formu'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Formula/>
    <Footer/>
    <App />
  </React.StrictMode>,
)
