import { twMerge } from "tailwind-merge"
import { flexRender, RowData, Table } from "@tanstack/react-table"

export default function UniversalTableBody<T extends RowData>(props: { table: Table<T> }) {
  return (
    <tbody
      className={twMerge("divide-y", "divide-info-200 dark:divide-info-dark-600")}
      data-testid={"universal-table-body"}
    >
      {props.table.getRowModel().rows.map((row) => (
        <tr key={"row-" + row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={"cell-" + cell.id} className={"px-4 py-2"}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
