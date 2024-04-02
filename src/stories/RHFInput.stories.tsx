// librarys
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// types
import type { Meta, StoryObj } from '@storybook/react';
import { FC, ReactNode } from 'react';

// components
import Input from '../components/input/RHFInput';
import Button from '../components/button/Button';
import TrashIcon from '../icons/TrashIcon';

// data static
import inputTypes from '../static/inputType';

const onSubmit: SubmitHandler<{ input: string }> = async data => {
  alert(JSON.stringify(data))
}

const Form: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm<{ input: string }>();
  return (
    <>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          <div className='pt-4'>
            <Button color='slate'>Click</Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'React Hook Form/Input',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Form >
        <Story />
      </Form>
    ),
  ],
  argTypes: {
    name: {
      control: { disabled: true },
    },
    icon: {
      control: { disabled: true },
    },
    type: {
      options: inputTypes
    }
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    name: "input",
    label: "Input",
    color: "indigo",
    registerOptions: {
      required: {
        message: "Field Required",
        value: true
      },
      maxLength: {
        message: "Max Length 10 letters",
        value: 10
      }
    },
  }
}

export const Icon: Story = {
  args: {
    name: "input",
    label: "Icon Input",
    color: "pink",
    icon: <TrashIcon />
  }
}


export const AutoIcon: Story = {
  args: {
    type: "password",
    name: "input",
    label: "Icon Input",
    color: "blue",
    autoIcon: "cellPhone"
  }
}


export default meta;


