import { useMemo } from "react"
import { triggerExhaustiveSwitch } from "@/library/utils/exhaustiveSwitch"
import { twMerge } from "tailwind-merge"
import { ButtonTheme } from "@/library/button/types/ButtonTheme"
import { Props } from "@/library/button/Button"

type ConfigVal = {
  normal: string | string[]
  hovered: string | string[]
  pressed: string | string[]
}

const solidConfig = {
  primary: {
    normal: twMerge(
      "bg-primary-600 dark:bg-primary-dark-700",
      "border-primary-600 dark:border-primary-dark-700",
      "text-primary-50 dark:text-primary-dark-50"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-primary-700 dark:data-[hovered=true]:bg-primary-dark-600",
      "data-[hovered=true]:border-primary-700 dark:data-[hovered=true]:border-primary-dark-600",
      "data-[hovered=true]:text-white dark:data-[hovered=true]:text-white",
      "child:data-[hovered=true]:text-white dark:child:data-[hovered=true]:text-white"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-primary-800 dark:data-[pressed=true]:bg-primary-dark-500",
      "data-[pressed=true]:border-primary-800 dark:data-[pressed=true]:border-primary-dark-500",
      "data-[pressed=true]:text-white dark:data-[pressed=true]:text-white",
      "child:data-[pressed=true]:text-white dark:child:data-[pressed=true]:text-white"
    ),
  },
  secondary: {
    normal: twMerge(
      "bg-secondary-600 dark:bg-secondary-dark-700",
      "border-secondary-600 dark:border-secondary-dark-700",
      "text-secondary-50 dark:text-secondary-dark-50"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-secondary-700 dark:data-[hovered=true]:bg-secondary-dark-600",
      "data-[hovered=true]:border-secondary-700 dark:data-[hovered=true]:border-secondary-dark-600",
      "data-[hovered=true]:text-white dark:data-[hovered=true]:text-white",
      "child:data-[hovered=true]:text-white dark:child:data-[hovered=true]:text-white"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-secondary-800 dark:data-[pressed=true]:bg-secondary-dark-500",
      "data-[pressed=true]:border-secondary-800 dark:data-[pressed=true]:border-secondary-dark-500",
      "data-[pressed=true]:text-white dark:data-[pressed=true]:text-white",
      "child:data-[pressed=true]:text-white dark:child:data-[pressed=true]:text-white"
    ),
  },
  info: {
    normal: twMerge(
      "bg-info-600 dark:bg-info-dark-700",
      "border-info-600 dark:border-info-dark-700",
      "text-info-50 dark:text-info-dark-50"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-info-700 dark:data-[hovered=true]:bg-info-dark-600",
      "data-[hovered=true]:border-info-700 dark:data-[hovered=true]:border-info-dark-600",
      "data-[hovered=true]:text-white dark:data-[hovered=true]:text-white",
      "child:data-[hovered=true]:text-white dark:child:data-[hovered=true]:text-white"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-info-800 dark:data-[pressed=true]:bg-info-dark-500",
      "data-[pressed=true]:border-info-800 dark:data-[pressed=true]:border-info-dark-500",
      "data-[pressed=true]:text-white dark:data-[pressed=true]:text-white",
      "child:data-[pressed=true]:text-white dark:child:data-[pressed=true]:text-white"
    ),
  },
  success: {
    normal: twMerge(
      "bg-success-600 dark:bg-success-dark-800",
      "border-success-600 dark:border-success-dark-800",
      "text-success-50 dark:text-success-dark-50"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-success-700 dark:data-[hovered=true]:bg-success-dark-700",
      "data-[hovered=true]:border-success-700 dark:data-[hovered=true]:border-success-dark-700",
      "data-[hovered=true]:text-white dark:data-[hovered=true]:text-white",
      "child:data-[hovered=true]:text-white dark:child:data-[hovered=true]:text-white"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-success-800 dark:data-[pressed=true]:bg-success-dark-600",
      "data-[pressed=true]:border-success-800 dark:data-[pressed=true]:border-success-dark-600",
      "data-[pressed=true]:text-white dark:data-[pressed=true]:text-white",
      "child:data-[pressed=true]:text-white dark:child:data-[pressed=true]:text-white"
    ),
  },
  danger: {
    normal: twMerge(
      "bg-danger-600 dark:bg-danger-dark-700",
      "border-danger-600 dark:border-danger-dark-700",
      "text-danger-50 dark:text-danger-dark-50"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-danger-700 dark:data-[hovered=true]:bg-danger-dark-600",
      "data-[hovered=true]:border-danger-700 dark:data-[hovered=true]:border-danger-dark-600",
      "data-[hovered=true]:text-white dark:data-[hovered=true]:text-white",
      "child:data-[hovered=true]:text-white dark:child:data-[hovered=true]:text-white"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-danger-800 dark:data-[pressed=true]:bg-danger-dark-500",
      "data-[pressed=true]:border-danger-800 dark:data-[pressed=true]:border-danger-dark-500",
      "data-[pressed=true]:text-white dark:data-[pressed=true]:text-white",
      "child:data-[pressed=true]:text-white dark:child:data-[pressed=true]:text-white"
    ),
  },
} satisfies Record<ButtonTheme, ConfigVal>

const outlineConfig = {
  primary: {
    normal: twMerge(
      "bg-white/40 dark:bg-transparent",
      "border-primary-700 dark:border-primary-dark-400",
      "text-primary-700 dark:text-primary-dark-400"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-white/60 dark:data-[hovered=true]:bg-transparent",
      "data-[hovered=true]:border-primary-500 dark:data-[hovered=true]:border-primary-dark-300",
      "data-[hovered=true]:text-primary-500 dark:data-[hovered=true]:text-primary-dark-300",
      "child:data-[hovered=true]:text-primary-500 dark:child:data-[hovered=true]:text-primary-dark-300"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-white dark:data-[pressed=true]:bg-transparent/20",
      "data-[pressed=true]:border-primary-400 dark:data-[pressed=true]:border-primary-dark-200",
      "data-[pressed=true]:text-primary-400 dark:data-[pressed=true]:text-primary-dark-200",
      "child:data-[pressed=true]:text-primary-400 dark:child:data-[pressed=true]:text-primary-dark-200"
    ),
  },
  secondary: {
    normal: twMerge(
      "bg-white/40 dark:bg-transparent",
      "border-secondary-700 dark:border-secondary-dark-400",
      "text-secondary-700 dark:text-secondary-dark-400"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-white/60 dark:data-[hovered=true]:bg-transparent",
      "data-[hovered=true]:border-secondary-500 dark:data-[hovered=true]:border-secondary-dark-300",
      "data-[hovered=true]:text-secondary-500 dark:data-[hovered=true]:text-secondary-dark-300",
      "child:data-[hovered=true]:text-secondary-500 dark:child:data-[hovered=true]:text-secondary-dark-300"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-white dark:data-[pressed=true]:bg-transparent/20",
      "data-[pressed=true]:border-secondary-400 dark:data-[pressed=true]:border-secondary-dark-200",
      "data-[pressed=true]:text-secondary-400 dark:data-[pressed=true]:text-secondary-dark-200",
      "child:data-[pressed=true]:text-secondary-400 dark:child:data-[pressed=true]:text-secondary-dark-200"
    ),
  },
  info: {
    normal: twMerge(
      "bg-white/40 dark:bg-transparent",
      "border-info-700 dark:border-info-dark-300",
      "text-info-700 dark:text-info-dark-300"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-white/60 dark:data-[hovered=true]:bg-transparent",
      "data-[hovered=true]:border-info-500 dark:data-[hovered=true]:border-info-dark-200",
      "data-[hovered=true]:text-info-500 dark:data-[hovered=true]:text-info-dark-200",
      "child:data-[hovered=true]:text-info-500 dark:child:data-[hovered=true]:text-info-dark-200"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-white dark:data-[pressed=true]:bg-transparent/20",
      "data-[pressed=true]:border-info-400 dark:data-[pressed=true]:border-info-dark-100",
      "data-[pressed=true]:text-info-400 dark:data-[pressed=true]:text-info-dark-100",
      "child:data-[pressed=true]:text-info-400 dark:child:data-[pressed=true]:text-info-dark-100"
    ),
  },
  success: {
    normal: twMerge(
      "bg-white/40 dark:bg-transparent",
      "border-success-700 dark:border-success-dark-400",
      "text-success-700 dark:text-success-dark-400"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-white/60 dark:data-[hovered=true]:bg-transparent",
      "data-[hovered=true]:border-success-500 dark:data-[hovered=true]:border-success-dark-300",
      "data-[hovered=true]:text-success-500 dark:data-[hovered=true]:text-success-dark-300",
      "child:data-[hovered=true]:text-success-500 dark:child:data-[hovered=true]:text-success-dark-300"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-white dark:data-[pressed=true]:bg-transparent/20",
      "data-[pressed=true]:border-success-400 dark:data-[pressed=true]:border-success-dark-200",
      "data-[pressed=true]:text-success-400 dark:data-[pressed=true]:text-success-dark-200",
      "child:data-[pressed=true]:text-success-400 dark:child:data-[pressed=true]:text-success-dark-200"
    ),
  },
  danger: {
    normal: twMerge(
      "bg-white/40 dark:bg-transparent",
      "border-danger-700 dark:border-danger-dark-400",
      "text-danger-700 dark:text-danger-dark-400"
    ),
    hovered: twMerge(
      "data-[hovered=true]:bg-white/60 dark:data-[hovered=true]:bg-transparent",
      "data-[hovered=true]:border-danger-500 dark:data-[hovered=true]:border-danger-dark-300",
      "data-[hovered=true]:text-danger-500 dark:data-[hovered=true]:text-danger-dark-300",
      "child:data-[hovered=true]:text-danger-500 dark:child:data-[hovered=true]:text-danger-dark-300"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-white dark:data-[pressed=true]:bg-transparent/20",
      "data-[pressed=true]:border-danger-400 dark:data-[pressed=true]:border-danger-dark-200",
      "data-[pressed=true]:text-danger-400 dark:data-[pressed=true]:text-danger-dark-200",
      "child:data-[pressed=true]:text-danger-400 dark:child:data-[pressed=true]:text-danger-dark-200"
    ),
  },
} satisfies Record<ButtonTheme, ConfigVal>

const hyperlinkConfig = {
  primary: {
    normal: twMerge("text-primary-600 dark:text-primary-dark-600"),
    hovered: twMerge(
      "data-[hovered=true]:text-primary-500 dark:data-[hovered=true]:text-primary-dark-500",
      "child:data-[hovered=true]:text-primary-500 dark:child:data-[hovered=true]:text-primary-dark-500"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-primary-100 dark:data-[pressed=true]:bg-primary-dark-800",
      "data-[pressed=true]:text-primary-400 dark:data-[pressed=true]:text-primary-dark-400",
      "child:data-[pressed=true]:text-primary-400 dark:child:data-[pressed=true]:text-primary-dark-400"
    ),
  },
  secondary: {
    normal: twMerge("text-secondary-600 dark:text-secondary-dark-600"),
    hovered: twMerge(
      "data-[hovered=true]:text-secondary-500 dark:data-[hovered=true]:text-secondary-dark-500",
      "child:data-[hovered=true]:text-secondary-500 dark:child:data-[hovered=true]:text-secondary-dark-500"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-secondary-100 dark:data-[pressed=true]:bg-secondary-dark-800",
      "data-[pressed=true]:text-secondary-400 dark:data-[pressed=true]:text-secondary-dark-400",
      "child:data-[pressed=true]:text-secondary-400 dark:child:data-[pressed=true]:text-secondary-dark-400"
    ),
  },
  info: {
    normal: twMerge("text-info-600 dark:text-info-dark-300"),
    hovered: twMerge(
      "data-[hovered=true]:text-info-500 dark:data-[hovered=true]:text-info-dark-200",
      "child:data-[hovered=true]:text-info-500 dark:child:data-[hovered=true]:text-info-dark-200"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-info-100 dark:data-[pressed=true]:bg-info-dark-600",
      "data-[pressed=true]:text-info-400 dark:data-[pressed=true]:text-info-dark-200",
      "child:data-[pressed=true]:text-info-400 dark:child:data-[pressed=true]:text-info-dark-200"
    ),
  },
  success: {
    normal: twMerge("text-success-600 dark:text-success-dark-600"),
    hovered: twMerge(
      "data-[hovered=true]:text-success-500 dark:data-[hovered=true]:text-success-dark-500",
      "child:data-[hovered=true]:text-success-500 dark:child:data-[hovered=true]:text-success-dark-500"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-success-100 dark:data-[pressed=true]:bg-success-dark-800",
      "data-[pressed=true]:text-success-400 dark:data-[pressed=true]:text-success-dark-400",
      "child:data-[pressed=true]:text-success-400 dark:child:data-[pressed=true]:text-success-dark-400"
    ),
  },
  danger: {
    normal: twMerge("text-danger-600 dark:text-danger-dark-600"),
    hovered: twMerge(
      "data-[hovered=true]:text-danger-500 dark:data-[hovered=true]:text-danger-dark-500",
      "child:data-[hovered=true]:text-danger-500 dark:child:data-[hovered=true]:text-danger-dark-500"
    ),
    pressed: twMerge(
      "data-[pressed=true]:bg-danger-100 dark:data-[pressed=true]:bg-danger-dark-800",
      "data-[pressed=true]:text-danger-400 dark:data-[pressed=true]:text-danger-dark-300",
      "child:data-[pressed=true]:text-danger-400 dark:child:data-[pressed=true]:text-danger-dark-300"
    ),
  },
} satisfies Record<ButtonTheme, ConfigVal>

/**
 * Based on the props handles visual aspect of the button
 * @param props
 * @param componentName
 * @returns {string}
 */
export default function useButtonTheme(props: Pick<Props, "theme" | "variant">, componentName = "Button"): string {
  const solidClass = useMemo(() => {
    return [
      "btn",
      "border",
      "transition child:transition",
      "disabled:bg-info-400 dark:disabled:bg-info-dark-400",
      "disabled:border-info-400 dark:disabled:border-info-dark-400",
      "disabled:text-info-600 dark:disabled:text-info-dark-600",
      "child:disabled:text-info-600 dark:child:disabled:text-info-dark-600",
      `${solidConfig[props.theme].normal}`,
      `${solidConfig[props.theme].hovered}`,
      `${solidConfig[props.theme].pressed}`,
    ]
  }, [props.theme])

  const outlineClass = useMemo(() => {
    return [
      "btn",
      "border",
      "transition child:transition",
      "disabled:bg-info-400 dark:disabled:bg-info-dark-400/20",
      "disabled:border-info-400 dark:disabled:border-info-dark-400",
      "disabled:text-info-600 dark:disabled:text-info-dark-400",
      "child:disabled:text-info-600 dark:child:disabled:text-info-dark-400",
      `${outlineConfig[props.theme].normal}`,
      `${outlineConfig[props.theme].hovered}`,
      `${outlineConfig[props.theme].pressed}`,
    ]
  }, [props.theme])

  const hyperlinkClass = useMemo(() => {
    return [
      "btn",
      "transition child:transition",
      "disabled:text-info-400 dark:disabled:text-info-dark-400",
      "child:disabled:text-info-400 dark:child:disabled:text-info-dark-400",
      `${hyperlinkConfig[props.theme].normal}`,
      `${hyperlinkConfig[props.theme].hovered}`,
      `${hyperlinkConfig[props.theme].pressed}`,
    ]
  }, [props.theme])

  const theme = useMemo(() => {
    switch (props.variant) {
      case "solid": {
        return twMerge(solidClass)
      }
      case "outline": {
        return twMerge(outlineClass)
      }
      case "hyperlink": {
        return twMerge(hyperlinkClass)
      }
      default: {
        triggerExhaustiveSwitch(props.variant, componentName)
      }
    }
  }, [props.variant, componentName, solidClass, outlineClass, hyperlinkClass])
  return theme
}
