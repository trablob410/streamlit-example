"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-[#efd6ac] hover:bg-accent/90 focus-visible:ring-accent",
        secondary: "bg-transparent border border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary",
        accent: "bg-success text-[#efd6ac] hover:bg-success/90 focus-visible:ring-success",
        ghost: "hover:bg-muted hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        outline: "border border-primary bg-transparent hover:bg-primary/10 text-primary",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, uppercase, fullWidth, animated = true, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : animated ? motion.button : "button"

    const animationProps = animated
      ? {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          transition: { duration: 0.2 },
        }
      : {}

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow, uppercase, fullWidth, className }))}
        ref={ref}
        {...animationProps}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
