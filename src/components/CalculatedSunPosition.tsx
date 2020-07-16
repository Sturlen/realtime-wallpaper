import React from "react"
import SunPositionWidget from "./SunPositionWidget"
import Moment from "moment"
import { LatLong } from "./LocationWidget"
import { SunPosition } from "../SunPosition"
import { momentFromTimeOfDay } from "../timeutils"

interface CalculatedSunPositionProps {
  location?: LatLong
  date?: Date
  time?: number
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
  time = 0,
}: CalculatedSunPositionProps): JSX.Element {
  const datetime = momentFromTimeOfDay(time, Moment(date))
  const { altitude, azimuth } = SunPosition.fromSunCalc(
    datetime.toDate(),
    location
  )

  return (
    <SunPositionWidget sun_alitude_deg={altitude} sun_azimuth_deg={azimuth} />
  )
}
