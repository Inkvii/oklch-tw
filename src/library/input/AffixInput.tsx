"use client"

import { forwardRef, ReactNode, Ref, useState } from "react"
import { AriaTextFieldProps, useFocusWithin, useTextField } from "react-aria"
import { useObjectRef } from "@react-aria/utils"
import { twMerge } from "tailwind-merge"
import useRegexValidation from "@/library/input/hooks/useRegexValidation"
import useZeroFocusSelector from "@/library/input/hooks/useZeroFocusSelector"

type AffixInput = {
  className?: string
  overrideDefaultClass?: boolean
  children: ReactNode
}

export default function Component(
  props: AriaTextFieldProps & {
    prefix?: AffixInput
    suffix?: AffixInput
    regex?: RegExp
    className?: string
  },
  ref: Ref<HTMLInputElement>
) {
  const { prefix, suffix, regex, className, ...ariaProps } = props
  const [isFocusWithin, setIsFocusWithin] = useState<boolean>(false)
  const mergedRef = useObjectRef(ref)

  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setIsFocusWithin(isFocusWithin),
  })
  const { inputProps } = useTextField(ariaProps, mergedRef)
  const { handleOnChange } = useRegexValidation(inputProps.defaultValue, regex, inputProps.onChange)
  const { handleOnFocus } = useZeroFocusSelector(inputProps.onFocus)

  return (
    <fieldset
      {...focusWithinProps}
      aria-invalid={inputProps["aria-invalid"]}
      data-testid={"affix-input-container"}
      onClick={() => {
        mergedRef.current?.focus()
      }}
      className={twMerge(
        "group",
        "border",
        " rounded  first-of-type:rounded-l last-of-type:rounded-r",
        isFocusWithin
          ? [
              "border-primary-600 dark:border-primary-dark-600",
              "bg-primary-600 dark:bg-primary-dark-600",
              "ring-primary-600 dark:ring-primary-dark-600",
              " ring-1",
              "aria-[invalid=true]:ring-danger-600 dark:aria-[invalid=true]:ring-danger-dark-600",
            ]
          : ["border-info-300 dark:border-info-dark-600", "bg-info-300 dark:bg-info-dark-600"],
        "flex",
        "h-9 child:h-full",
        "overflow-hidden",
        "transition-all",
        "focus:border-primary-600 dark:focus:border-primary-dark-600",
        "aria-[invalid=true]:border-danger-600 dark:aria-[invalid=true]:border-danger-dark-600",
        className
      )}
    >
      <Affix affix={prefix} />
      <input
        {...inputProps}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        className={twMerge(
          "text-typography-body dark:text-typography-body-dark",
          "bg-info-50 dark:bg-info-dark-600",
          "border-0 grow focus:ring-0",
          "transition-colors",
          "disabled:bg-info-200 dark:disabled:bg-info-dark-800",
          "disabled:text-typography-caption dark:disabled:text-typography-caption-dark",
          " disabled:cursor-not-allowed",
          "read-only:text-typography-caption dark:read-only:text-typography-caption-dark",
          "read-only:ring-0 read-only:cursor-not-allowed",
          "read-only:focus:border-info-400 dark:read-only:focus:border-info-dark-400",
          inputProps.className
        )}
        ref={mergedRef}
        data-testid={"affix-input"}
      />
      <Affix affix={suffix} />
    </fieldset>
  )
}

function Affix(props: { affix: AffixInput | undefined }) {
  if (!props.affix) return null

  return (
    <div
      className={twMerge(
        props.affix.overrideDefaultClass
          ? props.affix.className
          : [
              "flex flex-col items-center justify-center px-4 ",
              "bg-info-300 dark:bg-info-dark-700",
              "text-typography-body dark:text-typography-body-dark",
              "select-none",
              props.affix.className,
            ]
      )}
      data-testid={"affix"}
    >
      {props.affix.children}
    </div>
  )
}

export const AffixInput = forwardRef(Component)
