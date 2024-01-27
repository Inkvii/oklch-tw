/**
 * Returns zero index argument type of the function.
 *
 * Example:
 * <pre>
 *   function test(a: {aa: string, ab: object}, b: number)
 *   // returns {aa: string, ab: object}
 * </pre>
 */
/* eslint @typescript-eslint/no-explicit-any: 0 */
export type QueryVariables<A extends (...args: any) => any> = Parameters<A>[0]
