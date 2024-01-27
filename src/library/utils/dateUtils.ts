import { parseAbsoluteToLocal } from "@internationalized/date"

export function formatDatetime(date: string | number | null | undefined): string {
  if (date === undefined || date === null) return ""

  const parsedDate = typeof date === "string" ? new Date(Date.parse(date)) : new Date(date)

  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(parsedDate)
}

export function parseDatetime(date: string): Date {
  return new Date(Date.parse(date))
}

export function parseDateFieldValue(value: string | undefined) {
  if (value === undefined || value === "") return parseAbsoluteToLocal(new Date().toISOString())

  try {
    return parseAbsoluteToLocal(new Date(parseInt(value)).toISOString())
  } catch (err) {
    return parseAbsoluteToLocal(new Date().toISOString())
  }
}
