import type { Meta, StoryObj } from '@storybook/react';
import Table from '../components/table/Table';
import { columns, data } from '../static/dataTable';


const meta: Meta<typeof Table> = {
  component: Table,
  title: 'UI/Table',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes:{
    excel:{
      description: "Export Button Excel"
    }
  }
}

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    color: "fuchsia",
    columns: columns,
    data: data,
    excel: true,
    defaultSelects: [1,3,7, 5],
    itemsPerPage: 7,
    multi: true,
    onSelect: row => console.log(row),
    resetSelection: false,
    defaultOrder: {
      column: "id",
      direction: "asc"
    },
  }
}

export const Loading: Story = {
  args: {
    color: "indigo",
    columns: columns,
    data: data,
    itemsPerPage: 5,
    loading: true
  }
}

export const WithOutData: Story = {
  args: {
    color: "sky",
    data: [],
    columns: columns,
  }
}

export default meta;