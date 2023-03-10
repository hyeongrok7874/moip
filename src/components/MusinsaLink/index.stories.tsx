import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MusinsaLink from ".";

export default {
  title: "MusinsaLink",
  component: MusinsaLink,
  parameters: {
    layout: "padded",
  },
} as ComponentMeta<typeof MusinsaLink>;

const Template: ComponentStory<typeof MusinsaLink> = (args) => (
  <MusinsaLink {...args} />
);

export const basic = Template.bind({});
