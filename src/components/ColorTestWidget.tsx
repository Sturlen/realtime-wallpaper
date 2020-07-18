import React from "react"
import Color from "color"

interface ColorTestWidgetProps {
  /** Color object or css color string */
  readonly color?: Color | string
  readonly label?: string
}

/**
 * Displays the given color in rectangle
 */
export default function ColorTestWidget({
  color = "white",
  label = "Color",
}: ColorTestWidgetProps): JSX.Element {
  const parsed_color = typeof color === "string" ? color : color.hex()
  return (
    <div className="info-block">
      <h3>{label}</h3>
      <svg viewBox="0 0 300 100" style={{ backgroundColor: parsed_color }}>
        <circle />
      </svg>
    </div>
  )
}
