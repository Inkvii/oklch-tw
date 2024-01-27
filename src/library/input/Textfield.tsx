import {
  Children,
  cloneElement,
  forwardRef,
  HTMLInputTypeAttribute,
  ReactElement,
  ReactNode,
  Ref,
  useMemo,
} from "react"
import { Label, TextField as ReactAriaTextField, TextFieldProps } from "react-aria-components"
import { Input } from "@/library/input/Input"
import { twMerge } from "tailwind-merge"

type Props = {
  label: string | undefined | null
  description?: string
  errorMessage?: string
  type?: Exclude<HTMLInputTypeAttribute, "number">
  isOptional?: boolean
  children?: ReactNode
}

function Component(
  {
    label,
    description,
    errorMessage,
    isOptional,
    type = "text",
    children,
    ...props
  }: Props & Omit<TextFieldProps, "type">,
  ref: Ref<HTMLInputElement>
) {
  const isInvalid = useMemo(() => {
    return props.isInvalid ?? !!errorMessage
  }, [props.isInvalid, errorMessage])

  return (
    <ReactAriaTextField
      {...props}
      type={type}
      ref={ref}
      className={twMerge("flex flex-col", props.className as string)}
      isInvalid={isInvalid}
      data-testid={"textfield"}
    >
      {label && (
        <Label className={"flex gap-4 items-baseline"} data-testid={"label"}>
          <p className={"font-semibold"}>{label}</p>
          {isOptional && <span className={"text-sm text-typography-caption"}>(optional)</span>}
        </Label>
      )}
      {children ? (
        Children.map(children, (child) => {
          return cloneElement(child as ReactElement, {
            isInvalid: isInvalid,
            "aria-label": label || props["aria-label"],
          })
        })
      ) : (
        <Input className={twMerge("transition-all")} />
      )}

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
    </ReactAriaTextField>
  )
}

export const Textfield = forwardRef(Component)
