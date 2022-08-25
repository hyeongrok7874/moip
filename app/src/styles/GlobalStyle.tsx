import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: "Pretendard", "Apple SD Gothic Neo", "Noto Sans KR";
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        p {
          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyle;
