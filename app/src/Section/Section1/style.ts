import styled from "@emotion/styled";

export const Section1 = styled.div`
  width: 100vw;
  height: 51vw;
  background: url("/images/background.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const TitleBox = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 41%;
`;

export const TitleTextBox = styled.div`
  height: 110px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  font-weight: 500;
  font-size: 30px;
`;

export const TitleHighlight = styled.div`
  font-weight: 600;
  font-size: 56px;
`;

export const MoveToMainBox = styled.a`
  width: 235px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const MoveToMainText = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
`;

export const MoveToMainHighlight = styled.span`
  font-weight: 700;
  font-size: 24px;
`;

export const DecorationLine = styled.div`
  width: 98%;
  border: 1px solid #ffffff;
  transform: rotate(180deg);
  position: absolute;
  left: 0;
  top: 51%;
`;

export const DecorationPoint = styled.div`
  width: 9px;
  height: 9px;
  background: #ffffff;
  position: absolute;
  top: 50.6%;
  left: 98%;
  border-radius: 100%;
`;

export const DecorationBlackLine = styled.div`
  height: 100%;
  border: 1px solid #000000;
  position: absolute;
  right: 5%;
`;

export const DecorationText = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #e0e1e7;
  transform: rotate(-90deg);
  position: absolute;
  top: 30%;
  right: 2.5%;
`;
