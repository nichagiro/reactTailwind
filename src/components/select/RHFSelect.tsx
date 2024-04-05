// librarys
import { FC, HTMLAttributes, ReactNode, useMemo } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

// components
import { ErrorMessage } from "@hookform/error-message"
import SpinIcon from "../../icons/SpinIcon"

// static
import { bg, selectClass, sizeClass } from "./static"
import { ColorsList, Sizes } from "../../types"

type Options = {
  value: number | string,
  name: string
}
interface Props extends Omit<HTMLAttributes<HTMLSelectElement>, "id" | "className"> {
  label?: string,
  icon?: ReactNode,
  registerOptions?: RegisterOptions,
  options: Options[],
  name: string,
  color: ColorsList,
  multiple?: boolean,
  size?: Sizes,
  loading?: boolean,
  disabled?: boolean
}

const RHFSelect: FC<Props> = ({ options, name, color, registerOptions, icon, label, loading = false, size = "md", disabled = false, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const desing = errors[name] ? "focus:border-red-400 focus:ring-red-300 bg-red-50 border-red-300" : bg[color];
  const padding = icon || loading ? "px-10" : "px-3"

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900 ps-1">
        {label}
      </label>
      <div className="relative flex items-center">
        <span className="absolute pt-2 mx-3 text-gray-400">
          {loading ? <SpinIcon /> : icon}
        </span>
        <select
          {...props}
          {...register(name, registerOptions)}
          id={name}
          disabled={disabled || loading}
          className={`${desing} ${selectClass} ${padding} ${sizeClass[size]}`}
        >
          <option value="">Seleccione</option>
          {
            useMemo(
              () =>
                options.map((opt, index) =>
                  <option value={opt.value} key={index}>
                    {opt.name}
                  </option>
                ),
              [options]
            )
          }
        </select>
      </div>
      <div className="text-red-700 text-bold ps-1">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  )
}

export default RHFSelect;


