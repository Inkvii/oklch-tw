"use client"
import { useMemo } from "react"
import { twMerge } from "tailwind-merge"

export type CategoryThemeConfig = {
  list: string
  link: {
    wrapper: string
    header: string
    content: string
  }
}

export default function useCategoryTheme() {
  const values: CategoryThemeConfig = useMemo(() => {
    return {
      list: twMerge("p-4", "grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2"),
      link: {
        wrapper: twMerge(
          "cursor-pointer select-none",
          "px-4 py-2",
          "rounded",
          "hover:aria-[disabled=false]:bg-primary-200 dark:hover:aria-[disabled=false]:bg-primary-dark-950",
          "aria-[disabled=true]:bg-info-200 dark:aria-[disabled=true]:bg-info-700 ",
          "focus-visible-outline",
          "h-full block",
          "group"
        ),
        header: twMerge("group-aria-[disabled=true]:text-info-500 dark:group-aria-[disabled=true]:text-info-dark-400"),
        content: twMerge("group-aria-[disabled=true]:text-info-400 dark:group-aria-[disabled=true]:text-info-dark-500"),
      },
    }
  }, [])

  return values
}
