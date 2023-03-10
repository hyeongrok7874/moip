import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>moip - 오늘 모 입지?</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default MyApp;
