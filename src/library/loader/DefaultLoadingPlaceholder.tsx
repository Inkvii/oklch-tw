import { twMerge } from "tailwind-merge"
import { Spinner } from "phosphor-react-sc"

export type Props = {
  className?: string
}
export default function DefaultLoadingPlaceholder(props: Props) {
  return (
    <div className={"w-full flex justify-center items-center p-8"} data-testid={"loader"}>
      <Spinner className={twMerge("w-[8vh] h-[8vh] aspect-square animate-spin", props.className)} />
    </div>
  )
}
