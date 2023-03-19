import Goods from "components/Goods";
import React from "react";
import * as S from "./style";
import { css, keyframes } from "@emotion/react";
import { DailyRankingType } from "musinsa";
import useDailyRanking from "apis/ranking";

interface RankingType {
  ranking: DailyRankingType[];
}

const leftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const rightToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const upToDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const downToUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Section2: React.FC<RankingType> = ({ ranking }) => {
  const { data } = useDailyRanking(ranking);

  return (
    <S.Section2 id="section2">
      <S.Section2Wrap>
        <S.TitleWrap>
          <S.Section2Title>#TOP10</S.Section2Title>
          <S.Section2desc>무신사 일간 랭킹.</S.Section2desc>
        </S.TitleWrap>
        <S.GoodsWrapper>
          {ranking?.map((data, index) => (
            <Goods key={index} rank={index + 1} data={data} />
          ))}
        </S.GoodsWrapper>
      </S.Section2Wrap>
      <S.WidthDecorationLine
        css={css`
          width: 94%;
          top: 50px;
          left: 0;
          animation: ${leftToRight} 1s ease-in-out;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 84%;
          top: 680px;
          left: 0;
          animation: ${leftToRight} 1s ease-in-out;
        `}
      />
      <S.Point />
      <S.WidthDecorationLine
        css={css`
          width: 12%;
          top: 1080px;
          left: 0;
          animation: ${leftToRight} 1s ease-in-out;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 100%;
          bottom: 150px;
          animation: ${rightToLeft} 1s ease-in-out;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 16%;
          right: 0;
          bottom: 80px;
          animation: ${rightToLeft} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 1300px;
          left: 9%;
          top: 0;
          animation: ${upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 50px;
          left: 19%;
          top: 0;
          animation: ${upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 127px;
          left: 23%;
          top: 0;
          animation: ${upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          left: 40%;
          top: 0;
          animation: ${upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          right: 40%;
          top: 0;
          animation: ${upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          left: 40%;
          bottom: 0;
          animation: ${downToUp} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          right: 40%;
          bottom: 0;
          animation: ${downToUp} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 1350px;
          left: 94%;
          top: 0;
          animation: ${upToDown} 1s ease-in-out;
        `}
      />
    </S.Section2>
  );
};

export default Section2;
