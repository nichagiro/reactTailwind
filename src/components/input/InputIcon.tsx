// librarys
import { FC, useCallback, useMemo } from "react"

// types
import { InputIcons } from "../../types"

// icons
import CreditCardIcon from "../../icons/CreditCardIcon"
import EmailIcon from "../../icons/EmailIcon"
import UserIcon from "../../icons/UserIcon"
import EyeIcon from "../../icons/EyeIcon"
import CellPhoneIcon from "../../icons/CellPhoneIcon"
import SearchIcon from "../../icons/SearchIcon"
import FileIcon from "../../icons/FileIcon"

interface Props {
  type: InputIcons,
  inputName: string
}

const InputIcon: FC<Props> = ({ type, inputName }) => {

  const onEyeIcon = useCallback(() => {
    const component = document.getElementById(inputName)! as HTMLInputElement;
    component.type === "password"
      ? component.type = "text"
      : component.type = "password"

  }, [inputName])

  const Component = useMemo(() => {
    switch (type) {
      case "creditCard":
        return <CreditCardIcon className="w-5 h-5" />
      case "email":
        return <EmailIcon className="w-5 h-5" />
      case "password":
        return <div className="cursor-pointer"><EyeIcon onClick={() => onEyeIcon()} className="w-5 h-5" /></div>
      case "user":
        return <UserIcon className="w-5 h-5" />
      case "cellPhone":
        return <CellPhoneIcon className="w-5 h-5" />
      case "search":
        return <SearchIcon className="w-5 h-5" />
      case "file":
        return <FileIcon className="w-5 h-5" />
    }
  }, [type, onEyeIcon])

  return Component
}

export default InputIcon

