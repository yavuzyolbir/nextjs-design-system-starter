import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/base/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Placeholder text...",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};
