import React from "react"
import SunPositionWidget from "./SunPositionWidget"
import { LatLong } from "./LocationWidget"
import { SunPosition } from "../SunPosition"
import { Moment } from "moment"

interface CalculatedSunPositionProps {
  location?: LatLong
  time: Moment
}

const default_location: LatLong = {
  lat: 0,
  long: 0,
}

/**
 * HOC which calculates the sun position from date, time and location of the obeserver.
 */
export default function CalculatedSunPosition({
  location = default_location,
  time,
}: CalculatedSunPositionProps): JSX.Element {
  const { altitude, azimuth } = SunPosition.fromSunCalc(time.toDate(), location)

  return (
    <SunPositionWidget sun_alitude_deg={altitude} sun_azimuth_deg={azimuth} />
  )
}
