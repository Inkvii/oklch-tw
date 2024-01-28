import ColorPalette from "components/ColorPalette"
import Content from "components/Content"
import Button from "components/Button"

export default async function Home() {
  return (
    <main className={"p-8"}>
      <div className={"flex gap-8"}>
        <ColorPalette />
        <Content />
      </div>
      <div className={"flex gap-4"}>
        <Button color={"1"}>Test button</Button>
        <Button color={"2"}>Test button</Button>
        <Button color={"3"}>Test button</Button>
      </div>
    </main>
  )
}








