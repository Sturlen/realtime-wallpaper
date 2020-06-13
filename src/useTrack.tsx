import { useContext } from "react"
import { SunContext } from "./suncontext"

export default function useTrack(track: string): [number] {
  const { azimuth, postition } = useContext(SunContext)
  return [1]
}
