import React from "react";
import { Section1, Section2 } from "Section";
import { Footer } from "components";
import type { GetServerSideProps, NextPage } from "next";
import { getDailyRanking, DailyRanking } from "musinsa";

interface PropsType {
  ranking: DailyRanking[];
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const ranking: DailyRanking[] = await getDailyRanking();
    return {
      props: { ranking: ranking?.slice(0, 10) || [] },
    };
  } catch (e) {
    return {
      props: { ranking: [] },
    };
  }
};

export default Home;
