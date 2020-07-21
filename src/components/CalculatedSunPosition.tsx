import React from "react"
import SunPositionWidget from "./SunPositionWidget"
import { LatLong } from "./LocationWidget"
import { SunPosition } from "../SunPosition"
import TimeOfDay from "../lib/TimeOfDay"

interface CalculatedSunPositionProps {
  location?: LatLong
  date?: Date
  time?: TimeOfDay
}

const default_location: LatLong = {
  lat: 0,
  long: 0,
}

/**
 * HOC which calculates the sun position from date, time and location of the obeserver.
 */
export default function CalculatedSunPosition({
  date = new Date(),
  location = default_location,
  time = new TimeOfDay(0),
}: CalculatedSunPositionProps): JSX.Element {
  const datetime = time.toDate(date)
  const { altitude, azimuth } = SunPosition.fromSunCalc(datetime, location)

  return (
    <SunPositionWidget sun_alitude_deg={altitude} sun_azimuth_deg={azimuth} />
  )
}
