import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>moip - 오늘 모 입지?</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
