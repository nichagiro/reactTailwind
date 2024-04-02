import { FC, HTMLAttributes } from "react"

type Props = Omit<HTMLAttributes<HTMLOrSVGElement>, "xmlns" | "fill" | "viewBox" | "strokeWidth" | "stroke">

const SpinIcon: FC<Props> = ({ className = "w-6 h-6", ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.1}
      stroke="currentColor"
      className={`${className} animate-spin`}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export default SpinIcon