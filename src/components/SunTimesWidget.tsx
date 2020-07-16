/* eslint-disable react/prop-types */
import React from "react"
import moment from "moment"
import SunCalc from "suncalc"
import { LatLong } from "./LocationWidget"

interface SunTimesPropsWidgetProps {
  date?: Date
  location?: LatLong
}

export const SunTimesWidget: React.FC<SunTimesPropsWidgetProps> = ({
  date = new Date(),
  location = { lat: 0, long: 0 },
}) => {
  const times = SunCalc.getTimes(date, location.lat, location.long)
  const dawn = times.dawn
  const dusk = times.dusk
  return (
    <div className="info-block">
      <h3>Sun times</h3>
      <p>Dawn at </p>
      <code>{moment(dawn).utc().format("HH:mm:ss")}</code>
      <br />
      <p>Dusk at </p>
      <code>{moment(dusk).utc().format("HH:mm:ss")}</code>
    </div>
  )
}
