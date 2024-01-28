"use client"

import { useEffect, useState } from "react"

export default function HueInput(props: { cssVariableName: string }) {
  const [hue, setHue] = useState<string>("0")

  useEffect(() => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(props.cssVariableName)
    setHue(value)
  }, [])

  return (
    <fieldset className={"flex flex-col"}>
      <label>Change {props.cssVariableName} just by moving hue</label>
      <input
        type={"range"}
        min={0}
        max={360}
        list={"markers"}
        className={"accent-primary-400 dark:accent-primary-400"}
        value={hue}
        onChange={(e) => {
          const hue = e.target.value
          setHue(hue)
          document.documentElement.style.setProperty(props.cssVariableName, hue)
        }}
      />
      <datalist
        id={"markers"}
        className={
          "flex justify-between text-typography-primary-50 dark:text-typography-primary-950 accent-primary-400"
        }
      >
        <option value={0} label={"red"} />
        <option value={60} label={"orange"} />
        <option value={120} label={"green"} />
        <option value={180} label={"turqoise"} />
        <option value={240} label={"blue"} />
        <option value={300} label={"purple"} />
        <option value={360} label={"pinkish"} />
      </datalist>
    </fieldset>
  )
}
