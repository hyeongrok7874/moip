import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { rankingUrl } from "libs/apiUrlController";
import { rankingKey } from "./queryKeys";
import { DailyRankingType } from "musinsa";

async function getRanking(url: string) {
  const { data } = await axios.get(rankingUrl.getDailyRanking);
  return data;
}

export default function useDailyRanking() {
  return useQuery<DailyRankingType[]>(rankingKey.daily, () =>
    getRanking(rankingUrl.getDailyRanking),
  );
}
