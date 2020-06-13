import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import SunCalc from "suncalc"

const date = new Date(Date.now())

const lat = 58.946047

const long = 5.694283

const testlat = 71.0598

const testlong = 25.75195

const times = SunCalc.getTimes(date, testlat, testlong)

function App(): JSX.Element {
  const [progress, setProgress] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Sunrise: ${times.sunrise.toLocaleTimeString("no-nb", {
          hour12: false,
        })}`}</p>
        <p>{`Sunset: ${times.sunset.toLocaleTimeString("no-nb", {
          hour12: false,
        })}`}</p>
        <p>
          {"pos " +
            SunCalc.getPosition(new Date(Date.now()), 58.946047, 5.694283)
              .altitude}
        </p>
        <p>{"progress " + progress}</p>
        <input
          type="range"
          min="0"
          max="1"
          defaultValue="0"
          step={0.0000000000000000000000000001}
          onChange={(e): void => setProgress(Number.parseFloat(e.target.value))}
        ></input>
      </header>
    </div>
  )
}

export default App
