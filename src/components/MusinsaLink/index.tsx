import * as S from "./style";
import React from "react";

const MusinsaLink: React.FC = () => {
  const MUSINSA_URL = "https://www.musinsa.com";

  return (
    <S.Link href={MUSINSA_URL} rel="noreferrer noopener" target="_blank">
      MUSINSA
    </S.Link>
  );
};

export default MusinsaLink;
