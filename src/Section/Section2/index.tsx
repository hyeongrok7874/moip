import Goods from "components/Goods";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import { css } from "@emotion/react";
import { RankingType } from "musinsa";
import {
  useDailyRanking,
  useMonthlyRanking,
  useNowRanking,
  useWeeklyRanking,
} from "apis/ranking";
import { Section2DecorationLines } from "components";

interface PropsType {
  rankingProp: RankingType[] | [];
}

type PeriodType = "실시간" | "일간" | "주간" | "월간";

const periodList: PeriodType[] = ["실시간", "일간", "주간", "월간"];

const Section2: React.FC<PropsType> = ({ rankingProp }) => {
  const [ranking, setRanking] = useState<RankingType[]>(rankingProp);
  const { data: nowRanking } = useNowRanking();
  const { data: dailyRanking } = useDailyRanking(ranking);
  const { data: weeklyRanking } = useWeeklyRanking();
  const { data: monthlyRanking } = useMonthlyRanking();
  const [isPC, setIsPC] = useState<boolean>(true);
  const [rankingMount, setRankingMount] = useState<number>(10);

  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("실시간");

  useEffect(() => {
    setIsPC(window.innerWidth > 1044);
    window.onresize = () => {
      setIsPC(window.innerWidth > 1044);
    };
  }, []);

  useEffect(() => {
    setRankingMount(isPC ? 10 : 9);
  }, [isPC]);

  useEffect(() => {
    switch (selectedPeriod) {
      case "실시간":
        return nowRanking && setRanking(nowRanking);
      case "일간":
        return dailyRanking && setRanking(dailyRanking);
      case "주간":
        return weeklyRanking && setRanking(weeklyRanking);
      case "월간":
        return monthlyRanking && setRanking(monthlyRanking);
    }
  }, [selectedPeriod]);

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
            <S.Section2desc>{`무신사 ${selectedPeriod} 랭킹.`}</S.Section2desc>
            <S.PeriodSelectWrap>
              {periodList.map((period, index) => (
                <S.PeriodSelect
                  css={selectedStyle(period)}
                  onClick={() => setSelectedPeriod(period)}
                  key={index}
                >{`${period} 랭킹`}</S.PeriodSelect>
              ))}
            </S.PeriodSelectWrap>
          </S.Section2SubTitleWrap>
        </S.TitleWrap>
        <S.GoodsWrapper>
          {ranking
            .filter((_, index) => index < rankingMount)
            .map((data, index) => (
              <Goods key={index} rank={index + 1} data={data} />
            ))}
        </S.GoodsWrapper>
      </S.Section2Wrap>
      {isPC && <Section2DecorationLines />}
    </S.Section2>
  );
};

export default Section2;
