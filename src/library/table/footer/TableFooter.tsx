"use client"
import { useEffect, useMemo } from "react"
import { PaginatedMetadata } from "@/library/utils/types"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { convertToUrlParams } from "@/library/utils/requestTransformerUtils"
import { useRouter, useSearchParams } from "next/navigation"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"
import RowsPerPageSelector from "@/library/table/footer/fragment/RowsPerPageSelector"
import RowStatistics from "@/library/table/footer/fragment/RowStatistics"
import TablePaginator from "@/library/table/footer/fragment/TablePaginator"
import { getSearchParams } from "@/library/router/getSearchParams"

export type Props = {
  totalPages: number
  recordsPerPage: number
  totalRows: number
}

export default function TableFooter(props: Props) {
  const searchParams = useSearchParams()

  const router = useRouter()

  const methods = useForm<TablePaginationContext>({
    mode: "onChange",
    shouldFocusError: false,
    defaultValues: createDefaultParams(searchParams),
  })

  const currentPage = methods.getValues("page")
  const toRow: number = useMemo(() => {
    if (currentPage === props.totalPages) return props.totalRows

    return currentPage * props.recordsPerPage
  }, [props, currentPage])

  useEffect(() => {
    methods.reset(createDefaultParams(searchParams))
  }, [methods, searchParams])

  const onSubmit: SubmitHandler<TablePaginationContext> = async (data) => {
    if (!data.page) throw new Error("Page number was not set")

    const query: PaginatedMetadata = {
      page: data.page,
      limit: data.limit,
    }

    const url = convertToUrlParams(query, searchParams)
    router.push("?" + url.toString())
  }

  return (
    <div className={"@container"} data-testid={"table-footer"}>
      <FormProvider {...methods}>
        <form
          className={"py-2 px-4 flex flex-col @lg:flex-row gap-4 justify-between items-end @lg:items-center"}
          action={() => {
            console.log("Action called")
            methods.handleSubmit(onSubmit)()
          }}
        >
          <RowsPerPageSelector handleOnChange={() => methods.handleSubmit(onSubmit)()} />
          <RowStatistics
            fromRow={props.recordsPerPage * (currentPage - 1) + 1}
            toRow={toRow}
            totalRows={props.totalRows}
          />
          <TablePaginator totalPages={props.totalPages} />
        </form>
      </FormProvider>
    </div>
  )
}

function createDefaultParams(searchParams: URLSearchParams): TablePaginationContext {
  return {
    page: Number(getSearchParams<PaginatedMetadata>("page", searchParams) ?? "1"),
    limit: Number(getSearchParams<PaginatedMetadata>("limit", searchParams) ?? "25"),
  }
}
