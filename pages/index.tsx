import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@/components/nav/navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <Head>
        <title>Jason</title>
        <meta property="og:title" content="Jason" key="title" />
      </Head>
      <main>
        <div>
          <NavBar />
          <div className="h-screen flex" id="name-screen">
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
