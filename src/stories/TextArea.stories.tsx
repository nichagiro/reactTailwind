// librarys
import { FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

// type
import type { Meta, StoryObj } from '@storybook/react';
import { FC, ReactNode } from 'react';

// Rcomponents
import TextArea from '../components/textArea/TextArea';
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
          <div className='pt-4 flex justify-end'>
            <Button color='lime'>Click</Button>
          </div>
        </form>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  )
}

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'UI/TextArea',
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
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "input",
    label: "TextArea",
    color: "indigo",
  }
}

export default meta;


