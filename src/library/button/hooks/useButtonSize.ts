import { useMemo } from "react"
import { Props as ButtonProps } from "@/library/button/Button"

export type Props = Pick<ButtonProps, "size">
export default function useButtonSize(props: Props) {
  return useMemo(() => {
    switch (props.size) {
      case "small": {
        const className = "px-2 py-1.5 text-sm"
        return className
      }
      case null: {
        return ""
      }

      default: {
        const className = "px-4 py-1.5"
        return className
      }
    }
  }, [props.size])
}
