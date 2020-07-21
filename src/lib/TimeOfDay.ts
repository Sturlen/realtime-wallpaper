import moment from "moment"
import { clamp } from "lodash"

const MS_PER_DAY = 86400000 - 1
const MS_PER_S = 1000
const MS_PER_M = 60 * MS_PER_S
const MS_PER_H = 24 * MS_PER_M

/**
 * Time within a single day
 */
export default class TimeOfDay {
  private readonly ms: number
  /**
   *
   * @param ms_since_midnight An integer between zero
   *  and ms til just before next midnight,
   * will be clamped if outside
   */
  constructor(ms_since_midnight: number) {
    const floored_ms = Math.floor(ms_since_midnight)
    this.ms = clamp(floored_ms, 0, MS_PER_DAY)
  }

  /**
   * Return time as milliseconds since midnight
   */
  public toMS() {
    return this.ms
  }

  /**
   * Adds current time to start of given day.
   */
  public toDate(day: Date): Date {
    const midnight = moment(day).startOf("day")
    return midnight.add(this.ms, "ms").add(1, "hour").toDate()
  }

  /**
   * Get passed time within the given date.
   * @param date
   */
  static fromDate(date: Date) {
    const { hours, minutes, seconds, milliseconds } = moment(date).toObject()
    const time_since_midnight =
      hours * MS_PER_H + minutes * MS_PER_M + seconds * MS_PER_S + milliseconds
    return new TimeOfDay(time_since_midnight)
  }

  /**
   * Milliseconds per day from midnight to midnight - 1ms from the next day.
   */
  static MS_PER_DAY = MS_PER_DAY
}
