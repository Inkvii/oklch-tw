import { twMerge } from "tailwind-merge"
import HueInput from "components/HueInput"

export default async function Home() {
  return (
    <main className={"flex gap-8 p-4"}>
      <div className={"flex flex-col w-1/3 p-4"}>
        {[
          ["bg-primary-50", "text-typography-primary-50"],
          ["bg-primary-100", "text-typography-primary-100"],
          ["bg-primary-200", "text-typography-primary-200"],
          ["bg-primary-300", "text-typography-primary-300"],
          ["bg-primary-400", "text-typography-primary-400"],
          ["bg-primary-500", "text-typography-primary-500"],
          ["bg-primary-600", "text-typography-primary-600"],
          ["bg-primary-700", "text-typography-primary-700"],
          ["bg-primary-800", "text-typography-primary-800"],
          ["bg-primary-900", "text-typography-primary-900"],
          ["bg-primary-950", "text-typography-primary-950"],
        ].map((background) => (
          <div
            key={background[0]}
            className={`h-20 ${background[0]} flex justify-center px-4 items-center first:rounded-t-xl last:rounded-b-xl ${background[1]}`}
          >
            {background[1]}
          </div>
        ))}
      </div>
      <Headers />
    </main>
  )
}

function Headers() {
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
      <HueInput />

      <div className={"grid grid-fit-20 gap-4"}>

      <Card
        title={"Call to action"}
        description={"Hello there how is it going?"}
        className={"bg-primary-200 dark:bg-primary-800 border border-primary-300 dark:border-primary-700"}
      />
      <Card
        title={"Call to action"}
        description={"Hello there how is it going?"}
        className={"bg-primary-200 dark:bg-primary-800 border border-primary-300 dark:border-primary-700"}
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

function Card(props: { title: string; description: string; className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-2 rounded p-4", props.className)}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button className={"button"}>Click here</button>
    </div>
  )
}

function Syntax() {
  return (
    <>
      <h2>Syntax</h2>
      <pre
        className={twMerge(
          "bg-primary-50",
          "p-4 text-sm",
          "rounded border-2 border-primary-100 dark:border-primary-500",
          " text-typography-primary-50 dark:text-typography-primary-50"
        )}
      >
        oklch(40.1% 0.123 21.57)
        <br />
        oklch(59.69% 0.156 49.77)
        <br />
        oklch(59.69% 0.156 49.77 / .5)
      </pre>
    </>
  )
}
