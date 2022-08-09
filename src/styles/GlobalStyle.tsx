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
          font-family: "Apple SD Gothic Neo", "Noto Sans KR";
          background: #ff869e;
          display: flex;
          justify-content: center;
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
