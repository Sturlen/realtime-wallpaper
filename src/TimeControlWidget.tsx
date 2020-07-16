/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import { SECONDS_PER_24HR } from "./timeutils";

interface TimeControlWidgetProps {
    step?: number
    current?: number
    onTimeChange?: (time: number) => void
}

/**
 * Works in seconds per day
 */
export const TimeControlWidget: React.FC<TimeControlWidgetProps> = ({ step = 1, current = 0, onTimeChange}) => {
    return <footer className="time-control">
    <h3>Time</h3>
    <input type="range" step={step} min={0} max={SECONDS_PER_24HR - 1} 
    value={current} 
    onChange={(e): void => {
        onTimeChange?.(e.target.valueAsNumber)
        }}/>
    <h3>{moment.unix(current).utc().format("LTS")}</h3>
  </footer>
}