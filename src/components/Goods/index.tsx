import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";

interface GoodsProps {
  link: string;
  rank: number;
  backgroundColor?: string;
  img: string;
  brand: string;
  name: string;
  price: string;
}

interface HelloProps {
  bgColor?: string;
}

const GoodsBox = styled.a<HelloProps>`
  background-color: ${({ bgColor }) => bgColor || "#ffe7bf"};
  border-radius: 100%;
  padding: 20px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: #ffdba4;
    transition: background 0.5s;
  }
  @media (max-width: 400px) {
    padding-bottom: 30px;
  }
`;

const Detail = styled.div`
  width: 200px;
  @media (max-width: 550px) {
    width: 150px;
  }
`;

const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Rank = styled.span`
  color: #ff0063;
`;

const Brand = styled.span`
  color: #54bab9;
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
  link,
  rank,
  backgroundColor,
  img,
  brand,
  name,
  price,
}) => {
  return (
    <GoodsBox href={link} target="_blank" bgColor={backgroundColor}>
      <Image
        src={img}
        alt={name}
        width="150"
        height="150"
        css={css`
          border-radius: 100%;
          background: #ffffff;
        `}
      />
      <Detail>
        <DetailHeader>
          <Rank>{rank}위</Rank>
          <Brand>{brand}</Brand>
        </DetailHeader>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Detail>
    </GoodsBox>
  );
};

export default Goods;
