import * as S from "./style";
import { css } from "@emotion/react";
import React from "react";

interface Section2DecorationLinesProps {
  isSection2Visible: boolean;
}

const Section2DecorationLines: React.FC<Section2DecorationLinesProps> = ({
  isSection2Visible,
}) => {
  return (
    <>
      <S.WidthDecorationLine
        css={css`
          width: 94%;
          top: 50px;
          left: 0;
          animation: ${isSection2Visible && S.leftToRight} 1s ease-in-out;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 84%;
          top: 680px;
          left: 0;
          animation: ${isSection2Visible && S.leftToRight} 1s ease-in-out;
        `}
      />
      <S.Point />
      <S.WidthDecorationLine
        css={css`
          width: 12%;
          top: 1080px;
          left: 0;
          animation: ${isSection2Visible && S.leftToRight} 1s ease-in-out;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 100%;
          bottom: 150px;
          animation: ${isSection2Visible && S.rightToLeft} 1s ease-in-out;
        `}
      />
      <S.WidthDecorationLine
        css={css`
          width: 16%;
          right: 0;
          bottom: 80px;
          animation: ${isSection2Visible && S.rightToLeft} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 1300px;
          left: 9%;
          top: 0;
          animation: ${isSection2Visible && S.upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 50px;
          left: 19%;
          top: 0;
          animation: ${isSection2Visible && S.upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 127px;
          left: 23%;
          top: 0;
          animation: ${isSection2Visible && S.upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          left: 40%;
          top: 0;
          animation: ${isSection2Visible && S.upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          right: 40%;
          top: 0;
          animation: ${isSection2Visible && S.upToDown} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          left: 40%;
          bottom: 0;
          animation: ${isSection2Visible && S.downToUp} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 200px;
          right: 40%;
          bottom: 0;
          animation: ${isSection2Visible && S.downToUp} 1s ease-in-out;
        `}
      />
      <S.HeightDecorationLine
        css={css`
          height: 1350px;
          left: 94%;
          top: 0;
          animation: ${isSection2Visible && S.upToDown} 1s ease-in-out;
        `}
      />
    </>
  );
};

export default Section2DecorationLines;
