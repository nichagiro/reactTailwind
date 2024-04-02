// librarys
import { FC, HTMLAttributes, useMemo } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

// statics
import { ColorsList, Sizes } from "../../types"
import { bg, bgFill, radioStyle, sizeClass, style } from "./static"

// components
import { ErrorMessage } from "@hookform/error-message"

type Data = {
  label: string,
  value: string | number,
}

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, "type" | "className" | "id"> {
  data: Data[],
  name: string,
  registerOptions: RegisterOptions,
  color: ColorsList,
  label: string,
  size?: Sizes
}

const RHFRadio: FC<Props> = ({ color, data, name, registerOptions, size = "md", label }) => {
  const { register, formState: { errors } } = useFormContext();
  const desing = errors[name] ? "focus:border-red-400 focus:ring-red-300 bg-red-50 border-red-300" : bg[color];
  const radioDesing = errors[name] ? `checked:bg-red-400 focus:border-red-400 focus:ring-red-300 ${radioStyle}` : `${bgFill[color]} ${radioStyle}`

  return (
    <>
      <div className="flex flex-wrap">
        <label className="block text-sm font-medium text-gray-900 ps-1">
          {label}
        </label>
        <div className="text-red-700 text-sm ps-2">
          <ErrorMessage errors={errors} name={name} />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {
          useMemo(() =>
            data.map((item, index) => (
              <label key={index} className={`${desing} ${style} ${sizeClass[size]}`}>
                <div className="flex flex-wrap gap-2">
                  <p className="text-gray-700">{item.label}</p>
                  <input
                    type="radio"
                    value={item.value}
                    id={`${name}-${index}`}
                    className={radioDesing}
                    {...register(name, registerOptions)}
                  />
                </div>
              </label>
            )), [data, name, registerOptions, desing, radioDesing, register, size]
          )
        }
      </div>
    </>
  )
}

export default RHFRadio

