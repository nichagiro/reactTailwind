import { FC, SelectHTMLAttributes, useMemo } from "react"
import { ErrorMessage } from "@hookform/error-message"
import { useFormContext } from "react-hook-form"
import { bg, selectClass } from "./static"
import { ColorsList } from "../../types"

type Options = {
  value: number | string,
  name: string
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[],
  label?: string,
  name: string,
  color: ColorsList
}

const Select: FC<Props> = ({ options, name, color, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const desing = errors[name] ? "focus:border-red-400 focus:ring-red-300 bg-red-50 border-red-300" : bg[color];

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900 ps-1">
        {props.label}
      </label>
      <select
        {...props}
        {...register(name)}
        id={name}
        className={`${desing} ${selectClass}`}
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
      <div className="text-red-700 text-bold ps-1">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  )
}

export default Select;
