/* eslint-disable react/prop-types */
import React from "react"
import moment, { Moment } from "moment"
import SunCalc from "suncalc"
import { LatLong } from "./LocationWidget"
import { isValidDate } from "../lib/DateUtil"

interface SunTimesPropsWidgetProps {
  date: Moment
  location?: LatLong
}

export const SunTimesWidget: React.FC<SunTimesPropsWidgetProps> = ({
  date,
  location = { lat: 0, long: 0 },
}) => {
  const { dawn, dusk, solarNoon } = SunCalc.getTimes(
    date.toDate(),
    location.lat,
    location.long
  )
  return (
    <div className="info-block">
      <h3>Sun times</h3>
      <SunTime label={"Dawn"} date={dawn} />
      <SunTime label={"Noon"} date={solarNoon} />
      <SunTime label={"Dusk"} date={dusk} />
    </div>
  )
}

function SunTime({ label = "Time", date = new Date() }): JSX.Element {
  const date_is_valid = isValidDate(date)
  const formatted_time = moment(date).utc().format("HH:mm:ss")

  return date_is_valid ? (
    <div>
      <p>{`${label} at `}</p>
      <code>{formatted_time}</code>
    </div>
  ) : (
    <div>
      <p>{`${label} never happens`}</p>
    </div>
  )
}
