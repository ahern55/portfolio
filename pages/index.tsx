import type { NextPage } from "next";
import Head from "next/head";
import useColorTheme from "@/hooks/useColorTheme";

const Home: NextPage = () => {
  const { colorTheme, toggleColorTheme } = useColorTheme();

  return (
    <>
      <Head>
        <title>Jason</title>
        <meta property="og:title" content="Jason" key="title" />
      </Head>
      <main>
        <div >
          <div className="h-screen flex">
            <div
              className="m-auto text-5xl sm:text-6xl"
              onClick={toggleColorTheme}
            >
              Jason Ahern
            </div>
          </div>
          <div className="spacer h-screen"></div>
          <div className="spacer h-screen"></div>
          <div className="spacer h-screen"></div>
          <div className="spacer h-screen"></div>
          <div className="spacer h-screen"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
