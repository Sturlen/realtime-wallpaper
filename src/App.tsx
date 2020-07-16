import React, { useState } from "react"

import "./App.css"
import LocationWidget from "./LocationWidget"
import TimeInputWidget from "./TimeInputWidget"
import { TimeControlWidget } from "./TimeControlWidget"
import { SunTimesWidget } from "./SunTimesWidget"
import SunPositionWidget from "./SunPositionWidget"

function App(): JSX.Element {
  const [coords, setCoords] = useState({ lat: 59.9, long: 10.7 })
  const [current_date, setCurrentDate] = useState(new Date())
  const [current_TOD, setCurrentTOD] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Realtime wallpaper Demo</h1>
      </header>

      <main className="content">
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
          <SunTimesWidget date={current_date} location={coords} />
        </ul>
        <SunPositionWidget />
      </main>

      <TimeControlWidget
        current={current_TOD}
        onTimeChange={(time): void => setCurrentTOD(time)}
      />
    </div>
  )
}

export default App
