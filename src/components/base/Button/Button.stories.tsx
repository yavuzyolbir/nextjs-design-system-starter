import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/base/Button";
import { ChevronRight } from "@/components/base/Icons";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button Text",
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "auxiliary", "neutral"],
      control: { type: "select" },
    },
    variant: {
      options: ["filled", "outline", "lighter", "ghost"],
      control: { type: "select" },
    },
    block: {
      type: "boolean",
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
  name: "Primary With Icon",
};

export const Auxiliary: Story = {
  args: {
    color: "auxiliary",
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
  },
};

export const WithIcon: Story = {
  args: {
    iconRight: <ChevronRight />,
  },
};
