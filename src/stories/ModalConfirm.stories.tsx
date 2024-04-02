import type { Meta, StoryObj } from '@storybook/react';
import ModalConfirm from '../components/modal/ModalConfirm';

const meta: Meta<typeof ModalConfirm> = {
  component: ModalConfirm,
  title: 'Modals/ModalConfirm',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    display: true,
    title: "Estas seguro de eliminar esto?",
    message: "No se podra recuperar del sistema una hecha la acción.",
    buttonColor: "rose",
    buttonIcon: "delete",
    buttonText: "Eliminar",
  }
};
export default meta;


