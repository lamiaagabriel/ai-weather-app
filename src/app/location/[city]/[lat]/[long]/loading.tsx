import { H1, Paragraph } from "@/ui/typography"
import LoadingIcon from "@/components/loading-icon"

const Loading = async () => {
  return (
    <main className="grow grid place-items-center place-content-center">
      <div className="container text-center flex flex-col justify-center items-center gap-8">
        <LoadingIcon />
        <div className="text-3xl animate-pulse">
          <H1>Loading City Weather Information</H1>
          <Paragraph variant="subtle" className="text-lg">
            Hold on, we are crunching the numbers & generating an AI summary of
            the weather!
          </Paragraph>
        </div>
      </div>
    </main>
  )
}
export default Loading
