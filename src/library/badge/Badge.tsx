"use client"
import { ReactNode, useMemo } from "react"
import { twMerge } from "tailwind-merge"
import { triggerExhaustiveSwitch } from "@/library/utils/exhaustiveSwitch"
import { Tooltip } from "@/library/tooltip/Tooltip"

export type Props = {
  type: "success" | "info" | "danger" | "primary" | "secondary"
  tooltipChildren?: ReactNode
  className?: string
  children: ReactNode
}

export default function Badge(props: Props) {
  const theme = useMemo(() => {
    switch (props.type) {
      case "primary": {
        return twMerge(
          "bg-primary-200 dark:bg-primary-dark-900",
          "text-primary-800 dark:text-primary-dark-50",
          "border-primary-300 dark:border-primary-dark-700"
        )
      }
      case "secondary": {
        return twMerge(
          "bg-secondary-200 dark:bg-secondary-dark-900",
          "text-secondary-800 dark:text-secondary-dark-50",
          "border-secondary-300 dark:border-secondary-dark-700"
        )
      }
      case "success": {
        return twMerge(
          "bg-success-200 dark:bg-success-dark-900",
          "text-success-800 dark:text-success-dark-50",
          "border-success-300 dark:border-success-dark-700"
        )
      }
      case "danger": {
        return twMerge(
          "bg-danger-200 dark:bg-danger-dark-900",
          "text-danger-800 dark:text-danger-dark-50",
          "border-danger-300 dark:border-danger-dark-700"
        )
      }
      case "info": {
        return twMerge(
          "bg-info-200 dark:bg-info-dark-900",
          "text-info-800 dark:text-info-dark-50",
          "border-info-300 dark:border-info-dark-700"
        )
      }
      default:
        triggerExhaustiveSwitch(props.type, "Badge")
    }
  }, [props.type])

  return (
    <Tooltip
      tooltipTriggerProps={{ delay: 500 }}
      element={
        <div
          className={twMerge("truncate px-4 py-1 rounded-full shadow border-2", theme, props.className)}
          data-testid={"badge"}
        >
          {props.children}
        </div>
      }
    >
      {props.tooltipChildren ? props.tooltipChildren : props.children}
    </Tooltip>
  )
}
