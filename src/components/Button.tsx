"use client"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export type Props = {
  color?: "primary" | "secondary"
  variant?: "solid" | "outline"
  theme?: "theme-1" | "theme-2" | "theme-3"
}

export default function Button({
  color="primary",
  theme = "theme-1",
  variant = "solid",
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {

  return <button {...props} className={twMerge("button", color, theme, variant, props.className)} />
}

