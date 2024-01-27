import { useMemo } from "react"
import { twMerge } from "tailwind-merge"

export default function useNavigationButtonTheme() {
  const theme = useMemo(() => {
    return twMerge(
      "cursor-pointer select-none",
      "px-4 py-2",
      "rounded",
      "font-semibold",
      "text-typography-header dark:text-typography-header-dark",
      "hover:bg-info-300 hover:dark:bg-info-dark-800",
      "focus-visible-outline"
    )
  }, [])

  return theme
}
