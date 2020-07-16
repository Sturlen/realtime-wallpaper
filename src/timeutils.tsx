import moment, { Moment } from "moment"
export const SECONDS_PER_24HR = 60 * 60 * 24 // 86400

export const isValidDate = (d: Date) => moment(d).isValid()

export const stripTime = (datetime: Moment): Moment => {
  const zone = datetime.utcOffset()
  return datetime.hours(0).minutes(0).seconds(0).milliseconds(0).utcOffset(zone)
}

export const momentFromTimeOfDay = (
  time_of_day: number,
  day_of_month: Moment = moment()
): Moment => {
  const current_unix = stripTime(day_of_month).unix() + time_of_day
  return moment.unix(current_unix)
}

export const timeOfDayFromMoment = (datetime: Moment): number => {
  const date = stripTime(datetime)
  console.error(date)
  return date.unix() - datetime.unix()
}

export const dateFromSecondsPer24HR = (
  seconds: number,
  current_date: number = Date.now()
): number => {
  return seconds * 1000 + current_date
}
