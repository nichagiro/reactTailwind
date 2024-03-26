import { FC, HTMLAttributes, ReactNode, useState } from "react"
import { ColorsList } from "../../types"
import { bg } from "./static"
import CollapseIcon from "../../icons/CollapseIcon"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
  title?: string,
  color: ColorsList,
  upDown: boolean
}

const Panel: FC<Props> = ({ color, upDown, title, children, ...props }) => {
  const [expand, setExpand] = useState<boolean>(false)

  return (
    <div {...props} className="shadow border border-gray-300 rounded mb-5">
      <div className={`${bg[color]} w-full text-white px-5 py-2 font-bol flex justify-between`}>
        <h2>
          {title}
        </h2>
        {upDown && <CollapseIcon onClick={() => setExpand(!expand)}  className="w-6 h-6 cursor-pointer" />}
      </div>
      <section className={`${expand ? "hidden" : "visible"} p-5`}>
        {children}
      </section>
    </div >
  )
}

export default Panel