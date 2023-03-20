import * as S from "./style";
import React from "react";

const MUSINSA_URL = "https://www.musinsa.com";

const MusinsaLink: React.FC = () => (
  <S.Link href={MUSINSA_URL} rel="noreferrer noopener" target="_blank">
    MUSINSA
  </S.Link>
);

export default MusinsaLink;
