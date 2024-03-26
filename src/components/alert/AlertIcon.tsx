import { FC, useMemo } from "react"
import { Status } from "../../types"

// icons
import InfoIcon from "../../icons/InfoIcon"
import ErrorIcon from "../../icons/ErrorIcon"
import SuccessIcon from "../../icons/SuccessIcon"
import WarningIcon from "../../icons/WarningIcon"

const AlertIcon: FC<{ icon: Status }> = ({ icon }) => {

  const Component = useMemo(() => {
    switch (icon) {
      case "error":
        return <ErrorIcon />
      case "info":
        return <InfoIcon />
      case "success":
        return <SuccessIcon />
      case "warning":
        return <WarningIcon />
    }
  }, [icon])

  return Component
}

export default AlertIcon

