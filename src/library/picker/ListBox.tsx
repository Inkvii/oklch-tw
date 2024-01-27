"use client"
import { CaretDown } from "phosphor-react-sc"
import { forwardRef, ReactNode, Ref, useRef } from "react"
import type { SelectProps } from "react-aria-components"
import {
  Button as ReactAriaButton,
  Label,
  ListBox as ReactAriaListBox,
  Popover,
  Select,
  SelectValue,
  Text,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import IconConstants from "@/library/utils/IconConstants"

interface ListBoxProps<T extends object> extends Omit<SelectProps<T>, "children"> {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string
  items?: Iterable<T>
  children: ReactNode | ((item: T) => ReactNode)
}

function Component<T extends object>(
  {
    label,
    description,
    errorMessage,
    children,
    items,
    isInvalid = !!errorMessage,
    placeholder = "Select value",
    ...props
  }: ListBoxProps<T>,
  ref: Ref<HTMLDivElement>
) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <Select
      {...props}
      ref={ref}
      className={(values) =>
        twMerge(
          "flex flex-col",
          "group/select",
          typeof props.className === "function" ? props.className(values) : props.className
        )
      }
      placeholder={placeholder}
      data-testid={"listbox"}
      isInvalid={isInvalid}
    >
      <Label className={"font-semibold"}>{label}</Label>
      <ReactAriaButton
        ref={buttonRef}
        className={twMerge(
          "px-4 py-2 min-w-[10rem]",
          "rounded border",
          "border-info-300 dark:border-info-dark-500",
          "group-data-[focus-visible=true]/select:ring",
          "focusable",
          "bg-info-50 dark:bg-info-dark-700",
          isInvalid && "border-danger-600 dark:border-danger-dark-600",
          props.isDisabled && "border-info-200 dark:border-info-dark-200",
          "flex items-center justify-between group gap-2",
          "text-left"
        )}
      >
        <SelectValue data-testid={"listbox-selected-value"} />
        <span aria-hidden="true" className={"group-data-[pressed=true]:rotate-180 transition-transform"}>
          <CaretDown
            className={
              isInvalid ? "text-danger-600 dark:text-danger-dark-600" : "text-primary-700 dark:text-primary-dark-500"
            }
            size={IconConstants.lg.rem}
          />
        </span>
      </ReactAriaButton>
      {description && (
        <Text
          slot="description"
          className={"text-sm text-typography-caption dark:text-typography-caption-dark block"}
          data-testid={"description"}
        >
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text
          slot="errorMessage"
          className={"text-sm text-danger-600 dark:text-danger-dark-600 block"}
          data-testid={"error"}
        >
          {errorMessage}
        </Text>
      )}
      <Popover
        className={twMerge(
          "shadow-lg",
          "shadow-info-400 dark:shadow-info-dark-800",
          "rounded overflow-hidden react-aria-Popover"
        )}
        data-testid={"listbox-popover"}
      >
        <ReactAriaListBox
          className={"divide-y dark:divide-info-dark-600 max-h-[15rem] overflow-y-auto"}
          items={items}
          data-testid={"listbox-items"}
        >
          {children}
        </ReactAriaListBox>
      </Popover>
    </Select>
  )
}

export const ListBox = forwardRef(Component)
