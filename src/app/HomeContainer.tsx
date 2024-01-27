"use client"
import { useQuery } from "@tanstack/react-query"
import { getPetQuery } from "app/queries"

export type Props = {
  status: string | undefined
}
export default function HomeContainer({ status }: Props) {
  const query = useQuery({
    queryKey: ["petStatusFilter", status],
    queryFn: () => getPetQuery(status),
    enabled: status !== undefined,
  })

  return (
    <div>
      Home container {status}
      <div>
        <pre className={"h-64 overflow-auto"}>
          {JSON.stringify(query.status, null, 2)}
          {JSON.stringify(query.data, null, 2)}
        </pre>
      </div>
    </div>
  )
}
