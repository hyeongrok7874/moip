import React from "react";
import * as S from "./style";
import Image from "next/image";
import { RankingType } from "musinsa";
import { css } from "@emotion/react";

interface PropsType {
  rank: number;
  data: RankingType;
}

const Goods: React.FC<PropsType> = ({
  rank,
  data: { link, img, brand, name, price },
}) => {
  return (
    <S.Goods href={link}>
      <S.GoodsContent className="goods-content">
        <S.Ranking>{rank}위</S.Ranking>
        <Image
          src={img || ""}
          width={164}
          height={196}
          alt={name}
          css={css`
            object-fit: contain;
          `}
        />
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>
        <S.Price>{price.toLocaleString()}원</S.Price>
      </S.GoodsContent>
      <S.GoToBuy className="go-to-buy">구매하러 가기</S.GoToBuy>
    </S.Goods>
  );
};

export default Goods;
