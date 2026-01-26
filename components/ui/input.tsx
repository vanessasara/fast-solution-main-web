import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground w-full min-w-0 px-3 py-2 text-base outline-none transition-all duration-300 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        // Standard Inputs - Default with border
        default:
          "h-10 rounded-lg border border-slate-300 bg-white shadow-xs focus-visible:border-[#4F46E5] focus-visible:ring-4 focus-visible:ring-[#4F46E5]/10 aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        // On Colored Backgrounds - Underline style
        underline:
          "h-10 rounded-none border-0 border-b-2 border-white/30 bg-transparent text-white placeholder:text-white/60 focus-visible:border-white focus-visible:shadow-[0_1px_0_0_rgba(255,255,255,0.5)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
