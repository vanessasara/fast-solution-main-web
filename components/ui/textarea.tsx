import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "placeholder:text-muted-foreground w-full min-h-24 px-3 py-2 text-base outline-none transition-all duration-300 resize-y disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        // Standard Textarea - Default with border
        default:
          "rounded-lg border border-slate-300 bg-white shadow-xs focus-visible:border-[#4F46E5] focus-visible:ring-4 focus-visible:ring-[#4F46E5]/10 aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        // On Colored Backgrounds - Underline style
        underline:
          "rounded-none border-0 border-b-2 border-white/30 bg-transparent text-white placeholder:text-white/60 focus-visible:border-white focus-visible:shadow-[0_1px_0_0_rgba(255,255,255,0.5)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Textarea({
  className,
  variant,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
