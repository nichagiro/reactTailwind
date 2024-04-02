import { FC, ReactNode } from "react"
import { Sizes } from "../../types"
import { sizeClass } from "./static"
import CloseIcon from "../../icons/CloseIcon"

interface Props {
  children: ReactNode,
  display: boolean,
  size: Sizes,
  onClose: () => void
}

const Modal: FC<Props> = ({ children, display = false, size = "md", onClose }) => {
  return (
    display ?
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className={`rounded-lg bg-white shadow-2xl ${sizeClass[size]}`}>
          <div className="flex justify-end cursor-pointer">
            <div style={{ marginTop: "-1rem" }} className="bg-slate-100 rounded-full p-1 text-slate-900">
              <CloseIcon onClick={() => onClose()} />
            </div>
          </div>
          <div className="p-8">
            {children}
          </div>
        </div>
      </div> : <></>
  )
}

export default Modal

