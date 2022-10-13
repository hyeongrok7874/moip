import styled from "@emotion/styled";

export const Section2 = styled.div`
  height: 1350px;
  background: url("images/mainBackground.png") no-repeat center;
  background-size: cover;
  position: relative;
`;

export const Section2Wrap = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 175px;
  z-index: 5;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section2Title = styled.p`
  font-weight: 700;
  font-size: 46px;
  color: #408be1;
`;

export const Section2desc = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #43434a;
`;

export const GoodsWrapper = styled.div`
  display: grid;
  grid-template-columns: 196px 196px 196px 196px 196px;
  grid-column-gap: 16px;
  grid-template-rows: 354px 354px;
  grid-row-gap: 80px;
`;

const DecorationLine = styled.div`
  position: absolute;
  border: 0.5px solid #000000;
`;

export const WidthDecorationLine = styled(DecorationLine)`
  height: 0;
`;

export const HeightDecorationLine = styled(DecorationLine)`
  width: 0;
`;

export const Point = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  top: 677px;
  left: 84%;
  background: #000000;
  position: absolute;
  z-index: 10;
  animation: leftToRight 1s ease-in-out;
  @keyframes leftToRight {
    0% {
      transform: translateX(-84vw);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
