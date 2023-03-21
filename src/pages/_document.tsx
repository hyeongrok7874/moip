import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            rel="stylesheet"
            as="style"
            crossOrigin=""
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"
          />
          <link rel="shortcut icon" href="/icons/favicon.png" />
          <meta
            name="description"
            content="무신사의 일간 랭킹을 가져와 MZ세대의 패션 동향을 파악할 수 있습니다."
          />
          <meta name="keyword" content="moip, 모입, musinsa, 무신사" />
          <meta property="og:title" content="moip - 오늘 모 입지?" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.moip.shop" />
          <meta property="og:image" content="/images/ogImage.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
