import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/badge/Badge';
import colors from '../static/colors';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'UI/Badge',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs']
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Badge",
    color: "indigo"
  }
}

export const All: Story = {
  args: {
    message: "Badge",
  },
  argTypes: {
    color: {
      control: {
        disabled: true
      }
    },
    message: {
      control: {
        disabled: true
      }
    },
  },
  render: args => (
    <div className='flex flex-wrap gap-2'>
      {
        colors.map(color => (
          <Badge {...args} color={color} message={color} />
        ))
      }
    </div>
  )
}


export default meta;



