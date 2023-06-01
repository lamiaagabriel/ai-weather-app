import type { Metadata } from "next"
export const metadata: Metadata = { title: `Home | ${process.env.app_title}` }

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { CityPicker } from "@/components/city-picker"

const Home = () => {
  return (
    <main className="grow grid place-items-center place-content-center">
      <div className="container">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-5xl">{process.env.app_title}</CardTitle>
            <CardDescription>
              Powered by OpenAI, Next.js 13.4, TailwindCSS, Tremor 2.0
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="bg-background rounded-md shadow p-4">
              <CityPicker />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
export default Home
