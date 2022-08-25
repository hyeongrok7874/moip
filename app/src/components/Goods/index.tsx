import React from "react";
import * as S from "./style";
import { Rank } from "types/goods";
import Image from "next/image";

interface PropsType {
  rank: number;
  data: Rank;
}

const Goods: React.FC<PropsType> = ({ rank, data }) => {
  return (
    <S.Goods href={data.link}>
      <S.GoodsContent>
        <S.Ranking>{rank}위</S.Ranking>
        <S.ImageFrame>
          <Image
            src={data.img}
            width="100%"
            layout="fill"
            objectFit="contain"
            alt="goods"
          />
        </S.ImageFrame>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>
        <S.Price>{data.price}</S.Price>
      </S.GoodsContent>
      <S.GoToBuy>구매하러 가기</S.GoToBuy>
    </S.Goods>
  );
};

export default Goods;
