import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat"
          />
          <meta name="description" content="My Digital Portfolio" />
          <meta property="og:site_name" content="jasonahern.com" />
          <meta property="og:description" content="My Digital Portfolio" />
          <meta property="og:title" content="Jason Ahern" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jason Ahern" />
          <meta name="twitter:description" content="My Digital Portfolio" />
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
