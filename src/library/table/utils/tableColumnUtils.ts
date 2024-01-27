export function deriveColumnsFromData<T>(data?: T[]) {
  return Object.keys(data?.[0] ?? []).map((col) => {
    const name = col
      // insert a space between lower & upper
      .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase()
      })

    return {
      accessorKey: col,
      header: name,
      id: col,
    }
  })
}
