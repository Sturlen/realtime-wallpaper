import moment, { Moment } from "moment"

export type Time = Date

export const isValidDate = (d: Date | Moment) => moment(d).isValid()

/**
 * Merge a day and time into one
 * @param day Object to copy Year, Month and Date from
 * @param time Object to copy Hour, Minute, Second, millisecond and Timezone offset from
 */
export const setTime = (day: Moment, time: Moment): Moment => {
  const { years, months, date } = day.toObject()
  const datetime = time.set({
    years,
    months,
    date,
  })
  return datetime
}
