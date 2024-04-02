import type { Meta, StoryObj } from '@storybook/react';
import Load from '../components/load/Load';

const meta: Meta<typeof Load> = {
  component: Load,
  title: 'UI/Load',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    display: true,    
  },
};

export default meta;


