import { Route } from "@/library/router/types/Route"

/**
 * Implementation of the route system
 * Example:
 * <code>
 * home: {
 *   path: "/:id"
 * } as Route<{searchParam: string}, {id: string}>
 * </code>
 */
const routes = {
  home: {
    path: "/",
  } as Route<{ status?: string }>,
} satisfies { [key: string]: Route }

export default routes
