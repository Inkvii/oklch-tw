"use client"
import type { DatePickerProps, DateValue } from "react-aria-components"
import {
  Button as ReactAriaButton,
  Calendar as ReactAriaCalendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as ReactAriaDatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
} from "react-aria-components"
import { forwardRef, Ref } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "@/library/button/Button"
import { ArrowLeft, ArrowRight, Calendar } from "phosphor-react-sc"
import { ZonedDateTime } from "@internationalized/date"
import IconConstants from "@/library/utils/IconConstants"

type Props<T extends DateValue> = DatePickerProps<T> & {
  label?: string
  description?: string
  errorMessage?: string
}

function Component({ label, description, errorMessage, ...props }: Props<ZonedDateTime>, ref: Ref<HTMLDivElement>) {
  return (
    <ReactAriaDatePicker
      {...props}
      ref={ref}
      className={twMerge("w-fit min-w-[12rem] flex flex-col", props.className as string)}
      isInvalid={props.isInvalid ?? !!errorMessage}
      data-testid={"input-date-field"}
    >
      {label && (
        <Label className={"flex gap-4 items-baseline"} data-testid={"label"}>
          <p className={"font-semibold"}>{label}</p>
        </Label>
      )}
      <Group
        className={twMerge("flex", "input read-only:cursor-text px-4 py-2", "justify-between gap-4")}
        isInvalid={props.isInvalid ?? !!errorMessage}
        aria-invalid={(props.isInvalid ?? !!errorMessage) || undefined}
        data-testid={"input-group"}
      >
        <DateInput className={"flex"}>
          {(segment) => <DateSegment segment={segment} className={"rounded focus-visible-outline"} />}
        </DateInput>
        <ReactAriaButton className={"focus-visible-outline rounded"} data-testid={"calendar-button"}>
          <Calendar />
        </ReactAriaButton>
      </Group>
      {description && (
        <p className={"text-sm text-typography-caption"} data-testid={"description"}>
          {description}
        </p>
      )}
      {errorMessage && (
        <p className={"text-sm text-danger-600 dark:text-danger-dark-400"} data-testid={"error"}>
          {errorMessage}
        </p>
      )}
      <Popover data-testid={"input-date-field-popover"}>
        <Dialog className={"dialog p-4"}>
          <ReactAriaCalendar className={"select-none"} data-testid={"popover-calendar"}>
            <header className={"flex gap-4 justify-between items-center pb-4"}>
              <Button variant={"solid"} theme={"primary"} size={"small"} slot="previous">
                <ArrowLeft size={IconConstants.md.rem} />
              </Button>
              <Heading className={"text-lg font-normal"} />
              <Button variant={"solid"} theme={"primary"} size={"small"} slot="next">
                <ArrowRight size={IconConstants.md.rem} />
              </Button>
            </header>
            <CalendarGrid className={"mx-auto"} data-testid={"popover-calendar-grid"}>
              {(date) => (
                <CalendarCell
                  className={twMerge(
                    "w-10 h-10",
                    "bg-info-300/25 dark:bg-info-dark-800/25",
                    "flex justify-center items-center",
                    "rounded",
                    "data-[selected=true]:bg-primary-500/50 dark:data-[selected=true]:bg-primary-dark-600",
                    "data-[hovered=true]:bg-primary-200 dark:data-[hovered=true]:bg-primary-dark-800",
                    "aria-disabled:bg-info-300 dark:aria-disabled:bg-info-dark-600"
                  )}
                  date={date}
                />
              )}
            </CalendarGrid>
          </ReactAriaCalendar>
        </Dialog>
      </Popover>
    </ReactAriaDatePicker>
  )
}

export const DateField = forwardRef(Component)
