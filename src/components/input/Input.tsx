import { FC, InputHTMLAttributes } from 'react'
import { ErrorMessage } from "@hookform/error-message"
import { useFormContext } from "react-hook-form"
import { bg, inputClas } from './static'
import { ColorsList } from '../../types'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "id"> {
  label?: string,
  name: string,
  color: ColorsList,
}

const Input: FC<Props> = ({ label, name, color, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const desing = errors[name] ? "focus:border-red-400 focus:ring-red-300 bg-red-50 border-red-300" : bg[color];

  return (
    <div className='w-full'>
      <label className="block text-sm font-medium text-gray-900 ps-1">
        {label}
      </label>
      <input
        {...props}
        {...register(name)}
        className={`${desing} ${inputClas}`}
        id={name}
      />
      <div className="text-red-700 text-bold ps-1">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  )
}

export default Input;
