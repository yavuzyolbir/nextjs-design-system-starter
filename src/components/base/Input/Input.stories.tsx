import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/base/Input";

import { At } from "@/components/base/Icons";

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

export const WithLabelAndInfoText: Story = {
  args: {
    label: "Label Text",
    infoText: "This is info tex",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <At />,
  },
};
