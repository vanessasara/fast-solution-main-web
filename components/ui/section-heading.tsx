import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.ComponentProps<"div"> {
  tag?: string
  title: string | React.ReactNode
  description?: string
  action?: React.ReactNode
  align?: "left" | "center"
}

function SectionHeading({
  tag,
  title,
  description,
  action,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start"

  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12",
        alignmentClass,
        action && align === "left" && "md:flex-row md:justify-between md:items-end",
        className
      )}
      {...props}
    >
      <div className={cn("flex flex-col gap-3", align === "center" ? "items-center" : "items-start")}>
        {tag && (
          <div className="inline-block">
            <span className="text-[#F97316] font-semibold uppercase tracking-wider text-xs md:text-sm">
              {tag}
            </span>
          </div>
        )}

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
          {title}
        </h2>

        {description && (
          <p className={cn(
            "text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}>
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className={cn(
          "flex-shrink-0",
          align === "center" && "mt-2"
        )}>
          {action}
        </div>
      )}
    </div>
  )
}

export { SectionHeading }
