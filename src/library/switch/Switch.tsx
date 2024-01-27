"use client"

import { forwardRef, Ref } from "react"
import { Switch as ReactAriaSwitch, SwitchProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

export type Props = SwitchProps & {
  label: string
}

export default function Component({ label, ...props }: Props, ref: Ref<HTMLInputElement>) {
  return (
    <ReactAriaSwitch
      {...props}
      ref={ref}
      className={twMerge(
        "flex gap-2 group items-center cursor-pointer w-fit",
        "text-typography-body dark:text-typography-body-dark",
        "data-[disabled=true]:text-typography-caption dark:data-[disabled=true]:text-typography-caption-dark",
        props.className as string
      )}
      data-testid={"switch-button"}
    >
      <div
        className={twMerge(
          "rounded-full w-[2.4rem]  h-6 px-0.5",
          "flex items-center",
          "border border-info-400 dark:border-info-dark-500 ",
          "transition-all",
          "shrink-0",
          "group-data-[focus-visible=true]:ring",
          "bg-info-300 dark:bg-info-dark-600",
          props.isSelected && [
            "bg-primary-500 dark:bg-primary-dark-600",
            "border-primary-600 dark:border-primary-dark-500",
          ],
          props.isReadOnly && ["bg-info-300 dark:bg-info-dark-500", "border-info-400 dark:border-info-dark-400"],
          props.isDisabled && ["bg-info-300 dark:bg-info-dark-500", "border-info-400 dark:border-info-dark-400"]
        )}
      >
        <span
          className={twMerge(
            "rounded-full w-4 h-4 aspect-square",
            "bg-primary-500 dark:bg-primary-dark-600",
            "transform duration-200",
            props.isSelected && ["translate-x-full", "bg-primary-50 dark:bg-primary-dark-50"],
            props.isReadOnly && "bg-info-600 dark:bg-info-dark-800",
            props.isDisabled && "bg-info-400 dark:bg-info-dark-700"
          )}
        />
      </div>
      {label}
    </ReactAriaSwitch>
  )
}

export const Switch = forwardRef(Component)
