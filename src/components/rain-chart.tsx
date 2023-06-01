"use client"

import { Card,CardContent, CardHeader, CardTitle } from "@/ui/card"
import { AreaChart } from "@tremor/react"

type Props = {
  data: Root
}
const RainChart = ({ data }: Props) => {
  const hourly = data.hourly.time
    .map((time) =>
      new Date(time)
        .toLocaleTimeString("en-US", { hour: "numeric", hour12: true })
        .slice(0, 24)
    )
    .slice(0, 24)

  const chartData = hourly.map((hour, i) => ({
    time: hour,
    "Rain (%)": data.hourly.precipitation_probability[i] % 100,
  }))

  const dataFormatter = (num: number) => `${num} %`

  return (
    
    <Card>
    <CardHeader>
      <CardTitle>Chances of Rain (%)</CardTitle>
    </CardHeader>
    <CardContent>
      
    <AreaChart
      data={chartData}
      showLegend
      index="time"
      categories={["Rain (%)"]}
      colors={["cyan"]}
      minValue={0}
      maxValue={100}
      yAxisWidth={40}
      valueFormatter={dataFormatter}
    />
    </CardContent>
  </Card>
  
  )
}
export default RainChart
