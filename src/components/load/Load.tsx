import { FC, useMemo } from "react"
import style from "./load.module.css"
import spiner from "./spiner.module.css"
import loading from "./loading.module.css"
import dots from "./dots.module.css"

type Variant = "default" | "spinner" | "loading" | "dots"

interface Props {
  display?: boolean,
  text?: string,
  variant?: Variant
}

const Load: FC<Props> = ({ display = false, text, variant = "default" }) => {
  const desing = useMemo(() => {
    switch (variant) {
      case "spinner":
        return spiner.loader
      case "loading":
        return loading.loader
      case "dots":
        return dots.loader
      default:
        return style.loader
    }
  }, [variant])

  return (
    display &&
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className={desing} />
      {text}
    </div>
  )
}

export default Load