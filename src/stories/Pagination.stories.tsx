import type { Meta, StoryObj } from '@storybook/react';
import Paginate from '../components/pagination/Pagination';
import { FC, useState } from 'react';
import { ColorsList } from '../types';
import  colors  from '../static/colors';

interface Props {
  totalPages: number;
  onPageChange: (currentPage: number) => void,
  current: number,
  color: ColorsList,
  theme?: "dark" | "light"
}

const Pagination: FC<Props> = ({ totalPages, onPageChange, current, color, theme }) => {
  const [now, setNow] = useState(current);

  const onChange = (page: number) => {
    setNow(page);
    onPageChange(page)
  }

  return (
    <Paginate
      color={color}
      current={now}
      totalPages={totalPages}
      onPageChange={page => onChange(page)}
      theme={theme}
    />
  )
}

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'UI/Pagination',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: "radio"
      },
      options: ['dark', 'light'],
    },
    color: {
      control: {
        type: "select"
      },
      options: colors,
    },
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "indigo",
    current: 2,
    onPageChange: () => null,
    totalPages: 10,
    theme: "light"
  }
}

export default meta;


