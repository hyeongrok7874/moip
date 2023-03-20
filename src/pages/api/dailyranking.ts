import { RankingType, getDailyRanking } from "musinsa";
import { NextApiRequest, NextApiResponse } from "next";
import { ResponseError } from "types/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RankingType[] | ResponseError>,
) {
  try {
    const ranking = await getDailyRanking();
    return res.status(200).json(ranking?.slice(0, 10));
  } catch {
    return res.status(500).json({ message: "failed to load data" });
  }
}
