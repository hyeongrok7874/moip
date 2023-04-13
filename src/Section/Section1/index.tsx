import React from "react";
import * as S from "./style";
import { Pointer } from "Assets/svg";
import { MusinsaLink } from "components";
import { useWidth } from "hooks";

const Section1 = () => {
  const width = useWidth();

  const scrollToSection2 = () => {
    window.scrollTo({ left: 0, top: width * 0.56, behavior: "smooth" });
  };

  return (
    <S.Section1>
      <MusinsaLink />
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
      {width > 1100 && (
        <>
          <S.DecorationBlackLine />
          <S.DecorationText>TOP10_MUSINSA</S.DecorationText>
        </>
      )}
    </S.Section1>
  );
};

export default Section1;
