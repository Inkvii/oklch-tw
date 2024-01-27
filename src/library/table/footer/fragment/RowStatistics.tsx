export default function RowStatistics(props: { fromRow: number; toRow: number; totalRows: number }) {
  return (
    <div data-testid={"row-statistics"}>
      {props.fromRow} - {props.toRow} of {props.totalRows} results
    </div>
  )
}
