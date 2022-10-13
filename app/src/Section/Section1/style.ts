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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 24vw;
  transform: translateY(-50%);
`;

export const TitleContentWrap = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleTextBox = styled.div`
  height: 110px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DecorationBox = styled.div`
  width: 98vw;
  height: 10px;
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  top: 110px;
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
  width: 100%;
  height: 0;
  border: 1px solid #ffffff;
  transform: rotate(180deg);
`;

export const DecorationPoint = styled.div`
  width: 9px;
  height: 9px;
  background: #ffffff;
  border-radius: 100%;
  position: absolute;
  top: 0;
  right: 0;
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
