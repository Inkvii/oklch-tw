import { twMerge } from "tailwind-merge"
import Button from "components/Button"

export default function Card(props: { title: string; description: string; className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-2 rounded p-4", props.className)}>
      <h2>{props.title}</h2>
      <p className={"text-typography-primary-900"}>{props.description}</p>
      <div className={"flex gap-2"}>
        <Button>Click here</Button>
        <Button color={"2"}>Click maybe</Button>
        <Button color={"3"}>Click not</Button>
      </div>
    </div>
  )
}