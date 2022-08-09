import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";

interface GoodsProps {
  primary?: boolean;
  backgroundColor?: string;
  img: string;
  size?: "small" | "medium" | "large";
  brand: string;
  name: string;
  price: string;
}

interface HelloProps {
  bgColor?: string;
}

const GoodsBox = styled.div<HelloProps>`
  display: inline-block;
  background-color: ${({ bgColor }) => bgColor || "#ffe7bf"};
  border-radius: 100%;
  padding: 20px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Detail = styled.div`
  width: 200px;
`;

const Brand = styled.p`
  color: #78dec7;
`;

const Name = styled.div`
  color: #080808;
  overflow-x: hidden;
  white-space: nowrap;
`;

const Price = styled.p`
  text-align: center;
`;

const Goods: React.FC<GoodsProps> = ({
  primary,
  backgroundColor,
  img,
  size,
  brand,
  name,
  price,
}) => {
  return (
    <GoodsBox bgColor={backgroundColor}>
      <Image
        src={img}
        alt={name}
        width="150"
        height="150"
        css={css`
          border-radius: 100%;
        `}
      />
      <Detail>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Detail>
    </GoodsBox>
  );
};

export default Goods;
