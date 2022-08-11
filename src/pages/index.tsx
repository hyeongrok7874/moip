import type { NextPage } from "next";
import * as S from "styles/Main";
import { Goods, Header } from "components";
import ranking from "./api/ranking.json";

const Home: NextPage = () => {
  return (
    <S.MainWrapper>
      <Header />
      <S.GoodsWrapper>
        {ranking.map((item, index) => (
          <Goods
            key={index}
            brand={item.brand}
            name={item.name}
            img={item.img}
            price={item.price}
            link={item.link}
            rank={index + 1}
          />
        ))}
      </S.GoodsWrapper>
    </S.MainWrapper>
  );
};

export default Home;
