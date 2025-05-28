"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent-700 text-primary-100 hover:bg-accent-600 focus-visible:ring-accent-700",
        secondary:
          "bg-transparent border border-primary-100 text-primary-100 hover:bg-primary-100/10 focus-visible:ring-primary-100",
        success: "bg-success-900 text-primary-100 hover:bg-success-800 focus-visible:ring-success-900",
        ghost: "hover:bg-primary-100/10 text-primary-100",
        link: "text-primary-100 underline-offset-4 hover:underline",
        outline: "border border-primary-100 bg-transparent hover:bg-primary-100/10 text-primary-100",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 py-3 text-lg",
        icon: "h-9 w-9",
      },
      glow: {
        none: "",
        subtle: "shadow-glow hover:shadow-glow",
        strong: "animate-pulse-glow",
      },
      uppercase: {
        true: "uppercase",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      glow: "none",
      uppercase: true,
      fullWidth: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  animated?: boolean
  as?: React.ElementType
  href?: string
}

const V31Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, glow, uppercase, fullWidth, animated = true, asChild = false, as, href, ...props },
    ref,
  ) => {
    const Comp = as || (href ? "a" : "button")
    const isAnchor = Comp === "a"

    // Add href to props if it's an anchor
    const allProps = {
      ...(isAnchor && href ? { href } : {}),
      ...props,
      className: cn(buttonVariants({ variant, size, glow, uppercase, fullWidth, className })),
    }

    if (animated) {
      return <Comp ref={ref as any} {...allProps} href="https://app.hel.io/x/fttrenches-1mo" />
    }

    return <Comp ref={ref as any} {...allProps} href="https://app.hel.io/x/fttrenches-1mo" />
  },
)
V31Button.displayName = "V31Button"

export { V31Button, buttonVariants }
