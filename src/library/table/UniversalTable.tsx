"use client"
import { ColumnDef, getCoreRowModel, RowData, SortingState, useReactTable } from "@tanstack/react-table"
import { Dispatch, ReactNode, SetStateAction, useMemo, useRef } from "react"
import { twMerge } from "tailwind-merge"
import { deriveColumnsFromData } from "@/library/table/utils/tableColumnUtils"
import UniversalTableHead from "@/library/table/head/UniversalTableHead"
import UniversalTableBody from "@/library/table/body/UniversalTableBody"

export type Props<T extends RowData> = {
  columns?: ColumnDef<T>[]
  data: T[] | undefined
  sorting: SortingState
  setSorting: Dispatch<SetStateAction<SortingState>>
  isFetching: boolean | undefined
  children?: ReactNode
  "data-testid"?: string
}

export default function UniversalTable<T extends RowData>(props: Props<T>) {
  const emptyArray = useRef([] as T[])

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
      sorting: props.sorting,
    },
    onSortingChange: props.setSorting,
  })

  return (
    <div className={"flex flex-col relative"} data-testid={props["data-testid"] ?? "universal-table"}>
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
        {props.children}
      </div>
    </div>
  )
}
