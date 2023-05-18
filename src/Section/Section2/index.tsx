import Goods from "components/Goods";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { useWidth } from "hooks";

interface RankingProps {
  rankingProp: RankingType[] | [];
}

type PeriodType = "실시간" | "일간" | "주간" | "월간";

const periodList: PeriodType[] = ["실시간", "일간", "주간", "월간"];

const Section2: React.FC<RankingProps> = ({ rankingProp }) => {
  const [ranking, setRanking] = useState<RankingType[]>(rankingProp);
  const [rankingMount, setRankingMount] = useState<9 | 10>(10);
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>("실시간");
  const [isSection2Visible, setIsSection2Visible] = useState<boolean>(false);

  const { data: nowRanking } = useNowRanking(rankingProp);
  const { data: dailyRanking } = useDailyRanking();
  const { data: weeklyRanking } = useWeeklyRanking();
  const { data: monthlyRanking } = useMonthlyRanking();

  const section2Ref = useRef<HTMLDivElement>(null);

  const width = useWidth();

  useEffect(() => {
    setRankingMount(width > 650 && width < 1100 ? 9 : 10);
  }, [width]);

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

  const section2Observer = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setIsSection2Visible(true);
    }
  };

  useEffect(() => {
    if (!section2Ref.current || isSection2Visible || width > 1100) return;

    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(section2Observer, option);

    section2Ref.current && observer.observe(section2Ref.current);

    return () => observer && observer.disconnect();
  }, []);

  return (
    <S.Section2 ref={section2Ref} id="section2">
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
      {width > 1100 && isSection2Visible && (
        <Section2DecorationLines isSection2Visible={isSection2Visible} />
      )}
    </S.Section2>
  );
};

export default Section2;
