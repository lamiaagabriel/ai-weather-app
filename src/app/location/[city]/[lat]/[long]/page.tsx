import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `Location | ${process.env.app_title}`,
}

import Image from "next/image"
import { notFound } from "next/navigation"
import { client } from "@/graphql"
import { GET_QUERY } from "@/graphql/queries"
import { CategoryBar } from "@tremor/react"
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  MapPin,
  Pin,
  Sunrise,
  Sunset,
} from "lucide-react"

import {
  getDailyState,
  getWeatherIconURL,
  getWindDirection,
  weatherCodeToString,
} from "@/lib/utils"

import { H1, H3, Paragraph } from "@/ui/typography"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"

import { CityPicker } from "@/components/city-picker"
import TempChart from "@/components/temp-chart"
import HighlightCard, { HighlightCardProps } from "@/components/HighlightCard"
import RainChart from "@/components/rain-chart"
import HumidityChart from "@/components/humidity-chart"
import { Suspense } from "react"
import ChatGPT from "@/components/chat-gpt"

type Props = {
  params: { city: string; lat: string; long: string }
}

export const revalidate = 1
const Location = async ({ params: { city, lat, long } }: Props) => {
  const { myQuery: data }: { myQuery: Root } = await client
    .query({
      query: GET_QUERY,
      variables: {
        current_weather: "true",
        latitude: lat,
        longitude: long,
        timezone: "GMT",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw Error(`city:${decodeURI(city)}`)
    })

  if (!data) return notFound()
  const daily = getDailyState(data)

  const highlightCards: HighlightCardProps[] = [
    {
      title: "UV Index",
      children: (
        <>
          <p className="text-3xl font-semibold">
            {data.daily.uv_index_max[0].toFixed(1)}
          </p>
        </>
      ),
      footer: (
        <>
          <CategoryBar
            categoryPercentageValues={[20, 50, 10, 20]}
            colors={["emerald", "yellow", "orange", "rose"]}
            percentageValue={(data.daily.uv_index_max[0] % 100) * 10}
            className="mt-3 w-full"
          />
        </>
      ),
    },
    {
      title: "Wind Status",
      children: (
        <>
          <p className="text-3xl font-semibold">
            {data.daily.windspeed_10m_max[0].toFixed(1)}{" "}
            <span className="text-sm font-light">m/s</span>
          </p>
        </>
      ),
      footer: (
        <div className="flex justify-start items-center gap-2 ">
          <div className="border rounded-full p-2">
            <MapPin className="text-blue-800 rotate-45" />
          </div>
          <p className="text-xl font-semibold">
            {getWindDirection(data.daily.winddirection_10m_dominant[0])}
          </p>
        </div>
      ),
    },
    {
      title: "Sunrise & Sunset",
      children: (
        <>
          <div className="flex justify-start items-center gap-2 mb-4">
            <div className=" p-2 border border-yellow-700 bg-yellow-600 text-white rounded-full">
              <ArrowUp className="w-5 h-5" />
            </div>
            <div>
              <Paragraph>
                {new Date(data.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Paragraph>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <div className=" p-2 border border-yellow-700 bg-yellow-600 text-white rounded-full">
              <ArrowDown className="w-5 h-5" />
            </div>
            <div>
              <Paragraph>
                {new Date(data.daily.sunset[0]).toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Paragraph>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Humidity",
      children: (
        <p className="text-3xl font-semibold">
          {data.hourly.relativehumidity_2m[0].toFixed(1)}{" "}
          <span className="text-sm font-light">%</span>
        </p>
      ),
      footer: <Paragraph>Normal </Paragraph>,
    },
    {
      title: "Visibility",
      children: (
        <p className="text-3xl font-semibold">
          {(data.hourly.visibility[0] / 1000).toFixed(1)}{" "}
          <span className="text-sm font-light">km</span>
        </p>
      ),
      footer: <Paragraph>Average</Paragraph>,
    },
    {
      title: "Presure",
      children: (
        <p className="text-3xl font-semibold">
          {data.hourly.pressure_msl[0].toFixed(1)}{" "}
          <span className="text-sm font-light">hPa</span>
        </p>
      ),
      footer: <Paragraph>unhealthy</Paragraph>,
    },
  ]

  return (
    <main className="grow">
      <section className="w-full md:w-80 h-fit md:h-screen bg-card md:fixed md:left-0 md:top-0 border overflow-auto">
        <div className="container py-4 divide-y [&>div]:py-4 first:pt-0">
          <div>
            <div className="mb-4">
              <H1 className="text-6xl">{decodeURI(city)}</H1>
              <Paragraph variant="subtle" className="text-sm">
                long , lat : {[long, lat].join(", ")}
              </Paragraph>
            </div>
            <CityPicker />
          </div>

          <div>
            {weatherCodeToString[data.current_weather.weathercode]?.icon && (
              <Image
                src={getWeatherIconURL(
                  weatherCodeToString[data.current_weather.weathercode].icon
                )}
                alt={`${
                  weatherCodeToString[data.current_weather.weathercode].label
                } Icon`}
                width={10000}
                height={10000}
                className="w-40"
              />
            )}

            <Paragraph className="text-5xl font-semibold">
              {data.current_weather.temperature}°C
            </Paragraph>

            <Paragraph className="text-xl mt-2 font-bold">
              {new Date().toLocaleDateString("en-GB", {
                weekday: "long",
              })}
              ,{" "}
              <span className="text-muted-foreground font-light">
                {new Date().toLocaleTimeString("en-GB", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
            </Paragraph>
          </div>

          <div className="space-y-4">
            <div className="flex justify-start items-center gap-2">
              {weatherCodeToString[data.current_weather.weathercode]?.icon && (
                <Image
                  src={getWeatherIconURL(
                    weatherCodeToString[data.current_weather.weathercode].icon
                  )}
                  alt={`${
                    weatherCodeToString[data.current_weather.weathercode].label
                  } Icon`}
                  width={10000}
                  height={10000}
                  className="w-10"
                />
              )}

              <Paragraph variant="small">
                {weatherCodeToString[data.current_weather.weathercode].label}
              </Paragraph>
            </div>

            <div className="flex justify-start items-center gap-2">
              <Image
                src={getWeatherIconURL("r01d")}
                alt={`Rain Icon`}
                width={10000}
                height={10000}
                className="w-10"
              />

              <Paragraph variant="small">
                Rain:{" "}
                {(
                  data.hourly.precipitation_probability.reduce(
                    (a, v) => a + v,
                    0
                  ) % 100
                ).toFixed(1)}
                %
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      <section className="md:ml-80 py-4 space-y-8">
        {/* <div>
          <div className="container">
            <H3 className="mb-3">Week&apos;s Overview</H3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
              {daily.map((day, i) => {
                const today = new Date()
                  .toLocaleDateString("en-GB", {
                    weekday: "short",
                  })
                  .toString()
                  .toLowerCase()

                return (
                  <Card
                    key={i}
                    className={`p-4 ${
                      today === day.name.toLowerCase() ? "border-primary" : ""
                    }`}
                  >
                    <CardHeader className="w-full flex flex-nowrap justify-between items-center gap-2">
                      <CardTitle>{day.name}</CardTitle>
                      <CardDescription>
                        {day.weather?.icon && (
                          <Image
                            src={getWeatherIconURL(day.weather.icon)}
                            alt={day.weather?.label || ""}
                            width={10000}
                            height={10000}
                            className="w-10"
                          />
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-center items-center">
                      <Paragraph className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="text-foreground font-semibold">
                          {day.temp.max}°C
                        </span>
                        <span>{day.temp.min}°</span>
                      </Paragraph>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </div> */}

        <div>
          <div className="container">
            <div className="mb-3">
              <H3>Today&apos;s Highlights</H3>
              <Paragraph
                variant="subtle"
                className="text-sm text-muted-foreground"
              >
                Last updated at: {data.current_weather.is_day.toLocaleString()}
                {new Date(data.current_weather.time!).toLocaleString()}{" "}
                {data.timezone}
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Suspense fallback={<>loading ChatGPT...</>}>
                {/* @ts-expect-error Server Components */}
                <ChatGPT />
              </Suspense>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {highlightCards.map((props, i) => (
                  <HighlightCard key={i} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TempChart data={data} />
            <HumidityChart data={data} />
            {/* <RainChart data={data} /> */}
          </div>
        </div>
      </section>
    </main>
  )
}
export default Location
