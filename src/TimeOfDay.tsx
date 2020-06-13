import React, { createContext, useState, ReactNode } from "react"

export interface TimeOfDayTrack {
  progress: number
}

const empty_track = {
  progress: 0,
}

export const TimeOfDay = createContext(empty_track)

interface TimeOfDayProviderProps {
  children: ReactNode
}

export function TimeOfDayProvider({
  children,
}: TimeOfDayProviderProps): JSX.Element {
  const [time, setTime] = useState(empty_track)
  return <TimeOfDay.Provider value={time}>{children}</TimeOfDay.Provider>
}
