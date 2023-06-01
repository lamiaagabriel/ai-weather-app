import { forwardRef, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export const paragraphVariants = cva("text-foreground", {
  variants: {
    variant: {
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl",
      large: "text-lg font-semibold ",
      small: "text-sm font-medium leading-none",
      subtle:
        "text-sm text-slate-500 dark:text-slate-400 [&:not(:first-child)]:mt-2",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        className={cn(paragraphVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Paragraph.displayName = "Paragraph"
export default Paragraph
