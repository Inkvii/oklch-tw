import { useMemo } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"
import { PaginatedMetadata } from "@/library/utils/types"
import RowsPerPageSelector from "@/library/table/footer/fragment/RowsPerPageSelector"
import RowStatistics from "@/library/table/footer/fragment/RowStatistics"
import TablePaginator from "@/library/table/footer/fragment/TablePaginator"
import { Table } from "@tanstack/react-table"

export type Props<T> = {
  table: Table<T>
  totalRows: number
  onPaginationChange: (context: Required<PaginatedMetadata>) => void
}

export default function VirtualTableFooter<T>(props: Props<T>) {
  const methods = useForm<TablePaginationContext>({
    mode: "onChange",
    shouldFocusError: false,
    defaultValues: {
      page: props.table.getState().pagination.pageIndex + 1,
      limit: props.table.getState().pagination.pageSize,
    },
  })

  const recordsPerPage = props.table.getState().pagination.pageSize
  const currentPage = methods.getValues("page")

  const toRow: number = useMemo(() => {
    if (currentPage === props.table.getPageCount()) return props.totalRows

    return currentPage * recordsPerPage
  }, [props, currentPage, recordsPerPage])

  const onSubmit: SubmitHandler<TablePaginationContext> = async (data) => {
    if (!data.page) throw new Error("Page number was not set")

    const hasLimitChanged = data.limit !== props.table.getState().pagination.pageSize
    const query: Required<PaginatedMetadata> = {
      page: hasLimitChanged ? 1 : data.page,
      limit: data.limit,
    }
    methods.setValue("page", query.page)
    props.onPaginationChange(query)
  }

  return (
    <div className={"@container"} data-testid={"table-footer"}>
      <FormProvider {...methods}>
        <form
          className={"py-2 px-4 flex flex-col @lg:flex-row gap-4 justify-between items-end @lg:items-center"}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <RowsPerPageSelector handleOnChange={() => methods.handleSubmit(onSubmit)()} />
          <RowStatistics fromRow={recordsPerPage * (currentPage - 1) + 1} toRow={toRow} totalRows={props.totalRows} />
          <TablePaginator totalPages={props.table.getPageCount()} />
        </form>
      </FormProvider>
    </div>
  )
}
