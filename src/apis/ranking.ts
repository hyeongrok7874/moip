import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { rankingUrl } from "libs/apiUrlController";
import { rankingKey } from "./queryKeys";
import { RankingType } from "musinsa";

async function getRanking(url: string) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    return e;
  }
}

export function useNowRanking(initialData?: RankingType[]) {
  return useQuery<RankingType[]>(
    rankingKey.now,
    () => getRanking(rankingUrl.getNowRanking),
    {
      initialData,
    },
  );
}

export function useDailyRanking(initialData?: RankingType[]) {
  return useQuery<RankingType[]>(
    rankingKey.daily,
    () => getRanking(rankingUrl.getDailyRanking),
    {
      initialData,
    },
  );
}

export function useWeeklyRanking(initialData?: RankingType[]) {
  return useQuery<RankingType[]>(
    rankingKey.weekly,
    () => getRanking(rankingUrl.getWeeklyRanking),
    {
      initialData,
    },
  );
}

export function useMonthlyRanking(initialData?: RankingType[]) {
  return useQuery<RankingType[]>(
    rankingKey.monthly,
    () => getRanking(rankingUrl.getMonthlyRanking),
    {
      initialData,
    },
  );
}
