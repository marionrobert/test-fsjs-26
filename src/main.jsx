import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//on importe le composant (fonction) de react-router-dom qui permet de me mettre un environnement d'écoute des url autour du composant App et de placer (déclarer mes routes dans App.js)
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
