import { twMerge } from "tailwind-merge"
import Button from "components/Button"
import { CSSProperties } from "react"

export default function Card(props: { title: string; description: string; className?: string; style?: CSSProperties }) {
  return (
    <div className={twMerge("flex flex-col gap-2 rounded p-4", props.className)} style={props.style}>
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
        <Button theme={"theme-3"} variant={"solid"}>
          Most
        </Button>
      </div>
    </div>
  )
}