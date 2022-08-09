import type { GetStaticProps, NextPage } from "next";
import axios from "axios";
import * as S from "styles/Main";
import Goods from "components/Goods";

interface DataType {
  data: {
    brand: string;
    name: string;
  }[];
}

const Home: NextPage<DataType> = ({ data }) => {
  return (
    <S.MainWrapper>
      {data.map((item, index) => (
        <Goods key={index} brand={item.brand} name={item.name} />
      ))}
    </S.MainWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("http://localhost:3000/data/ranking.json");
  return {
    props: { data },
  };
};

export default Home;
