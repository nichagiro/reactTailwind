// librarys
import { FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

// type
import type { Meta, StoryObj } from '@storybook/react';
import { FC, ReactNode } from 'react';

// Rcomponents
import Select from '../components/select/Select';
import Button from '../components/button/Button';

// static
import colors from '../static/colors';

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
            <Button color='emerald'>Click</Button>
          </div>
        </form>
      </FormProvider>
      <DevTool control={methods.control} />
    </>
  )
}

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'UI/Select',
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
    options: {
      control: {
        disabled: true,
      },
    }
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "input",
    label: "Select",
    color: "indigo",
    options: colors.map(color => ({ value: color, name: color })),
  }
}

export default meta;


