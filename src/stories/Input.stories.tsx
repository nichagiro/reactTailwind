import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { FC, ReactNode } from 'react';
import { DevTool } from "@hookform/devtools";
import Input from '../components/input/Input';
import Button from '../components/button/Button';

const onSubmit: SubmitHandler<{ input: string }> = async data => {
  alert(JSON.stringify(data))
}

const resolver: Resolver<{ input: string }> = async ({ input }) => {
  return {
    values: input ? input : "",
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
  const methods = useForm<{ input: string }>({ resolver });
  return (
    <>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          <div className='pt-4'>
            <Button color='amber'>Click</Button>
          </div>
        </form>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  )
}

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'UI/Input',
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
    }
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "input",
    label: "Input",
    color: "indigo"
  }
}

export default meta;


