import { FC, HTMLAttributes } from "react"

type Props = Omit<HTMLAttributes<HTMLOrSVGElement>, "xmlns" | "fill" | "viewBox" | "strokeWidth" | "stroke">

const LeftIcon: FC<Props> = ({ className = "w-6 h-6", ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  )
}

export default LeftIcon
