interface CurrentWeather {
  is_day: number
  temperature: number
  time: string
  weathercode: number
  winddirection: number
  windspeed: number
}
interface Daily {
  apparent_temperature_max: [number]
  apparent_temperature_min: [number]
  et0_fao_evapotranspiration: [number]
  precipitation_hours: [number]
  precipitation_probability_max: [number]
  precipitation_sum: [number]
  rain_sum: [number]
  shortwave_radiation_sum: [number]
  showers_sum: [number]
  snowfall_sum: [number]
  sunrise: [string]
  sunset: [string]
  temperature_2m_max: [number]
  temperature_2m_min: [number]
  time: [Date]
  uv_index_clear_sky_max: [number]
  uv_index_max: [number]
  weathercode: [number]
  winddirection_10m_dominant: [number]
  windgusts_10m_max: [number]
  windspeed_10m_max: [number]
}
interface DailyUnits {
  apparent_temperature_max: string
  apparent_temperature_min: string
  et0_fao_evapotranspiration: string
  precipitation_hours: string
  precipitation_probability_max: string
  precipitation_sum: string
  rain_sum: string
  shortwave_radiation_sum: string
  showers_sum: string
  snowfall_sum: string
  sunrise: string
  sunset: string
  temperature_2m_max: string
  temperature_2m_min: string
  time: string
  uv_index_clear_sky_max: string
  uv_index_max: string
  weathercode: string
  winddirection_10m_dominant: string
  windgusts_10m_max: string
  windspeed_10m_max: string
}
interface Hourly {
  apparent_temperature: [number]
  cape: [number]
  cloudcover: [number]
  cloudcover_high: [number]
  cloudcover_low: [number]
  cloudcover_mid: [number]
  dewpoint_2m: [number]
  diffuse_radiation: [number]
  diffuse_radiation_instant: [number]
  direct_normal_irradiance: [number]
  direct_normal_irradiance_instant: [number]
  direct_radiation: [number]
  direct_radiation_instant: [number]
  et0_fao_evapotranspiration: [number]
  evapotranspiration: [number]
  freezinglevel_height: [number]
  is_day: [number]
  precipitation: [number]
  precipitation_probability: [number]
  pressure_msl: [number]
  rain: [number]
  relativehumidity_2m: [number]
  shortwave_radiation: [number]
  shortwave_radiation_instant: [number]
  showers: [number]
  snow_depth: [number]
  snowfall: [number]
  soil_moisture_0_1cm: [number]
  soil_moisture_1_3cm: [number]
  soil_moisture_27_81cm: [number]
  soil_moisture_3_9cm: [number]
  soil_moisture_9_27cm: [number]
  soil_temperature_0cm: [number]
  soil_temperature_18cm: [number]
  soil_temperature_54cm: [number]
  soil_temperature_6cm: [number]
  surface_pressure: [number]
  temperature_120m: [number]
  temperature_180m: [number]
  temperature_2m: [number]
  temperature_80m: [number]
  terrestrial_radiation: [number]
  terrestrial_radiation_instant: [number]
  time: [string]
  uv_index: [number]
  uv_index_clear_sky: [number]
  vapor_pressure_deficit: [number]
  visibility: [number]
  weathercode: [number]
  winddirection_10m: [number]
  winddirection_120m: [number]
  winddirection_180m: [number]
  winddirection_80m: [number]
  windgusts_10m: [number]
  windspeed_10m: [number]
  windspeed_120m: [number]
  windspeed_180m: [number]
  windspeed_80m: [number]
}
interface HourlyUnits {
  apparent_temperature: string
  cape: string
  cloudcover: string
  cloudcover_high: string
  cloudcover_low: string
  cloudcover_mid: string
  dewpoint_2m: string
  diffuse_radiation: string
  diffuse_radiation_instant: string
  direct_normal_irradiance: string
  direct_normal_irradiance_instant: string
  direct_radiation: string
  direct_radiation_instant: string
  et0_fao_evapotranspiration: string
  evapotranspiration: string
  freezinglevel_height: string
  is_day: string
  precipitation: string
  precipitation_probability: string
  pressure_msl: string
  rain: string
  relativehumidity_2m: string
  shortwave_radiation: string
  shortwave_radiation_instant: string
  showers: string
  snow_depth: string
  snowfall: string
  soil_moisture_0_1cm: string
  soil_moisture_1_3cm: string
  soil_moisture_27_81cm: string
  soil_moisture_3_9cm: string
  soil_moisture_9_27cm: string
  soil_temperature_0cm: string
  soil_temperature_18cm: string
  soil_temperature_54cm: string
  soil_temperature_6cm: string
  surface_pressure: string
  temperature_120m: string
  temperature_180m: string
  temperature_2m: string
  temperature_80m: string
  terrestrial_radiation: string
  terrestrial_radiation_instant: string
  time: string
  uv_index: string
  uv_index_clear_sky: string
  vapor_pressure_deficit: string
  visibility: string
  weathercode: string
  winddirection_10m: string
  winddirection_120m: string
  winddirection_180m: string
  winddirection_80m: string
  windgusts_10m: string
  windspeed_10m: string
  windspeed_120m: string
  windspeed_180m: string
  windspeed_80m: string
}
interface Root {
  current_weather: CurrentWeather
  daily: Daily
  daily_units: DailyUnits
  elevation: number
  generationtime_ms: number
  hourly: Hourly
  hourly_units: HourlyUnits
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: string
  utc_offset_seconds: number
}