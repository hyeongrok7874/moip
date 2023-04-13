import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import CustomTheme from "styles/CustomTheme";
import Context from "context";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, []);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Context.Provider value={{ width }}>
        <QueryClientProvider client={client}>
          <Head>
            <title>moip - 오늘 뭐 입지?</title>
          </Head>
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer />
        </QueryClientProvider>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
