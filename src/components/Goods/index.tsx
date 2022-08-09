import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface GoodsProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  brand: string;
  name: string;
}

interface HelloProps {
  bgColor?: string;
}

const GoodsBox = styled.div<HelloProps>`
  /* width: 40%; */
  /* height: 200px; */
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #000000;
`;

const Goods: React.FC<GoodsProps> = ({
  primary,
  backgroundColor,
  size,
  brand,
  name,
}) => {
  return (
    <GoodsBox bgColor={backgroundColor}>
      {brand} {name}
    </GoodsBox>
  );
};

export default Goods;
