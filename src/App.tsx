import React, { useState } from "react"

import "./App.css"
import LocationWidget from "./components/LocationWidget"
import TimeInputWidget from "./components/TimeInputWidget"
import { TimeControlWidget } from "./components/TimeControlWidget"
import { SunTimesWidget } from "./components/SunTimesWidget"
import SunPositionWidget from "./components/CalculatedSunPosition"

function App(): JSX.Element {
  const [coords, setCoords] = useState({ lat: 59.9, long: 10.7 })
  const [current_date, setCurrentDate] = useState(new Date())
  const [current_TOD, setCurrentTOD] = useState(0)

  return (
    <div className="App">
      <main className="content">
        <header className="App-header">
          <h1>Realtime wallpaper Demo</h1>
        </header>
        <ul className="static-info">
          <LocationWidget
            coords={coords}
            onLatLong={(coords): void => {
              setCoords(coords)
            }}
          />
          <TimeInputWidget
            display_date={current_date}
            onNewDate={(date): void => setCurrentDate(date)}
          />
        </ul>
        <ul className="static-info">
          <SunTimesWidget date={current_date} location={coords} />
          <SunPositionWidget
            date={current_date}
            time={current_TOD}
            location={coords}
          />
        </ul>
      </main>

      <TimeControlWidget
        current={current_TOD}
        onTimeChange={(time): void => setCurrentTOD(time)}
      />
    </div>
  )
}

export default App
