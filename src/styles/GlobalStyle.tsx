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
          font-family: "Pretendard Variable", Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

        button {
          font-family: "Pretendard Variable", Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyle;
