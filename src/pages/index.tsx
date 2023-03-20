import React from "react";
import { Section1, Section2 } from "Section";
import { Footer } from "components";
import type { GetStaticProps, NextPage } from "next";
import { getNowRanking, RankingType } from "musinsa";

interface PropsType {
  ranking: RankingType[];
}

const Home: NextPage<PropsType> = ({ ranking }) => {
  return (
    <>
      <Section1 />
      <Section2 rankingProp={ranking || []} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const ranking: RankingType[] = await getNowRanking();
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
