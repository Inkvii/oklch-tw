import { ReactNode, useId } from "react"
import { twMerge } from "tailwind-merge"

function Circle(props: { size: string }) {
  return (
    <div
      className={twMerge("rounded-full bg-info-300 dark:bg-info-dark-300")}
      style={{ width: props.size, height: props.size }}
      data-testid={"skeleton-circle"}
    />
  )
}

function Text(props: { className?: string; lineCount: number; shouldGrow?: boolean }) {
  const id = useId()

  return (
    <div className={"flex flex-col gap-2 p-4"}>
      {[...Array(props.lineCount)].map((_, i) => {
        return (
          <p
            key={id + i}
            className={twMerge("h-[1rem] rounded", "bg-info-300 dark:bg-info-dark-500", "w-full", props.className)}
            data-testid={"skeleton-text"}
          />
        )
      })}
    </div>
  )
}

function Rectangle(props: { width: string; height: string }) {
  return (
    <div
      className={twMerge("bg-info-300 dark:bg-info-dark-300")}
      style={{ width: props.width, height: props.height }}
      data-testid={"skeleton-rectangle"}
    />
  )
}

export default function Skeleton(props: { className?: string; children: ReactNode }) {
  return (
    <div className={twMerge("min-w-[100px]", props.className)} data-testid={"skeleton-wrapper"}>
      {props.children}
    </div>
  )
}

Skeleton.Circle = Circle
Skeleton.Text = Text
Skeleton.Rectangle = Rectangle
