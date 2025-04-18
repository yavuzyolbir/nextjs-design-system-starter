import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "@/components/base/Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  args: {
    image: "https://www.yavuzyolbir.com/logo.png",
    name: "Yavuz Yolbir",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const NoImage: Story = {
  args: {
    image: "",
  },
};
