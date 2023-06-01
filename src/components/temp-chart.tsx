"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { AreaChart } from "@tremor/react"

type Props = {
  data: Root
}
const TempChart = ({ data }: Props) => {
  const hourly = data.hourly.time
    .map((time) =>
      new Date(time)
        .toLocaleString("en-US", { hour: "numeric", hour12: true })
        .slice(0, 24)
    )
    .slice(0, 24)

  const chartData = hourly.map((hour, i) => ({
    time: hour,
    "UV Index": data.hourly.uv_index[i],
    "Temperature (C)": data.hourly.temperature_2m[i],
  }))

  const dataFormatter = (num: number) => `${num}°`

  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperature & UV Index</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart
          data={chartData}
          showLegend
          index="time"
          categories={["Temperature (C)", "UV Index"]}
          colors={["yellow", "rose"]}
          minValue={0}
          valueFormatter={dataFormatter}
        />{" "}
      </CardContent>
    </Card>
  )
}
export default TempChart
