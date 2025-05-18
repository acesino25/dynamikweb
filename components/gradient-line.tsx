import { cn } from "@/lib/utils"

interface GradientLineProps {
  color: "blue" | "red" | "green" | "gold"
  className?: string
}

export function GradientLine({ color, className }: GradientLineProps) {
  return (
    <div
      className={cn(
        "gradient-line",
        {
          "gradient-line-blue": color === "blue",
          "gradient-line-red": color === "red",
          "gradient-line-green": color === "green",
          "gradient-line-gold": color === "gold",
        },
        className,
      )}
    />
  )
}
