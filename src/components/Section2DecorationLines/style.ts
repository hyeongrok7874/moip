import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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

export const leftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const rightToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const upToDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const downToUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;
