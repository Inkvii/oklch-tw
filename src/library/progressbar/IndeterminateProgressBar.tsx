import { twMerge } from "tailwind-merge"

export default function IndeterminateProgressBar(props: { isFetching?: boolean }) {
  return (
    <div
      className={twMerge(
        "relative overflow-hidden h-1 transition-colors duration-300",
        props.isFetching && ["bg-primary-200"]
      )}
      data-testid={"progress-bar-wrapper"}
    >
      <div
        className={twMerge(props.isFetching && ["bg-primary-400 animate-rolling"], "h-1 w-full absolute")}
        data-testid={"progress-bar"}
      ></div>
    </div>
  )
}
