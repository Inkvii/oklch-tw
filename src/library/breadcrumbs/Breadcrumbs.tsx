import Link from "next/link"
import { Route } from "@/library/router/types/Route"

export type BreadcrumbRoute = Route & { name: string; url?: string }

export type Props = {
  paths: BreadcrumbRoute[]
}
export default function Breadcrumbs(props: Props) {
  if (props.paths.some((route) => route.path.includes(":") && route.url === null))
    throw new Error(
      `There are dynamic paths without parameters in Breadcrumbs component [${props.paths
        .filter((r) => r.path.includes(":") && r.url === null)
        .map((r) => r.name)}]. Please check all pages using this component that url is filled properly`
    )

  // it is expected that route url will never contain null as it passed error check
  return (
    <div
      className={"child:flex child:items-center flex flex-wrap pb-2 sm:pb-1"}
      aria-label={"breadcrumbs navigation hierarchy"}
      data-testid={"breadcrumbs"}
    >
      {Object.entries(props.paths).map(([key, route]) => (
        <div
          key={key}
          className={"after:[&:not(:last-child)]:content-['›'] after:[&:not(:last-child)]:px-2 last-of-type:font-bold"}
        >
          <Link
            href={route.url ?? route.path}
            className={"hover:underline focus-visible:ring focusable rounded"}
            data-testid={"breadcrumb-item"}
          >
            {route.name}
          </Link>
        </div>
      ))}
    </div>
  )
}
