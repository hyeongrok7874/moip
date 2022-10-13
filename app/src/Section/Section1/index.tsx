import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Pointer } from "Assets/svg";

const Section1 = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, []);

  const scrollToSection2 = () => {
    window.scrollTo({ left: 0, top: width * 0.56, behavior: "smooth" });
  };

  return (
    <S.Section1>
      <S.TitleBox>
        <S.TitleContentWrap>
          <S.TitleTextBox>
            <S.TitleText>오늘</S.TitleText>
            <S.TitleHighlight>뭐 입지?</S.TitleHighlight>
          </S.TitleTextBox>
          <S.MoveToMainBox onClick={scrollToSection2}>
            <S.MoveToMainText>
              무신사 <S.MoveToMainHighlight>TOP10</S.MoveToMainHighlight>{" "}
              보러가기
            </S.MoveToMainText>
            <Pointer />
          </S.MoveToMainBox>
        </S.TitleContentWrap>
        <S.DecorationBox>
          <S.DecorationLine />
          <S.DecorationPoint />
        </S.DecorationBox>
      </S.TitleBox>
      {/* <S.DecorationLine /> */}
      {/* <S.DecorationPoint /> */}
      <S.DecorationBlackLine />
      <S.DecorationText>TOP10_MUSINSA</S.DecorationText>
    </S.Section1>
  );
};

export default Section1;
