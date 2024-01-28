import ColorPalette from "components/ColorPalette"
import Content from "components/Content"
import Button, { Props } from "components/Button"

export default async function Home() {
  return (
    <main className={"p-8 space-y-4"}>
      <div className={"flex gap-8"}>
        <ColorPalette />
        <Content />
      </div>
      <div className={"max-w-prose mx-auto space-y-4"}>
        <h3>Header 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi dolores eius hic, incidunt quas
          quis sed veniam vitae.
        </p>
        <h4>Header 4</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi dolores eius hic, incidunt quas
          quis sed veniam vitae.
        </p>
        <h5>Header 5</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi dolores eius hic, incidunt quas
          quis sed veniam vitae.
        </p>
      </div>
      <ButtonGrid />
    </main>
  )
}

function ButtonGrid() {
  const buttons = [
    { variant: "solid", color: "primary" },
    { variant: "solid", color: "secondary" },
    { variant: "outline", color: "primary" },
    { variant: "outline", color: "secondary" },
  ] satisfies Props[]

  return buttons.map((variant) => {
    return (
      <div key={"variant-" + variant.color + variant.variant} className={"grid grid-cols-3 max-w-3xl mx-auto gap-4 child:w-full"}>
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
  })
}
