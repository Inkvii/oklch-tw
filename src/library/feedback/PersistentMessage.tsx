import { twMerge } from "tailwind-merge"
import { Info, Warning } from "phosphor-react-sc"
import IconConstants from "@/library/utils/IconConstants"
import { ReactNode } from "react"
import { FeedbackThemeClassNames } from "@/library/feedback/useFeedbackTheme"
import { FeedbackType } from "@/library/feedback/FeedbackType"

type Props = {
  type: FeedbackType
  theme: FeedbackThemeClassNames
  className?: string
  children: ReactNode
}

export default function PersistentMessage(props: Props) {
  const size = IconConstants.xl.rem

  return (
    <div className={twMerge(props.theme.wrapperDiv)} data-testid={"persistent-message"}>
      <div className={twMerge(props.theme.text, props.className)}>{props.children}</div>
      {props.type === "info" && <Info className={props.theme.icon} size={size} />}
      {props.type === "error" && <Warning className={props.theme.icon} size={size} />}
    </div>
  )
}
