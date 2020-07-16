import SunCalc from "suncalc"
import { LatLong } from "./components/LocationWidget"

export class SunPosition {
  constructor(readonly altitude: number, readonly azimuth: number) {
    this.altitude = altitude
    this.azimuth = azimuth
  }

  static fromSunCalc(datetime: Date, location: LatLong) {
    const { lat, long } = location
    const { altitude, azimuth } = SunCalc.getPosition(datetime, lat, long)
    return new SunPosition(
      (altitude * 180) / Math.PI,
      (azimuth * 180) / Math.PI
    )
  }
}
