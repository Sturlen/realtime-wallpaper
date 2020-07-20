import TimeOfDay from "./TimeOfDay"

const MS_PER_DAY = 86400000 - 1

describe("The Time class", () => {
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
})
