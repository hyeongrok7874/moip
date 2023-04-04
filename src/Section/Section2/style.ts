import styled from "@emotion/styled";

export const Section2 = styled.div`
  height: 1350px;
  background: url("images/mainBackground.png") no-repeat center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Section2Wrap = styled.div`
  width: 1044px;
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
  width: 100%;
`;

export const Section2Title = styled.p`
  font-weight: 700;
  font-size: 46px;
  color: #408be1;
`;

export const Section2SubTitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Section2desc = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #43434a;
`;

export const PeriodSelectWrap = styled.div`
  position: absolute;
  left: 0;
`;

export const PeriodSelect = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0px 12px;
  border: none;
  background: none;
  cursor: pointer;
  :hover {
    color: #000000;
  }
`;

export const GoodsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 16px;
  grid-template-rows: repeat(2, 354px);
  grid-row-gap: 80px;
`;
