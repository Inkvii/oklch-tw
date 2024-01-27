"use client"

import { forwardRef, ReactElement, ReactNode, Ref, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { mergeProps, useFocusRing, useHover, usePress } from "react-aria"
import { useObjectRef } from "@react-aria/utils"
import { usePathname } from "next/navigation"
import { ButtonVariant } from "@/library/button/types/ButtonVariant"
import { ButtonTheme } from "@/library/button/types/ButtonTheme"
import { ButtonSize } from "@/library/button/types/ButtonSize"
import { PressEvent } from "@react-types/shared/src/events"
import { CircleNotch } from "phosphor-react-sc"
import useButtonSize from "@/library/button/hooks/useButtonSize"
import useButtonTheme from "@/library/button/hooks/useButtonTheme"
import useButtonSideIcons from "@/library/button/hooks/useButtonSideIcons"
import { UrlObjectWithPath } from "@/library/router/types/UrlObjectWithPath"
import { ButtonRenderProps } from "react-aria-components"

export type Props = {
  url: UrlObjectWithPath
  variant: ButtonVariant
  theme: ButtonTheme
  size?: ButtonSize
  subdominantIcon?: ReactElement
  dominantIcon?: ReactElement
  dominantIconSide?: "left" | "right"
  loadingIcon?: ReactElement
  disabled?: boolean
  className?: string | ((renderProps: ButtonRenderProps) => string)
  "data-testid"?: string
  onClick?: (e: PressEvent) => void
  children: ReactNode
}

function Component(props: Props, ref: Ref<HTMLAnchorElement>) {
  const {
    variant,
    theme,
    size,
    subdominantIcon,
    dominantIcon,
    dominantIconSide = "right",
    loadingIcon = <CircleNotch className={"animate-spin"} />,
  } = props

  const mergedRef = useObjectRef(ref)

  const sizeClassName = useButtonSize({ size })
  const themeClassName = useButtonTheme({ variant, theme })
  const path = usePathname()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    // remove loading state in case the path changes, since we cannot use interceptors on router.
    setIsLoading(false)
    return () => setIsLoading(false)
  }, [path])

  const { hoverProps, isHovered } = useHover({ isDisabled: props.disabled })
  const { isFocusVisible, focusProps, isFocused } = useFocusRing()
  const { pressProps, isPressed } = usePress({
    isDisabled: props.disabled,
    onPress: (e) => {
      // do not se loading state if destination path is the same as the current one
      if (props.url.path !== path) setIsLoading(true)
      props.onClick?.(e)
      return () => {
        setIsLoading(false)
      }
    },
    ref: mergedRef,
  })

  const ariaProps = mergeProps(hoverProps, pressProps, focusProps)

  const icons: [ReactNode, ReactNode] = useButtonSideIcons({
    dominantIconSide,
    dominantIcon,
    loadingIcon,
    subdominantIcon,
    isLoading,
  })

  const dominantIconSideClass = ""
  const subDominantIconSideClass = ""

  return (
    <Link
      {...ariaProps}
      data-hovered={isHovered || undefined}
      data-pressed={isPressed || undefined}
      data-focus-visible={isFocusVisible || undefined}
      data-focused={isFocused || undefined}
      href={props.disabled ? "#" : props.url}
      data-testid={props["data-testid"] ?? "button-link"}
      ref={ref}
      className={twMerge(
        themeClassName,
        sizeClassName,
        "transition-all",
        "w-fit",
        props.disabled && ["cursor-not-allowed"],
        isLoading && "animate-pulse",
        typeof props.className === "function"
          ? props.className?.({
              isHovered,
              isDisabled: !!props.disabled,
              isPressed,
              isFocusVisible,
              isFocused,
            })
          : props.className
      )}
      data-loading={isLoading ? isLoading : undefined}
    >
      {icons[0] && (
        <div className={twMerge(dominantIconSide === "left" ? [dominantIconSideClass] : [subDominantIconSideClass])}>
          {icons[0]}
        </div>
      )}
      <div className={twMerge((subdominantIcon || dominantIcon || isLoading) && [""])}>{props.children}</div>
      {icons[1] && (
        <div className={twMerge(dominantIconSide === "right" ? [dominantIconSideClass] : [subDominantIconSideClass])}>
          {icons[1]}
        </div>
      )}
    </Link>
  )
}

export const ButtonLink = forwardRef(Component)
