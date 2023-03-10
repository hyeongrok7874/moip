import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Goods from ".";

export default {
  title: "Goods",
  component: Goods,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Goods>;

const Template: ComponentStory<typeof Goods> = (args) => <Goods {...args} />;

export const basic = Template.bind({});

basic.args = {
  rank: 1,
  data: {
    img: "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_125.jpg",
    brand: "노스페이스",
    name: "NJ1DN75A 남성 1996 에코 눕시 자켓",
    price: "339,000",
    link: "https://www.musinsa.com/app/goods/2482269?loc=goods_rank",
  },
};
