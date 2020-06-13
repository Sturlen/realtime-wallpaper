import { createContext } from "react"

interface SunContext {
  postition: number
  azimuth: number
}

interface TrackContext {
  progress: number
}

const default_context: SunContext = {
  postition: 0,
  azimuth: 0,
}

export const SunContext = createContext(default_context)
