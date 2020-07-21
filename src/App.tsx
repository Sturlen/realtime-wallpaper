import React, { useState } from "react"
import "./App.css"
import LocationWidget from "./components/LocationWidget"
import DateInputWidget from "./components/DateInputWidget"
import { TimeControlWidget } from "./components/TimeControlWidget"
import { SunTimesWidget } from "./components/SunTimesWidget"
import SunPositionWidget from "./components/CalculatedSunPosition"
import SunColorWidget from "./components/CalculatedColorWidget"
import TimeOfDay from "./lib/TimeOfDay"

function App(): JSX.Element {
  const [coords, setCoords] = useState({ lat: 59.9, long: 10.7 })
  const [current_date, setCurrentDate] = useState(new Date())
  const [display_time, setDisplayTime] = useState(new TimeOfDay(0))
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
          <DateInputWidget
            display_date={current_date}
            onNewDate={(date): void => setCurrentDate(date)}
          />
        </ul>
        <ul className="static-info">
          <SunTimesWidget date={current_date} location={coords} />
          <SunPositionWidget
            date={current_date}
            time={display_time}
            location={coords}
          />
          <SunColorWidget
            date={current_date}
            time={display_time}
            location={coords}
          />
        </ul>
      </main>

      <TimeControlWidget
        current={display_time}
        onTimeChange={(time): void => setDisplayTime(time)}
      />
    </div>
  )
}

export default App
