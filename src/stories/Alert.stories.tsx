import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../components/alert/Alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'UI/Alert',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],    
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "indigo",
    title: "Alerta",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, dolorum dicta, cum rerum accusamus nam officia voluptas doloribus amet laudantium ut! Assumenda eligendi nobis consectetur mollitia nam totam ut voluptatem."
  },
};

export const Close: Story = {
  args: {
    close: true,
    color: "amber",
    title: "Alerta",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, dolorum dicta, cum rerum accusamus nam officia voluptas doloribus amet laudantium ut! Assumenda eligendi nobis consectetur mollitia nam totam ut voluptatem."
  },
};

export const Icon: Story = {
  args: {
    icon: "error",
    close: true,
    color: "pink",
    title: "Icon Alert",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, dolorum dicta, cum rerum accusamus nam officia voluptas doloribus amet laudantium ut! Assumenda eligendi nobis consectetur mollitia nam totam ut voluptatem."
  },
};

export default meta;


