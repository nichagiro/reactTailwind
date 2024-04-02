// librarys
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// types
import { FC, ReactNode } from 'react';

// components
import Radio from '../components/radio/RHFRadio';
import Button from '../components/button/Button';

const onSubmit: SubmitHandler<{ input: boolean }> = async data => {
  alert(JSON.stringify(data))
}

const Form: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm<{ input: boolean }>();
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

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'React Hook Form/Radio',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { disabled: true },
    }
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Radio Input",
    color: "teal",
    label: "Choose one",
    registerOptions: {
      required: {
        message: "Required Field",
        value: true,
      }
    },
    data: [
      {
        label: "Nicolas",
        value: 10
      }, {
        label: "Angela",
        value: 4
      }
    ]
  },
  decorators: [
    (Story) => (
      <Form >
        <Story />
      </Form>
    ),
  ],
}

export default meta;

