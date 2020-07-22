import React from "react"
import moment, { Moment } from "moment"

interface DateInputProps {
  display_date: Moment
  onNewDate?: (date: Moment) => void
}

/**
 * Lets the user enter a date.
 */
export default function DateInputWidget({
  display_date,
  onNewDate,
}: DateInputProps): JSX.Element {
  const onChange = (date: Moment | null): void => {
    if (date) {
      onNewDate?.(date)
    }
  }

  const convertDate = (date: Moment): string => {
    return date.format("YYYY-MM-DD")
  }

  return (
    <div className="info-block">
      <h3>Date</h3>
      <input
        type="date"
        value={convertDate(display_date)}
        onChange={(e): void => onChange(moment(e.target.valueAsDate))}
      ></input>
      <br />
    </div>
  )
}
