// librarys
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// types
import { FC, ReactNode } from 'react';

// components
import CheckBox from '../components/checkBox/RHFCheckBox';
import Button from '../components/button/Button';

// statics
import colors from '../static/colors';

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

const Form2: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm<{ input: boolean }>();
  return (
    <FormProvider {...methods} >
      <form>
        {children}
      </form>
    </FormProvider>
  )
}

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: 'React Hook Form/CheckBox',
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
    name: "input",
    label: "Input",
    color: "amber",
    registerOptions: {
      required: {
        message: "Required Field",
        value: true
      }
    }
  },
  decorators: [
    (Story) => (
      <Form >
        <Story />
      </Form>
    ),
  ],
}

export const All: Story = {
  render: args => (
    <div className='flex flex-wrap gap-2'>
      {
        colors.map(color => (
          <CheckBox
            {...args}
            name={color}
            color={color}
            label={color}
            key={color}
            registerOptions={{
              value: true
            }}
          />
        ))
      }
    </div>
  ),
  decorators: [
    (Story) => (
      <Form2 >
        <Story />
      </Form2>
    ),
  ]
}

export default meta;

