import { FC, TextareaHTMLAttributes } from 'react'
import { ErrorMessage } from "@hookform/error-message"
import { useFormContext } from "react-hook-form"
import { ColorsList } from '../../types'
import { bg, classField } from './static'

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "id"> {
  label?: string,
  name: string,
  color: ColorsList
}

const RHFTextArea: FC<Props> = ({ label, name, color, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const desing = errors[name] ? "focus:border-red-400 focus:ring-red-300 bg-red-50 border-red-300" : bg[color];

  return (
    <div className='w-full'>
      <label className="block text-sm font-medium text-gray-900 ps-1">
        {label}
      </label>
      <textarea
        {...props}
        {...register(name)}
        id={name}
        className={`${desing} ${classField}`}
      />
      <div className="text-red-700 text-bold ps-1">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  )
}

export default RHFTextArea;
