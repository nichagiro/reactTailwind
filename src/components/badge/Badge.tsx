import { FC, HTMLAttributes } from "react"
import { bg } from "./static"
import { ColorsList } from "../../types"

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "className"> {
  message: string,
  color: ColorsList
}

const Badge: FC<Props> = ({ color, message, ...props }) => {

  return (
    <span {...props} className={`${bg[color]} whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm`} >
      {message}
    </span>
  )
}

export default Badge

