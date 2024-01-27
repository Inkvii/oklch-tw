import { forwardRef, Ref } from "react"

import { Input as ReactAriaInput, InputProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

export type Props = {
  variant?: "small"
}

function Component({ variant, ...props }: InputProps & Props, ref: Ref<HTMLInputElement>) {
  return (
    <ReactAriaInput
      {...props}
      className={(values) =>
        twMerge(
          "w-full",
          "input",
          variant === "small" && ["px-2 py-1 text-sm"],
          variant === undefined && ["px-4 py-2"],
          typeof props.className === "function" ? props.className(values) : props.className
        )
      }
      ref={ref}
      data-testid={"input"}
    />
  )
}

export const Input = forwardRef(Component)
