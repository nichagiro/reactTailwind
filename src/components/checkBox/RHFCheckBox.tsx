import { FC, HTMLAttributes, } from 'react'
import { ErrorMessage } from "@hookform/error-message"
import { RegisterOptions, useFormContext } from "react-hook-form"
import { ColorsList } from '../../types'
import { bg, style } from './static'

interface Props extends Omit<HTMLAttributes<HTMLInputElement>, "id" | "type" | "className"> {
  label?: string,
  registerOptions?: RegisterOptions,
  name: string,
  color: ColorsList,
}

const RHFCheckbox: FC<Props> = ({ label, name, color, registerOptions, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const desing = errors[name] ? "focus:border-red-400 focus:ring-red-300 bg-red-50 border-red-300" : bg[color];

  return (
    <>
      <div className='flex flex-wrap'>
        <input
          {...props}
          {...register(name, registerOptions)}
          id={name}
          type='checkbox'
          className={`${desing} ${style}`}
        />
        <label className="block text-sm font-medium text-gray-900 ps-1">
          {label}
        </label>
      </div>
      <div className="text-red-700 text-bold ps-1">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </>
  )
}

export default RHFCheckbox;

