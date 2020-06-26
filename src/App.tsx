import React from "react"

import "./App.css"

function App(): JSX.Element {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Realtime wallpaer Demo</h1>
        <p>Show live sun progress</p>
        <ul className="static-info">
          <ul className="info-block">
            <h2>Location</h2>
            <p>Lat: </p><input type="number"></input>
            <br/>
            <p>Lon: </p><input type="number"></input>
          </ul>
          <ul className="info-block">
            <h2>Date</h2>
            <p>Dawn at 00:00</p><input type="date"></input>
            <br/>
            <p>Dusk at 00:00</p>
          </ul>
          <ul className="info-block">
            <h2>Sun times</h2>
            <p>Dawn at 00:00</p>
            <br/>
            <p>Dusk at 00:00</p>
          </ul>
        </ul>
        
        
        
        <ul className="info-block">
          <li><p>Sun altitude:</p><code>XX</code></li>
          <li><p>Sun azimuth:</p><code>XX</code></li>
        </ul>
        <div className="time-control">
          <h3>Time</h3>
          <input type="range" step={1} min={0} max={86400}/>
          <h3>00:00:00</h3>
        </div>        
      </header>
    </div>
  )
}

export default App
