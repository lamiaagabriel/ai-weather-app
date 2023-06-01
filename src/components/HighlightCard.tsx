import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card"

export type HighlightCardProps = {
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}

const HighlightCard = ({ title, children, footer }: HighlightCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground font-light">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
export default HighlightCard
