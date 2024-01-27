import { flexRender, RowData, Table } from "@tanstack/react-table"
import { twMerge } from "tailwind-merge"
import { ArrowDown, ArrowUp } from "phosphor-react-sc"
import IconConstants from "@/library/utils/IconConstants"
import IndeterminateProgressBar from "@/library/progressbar/IndeterminateProgressBar"

export default function UniversalTableHead<T extends RowData>(props: { table: Table<T>; isFetching?: boolean }) {
  return (
    <thead data-testid={"universal-table-head"} className={"divide-y-2 divide-info-200 dark:divide-info-dark-600"}>
      {props.table.getHeaderGroups().map((group) => (
        <tr
          key={"header-" + group.id}
          className={twMerge(
            "bg-gradient-to-b",
            "from-info-200 dark:from-info-dark-800",
            "to-info-100 dark:to-info-dark-700"
          )}
        >
          {group.headers.map((header) => (
            // width is set as a workaround since mix of auto with fixed size cells doesnt work well in react-table
            <th
              key={"header-cell-" + header.id}
              colSpan={header.colSpan}
              className={twMerge("text-left", "group")}
              style={{ width: header.getSize() !== 0 ? header.getSize() : undefined }}
            >
              {header.isPlaceholder ? null : (
                <div
                  {...{
                    className: twMerge(
                      "px-4 py-2",
                      header.column.getCanSort() && [
                        "rounded",
                        "cursor-pointer select-none flex gap-8 items-center transition-all",
                        "hover:bg-info-300 dark:hover:bg-info-dark-600",
                        "hover:text-typography-header dark:hover:text-typography-header-dark",
                      ]
                    ),
                    onClick: () => {
                      if (!header.column.getCanSort()) return

                      switch (header.column.getIsSorted()) {
                        case false:
                          header.column.toggleSorting(true)
                          break
                        case "asc":
                          header.column.clearSorting()
                          break
                        case "desc":
                          header.column.toggleSorting(false)
                          break
                      }
                    },
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: <ArrowUp size={IconConstants.xs.rem} />,
                    desc: <ArrowDown size={IconConstants.xs.rem} />,
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
      <tr className={twMerge(props.isFetching && "border-none")}>
        <th colSpan={props.table.getAllColumns().length}>
          <IndeterminateProgressBar isFetching={props.isFetching} />
        </th>
      </tr>
    </thead>
  )
}
