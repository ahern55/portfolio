import type { AppProps } from "next/app";
import "../styles/globals.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/theme.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
    </>
  );
}
