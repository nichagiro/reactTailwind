import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../components/tabs/Tabs';
import Alert from '../components/alert/Alert';


const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'UI/Tabs',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    data: [{
      name: "Description",
      value: "tab-1",
      render: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum saepe nemo. Porro saepe, pariatur ut molestiae harum aperiam aliquid aspernatur deleniti incidunt, rerum reiciendis consequuntur temporibus mollitia reprehenderit ullam!"
    }, {
      name: "Alert",
      value: "tab-2",
      render: <Alert title='Elemento JSX' color='rose' />
    }],
    color: 'rose',
    changeTab: tab => console.log(tab),
    disabled: false,
    defaultValue: "tab-2"
  }
}

export default meta;


