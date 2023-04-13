import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "styles/CustomTheme";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <QueryClientProvider client={client}>
        <Head>
          <title>moip - 오늘 뭐 입지?</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
