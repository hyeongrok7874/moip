import React from "react";
import { Section1, Section2 } from "Section";
import { Footer } from "components";
import type { GetStaticProps, NextPage } from "next";
import { getDailyRanking, DailyRankingType } from "musinsa";

interface PropsType {
  ranking: DailyRankingType[];
}

const Home: NextPage<PropsType> = ({ ranking }) => {
  return (
    <>
      <Section1 />
      <Section2 ranking={ranking || []} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const ranking: DailyRankingType[] = await getDailyRanking();
    return {
      props: { ranking: ranking?.slice(0, 10) || [] },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { ranking: [] },
      revalidate: 60,
    };
  }
};

export default Home;
