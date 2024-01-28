import HueInput from "components/HueInput"
import Syntax from "components/Syntax"
import Card from "components/Card"
import { twMerge } from "tailwind-merge"
import Button from "components/Button"

export default function Content() {
  return (
    <div className={"space-y-4"}>
      <div>
        <h1>Preview of OKLCH color system</h1>
        <p>
          The oklch() functional notation expresses a given color in the Oklch color space. It has the same L axis as
          oklab(), but uses polar coordinates C (Chroma) and H (Hue).
        </p>
      </div>

      <Syntax />
      <HueInput cssVariableName={"--primary-hue"} hue={"primary"} />
      <HueInput cssVariableName={"--secondary-hue"} hue={"secondary"} />

      <div className={"grid grid-fit-20 gap-4 pt-8"}>
        <Card title={"Standard primary card"} description={"Uses default primary hue"} hue={"primary"} />
        <Card title={"Standard secondary card"} description={"Uses default secondary hue"} hue={"secondary"} />
        <Card
          title={"Using custom classnames"}
          description={"Uses primary hue but changes background to gray color"}
          hue={"primary"}
          className={twMerge(
            "child:text-neutral-700 dark:child:text-neutral-100",
            "bg-neutral-200 dark:bg-neutral-950 ",
            "border-neutral-400 dark:border-neutral-800"
          )}
        />
        <Card title={"Card with children"} description={"To showcase outline buttons"} hue={"primary"}>
          <div className={"flex gap-2 child:grow"}>
            <Button theme={"theme-2"} variant={"outline"} color={"primary"}>
              Standard theme
            </Button>
            <Button theme={"theme-2"} variant={"outline"} color={"secondary"}>
              More
            </Button>
            <Button theme={"theme-3"} variant={"outline"}>
              Most
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
