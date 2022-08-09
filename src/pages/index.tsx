import type { GetStaticProps, NextPage } from "next";
import axios from "axios";
import * as S from "styles/Main";
import { Goods, Header } from "components";

interface DataType {
  data: {
    img: string;
    brand: string;
    name: string;
    price: string;
  }[];
}

const Home: NextPage<DataType> = ({ data }) => {
  return (
    <S.MainWrapper>
      <Header />
      <S.GoodsWrapper>
        {data.map((item, index) => (
          <Goods
            key={index}
            brand={item.brand}
            name={item.name}
            img={item.img}
            price={item.price}
          />
        ))}
      </S.GoodsWrapper>
    </S.MainWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("https://moip.vercel.app/data/ranking.json");
  return {
    props: { data },
  };
};

export default Home;
