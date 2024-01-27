"use client"

import { FormEvent, forwardRef, ReactNode, Ref, useId } from "react"
import { twMerge } from "tailwind-merge"
import { PressEvent } from "@react-types/shared/src/events"
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form"
import useCloseOnBackdrop from "@/library/modal/hooks/useCloseOnBackdrop"
import useForwardedRef from "@/library/hooks/useForwardedRef"
import { Button } from "@/library/button/Button"

export type Props = {
  title: string
  onAccept?: (e: PressEvent) => void
  onDecline?: (e: PressEvent) => void
  // eslint-disable-next-line
  onSubmit: SubmitHandler<any>
  children: ReactNode
  acceptButtonText?: string
  declineButtonText?: string
  resetFormOnSubmit?: boolean
}

function Component<TFieldValues extends FieldValues = FieldValues>(props: Props, ref: Ref<HTMLDialogElement>) {
  const forwardedRef = useForwardedRef(ref)
  const id = useId()
  useCloseOnBackdrop(forwardedRef)

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await methods.handleSubmit(props.onSubmit)(e)
    if (props.resetFormOnSubmit) {
      methods.reset()
    }
    forwardedRef.current?.close()
  }

  const methods = useFormContext<TFieldValues>()
  return (
    <dialog
      id={id}
      ref={forwardedRef}
      data-testid={"form-modal"}
      className={twMerge(
        "bg-info-50 dark:bg-info-dark-800",
        "shadow-lg dark:shadow-info-dark-700",
        "rounded w-1/2 backdrop:bg-info-600/60 transition-all duration-1000 animate-fadeIn open:backdrop:animate-fadeIn"
      )}
    >
      <form method={"dialog"} className={twMerge("flex flex-col gap-4 p-8")} onSubmit={onFormSubmit}>
        <h2>{props.title}</h2>
        {props.children}
        <div
          className={"flex gap-4 grow justify-end items-end @container child:grow child:@[300px]:grow-0"}
          data-testid={"actions"}
        >
          <Button
            variant={"hyperlink"}
            theme={"primary"}
            type={"button"}
            onPress={(e) => {
              props.onDecline?.(e)
              forwardedRef.current?.close()
            }}
          >
            {props.declineButtonText || "Cancel"}
          </Button>
          <Button
            variant={"solid"}
            theme={"primary"}
            type={"submit"}
            onPress={props.onAccept}
            isDisabled={!methods.formState.isValid}
          >
            {props.acceptButtonText || "Accept"}
          </Button>
        </div>
      </form>
    </dialog>
  )
}

/**
 * Creates modal that returns form as json data. In order to make it work, reference to HTMLDialogElement must be created
 * where this component is going to be used.
 *
 * Use provided <code>onSubmit</code> and <code>onDecline</code> functions to direct the flow.
 * If middleware is needed, you can additionally use <code>onAccept</code function.
 *
 * Children of this component represent modal content. Title is separate slot
 *
 * Example:
 * <pre>
 *   const dialogRef = useRef<HTMLDialogRef>(null)
 *   return (
 *     <div>
 *       ...
 *       <Button onPress={() => dialogRef.current.showModal()}>Show modal</Button>
 *       <FormModal {...props} ref={dialogRef}>
 *         <p>Modal content</p>
 *       </FormModal>
 *     </div>
 *   )
 *
 * </pre>
 */
export const FormModal = forwardRef(Component)
