import * as NextImage from "next/image";
import GlobalStyle from "/src/styles/GlobalStyle.tsx";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "/src/styles/CustomTheme.ts";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={CustomTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: "gray",
    values: [
      {
        name: "gray",
        value: "#F3F5FB",
      },
      {
        name: "white",
        value: "#FFFFFF",
      },
      {
        name: "black",
        value: "#000000",
      },
      {
        name: "blue",
        value: "#2E48A0",
      },
    ],
  },
};
