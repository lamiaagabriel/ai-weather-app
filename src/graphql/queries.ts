import { gql } from "@apollo/client"

export const GET_QUERY = gql`
  query MyQuery(
    $current_weather: String
    $longitude: String!
    $timezone: String!
    $latitude: String!
    $daily: String = "temperature_2m_max,temperature_2m_min,uv_index_max,windspeed_10m_max,winddirection_10m_dominant,sunrise,sunset,apparent_temperature_max,apparent_temperature_min,weathercode,rain_sum"
    $hourly: String = "uv_index,temperature_2m,precipitation_probability,relativehumidity_2m,visibility,pressure_msl"
  ) {
    myQuery(
      current_weather: $current_weather
      longitude: $longitude
      timezone: $timezone
      latitude: $latitude
      daily: $daily
      hourly: $hourly
    ) {
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
      elevation
      generationtime_ms
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        et0_fao_evapotranspiration
        precipitation_hours
        precipitation_probability_max
        precipitation_sum
        rain_sum
        shortwave_radiation_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        winddirection_10m_dominant
        windgusts_10m_max
        windspeed_10m_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        et0_fao_evapotranspiration
        precipitation_hours
        precipitation_probability_max
        precipitation_sum
        rain_sum
        shortwave_radiation_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        winddirection_10m_dominant
        windgusts_10m_max
        windspeed_10m_max
      }
      hourly {
        apparent_temperature
        cape
        cloudcover
        cloudcover_high
        cloudcover_low
        cloudcover_mid
        dewpoint_2m
        diffuse_radiation
        diffuse_radiation_instant
        direct_normal_irradiance
        direct_normal_irradiance_instant
        direct_radiation
        direct_radiation_instant
        et0_fao_evapotranspiration
        evapotranspiration
        freezinglevel_height
        is_day
        precipitation
        precipitation_probability
        pressure_msl
        rain
        relativehumidity_2m
        shortwave_radiation
        shortwave_radiation_instant
        showers
        snow_depth
        snowfall
        soil_moisture_0_1cm
        soil_moisture_1_3cm
        soil_moisture_27_81cm
        soil_moisture_3_9cm
        soil_moisture_9_27cm
        soil_temperature_0cm
        soil_temperature_18cm
        soil_temperature_54cm
        soil_temperature_6cm
        surface_pressure
        temperature_120m
        temperature_180m
        temperature_2m
        temperature_80m
        terrestrial_radiation
        terrestrial_radiation_instant
        time
        uv_index
        uv_index_clear_sky
        vapor_pressure_deficit
        visibility
        weathercode
        winddirection_10m
        winddirection_120m
        winddirection_180m
        winddirection_80m
        windgusts_10m
        windspeed_10m
        windspeed_120m
        windspeed_180m
        windspeed_80m
      }
      hourly_units {
        apparent_temperature
        cape
        cloudcover
        cloudcover_high
        cloudcover_low
        cloudcover_mid
        dewpoint_2m
        diffuse_radiation
        diffuse_radiation_instant
        direct_normal_irradiance
        direct_normal_irradiance_instant
        direct_radiation
        direct_radiation_instant
        et0_fao_evapotranspiration
        evapotranspiration
        freezinglevel_height
        is_day
        precipitation
        precipitation_probability
        pressure_msl
        rain
        relativehumidity_2m
        shortwave_radiation
        shortwave_radiation_instant
        showers
        snow_depth
        snowfall
        soil_moisture_0_1cm
        soil_moisture_1_3cm
        soil_moisture_27_81cm
        soil_moisture_3_9cm
        soil_moisture_9_27cm
        soil_temperature_0cm
        soil_temperature_18cm
        soil_temperature_54cm
        soil_temperature_6cm
        surface_pressure
        temperature_120m
        temperature_180m
        temperature_2m
        temperature_80m
        terrestrial_radiation
        terrestrial_radiation_instant
        time
        uv_index
        uv_index_clear_sky
        vapor_pressure_deficit
        visibility
        weathercode
        winddirection_10m
        winddirection_120m
        winddirection_180m
        winddirection_80m
        windgusts_10m
        windspeed_10m
        windspeed_120m
        windspeed_180m
        windspeed_80m
      }
    }
  }
`
