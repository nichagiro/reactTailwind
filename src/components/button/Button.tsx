import { ButtonHTMLAttributes, FC, ReactNode, } from 'react'
import { ActionType, ColorsList } from '../../types';
import { bg, style } from './static';
import ButtonIcon from './ButtonIcon';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  color: ColorsList;
  icon?: ActionType
}

const Button: FC<Props> = ({ children, color, icon, ...props }) => {
  return (
    <button
      {...props}
      className={`${bg[color]} ${style}`}
    >
      <div className='flex gap-1'>
        {icon && <ButtonIcon icon={icon} />} {children}
      </div>
    </button>
  );
};

export default Button;
