import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { disabled: true },
    }
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "indigo",
  },
  render: args =>
    <Button {...args} >Button</Button>
}

export const Icon: Story = {
  args: {
    color: "pink",
    icon: "delete"
  },
  render: args =>
    <Button {...args} >Children</Button>
}

export default meta;



