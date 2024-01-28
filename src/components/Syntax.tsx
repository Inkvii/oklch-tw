import { twMerge } from "tailwind-merge"

export default function Syntax() {
  return (
    <>
      <h2>Syntax</h2>
      <pre
        className={twMerge(
          "bg-primary-50  dark:bg-primary-800",
          "p-4 text-sm",
          "rounded border border-primary-100 dark:border-primary-700",
          " text-typography-primary dark:text-typography-primary-dark"
        )}
      >
        oklch(40.1% 0.123 21.57)
        <br />
        oklch(59.69% 0.156 49.77)
        <br />
        oklch(59.69% 0.156 49.77 / .5)
      </pre>
    </>
  )
}