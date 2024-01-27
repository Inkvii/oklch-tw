"use client"
import type { ComboBoxProps } from "react-aria-components"
import {
  Button,
  ComboBox as ReactAriaComboBox,
  Label,
  ListBox as ReactAriaListBox,
  Popover,
  Text,
} from "react-aria-components"

import { forwardRef, ReactNode, Ref } from "react"
import IconConstants from "@/library/utils/IconConstants"
import { List } from "phosphor-react-sc"
import { twMerge } from "tailwind-merge"
import { Input } from "@/library/input/Input"

export type Props<T extends object> = Omit<ComboBoxProps<T>, "children" | "className"> & {
  label?: string
  placeholder?: string
  description?: string | null
  errorMessage?: string | null
  children: React.ReactNode | ((item: T) => ReactNode)
  className?: string
}

function Component<T extends object>(props: Props<T>, ref: Ref<HTMLDivElement>) {
  const { label, description, errorMessage, isInvalid = !!errorMessage, placeholder, children, ...ariaProps } = props

  return (
    <ReactAriaComboBox {...ariaProps} className={twMerge("w-fit", props.className)} ref={ref} data-testid={"combobox"}>
      <Label>{label}</Label>
      <div className="relative" data-testid={"combobox-group"}>
        <Input placeholder={placeholder} className={"pr-8"} aria-invalid={isInvalid} disabled={props.isDisabled} />
        <Button className={"group absolute right-2 top-1/4"}>
          <List
            className={twMerge(
              isInvalid ? "text-danger-600 dark:text-danger-dark-600" : "text-primary-700 dark:text-primary-dark-500",
              "group-data-[pressed=true]:rotate-180 transition-transform"
            )}
            size={IconConstants.lg.rem}
          />
        </Button>
      </div>
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
        data-testid={"combobox-popover"}
      >
        <ReactAriaListBox
          className={"divide-y dark:divide-info-dark-600 max-h-[15rem] overflow-y-auto"}
          items={props.items}
          data-testid={"listbox-items"}
        >
          {children}
        </ReactAriaListBox>
      </Popover>
    </ReactAriaComboBox>
  )
}

export const ComboBox = forwardRef(Component)
