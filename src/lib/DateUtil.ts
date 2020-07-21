import moment from "moment"

export const isValidDate = (d: Date) => moment(d).isValid()
