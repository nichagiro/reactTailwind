import { FC, HTMLAttributes, ReactNode, useMemo, } from 'react'
import { ActionType, ColorsList, Sizes } from '../../types';
import { bg, bgSimple, bgSoft, styleButton, sizeClass } from './static';
import ButtonIcon from './ButtonIcon';
import SpinIcon from '../../icons/SpinIcon';

type Variant = "normal" | "soft" | "simple"
type ButtonType = "button" | "submit" | "reset";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void,
  children: ReactNode;
  color: ColorsList;
  icon?: ActionType,
  variant?: Variant,
  type?: ButtonType
  size?: Sizes,
  loading?: boolean,
  disabled?: boolean
}

const Button: FC<Props> = ({ children, color, icon, size = "md", variant = "normal", disabled = false, loading = false, ...props }) => {

  const design = useMemo(() => {
    switch (variant) {
      case "soft":
        return bgSoft[color]
      case "simple":
        return `${bgSimple[color]} border hover:text-white`
      default:
        return `${bg[color]} text-white transition hover:scale-105 hover:shadow focus:outline-none focus:ring focus:ring`
    }
  }, [variant, color])

  return (
    <button
      {...props}
      className={`${design} ${styleButton} ${sizeClass[size]}`}
      disabled={disabled || loading}
    >
      <div className='flex items-center	gap-1'>
        {
          loading ? (
            <>
              <SpinIcon className='w-4 h-4'/>
            </>
          ) : (
            <>
              {icon && <ButtonIcon icon={icon} />}
            </>
          )
        }
        {children}
      </div>
    </button>
  );
};

export default Button;
