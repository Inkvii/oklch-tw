"use client"
import { useEffect, useState } from "react"
import UniversalTable from "@/library/table/UniversalTable"
import TableFooter from "@/library/table/footer/TableFooter"
import { ColumnDef, SortingState } from "@tanstack/react-table"
import { useRouter, useSearchParams } from "next/navigation"
import { convertArrayToTableSort, convertTableSortToArray } from "@/library/table/utils/tableSortUtils"
import { convertToUrlParams } from "@/library/utils/requestTransformerUtils"

export default function UniversalTableContainer<T>(props: {
  columns?: ColumnDef<T>[]
  data: T[]
  recordsPerPage: number
  totalPages: number
  totalRows: number
  isFetching: boolean
}) {
  const searchParams = useSearchParams()
  const [sorting, setSorting] = useState<SortingState>(convertArrayToTableSort(searchParams.getAll("sort")))
  const router = useRouter()

  useEffect(() => {
    // reset scrolling to top when page changes
    window.scrollTo({ top: 0 })
  }, [props.data])

  useEffect(() => {
    // reset sorting when search params change
    setSorting(convertArrayToTableSort(searchParams.getAll("sort")))
  }, [searchParams])

  return (
    <div data-testid={"universal-table-container"}>
      <UniversalTable
        columns={props.columns}
        data={props.data}
        sorting={sorting}
        setSorting={(sorting) => {
          setSorting(sorting)
          if (typeof sorting === "function") {
            const newSortingState: SortingState = (sorting as () => SortingState)()

            const url = convertToUrlParams({ sort: convertTableSortToArray(newSortingState, true) }, searchParams)
            router.replace("?" + url.toString())
          }
        }}
        isFetching={props.isFetching}
      >
        <TableFooter recordsPerPage={props.recordsPerPage} totalPages={props.totalPages} totalRows={props.totalRows} />
      </UniversalTable>
    </div>
  )
}
