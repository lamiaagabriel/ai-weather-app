import { cleanData, fetcher } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import Image from "next/image"
import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from "react"

type Props = {
  data: Root
  city: string
}

export const ChatGPTMessage = forwardRef<
  ElementRef<typeof Alert>,
  ComponentPropsWithoutRef<typeof Alert> & {
    message: String
    isLoading?: boolean
  }
>(({ message, isLoading = false, ...props }, ref) => (
  <Alert
    className="grid place-content-center place-items-center text-card-foreground py-10 lg:py-0"
    {...props}
  >
    <div className="w-12 h-12 mb-5">
      <Image
        className={`w-full h-full object-center object-cover ${
          isLoading ? "animate-bounce" : ""
        }`}
        src="/chat-gpt-icon.png"
        alt="ChatGPT icon"
        width={10000}
        height={10000}
      />
    </div>
    <AlertTitle>ChatGPT</AlertTitle>
    <AlertDescription>{message}</AlertDescription>
  </Alert>
))
ChatGPTMessage.displayName = "ChatGPTMessage"

const ChatGPT = async ({ data, city }: Props) => {
  const { content, error } = await fetcher("/summary", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(cleanData(data, city)),
  })

  if (error) return <ChatGPTMessage variant="destructive" message={error} />

  return (
    <Card>
      <CardHeader>
        <CardTitle>ChatGPT</CardTitle>
      </CardHeader>
      <CardContent>
        {content}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam
        totam id quas aut suscipit, ipsa eum maxime quasi necessitatibus animi
        accusamus dolorum magni enim officiis. Quaerat repellendus consequatur
        dolorum.
      </CardContent>
    </Card>
  )
}
export default ChatGPT
