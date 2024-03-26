import { FC, useMemo } from "react"
import { ActionType } from "../../types"

// icons
import TrashIcon from "../../icons/TrashIcon"
import ExportIcon from "../../icons/ExportIcon"
import FileIcon from "../../icons/FileIcon"
import PencilIcon from "../../icons/PencilIcon"
import SuccessIcon from "../../icons/SuccessIcon"

const ButtonIcon: FC<{ icon: ActionType }> = ({ icon }) => {
  const Component = useMemo(() => {
    switch (icon) {
      case "delete":
        return <TrashIcon className="w-5 h-5" />
      case "export":
        return <ExportIcon className="w-5 h-5" />
      case "file":
        return <FileIcon className="w-5 h-5" />
      case "save":
        return <SuccessIcon className="w-5 h-5" />
      case "update":
        return <PencilIcon className="w-5 h-5" />
    }
  }, [icon])

  return Component
}

export default ButtonIcon

