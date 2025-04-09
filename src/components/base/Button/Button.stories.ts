import type { Meta, StoryObj } from '@storybook/react';

import  Button from '@/components/base/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {type: 'text'}
    },
    href:{
      control: { type: 'text' },
      description: "If href is present, it is created with the “a” tag"
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'auxiliary', 'neutral'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Hello",
  },
};

export const Auxiliary: Story = {
  args: {
    children: "Hello",
    color: 'auxiliary'
  },
};
