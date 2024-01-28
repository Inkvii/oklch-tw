import { twMerge } from "tailwind-merge"
import Button from "components/Button"
import useHue from "components/useHue"
import { ReactNode } from "react"

export default function Card(props: {
  title: string
  description: string
  className?: string
  hue: "primary" | "secondary"
  children?: ReactNode
}) {
  const style = useHue(props.hue)
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 rounded p-4",
        "bg-hue-200 dark:bg-hue-800 border border-hue-300 dark:border-hue-700",
        props.className
      )}
      style={style}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p className={"text-xs text-danger-600"}>This will be small red text</p>
      <div className={"flex gap-2"}>
        <Button theme={"theme-1"} variant={"solid"} color={"primary"}>
          Standard theme
        </Button>
        <Button theme={"theme-2"} variant={"solid"} color={"secondary"}>
          More
        </Button>
        <Button theme={"theme-3"} variant={"solid"} color={props.hue}>
          Most
        </Button>
      </div>
      {props.children}
    </div>
  )
}