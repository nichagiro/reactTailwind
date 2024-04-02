// librarys
import { FC, HTMLInputTypeAttribute, ReactNode } from 'react'
import { ErrorMessage } from "@hookform/error-message"
import { RegisterOptions, useFormContext } from "react-hook-form"

// statics
import { bg, inputClas, sizeClass } from './static'
import { ColorsList, InputIcons, Sizes } from '../../types'

// icons
import InputIcon from './InputIcon'

interface Props {
  name: string,
  color: ColorsList,
  label?: string,
  icon?: ReactNode,
  autoIcon?: InputIcons,
  registerOptions?: RegisterOptions,
  type?: HTMLInputTypeAttribute,
  size?: Sizes
}

const RHFInput: FC<Props> = ({ label, name, color, registerOptions, size = "md", autoIcon, icon = false, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const desing = errors[name] ? "focus:border-red-400 focus:ring-red-300 bg-red-50 border-red-300" : bg[color];
  const paddingX = icon || autoIcon ? "px-10" : "px-3";

  return (
    <div className='w-full'>
      <label className="block text-sm font-medium text-gray-900 ps-1">
        {label}
      </label>
      <div className="relative flex items-center">
        <span className="absolute pt-2 mx-3 text-gray-400">
          {autoIcon ? <InputIcon type={autoIcon} inputName={name} /> : icon}
        </span>
        <input
          {...props}
          {...register(name, registerOptions)}
          className={`${desing} ${inputClas} ${sizeClass[size]} ${paddingX}`}
          id={name}
        />
      </div>
      <div className="text-red-700 text-bold ps-1">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </div>
  )
}

export default RHFInput;

