import { UrlObjectWithPath } from "@/library/router/types/UrlObjectWithPath"
import { CategoryThemeConfig } from "@/library/navigation/radix/useCategoryTheme"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import Link from "next/link"
import { forwardRef, Ref } from "react"

export type Props = {
  name: string
  description?: string
  href: UrlObjectWithPath
  theme: CategoryThemeConfig
  disabled?: boolean
}

function Component(props: Props, ref: Ref<HTMLAnchorElement>) {
  return (
    <NavigationMenu.Item className={"h-full"}>
      <NavigationMenu.Link asChild={true}>
        <Link
          ref={ref}
          href={props.disabled ? "#" : props.href}
          className={props.theme.link.wrapper}
          aria-disabled={!!props.disabled}
          data-testid={"navigation-link"}
        >
          <div className={"flex flex-col"}>
            <h3 className={props.theme.link.header}>{props.name}</h3>
            <p className={props.theme.link.content}>{props.description}</p>
          </div>
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

export const NavigationListItem = forwardRef(Component)
