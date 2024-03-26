import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { FC, ReactNode } from 'react';
import { DevTool } from "@hookform/devtools";
import CheckBox from '../components/checkBox/CheckBox';
import Button from '../components/button/Button';
import colors from '../static/colors';

const onSubmit: SubmitHandler<{ input: boolean }> = async data => {
  alert(JSON.stringify(data))
}

const resolver: Resolver<{ input: boolean }> = async ({ input }) => {
  return {
    values: input ? input : false,
    errors: !input
      ? {
        input: {
          type: "required",
          message: "This is required.",
        },
      }
      : {},
  }
}

const Form: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm<{ input: boolean }>({ resolver });
  return (
    <>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          <div className='pt-4'>
            <Button color='fuchsia'>Click</Button>
          </div>
        </form>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  )
}

const Form2: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm<{ input: boolean }>({ resolver });
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
  title: 'UI/CheckBox',
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
    label: "Input"
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
          <CheckBox {...args} title={color} name={color} color={color} label={color} key={color} />
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

