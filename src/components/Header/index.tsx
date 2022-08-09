import React from "react";
import styled from "@emotion/styled";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  color: #cdf2ca;
  font-size: 50px;
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper>
        <Title>MOIP</Title>
      </HeaderWrapper>
    </>
  );
};

export default Header;
