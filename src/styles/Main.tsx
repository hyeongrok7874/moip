import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 700px;
  background: #ffc4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    width: 100vw;
  }
`;

export const GoodsWrapper = styled.div`
  width: 650px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 50px;
  grid-auto-rows: 300px;
  @media (max-width: 700px) {
    width: 93%;
    grid-template-columns: 46% 46%;
    grid-gap: 7.5vw;
    grid-auto-rows: 43vw;
  }
`;
