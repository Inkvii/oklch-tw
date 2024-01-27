import { ReactNode } from "react"
import { ListBoxItem, ListBoxItemProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

export function PopoverItem<T extends object>(props: Omit<ListBoxItemProps<T>, "children"> & { children: ReactNode }) {
  return (
    <ListBoxItem
      {...props}
      data-testid={"popover-item"}
      className={({ isFocused, isSelected, isDisabled }) =>
        twMerge(
          "px-4 py-2",
          "cursor-pointer",
          "bg-info-50 dark:bg-info-dark-600",
          isFocused && ["bg-info-200 dark:bg-info-dark-500", "text-primary-800 dark:text-primary-dark-50"],
          isSelected && [
            "font-bold",
            "bg-secondary-200 dark:bg-secondary-dark-900",
            "text-secondary-800 dark:text-secondary-dark-50",
          ],
          isDisabled && [
            "bg-info-400 dark:bg-info-dark-700",
            "text-info-800 dark:text-info-dark-400",
            "child:text-info-800 dark:child:text-info-dark-400",
            "cursor-not-allowed",
          ]
        )
      }
    />
  )
}
