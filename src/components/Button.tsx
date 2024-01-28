"use client"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

export default function Button({
  color = "1",
  ...props
}: { color?: "1" | "2" | "3" } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "button",
        color === "1" && [
          "bg-primary-400 dark:bg-primary-900",
          "text-typography-primary dark:text-typography-primary-dark/60",
        ],
        color === "2" && ["bg-primary-500", "text-typography-primary-dark/95"],
        color === "3" && [
          "bg-primary-900 dark:bg-primary-100",
          "text-typography-primary-dark/60 dark:text-typography-primary/70",
        ],
        "hover:brightness-90 dark:hover:brightness-110",
        "active:brightness-75 dark:active:brightness-125",
        props.className
      )}
    />
  )
}