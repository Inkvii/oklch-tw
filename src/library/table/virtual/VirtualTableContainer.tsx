"use client"
import { useEffect } from "react"
import { ColumnDef, RowData } from "@tanstack/react-table"
import VirtualTable from "@/library/table/virtual/VirtualTable"

export type Props<T extends RowData> = {
  columns?: ColumnDef<T>[]
  data: T[]
}

export default function VirtualTableContainer<T extends RowData>(props: Props<T>) {
  useEffect(() => {
    // reset scrolling to top when page changes
    window.scrollTo({ top: 0 })
  }, [props.data])

  return (
    <div data-testid={"virtual-table-container"} className={"py-4"}>
      <VirtualTable
        columns={props.columns}
        data={props.data}
        isFetching={false}
        onPageChanged={() => window.scrollTo({ top: 0 })}
      />
    </div>
  )
}
