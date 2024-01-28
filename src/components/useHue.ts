import { CSSProperties } from "react"

export default function useHue(hue: "primary" | "secondary" | "auto") {
  switch (hue) {
    case undefined:
    case null:
    case "primary":
      return { "--hue": "var(--primary-hue)" } as CSSProperties
    case "secondary":
      return { "--hue": "var(--secondary-hue)" } as CSSProperties
    default:
      throw new Error(`Unknown css variable [${hue}]`)
  }
}
