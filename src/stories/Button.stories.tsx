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
    onClick: () => null,
  },
  render: args =>
    <Button {...args} >Button</Button>
}

export const Icon: Story = {
  args: {
    color: "pink",
    onClick: () => null,
    icon: "delete"
  },
  render: args =>
    <Button {...args} >Children</Button>
}

export const Variant: Story = {
  args: {
    color: "pink",
    icon: "delete",
    variant: "soft",
    onClick: () => null,
  },
  render: args =>
    <Button {...args} >Variant</Button>
}


export const Size: Story = {
  args: {
    color: "orange",
    onClick: () => null,
    size: 'sm'
  },
  render: args =>
    <Button {...args} >Size</Button>
}

export const Loading: Story = {
  args: {
    color: "emerald",
    onClick: () => null,
    loading: true
  },
  render: args =>
    <Button {...args} >Loading</Button>
}



export default meta;



