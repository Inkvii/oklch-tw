import { Route } from "@/library/router/types/Route"

/**
 * Type used for extracting generic parameters from Route.
 *
 * Resulting type is compatible with app router`s page
 */
export type ExtractRouteParams<TRoute> = TRoute extends Route<infer TSearchParams, infer TVariables>
  ? { params: TVariables; searchParams: TSearchParams }
  : never
