import { twMerge } from "tailwind-merge"
import { triggerExhaustiveSwitch } from "@/library/utils/exhaustiveSwitch"
import { FeedbackType } from "@/library/feedback/FeedbackType"
import { useMemo } from "react"

export type FeedbackThemeClassNames = {
  wrapperDiv: string
  icon: string
  text: string
  header: string
}

export default function useFeedbackTheme(type: FeedbackType): FeedbackThemeClassNames {
  const theme = useMemo(() => {
    const commonTheme = twMerge("p-4 border rounded flex gap-4 justify-between items-center max-w-fit mx-auto")
    switch (type) {
      case "info":
        return {
          wrapperDiv: twMerge(commonTheme, "bg-info-300/60 dark:bg-info-700", "border-info-400 dark:border-info-500"),
          icon: twMerge("text-info-500 dark:text-info-dark-300 shrink-0"),
          header: twMerge("text-info-600 dark:text-info-dark-300"),
          text: twMerge("text-info-600 dark:text-info-dark-300"),
        }
      case "error":
        return {
          wrapperDiv: twMerge(
            commonTheme,
            "bg-danger-100 dark:bg-danger-dark-900",
            "border-danger-400 dark:border-danger-dark-600"
          ),
          icon: twMerge("text-danger-500 dark:text-danger-dark-400 shrink-0"),
          header: twMerge("text-danger-500 dark:text-danger-dark-300"),
          text: twMerge("text-danger-700 dark:text-danger-dark-100"),
        }
      default:
        triggerExhaustiveSwitch(type, "useFeedbackBackgroundTheme")
    }
  }, [type])

  return theme
}
