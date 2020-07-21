/* eslint-disable react/prop-types */
import React from "react"
import moment from "moment"
import TimeOfDay from "../lib/TimeOfDay"

interface TimeControlWidgetProps {
  step?: number
  current?: TimeOfDay
  onTimeChange?: (time: TimeOfDay) => void
}

/**
 * Works in seconds per day
 */
export const TimeControlWidget: React.FC<TimeControlWidgetProps> = ({
  step = 1000,
  current = new TimeOfDay(0),
  onTimeChange,
}) => {
  return (
    <footer className="time-control">
      <h3>Time</h3>
      <input
        type="range"
        step={step}
        min={0}
        max={TimeOfDay.MS_PER_DAY}
        value={current.toMS()}
        onChange={(e): void => {
          onTimeChange?.(new TimeOfDay(e.target.valueAsNumber))
        }}
      />
      <h3>{moment(current.toMS()).utc().format("HH:mm:ss")}</h3>
    </footer>
  )
}
