"use client"

import { Button } from "@/ui/button"
import { H1, Paragraph } from "@/ui/typography"

const Error = ({ reset, error }: { error: Error; reset: () => void }) => {
  return (
    <section className="grow grid place-content-center">
      <div className="container flex flex-col items-center">
        <H1 className="text-5xl">Internal Server</H1>
        <Paragraph variant="subtle" className="text-lg max-w-prose text-center">
          Something went wrong while loading the weather data
          {error.message.includes("city:") && (
            <>
              {" "}
              of{" "}
              <span className="font-semibold">
                {error.message.split("city:").pop()}
              </span>
            </>
          )}
          .
          <br />
          Try again later.
        </Paragraph>

        <Button
          size="lg"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="w-fit mt-4"
        >
          Try again
        </Button>
      </div>
    </section>
  )
}

export default Error
