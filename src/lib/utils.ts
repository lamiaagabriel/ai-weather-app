import { ClassValue, clsx } from "clsx"
import { Diamond } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = async (
  url: string,
  values?: RequestInit | undefined
) => {
  return await fetch(`http://localhost:3000/api${url}`, values)

  // .then((res) =>
  //   res.json()
  // )
}

// ${
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : `https://${process.env.VERCEL_URL}`
//   }

export const cleanData = (data: Root, city: string) => {
  const {
    current_weather,
    hourly,
    timezone,
    timezone_abbreviation,
    hourly_units,
  } = data

  const { temperature, winddirection, windspeed, time, weathercode } =
    current_weather
  const {
    temperature_2m,
    snowfall,
    rain,
    relativehumidity_2m,
    precipitation_probability,
    uv_index,
  } = hourly

  return {
    current_weather: {
      temperature,
      winddirection,
      windspeed,
      time,
      weathercode,
    },
    hourly: {
      temperature_2m: temperature_2m?.slice(0, 24),
      snowfall: snowfall?.slice(0, 24),
      rain: rain?.slice(0, 24),
      relativehumidity_2m: relativehumidity_2m?.slice(0, 24),
      precipitation_probability: precipitation_probability?.slice(0, 24),
      uv_index: uv_index?.slice(0, 24),
    },
    timezone,
    timezone_abbreviation,
    hourly_units,
    city,
  }
}

export type DailyState = {
  name: string
  temp: {
    max: number | null
    min: number | null
  }
  weather: {
    label: string
    icon: string | null
  }
}
export const week: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
export const getDailyState = (data: Root) => {
  return Array.from(
    { length: 7 },
    (_, i) =>
      ({
        name: week[i],
        temp: {
          max:
            data.daily.apparent_temperature_max?.length > i
              ? data.daily.apparent_temperature_max[i]
              : null,
          min:
            data.daily.apparent_temperature_min?.length > i
              ? data.daily.apparent_temperature_min[i]
              : null,
        },
        weather: {
          label: weatherCodeToString[data.daily.weathercode[i]]?.label,
          icon:
            weatherCodeToString[data.current_weather.weathercode]?.icon || null,
        },
      } as DailyState)
  )
}

export type WeatherCodeProps = {
  icon: string
  label: string
}
export const weatherCodeToString: {
  [key: number]: WeatherCodeProps
} = {
  0: { icon: "c01d", label: "Clear sky" },
  1: { icon: "c01d", label: "Mainly clear" },
  2: { icon: "c02d", label: "Partly cloudy" },
  3: { icon: "c04d", label: "Overcast" },
  45: { icon: "a01d", label: "Fog and depositing rime fog" },
  48: { icon: "a01d", label: "Fog and depositing rime fog" },
  51: { icon: "r01d", label: "Drizzle: Light intensity" },
  53: { icon: "r02d", label: "Drizzle: Moderate intensity" },
  55: { icon: "r03d", label: "Drizzle: Dense intensity" },
  56: { icon: "r04d", label: "Freezing Drizzle: Light intensity" },
  57: { icon: "r05d", label: "Freezing Drizzle: Dense intensity" },
  61: { icon: "r06d", label: "Rain: Slight intensity" },
  63: { icon: "r07d", label: "Rain: Moderate intensity" },
  65: { icon: "r08d", label: "Rain: Heavy intensity" },
  66: { icon: "r09d", label: "Freezing Rain: Light intensity" },
  67: { icon: "r10d", label: "Freezing Rain: Heavy intensity" },
  71: { icon: "s01d", label: "Snow fall: Slight intensity" },
  73: { icon: "s02d", label: "Snow fall: Moderate intensity" },
  75: { icon: "s03d", label: "Snow fall: Heavy intensity" },
  77: { icon: "s04d", label: "Snow grains" },
  80: { icon: "r01d", label: "Rain showers: Slight intensity" },
  81: { icon: "r02d", label: "Rain showers: Moderate intensity" },
  82: { icon: "r03d", label: "Rain showers: Violent intensity" },
  85: { icon: "s01d", label: "Snow showers: Slight intensity" },
  86: { icon: "s03d", label: "Snow showers: Heavy intensity" },
  95: { icon: "t01d", label: "Thunderstorm: Slight or moderate" },
  96: { icon: "t02d", label: "Thunderstorm with slight hail" },
  99: { icon: "t04d", label: "Thunderstorm with heavy hail" },
}

export const getWeatherIconURL = (icon: string) => {
  return `https://www.weatherbit.io/static/img/icons/${icon}.png`
}

export const getWindDirection = (degrees: number) => {
  if (degrees >= 337.5 || degrees < 22.5) {
    return "N"
  } else if (degrees >= 22.5 && degrees < 67.5) {
    return "NE"
  } else if (degrees >= 67.5 && degrees < 112.5) {
    return "E"
  } else if (degrees >= 112.5 && degrees < 157.5) {
    return "SE"
  } else if (degrees >= 157.5 && degrees < 202.5) {
    return "S"
  } else if (degrees >= 202.5 && degrees < 247.5) {
    return "SW"
  } else if (degrees >= 247.5 && degrees < 292.5) {
    return "WSW"
  } else {
    return "W"
  }
}

export const getTimeRemaining = (time: any) => {
  // Assuming data.daily.sunrise[0] is a valid date string or timestamp
  var targetDate = new Date(time)

  // Get the current date and time
  var currentDate = new Date()

  // Calculate the time difference in milliseconds
  var timeRemaining = targetDate.getTime() - currentDate.getTime()

  // Convert the time remaining to hours and minutes
  var hours = Math.floor(timeRemaining / (1000 * 60 * 60))
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))

  // Output the time remaining
  return hours + ":" + minutes
}
