/* eslint-disable react/prop-types */
import React, { useMemo } from "react"
import moment, { Moment } from "moment"
import { clamp } from "lodash"

interface TimeControlWidgetProps {
  date: Moment
  step?: number
  time: Moment
  onTimeChange?: (time: Moment) => void
}

/**
 * Works in seconds per day
 */
export const TimeControlWidget: React.FC<TimeControlWidgetProps> = ({
  date,
  step = 1000,
  time,
  onTimeChange,
}) => {
  const [input_offset, min, max] = useMemo(() => {
    const input_offset = date.utcOffset()
    const min = date.startOf("day").valueOf()
    const max = date.endOf("day").valueOf()
    return [input_offset, min, max]
  }, [date])

  const clamped_time = clamp(time.valueOf(), min, max)

  return (
    <footer className="time-control">
      <h3>Time</h3>
      <input
        type="range"
        step={step}
        min={min}
        max={max}
        value={clamped_time}
        onChange={(e): void => {
          const ms = e.target.valueAsNumber
          onTimeChange?.(moment(ms).utcOffset(input_offset))
        }}
      />
      <h3>{time.format("HH:mm:ss")}</h3>
    </footer>
  )
}
