import React from "react"

export interface LatLong {
  lat: number
  long: number
}

interface LocWidgetProps {
  coords: LatLong
  onLatLong?: (coords: LatLong) => void
}

export default function LatLongWidget({
  coords: { lat, long },
  onLatLong,
}: LocWidgetProps): JSX.Element {
  const convertInput = (str: string): number => {
    return Number.parseFloat(str)
  }
  const updateLat = (lat_string: string): void => {
    const lat_n = convertInput(lat_string)
    onLatLong?.({ lat: lat_n, long })
  }
  const updateLong = (long_string: string): void => {
    const long_n = convertInput(long_string)
    onLatLong?.({ lat, long: long_n })
  }

  return (
    <div className="info-block">
      <h2>LatLong</h2>
      <p>Lat: </p>
      <input
        type="number"
        value={!Number.isNaN(lat) ? lat : ""}
        onChange={(e): void => {
          updateLat(e.target.value)
        }}
      />
      <p>Lon: </p>
      <input
        type="number"
        value={!Number.isNaN(long) ? long : ""}
        onChange={(e): void => {
          updateLong(e.target.value)
        }}
      />
      <GeoLatLongButton onLatLong={onLatLong}>
        Get LatLong
      </GeoLatLongButton>
    </div>
  )
}

interface ButtonProps {
  onLatLong?: (coords: LatLong) => void
  children?: JSX.Element | string | null
}

function GeoLatLongButton({ onLatLong, children }: ButtonProps): JSX.Element {
  const locate = (): void => {
    try {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude: lat, longitude: long } = pos.coords
        onLatLong?.({ lat, long })
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      onClick={(e): void => {
        e.stopPropagation()
        locate()
      }}
    >
      {children}
    </button>
  )
}
