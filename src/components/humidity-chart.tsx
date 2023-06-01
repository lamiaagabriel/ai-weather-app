"use client"


import { Card,CardContent, CardHeader, CardTitle } from "@/ui/card"
import { BarChart } from "@tremor/react"

type Props = {
  data: Root
}
const HumidityChart = ({ data }: Props) => {
  const hourly = data.hourly.time
    .map((time) =>
      new Date(time)
        .toLocaleTimeString("en-US", { hour: "numeric", hour12: true })
        .slice(0, 24)
    )
    .slice(0, 24)

  const chartData = hourly.map((hour, i) => ({
    time: hour,
    "Humidity (%)": data.hourly.relativehumidity_2m[i] % 100,
  }))

  const dataFormatter = (num: number) => `${num} %`

  return (
    <Card>
    <CardHeader>
      <CardTitle>Humidity Levels (%)</CardTitle>
    </CardHeader>
    <CardContent>
  
    <BarChart
      data={chartData}
      showLegend
      index="time"
      categories={["Humidity (%)"]}
      colors={["green"]}
      minValue={0}
      maxValue={100}
      yAxisWidth={40}
      valueFormatter={dataFormatter}
    />  </CardContent>
  </Card>
  
  )
}
export default HumidityChart
