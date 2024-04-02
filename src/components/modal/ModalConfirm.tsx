import { FC } from "react"
import Button from "../button/Button"
import { ActionType, ColorsList } from "../../types"

interface Props {
  message?: string,
  display: boolean,
  buttonIcon?: ActionType,
  buttonColor: ColorsList,
  buttonText: string,
  title: string,
  onConfirm: () => void,
  onCancel: () => void,
}

const ModalConfirm: FC<Props> = ({ title, message, buttonColor, buttonText, display = false, buttonIcon, onCancel, onConfirm }) => {
  return (
    display ?
      <div className="fixed top-5 right-5 z-50">
        <div className="rounded-lg bg-white shadow-2xl max-w-screen-sm">
          <div className="p-4">
            <h2 className="text-lg font-bold">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {message}
            </p>
            <div className="mt-4 flex gap-2">
              <Button variant="soft" color={buttonColor} icon={buttonIcon} onClick={() => onConfirm()}>
                {buttonText}
              </Button>
              <Button variant="soft" color="slate" onClick={() => onCancel()}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div> : <></>
  )
}

export default ModalConfirm

