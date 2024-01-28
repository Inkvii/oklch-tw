"use client"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { HueVariable } from "components/HueVariable"
import useHue from "components/useHue"

export type Props = {
  color?: HueVariable
  variant?: "solid" | "outline"
  theme?: "theme-1" | "theme-2" | "theme-3"
}

export default function Button({
  color="primary",
  theme = "theme-1",
  variant = "solid",
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  const hue = useHue(color)

  return <button {...props} className={twMerge("button", theme, variant, props.className)} style={hue} />
}

