import React from "react";
import * as S from "./style";
import { Pointer } from "Assets/svg";

const Section1 = () => {
  return (
    <S.Section1>
      <S.TitleBox>
        <S.TitleTextBox>
          <S.TitleText>오늘은</S.TitleText>
          <S.TitleHighlight>뭐 입지?</S.TitleHighlight>
        </S.TitleTextBox>
        <S.MoveToMainBox href="https://www.musinsa.com">
          <S.MoveToMainText>
            무신사 <S.MoveToMainHighlight>TOP10</S.MoveToMainHighlight> 보러가기
          </S.MoveToMainText>
          <Pointer />
        </S.MoveToMainBox>
      </S.TitleBox>
      <S.DecorationLine />
      <S.DecorationPoint />
      <S.DecorationBlackLine />
      <S.DecorationText>TOP10_MUSINSA</S.DecorationText>
    </S.Section1>
  );
};

export default Section1;
