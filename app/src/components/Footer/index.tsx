import React from "react";
import * as S from "./style";
import { Instagram, Github, Discord } from "../../Assets/svg";
import { toast } from "react-toastify";

const Footer: React.FC = () => {
  const copyID = () => {
    navigator.clipboard
      .writeText("형록#6674")
      .then(() => {
        console.log("디스코드 사용자명을 복사했습니다");
        toast.success("디스코드 사용자명을 복사했습니다");
      })
      .catch((err) => {
        console.log("복사 실패", err);
      });
  };

  return (
    <S.Footer>
      <S.FooterContant>
        <S.Text>Developer Contact</S.Text>
        <S.IconBox>
          <S.Link
            href="https://www.instagram.com/khr5k_0228/?hl=ko"
            target="_blank"
          >
            <Instagram />
          </S.Link>
          <S.Link href="https://github.com/hyeongrok7874" target="_blank">
            <Github />
          </S.Link>
          <S.CopyID onClick={copyID}>
            <Discord />
          </S.CopyID>
        </S.IconBox>
      </S.FooterContant>
    </S.Footer>
  );
};

export default Footer;
