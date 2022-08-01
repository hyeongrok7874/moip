import type { GetStaticProps, NextPage } from "next";
import axios from "axios";
import * as S from "styles/Main";

interface HelloType {
  data: { hello: string };
}

const Home: NextPage<HelloType> = ({ data: { hello } }) => {
  return <S.MainWrapper>{hello}</S.MainWrapper>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("https://moip.vercel.app/data/chart.json");
  return {
    props: { data },
  };
};

export default Home;
