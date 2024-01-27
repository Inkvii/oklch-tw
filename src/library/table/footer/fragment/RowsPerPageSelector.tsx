import { ListBox } from "@/library/picker/ListBox"
import { useFormContext } from "react-hook-form"
import { PopoverItem } from "@/library/picker/PopoverItem"
import { TablePaginationContext } from "@/library/table/footer/fragment/TablePaginationContext"

export default function RowsPerPageSelector(props: { handleOnChange: () => void }) {
  const methods = useFormContext<TablePaginationContext>()

  const rowsPerPageWatch = methods.watch("limit")

  return (
    <div>
      <p>Rows per page</p>

      <ListBox
        selectedKey={rowsPerPageWatch.toString()}
        onSelectionChange={(value) => {
          methods.setValue("limit", Number(value))
          methods.setValue("page", 1)
          props.handleOnChange()
        }}
      >
        <PopoverItem id={"10"}>10</PopoverItem>
        <PopoverItem id={"25"}>25</PopoverItem>
        <PopoverItem id={"50"}>50</PopoverItem>
        <PopoverItem id={"100"}>100</PopoverItem>
      </ListBox>
    </div>
  )
}
