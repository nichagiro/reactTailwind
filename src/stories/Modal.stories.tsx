import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/modal/Modal';
import Button from '../components/button/Button';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modals/Modal',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: {
        disabled: true
      }
    }
  },
  tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    display: true,
    size: "sm",
    onClose: () => alert("Close Modal")
  },
  render: args =>
    <Modal {...args} >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </p>
      <div className='flex justify-end mt-5'>
        <Button
          onClick={() => null}
          color='emerald'
          icon='save'
        >
          Button
        </Button>
      </div>
    </Modal>
};
export default meta;


