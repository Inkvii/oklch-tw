import HueInput from "components/HueInput"
import Syntax from "components/Syntax"
import Card from "components/Card"

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
      <HueInput cssVariableName={"--primary-hue"} />
      <HueInput cssVariableName={"--secondary-hue"} />

      <div className={"grid grid-fit-20 gap-4"}>
        <Card
          title={"Call to action"}
          description={"Hello there how is it going?"}
          className={"bg-primary-200 dark:bg-primary-800 border border-primary-300 dark:border-primary-700"}
        />
        <Card
          title={"Call to action"}
          description={"Hello there how is it going?"}
          className={"bg-hue-200 dark:bg-hue-800 border border-hue-300 dark:border-hue-700"}
          style={{ "--hue": "var(--secondary-hue)" } as React.CSSProperties}
        />
      </div>
      <h3>Header 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi dolores eius hic, incidunt quas quis
        sed veniam vitae.
      </p>
      <h4>Header 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi dolores eius hic, incidunt quas quis
        sed veniam vitae.
      </p>
      <h5>Header 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi dolores eius hic, incidunt quas quis
        sed veniam vitae.
      </p>
    </div>
  )
}