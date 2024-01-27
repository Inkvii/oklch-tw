"use client"
import { ReactNode, useMemo, useRef, useState } from "react"
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  RowData,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { deriveColumnsFromData } from "@/library/table/utils/tableColumnUtils"
import { twMerge } from "tailwind-merge"
import UniversalTableHead from "@/library/table/head/UniversalTableHead"
import UniversalTableBody from "@/library/table/body/UniversalTableBody"
import VirtualTableFooter from "@/library/table/footer/VirtualTableFooter"

export type Props<T extends RowData> = {
  columns?: ColumnDef<T>[]
  data: T[] | undefined
  isFetching: boolean | undefined
  children?: ReactNode
  "data-testid"?: string
  onPageChanged?: () => void
}

export default function VirtualTable<T extends RowData>(props: Props<T>) {
  const emptyArray = useRef([] as T[])

  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  const columns: ColumnDef<T>[] = useMemo(() => {
    if (props.columns) return props.columns
    return deriveColumnsFromData(props.data)
  }, [props.data, props.columns])

  const data: T[] = useMemo(() => {
    return props.data ?? emptyArray.current
  }, [props.data])

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),

    // this will assure that header width is calculated only when its not 0
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    state: {
      pagination,
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className={"flex flex-col relative"} data-testid={props["data-testid"] ?? "virtual-table"}>
      <div
        className={twMerge(
          "bg-info-100 dark:bg-info-dark-700/60",
          "border rounded overflow-hidden",
          "shadow dark:shadow-info-dark-700",
          "border-info-300 dark:border-info-dark-600",
          "overflow-x-auto"
        )}
      >
        <div className={twMerge("overflow-x-auto")}>
          <table className={twMerge("table w-full", "bg-info-50 dark:bg-info-dark-700")}>
            <UniversalTableHead table={table} isFetching={props.isFetching} />
            <UniversalTableBody table={table} />
          </table>
        </div>
        <VirtualTableFooter
          table={table}
          totalRows={props.data?.length ?? 0}
          onPaginationChange={(context) => {
            table.setPagination({
              pageIndex: context.page - 1,
              pageSize: context.limit,
            })
            props.onPageChanged?.()
          }}
        />
        {props.children}
      </div>
    </div>
  )
}
