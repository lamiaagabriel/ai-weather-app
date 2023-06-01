import type { Metadata } from "next"
export const metadata: Metadata = {
  title: `${process.env.app_title} | Page not found`,
}

import Link from "next/link"

import { H1, Paragraph } from "@/ui/typography"
import { buttonVariants } from "@/ui/button"
import { ChevronLeft } from "lucide-react"

const PageNotFound = () => {
  return (
    <section className="grow grid place-content-center">
      <div className="container flex flex-col items-center">
        <H1 className="text-5xl">Site not found...</H1>
        <Paragraph variant="subtle" className="text-lg">
          The site you&apos;re searching for does not exist.
        </Paragraph>
        <Link
          className={buttonVariants({
            variant: "outline",
            className: "w-fit mt-4",
          })}
          href="/"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
