import { forwardRef, Ref } from "react"
import useRegexValidation from "@/library/input/hooks/useRegexValidation"
import useZeroFocusSelector from "@/library/input/hooks/useZeroFocusSelector"
import { AriaTextFieldProps, useTextField } from "react-aria"
import { useObjectRef } from "@react-aria/utils"
import { twMerge } from "tailwind-merge"

export type Props = {
  regex: RegExp
  className?: string
}

function Component({ regex, className, ...ariaProps }: Props & AriaTextFieldProps, ref?: Ref<HTMLInputElement>) {
  const mergedRef = useObjectRef(ref)

  const { inputProps } = useTextField(ariaProps, mergedRef)

  const { handleOnChange } = useRegexValidation(inputProps.defaultValue, regex, inputProps.onChange)
  const { handleOnFocus } = useZeroFocusSelector(inputProps.onFocus)

  return (
    <input
      {...inputProps}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      className={twMerge("transition-all", "input", inputProps.className, className)}
      ref={mergedRef}
      data-testid={"regex-input"}
    />
  )
}

export const RegexInput = forwardRef(Component)
