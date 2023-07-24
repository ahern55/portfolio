import type { NextPage } from "next";
import Head from "next/head";
import useColorTheme from "@/hooks/useColorTheme";
import LightModeIcon from "@/components/icons/lightModeIcon";
import NavBar from "@/components/nav/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jason</title>
        <meta property="og:title" content="Jason" key="title" />
      </Head>
      <main>
        <div>
          <NavBar />
          <div className="h-screen flex">
            <div className="m-auto text-5xl sm:text-6xl">Jason Ahern</div>
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
