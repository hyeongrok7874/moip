import styled from "@emotion/styled";

export const Link = styled.a`
  color: #ffffff;
  font-size: 35px;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
