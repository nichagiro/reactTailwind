import { FC } from "react"
import { bg } from "./static"
import { ColorsList } from "../../types"

interface Props {
  message: string,
  color: ColorsList
}

const Badge: FC<Props> = ({ color, message }) => {
  return (
    <span className={`${bg[color]} whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm`} >
      {message}
    </span>
  )
}

export default Badge

