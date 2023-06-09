import { NextResponse } from "next/server"
import openai from "@/lib/open-ai"

export async function POST(req: Request) {
  try {
    const weatherData = await req.json()
    const data = await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.3,
        n: 1,
        stream: false,
        messages: [
          {
            role: "system",
            content:
              "Pretend you're a weather news presenter presenting LIVE on television. be energetic and full of charisma. Introduce yourself as Gabriel and say you are LIVE from the PAPAFAM Headquarters. State the city you are providing a summary for. Then give a summary of todays weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high etc. use the uv_index data provided to provide UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user.",
          },
          {
            role: "user",
            content: `Hi there, can I get a summary of todays weather, use the following information to get the weather data: ${JSON.stringify(
              weatherData
            )}`,
          },
        ],
      })
      .then((res) => res.data)
    console.log("-----------------------------------")
    console.log("response: ", data?.choices[0]?.message)

    return NextResponse.json({
      content: data?.choices[0]?.message,
    })
  } catch (error: any) {
    console.log("-----------------------------------")
    console.log("error: ", error?.response?.statusText || error?.message)
    console.log("error: ", error)

    return NextResponse.json({
      error: error?.response?.statusText || error?.message,
    })
  }

  return NextResponse.json({})
}
