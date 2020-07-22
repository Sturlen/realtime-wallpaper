import React, { useState } from "react"
import "./App.css"
import LocationWidget from "./components/LocationWidget"
import DateInputWidget from "./components/DateInputWidget"
import { TimeControlWidget } from "./components/TimeControlWidget"
import { SunTimesWidget } from "./components/SunTimesWidget"
import SunPositionWidget from "./components/CalculatedSunPosition"
import SunColorWidget from "./components/CalculatedColorWidget"
import moment, { Moment } from "moment"
import { setTime } from "./lib/DateUtil"

function App(): JSX.Element {
  const [coords, setCoords] = useState({ lat: 59.9, long: 10.7 })

  const [datetime, setDatetime] = useState(new Date())
  const time = moment(datetime)
  const date = moment(datetime).startOf("day")

  const updateTime = (new_time: Moment) => {
    const new_datetime = setTime(date, new_time)
    setDatetime(new_datetime.toDate())
  }

  const updateDate = (new_date: Moment) => {
    setDatetime(setTime(new_date, time).toDate())
  }

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
            display_date={date}
            onNewDate={(date): void => updateDate(date)}
          />
        </ul>
        <ul className="static-info">
          <SunTimesWidget date={date} location={coords} />
          <SunPositionWidget time={time} location={coords} />
          <SunColorWidget time={time} location={coords} />
        </ul>
      </main>

      <TimeControlWidget
        date={date}
        time={time}
        onTimeChange={(time): void => updateTime(time)}
      />
    </div>
  )
}

export default App
