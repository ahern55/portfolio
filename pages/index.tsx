import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jason</title>
        <meta property="og:title" content="Jason" key="title" />
      </Head>
      <main>
        <div className=" bg-gradient-to-b from-white to-gradient-pink h-screen flex">
          <div className="m-auto text-6xl">Jason Ahern</div>
        </div>
        <div className="bg-gradient-to-b from-gradient-pink to-gradient-purple h-screen"></div>
      </main>
    </>
  );
};

export default Home;
