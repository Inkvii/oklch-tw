import { forwardRef, Ref } from "react"
import { MenuItem as ReactAriaMenuItem, MenuItemProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

function Component(props: MenuItemProps, ref: Ref<HTMLDivElement>) {
  return (
    <ReactAriaMenuItem
      {...props}
      ref={ref}
      data-testid={"menu-item"}
      className={(renderProps) =>
        twMerge(
          "flex gap-4 items-center px-4 py-2",
          renderProps.isHovered && ["bg-primary-200 dark:bg-primary-dark-700", "cursor-pointer"],
          renderProps.isDisabled && [
            "bg-info-200 dark:bg-info-dark-600",
            "child:text-info-500 dark:child:text-info-300",
            "cursor-not-allowed",
          ],
          typeof props.className === "function" ? props.className?.(renderProps) : props.className
        )
      }
    />
  )
}

export const MenuItem = forwardRef(Component)
