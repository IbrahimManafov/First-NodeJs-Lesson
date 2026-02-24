import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleClick = () => {
    window.location.href = "main.html"
  }

  return (
    <div className="container">
      <div className="row">
        <header>
          <div className="navbar">
            <div className="navlogo">AlgoAcademy</div>
            <div className="nav_type">
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Map</a></li>
                <li><a href="#">Pages</a></li>
              </ul>
            </div>
            <div className="nav_sign">
              <button className="btn" onClick={handleClick}>Sign in</button>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default App