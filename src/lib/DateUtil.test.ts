import moment from "moment"
import { isValidDate, setTime } from "./DateUtil"

describe("isValidDate", () => {
  it("returns false if date was created from NaN", () => {
    expect(isValidDate(new Date(NaN))).toBeFalsy()
  })
  it("returns false if date was created from NaN", () => {
    expect(isValidDate(new Date("Wrong Format Much?"))).toBeFalsy()
  })
  it("returns true if date is created from a real number", () => {
    expect(isValidDate(new Date(1234))).toBeTruthy()
  })
  it("can be created with a moment", () => {
    expect(isValidDate(moment(1234))).toBeTruthy()
  })
})

describe("setTime", () => {
  it("ignores Years, Months, and Days from the time argument", () => {
    const date = moment.utc("2020-01-10T00:20:30.501Z")
    const time = moment.utc("2021-02-17T20:13:01.552Z")

    expect(setTime(date, time).toISOString()).toEqual(
      "2020-01-10T20:13:01.552Z"
    )
  })
})
