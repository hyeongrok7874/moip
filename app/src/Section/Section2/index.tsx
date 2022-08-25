import Goods from "components/Goods";
import React from "react";
import * as S from "./style";
import { Rank } from "types/goods";

interface RankingType {
  ranking: Rank[];
}

const Section2: React.FC<RankingType> = ({ ranking }) => {
  return (
    <S.Section2 id="section2">
      <S.Section2Wrap>
        <S.TitleWrap>
          <S.Section2Title>#TOP10</S.Section2Title>
          <S.Section2desc>무신사 일간 랭킹.</S.Section2desc>
        </S.TitleWrap>
        <S.GoodsWrapper>
          {ranking.map((data, index) => (
            <Goods key={index} rank={index + 1} data={data} />
          ))}
        </S.GoodsWrapper>
      </S.Section2Wrap>
    </S.Section2>
  );
};

export default Section2;
