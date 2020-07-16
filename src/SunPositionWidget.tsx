import React from "react"

interface SunPositionWidgetProps {
  sun_alitude_deg?: number
  sun_azimuth_deg?: number
}

/**
 * Display sun position as text values
 */
export default function SunPositionWidget({
  sun_alitude_deg = 0,
  sun_azimuth_deg = 0,
}: SunPositionWidgetProps): JSX.Element {
  return (
    <div className="info-block">
      <h3>Sun Position</h3>
      <p>Altitude: </p>
      <code>{sun_alitude_deg}</code>
      <br />
      <p>Azimuth: </p>
      <code>{sun_azimuth_deg}</code>
    </div>
  )
}
