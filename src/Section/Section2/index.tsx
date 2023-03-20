import Goods from "components/Goods";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { css, keyframes } from "@emotion/react";
import { RankingType } from "musinsa";
import useDailyRanking from "apis/ranking";

interface PropsType {
  rankingProp: RankingType[] | [];
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

type PeriodType = "실시간" | "일간" | "주간" | "월간";

const periodList: PeriodType[] = ["실시간", "일간", "주간", "월간"];

const Section2: React.FC<PropsType> = ({ rankingProp }) => {
  const [ranking, setRanking] = useState<RankingType[]>(rankingProp);
  const { data: dailyRanking } = useDailyRanking(ranking);

  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("실시간");

  // TODO : selectedPeriod에 맞게끔 ranking 업데이트
  // useEffect(() => {}, [selectedPeriod]);

  const selectedStyle = (period: PeriodType) =>
    selectedPeriod === period &&
    css`
      color: #000000;
    `;

  return (
    <S.Section2 id="section2">
      <S.Section2Wrap>
        <S.TitleWrap>
          <S.Section2Title>#TOP10</S.Section2Title>
          <S.Section2SubTitleWrap>
            <S.PeriodSelectWrap>
              {periodList.map((period, index) => (
                <S.PeriodSelect
                  css={selectedStyle(period)}
                  onClick={() => setSelectedPeriod(period)}
                  key={index}
                >{`${period} 랭킹`}</S.PeriodSelect>
              ))}
            </S.PeriodSelectWrap>
            <S.Section2desc>{`무신사 ${selectedPeriod} 랭킹.`}</S.Section2desc>
          </S.Section2SubTitleWrap>
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
