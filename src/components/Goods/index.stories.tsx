import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Goods from "./index";

export default {
  title: "Goods",
  component: Goods,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Goods>;

const Template: ComponentStory<typeof Goods> = (args) => <Goods {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Goods",
};
