import { FC, HTMLAttributes } from "react"

type Props = Omit<HTMLAttributes<HTMLOrSVGElement>, "xmlns" | "fill" | "viewBox" | "strokeWidth" | "stroke">

const DownIcon: FC<Props> = ({ className = "w-6 h-6", ...props }) => {
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
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

export default DownIcon
