import { ExtractRouteParams } from "@/library/router/types/ExtractRouteParams"
import Routes from "router/routes"
import Header from "@/library/header/Header"
import { urlTo } from "@/library/router/urlTo"
import Link from "next/link"
import getQueryClient from "@/library/react-query-utils/getQueryClient"
import { getPetQuery } from "app/queries"
import HomeContainer from "app/HomeContainer"
import ServerHydratedWrapper from "@/library/react-query-utils/ServerHydratedWrapper"

type Props = ExtractRouteParams<typeof Routes.home>

export default async function Home(props: Props) {
  const queryClient = getQueryClient()

  const queryKey = ["petStatusFilter", props.searchParams.status]

  await queryClient.prefetchQuery({ queryKey: queryKey, queryFn: () => getPetQuery(props.searchParams.status) })

  return (
    <ServerHydratedWrapper>
      <main className={"px-page-default"}>
        <Header name={"Welcome page"} breadcrumbs={[]} />

        <HomeContainer status={props.searchParams.status} />

        <div className={"flex gap-4"}>
          <Link
            href={urlTo({ route: Routes.home, queryParams: { status: "available" } })}
            className={"btn bg-primary-600 text-primary-100"}
          >
            Available
          </Link>

          <Link
            href={urlTo({ route: Routes.home, queryParams: { status: "sold" } })}
            className={"btn bg-secondary-600 text-secondary-100"}
          >
            Sold
          </Link>
        </div>

        <h3>h3 asdsadasd</h3>
        <h4>h4 asdsadasd</h4>
        <h5>h5 asdsadasd</h5>
      </main>
    </ServerHydratedWrapper>
  )
}
