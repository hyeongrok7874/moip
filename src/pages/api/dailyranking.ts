import { DailyRankingType, getDailyRanking } from "musinsa";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DailyRankingType[]>,
) {
  // TODO: req에서 개수 받아와 slice
  const ranking = await getDailyRanking();
  return res.status(200).json(ranking);
}
