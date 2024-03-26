import { FC, HTMLAttributes, useState } from "react"
import { styles } from "./static"
import { ColorsList, Status } from "../../types"
import CloseIcon from "../../icons/CloseIcon"
import AlertIcon from "./AlertIcon"

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "role" | "className"> {
  title: string,
  color: ColorsList,
  message?: string,
  close?: boolean
  icon?: Status
}

const Alert: FC<Props> = ({ title, color, message, icon, close, ...props }) => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    display ?
      <div {...props} role="alert" className={`${styles[color]?.div} rounded border-s-4 p-4 w-full`} >
        <div className={`${styles[color]?.strong} flex justify-between`}>
          <strong className="block font-medium flex gap-2">
            {icon && <AlertIcon icon={icon} />} {title}
          </strong>
          {
            close &&
            <div className="cursor-pointer" onClick={() => setDisplay(false)}>
              <CloseIcon />
            </div>
          }
        </div>
        {
          message &&
          <p className={`${styles[color]?.message} mt-2 text-sm `}>
            {message}
          </p>
        }
      </div>
      :
      <></>
  )
}

export default Alert


