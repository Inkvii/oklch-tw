import { UrlObjectWithPath } from "@/library/router/types/UrlObjectWithPath"
import { RouteQueryParam } from "@/library/router/types/RouteQueryParam"
import { Route } from "@/library/router/types/Route"
import { RoutePathParam } from "@/library/router/types/RoutePathParam"

type UrlTo<TPathParams, TQueryParams> = RoutePathParam<TPathParams> &
  RouteQueryParam<TQueryParams> & {
    route: Route<TQueryParams, TPathParams>
  }

/**
 * Creates url object based on the passed Route input. Variables are uri encoded before href creation
 *
 * @param route route which is used for typing support and path
 * @param options optional options
 */
export function urlTo<TQueryParams, TPathParams>(
  route: UrlTo<TPathParams, TQueryParams>,
  options?: {
    /**
     * Base path is automatically set by next/navigate and next/link. If 3rd party navigation is used, set this to true
     */
    useBasePath?: true
  }
): UrlObjectWithPath {
  let pathname = (options?.useBasePath ? `${process.env.NEXT_PUBLIC_BASE_PATH}` : "") + route.route.path
  Object.entries(route.pathParams === undefined ? {} : (route.pathParams as object)).forEach(([key, value]) => {
    pathname = pathname.replace(`:${key}`, encodeURIComponent(value))
  })

  const search = new URLSearchParams(route.queryParams as Record<string, string>)
  const path = search.toString().length > 0 ? pathname + "?" + search.toString() : pathname
  return { pathname: pathname, search: search.toString(), path: path }
}
