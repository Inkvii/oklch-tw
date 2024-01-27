import { convertArrayToTableSort } from "@/library/table/utils/tableSortUtils"
import { ColumnSort } from "@tanstack/react-table"

describe("parseSort", () => {
  it("should work", () => {
    const fields = ["first", "second.desc", "third.asc"]
    const expected: ColumnSort[] = [
      { id: "first", desc: false },
      { id: "second", desc: true },
      { id: "third", desc: false },
    ]
    expect(convertArrayToTableSort(fields)).toEqual(expected)
  })
})
