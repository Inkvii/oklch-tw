export type Props = {}
export default function ColorPalette(props: Props) {
  return (
    <div className={"flex flex-col w-1/3"}>
      {[
        ["bg-primary-50", "text-typography-primary/65"],
        ["bg-primary-100", "text-typography-primary/70"],
        ["bg-primary-200", "text-typography-primary/80"],
        ["bg-primary-300", "text-typography-primary/90"],
        ["bg-primary-400", "text-typography-primary"],
        ["bg-primary-500", "text-typography-primary-dark/95"],
        ["bg-primary-600", "text-typography-primary-dark/70"],
        ["bg-primary-700", "text-typography-primary-dark/60"],
        ["bg-primary-800", "text-typography-primary-dark/55"],
        ["bg-primary-900", "text-typography-primary-dark/60"],
        ["bg-primary-950", "text-typography-primary-dark/50"],
      ].map((background) => (
        <div
          key={background[0]}
          className={`h-20 ${background[0]} flex justify-center px-4 items-center first:rounded-t-xl last:rounded-b-xl ${background[1]}`}
        >
          {background[1]}
        </div>
      ))}
    </div>
  )
}