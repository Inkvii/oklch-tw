"use client"
import { Button } from "@/library/button/Button"
import { ArrowLeft, ArrowRight } from "phosphor-react-sc"
import IconConstants from "@/library/utils/IconConstants"
import { RegexInput } from "@/library/input/RegexInput"
import { POSITIVE_INTEGER } from "@/library/validation/pattern"
import { Controller, useFormContext } from "react-hook-form"
import { createMaxValueRule, createValueIsRequiredRule } from "@/library/validation/rules"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"
import { useFormStatus } from "react-dom"

export default function TablePaginator(props: { totalPages: number }) {
  const methods = useFormContext<TablePaginationContext>()
  const { pending } = useFormStatus()
  return (
    <div className={"flex gap-2 items-center"} data-testid={"table-paginator"}>
      <div className={"inline-flex items-center gap-1"}>
        Page{" "}
        <Controller
          control={methods.control}
          name={"page"}
          rules={{
            max: createMaxValueRule(props.totalPages),
            required: createValueIsRequiredRule(),
          }}
          render={({ field, fieldState }) => (
            <RegexInput
              {...field}
              isInvalid={fieldState.invalid}
              aria-label={"Current page"}
              type={"text"}
              regex={POSITIVE_INTEGER}
              className={"w-16"}
              value={field.value?.toString()}
            />
          )}
        />
        of {props.totalPages}
      </div>
      {/*Note - this submit input handles situation when user changes page using input and hits enter, as its the first submit button in form*/}
      <input type={"submit"} hidden />
      <Controller
        control={methods.control}
        name={"page"}
        render={({ field }) => (
          <Button
            ref={field.ref}
            onBlur={field.onBlur}
            type={"submit"}
            variant={"outline"}
            theme={"primary"}
            size={"small"}
            isDisabled={pending}
            onPress={() => {
              if (field.value > 1) field.onChange(field.value - 1)
            }}
          >
            <ArrowLeft size={IconConstants.lg.rem} />
          </Button>
        )}
      />
      <Controller
        control={methods.control}
        name={"page"}
        render={({ field, fieldState }) => (
          <Button
            ref={field.ref}
            onBlur={field.onBlur}
            type={"submit"}
            variant={"outline"}
            theme={"primary"}
            size={"small"}
            isDisabled={pending}
            onPress={() => {
              if (field.value < props.totalPages) field.onChange(field.value + 1)
            }}
          >
            <ArrowRight size={IconConstants.lg.rem} />
          </Button>
        )}
      />
    </div>
  )
}
