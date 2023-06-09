import { buttonVariants } from "@/ui/button"
import { Paragraph } from "@/ui/typography"
import { Github } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="grid place-content-center">
      <Paragraph>
        <Link
          href={{
            pathname: "https://github.com/lamiaagabriel/ai-weather-app",
          }}
          className={buttonVariants({ variant: "link", className: "p-0" })}
        >
          <Github className="w-4 h-4 mr-2" />
          Coded By Lamiaa Gabriel
        </Link>
      </Paragraph>
    </footer>
  )
}
export default Footer
