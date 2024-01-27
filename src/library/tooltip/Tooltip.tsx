import { Button, OverlayArrow, Tooltip as AriaTooltip, TooltipProps, TooltipTrigger } from "react-aria-components"
import { forwardRef, ReactNode, Ref } from "react"
import { twMerge } from "tailwind-merge"
import { TooltipTriggerProps } from "react-aria"

type Props = Omit<TooltipProps, "children" | "className"> & {
  children: ReactNode
  className?: string
}

function Component({ children, ...props }: Props, ref: Ref<HTMLDivElement>) {
  return (
    <AriaTooltip {...props} ref={ref} data-testid={"tooltip-content"}>
      <OverlayArrow
        className={twMerge(
          "stroke-info-300 dark:stroke-info-dark-500",
          "fill-info-200 dark:fill-info-dark-600",
          "group"
        )}
      >
        <svg
          width={16}
          height={16}
          className={
            "group-data-[placement=bottom]:rotate-180 group-data-[placement=right]:rotate-90 group-data-[placement=left]:-rotate-90"
          }
        >
          <path d="M0 0,L8 8,L16 0" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  )
}

export const TooltipContent = forwardRef(Component)

export function Tooltip(props: {
  element: ReactNode
  tooltipTriggerProps?: TooltipTriggerProps
  tooltipProps?: Omit<Props, "children">
  children: ReactNode
}) {
  return (
    <TooltipTrigger {...props.tooltipTriggerProps}>
      <Button className={"max-w-full cursor-default"}>{props.element}</Button>
      <TooltipContent
        {...props.tooltipProps}
        offset={props.tooltipProps?.offset ?? 10}
        className={twMerge(
          "border p-2 rounded",
          "border-info-300 dark:border-info-dark-500",
          "bg-info-200 dark:bg-info-dark-600",
          "text-typography-body dark:text-typography-body-dark",
          props.tooltipProps?.className
        )}
      >
        {props.children}
      </TooltipContent>
    </TooltipTrigger>
  )
}
