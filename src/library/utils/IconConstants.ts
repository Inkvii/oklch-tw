type IconConstant = {
  rem: string
  px: number
}

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"

const IconConstants: Record<Size, IconConstant> = {
  xs: {
    rem: "0.75rem",
    px: 12,
  },
  sm: {
    rem: "1rem",
    px: 16,
  },
  md: {
    rem: "1.25rem",
    px: 20,
  },
  lg: {
    rem: "1.5rem",
    px: 24,
  },
  xl: {
    rem: "2rem",
    px: 32,
  },
  xxl: {
    rem: "2.5rem",
    px: 40,
  },
  xxxl: {
    rem: "3rem",
    px: 48,
  },
} as const

export default IconConstants
