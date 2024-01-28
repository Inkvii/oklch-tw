import ColorPalette from "components/ColorPalette"
import Content from "components/Content"
import Button, { Props } from "components/Button"

export default async function Home() {
  const buttons = [
    { variant: "solid", color: "primary" },
    { variant: "solid", color: "secondary" },
    { variant: "outline", color: "primary" },
    { variant: "outline", color: "secondary" },
  ] satisfies Props[]

  return (
    <main className={"p-8 space-y-4"}>
      <div className={"flex gap-8"}>
        <ColorPalette />
        <Content />
      </div>
      {buttons.map((variant) => {
        return (
          <div
            key={"variant-" + variant.color + variant.variant}
            className={"grid grid-cols-3 w-1/2 gap-4 child:w-full"}
          >
            <Button theme={"theme-1"} {...variant}>
              Button {variant.variant}
            </Button>
            <Button theme={"theme-2"} {...variant}>
              Button {variant.variant}
            </Button>
            <Button theme={"theme-3"} {...variant}>
              Button {variant.variant}
            </Button>
          </div>
        )
      })}
    </main>
  )
}








