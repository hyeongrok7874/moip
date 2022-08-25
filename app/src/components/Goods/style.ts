import styled from "@emotion/styled";

export const GoToBuy = styled.div`
  width: 196px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background: #000000;
  position: relative;
  text-align: center;
  line-height: 40px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: none;
`;

export const GoodsContent = styled.a`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #070718;
  position: relative;
`;

export const Goods = styled.a`
  position: relative;
  animation: unhover 0.2s;
  :hover ${GoToBuy} {
    display: block;
  }
  :hover ${GoodsContent} {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  :hover {
    animation: hover 0.2s;
    top: -30px;
  }

  @keyframes hover {
    0% {
      top: 0;
    }
    100% {
      top: -30px;
    }
  }

  @keyframes unhover {
    0% {
      top: -30px;
    }
    100% {
      top: 0;
    }
  }
`;

export const ImageFrame = styled.div`
  width: 164px;
  height: 196px;
  position: relative;
`;

export const Ranking = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

export const Brand = styled.p`
  font-weight: 700;
  font-size: 14px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
  overflow-x: hidden;
  white-space: nowrap;
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 14px;
  text-align: end;
`;
