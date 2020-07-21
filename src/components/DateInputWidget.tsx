import React from "react"
import moment from "moment"

interface DateInputProps {
  display_date: Date
  onNewDate?: (date: Date) => void
}

/**
 * Lets the user enter a date.
 */
export default function DateInputWidget({
  display_date,
  onNewDate,
}: DateInputProps): JSX.Element {
  const onChange = (date: Date | null): void => {
    if (date) {
      onNewDate?.(date)
    }
  }

  const convertDate = (date: Date): string => {
    return moment(date).format("YYYY-MM-DD")
  }

  return (
    <div className="info-block">
      <h3>Date</h3>
      <input
        type="date"
        value={convertDate(display_date)}
        onChange={(e): void => onChange(e.target.valueAsDate)}
      ></input>
      <br />
    </div>
  )
}
