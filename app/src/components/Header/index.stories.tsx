import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from ".";

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const basic = Template.bind({});
