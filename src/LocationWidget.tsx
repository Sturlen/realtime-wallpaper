import React from "react"

interface Location {
  lat: number
  long: number
}

interface LocWidgetProps {
  coords: Location
  onLocation?: (coords: Location) => void
}

export default function LocationWidget({
  coords: { lat, long },
  onLocation,
}: LocWidgetProps): JSX.Element {
  const convertInput = (str: string): number => {
    return Number.parseFloat(str)
  }
  const updateLat = (lat_string: string): void => {
    const lat_n = convertInput(lat_string)
    onLocation?.({ lat: lat_n, long })
  }
  const updateLong = (long_string: string): void => {
    const long_n = convertInput(long_string)
    onLocation?.({ lat, long: long_n })
  }

  return (
    <div className="info-block">
      <h2>Location</h2>
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
      <GeolocationButton onLocation={onLocation}>
        Get location
      </GeolocationButton>
    </div>
  )
}

interface ButtonProps {
  onLocation?: (coords: Location) => void
  children?: JSX.Element | string | null
}

function GeolocationButton({ onLocation, children }: ButtonProps): JSX.Element {
  const locate = (): void => {
    try {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude: lat, longitude: long } = pos.coords
        onLocation?.({ lat, long })
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
