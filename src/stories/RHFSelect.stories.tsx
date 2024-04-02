// librarys
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// type
import type { Meta, StoryObj } from '@storybook/react';
import { FC, ReactNode } from 'react';

// Rcomponents
import Select from '../components/select/RHFSelect';
import Button from '../components/button/Button';

// static
import colors from '../static/colors';

// icons
import InfoIcon from '../icons/InfoIcon';

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
          <div className='pt-4 flex justify-end'>
            <Button color='slate'>Click</Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'React Hook Form/Select',
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
    },
    icon: {
      control: { disabled: true },
    }
  }
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    multiple: false,
    name: "input",
    label: "Select",
    color: "indigo",
    options: colors.map(color => ({ value: color, name: color })),
    registerOptions: {
      required: {
        message: "Required Field",
        value: true
      }
    }
  }
}
export const IconSelect: Story = {
  args: {
    name: "inputIcon",
    label: "Icon Select",
    color: "indigo",
    options: colors.map(color => ({ value: color, name: color })),
    icon: <InfoIcon />
  }
}


export default meta;


