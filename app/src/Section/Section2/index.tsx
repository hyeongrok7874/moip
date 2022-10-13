import Goods from "components/Goods";
import React from "react";
import * as S from "./style";
import { Rank } from "types/goods";
import { css } from "@emotion/react";

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
      <S.WidthDecorationLine
        css={css`
          width: 94%;
          top: 50px;
          left: 0;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 84%;
          top: 680px;
          left: 0;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 12%;
          top: 1080px;
          left: 0;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 100%;
          bottom: 150px;
        `}
      />
    </S.Section2>
  );
};

export default Section2;
