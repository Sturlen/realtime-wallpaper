import TimeOfDay from "./TimeOfDay"
import { executionAsyncId } from "async_hooks"

const MS_PER_DAY = 86400000 - 1

const DATE_ZERO_MS = new Date(0)

describe("Constructor", () => {
  it("when created with 0 or less ms, toMS will return 0", () => {
    const t0 = new TimeOfDay(-1).toMS()
    expect(t0).toEqual(0)

    const t1 = new TimeOfDay(0).toMS()
    expect(t1).toEqual(0)

    const t2 = new TimeOfDay(0.5).toMS()
    expect(t2).toEqual(0)
  })
  it("when created with equal or more than there are milliseconds within a day, toMS will return max", () => {
    const t0 = new TimeOfDay(MS_PER_DAY).toMS()
    expect(t0).toEqual(MS_PER_DAY)

    const t1 = new TimeOfDay(MS_PER_DAY + 23).toMS()
    expect(t1).toEqual(MS_PER_DAY)

    const t2 = new TimeOfDay(MS_PER_DAY + 321.12).toMS()
    expect(t2).toEqual(MS_PER_DAY)
  })
  it("when created with a value inside the range, toMS will return given value as an integer", () => {
    const t0 = new TimeOfDay(123).toMS()
    expect(t0).toEqual(123)

    const t1 = new TimeOfDay(1212.1111).toMS()
    expect(t1).toEqual(1212)

    const t2 = new TimeOfDay(1212.9999).toMS()
    expect(t2).toEqual(1212)

    const t3 = new TimeOfDay(91235).toMS()
    expect(t3).toEqual(91235)
  })
  it("when created with NaN, toMS will return 0", () => {
    expect(new TimeOfDay(NaN).toMS()).toEqual(0)
  })
})

describe("toDate", () => {
  it("returns the given date with the time compoent replaced with the new time", () => {
    const t1 = new TimeOfDay(0).toDate(new Date(0))
    expect(t1).toEqual(new Date(0))

    const t2 = new TimeOfDay(MS_PER_DAY).toDate(
      new Date("2020-01-01T13:34:56.768Z")
    )
    expect(t2).toEqual(new Date("2020-01-01T23:59:59.999Z"))

    const t3 = new TimeOfDay(1234).toDate(new Date("2020-02-01T11:44:52.168Z"))
    expect(t3).toEqual(new Date("2020-02-01T00:00:01.234Z"))
  })
})
describe("static from", () => {
  it("when given a Date, extracts the time while disarding rest ", () => {
    expect(
      TimeOfDay.fromDate(new Date("2020-02-01T00:00:00.0000")).toMS()
    ).toEqual(new TimeOfDay(0).toMS())
    expect(
      TimeOfDay.fromDate(new Date("1980-02-01T00:01:00.001")).toMS()
    ).toEqual(new TimeOfDay(60001).toMS())
  })
})
