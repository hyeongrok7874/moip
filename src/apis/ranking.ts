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

export default function useDailyRanking(initialData?: RankingType[]) {
  return useQuery<RankingType[]>(
    rankingKey.daily,
    () => getRanking(rankingUrl.getDailyRanking),
    {
      initialData,
    },
  );
}
