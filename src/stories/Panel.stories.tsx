import type { Meta, StoryObj } from '@storybook/react';
import Panel from '../components/panel/Panel';

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: 'UI/Panel',
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
    title: "TITULO PRUEBA",
  },
  render: args => (
    <Panel {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem eveniet ab, cumque odio earum vel ullam esse amet beatae nulla voluptas possimus minima magni delectus labore facere iure pariatur?
    </Panel>
  )
}

export const UpDown: Story = {
  args: {
    color: "blue",
    title: "TITULO PRUEBA",
    upDown: true
  },
  render: args => (
    <Panel {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem eveniet ab, cumque odio earum vel ullam esse amet beatae nulla voluptas possimus minima magni delectus labore facere iure pariatur?
    </Panel>
  )
}

export default meta;


