import React, { useMemo } from "react"
import Color from "color"
import SunCalc from "suncalc"
import { LatLong } from "./LocationWidget"
import ColorTestWidget from "./ColorTestWidget"
import { isValidDate } from "../lib/DateUtil"
import { ColorTrack } from "@sturlen/timeline"
import TrackKey from "@sturlen/timeline/dist/TrackKey"
import moment from "moment"
import TimeOfDay from "../lib/TimeOfDay"

export interface SunTimes {
  readonly dawn: Date
  readonly dusk: Date
  readonly goldenHour: Date
  readonly goldenHourEnd: Date
  readonly nadir: Date
  readonly nauticalDawn: Date
  readonly nauticalDusk: Date
  readonly night: Date
  readonly nightEnd: Date
  readonly solarNoon: Date
  readonly sunrise: Date
  readonly sunriseEnd: Date
  readonly sunset: Date
  readonly sunsetStart: Date
}

interface SunPositionColors {
  readonly day: Color
  readonly night: Color
  readonly sunrise: Color
  readonly sunset: Color
}

interface CalculatedColorWidgetProps {
  /**
   * Which colors to use
   */
  readonly colors?: SunPositionColors

  /**
   * Observers time
   */
  readonly time: TimeOfDay

  /**
   * Date when the observer would see these colors.
   */
  readonly date: Date

  /**
   * Location of the observer
   */
  readonly location: LatLong
}

/**
 * Change color based on the time of day, based on what a hypothetical observer would see
 * - Display color "night"
 * - Start blend to "sunrise" color at the "dawn" key.
 * - Start blend to "day" color at the "sunriseEnd" key.
 * - Start blend to "sunset" color at the "sunsetStart" key.
 * - Start blend to "night" color at the "dusk" key.
 * - Finish blend at key ""
 */
export default function CalculatedColorWidget({
  date,
  time,
  location,
}: CalculatedColorWidgetProps): JSX.Element {
  const track = useMemo(() => {
    // Calculate times for all sun positions
    // TODO: move this and Date validation to its own function

    const { lat, long } = location
    const times: SunTimes = SunCalc.getTimes(date, lat, long)

    const start_time = moment(date).startOf("day").valueOf()
    const end_time = moment(date).endOf("day").valueOf()

    // Build keys
    const keys: TrackKey<Color>[] = [
      { position: start_time, value: Color("black") },
      { position: times.dawn.valueOf(), value: Color("red") },
      { position: times.sunriseEnd.valueOf(), value: Color("blue") },
      { position: times.sunset.valueOf(), value: Color("orange") },
      { position: times.sunriseEnd.valueOf(), value: Color("black") },
    ]
    // FIX: GetTimes is passing invalid dates, this messes up the blending
    console.log("time", isValidDate(times.night))

    // Create track
    return new ColorTrack(start_time, end_time, keys)
  }, [date, location])

  const datetime = time.toDate(date)
  const color = track.getValue(datetime.valueOf())

  return <ColorTestWidget color={color} />
}
