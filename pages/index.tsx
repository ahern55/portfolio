import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@/components/nav/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Overview from "@/components/Overview";
import Timeline from "@/components/timeline/Timeline";
import ProjectsOverview from "@/components/projects/ProjectsOverview";

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
          <NavBar fade />
          <div className="h-screen flex" id="name-screen">
            <div className="m-auto text-5xl sm:text-6xl">Jason Ahern</div>
          </div>
          <Overview />
          <Timeline />
          <ProjectsOverview />
        </div>
      </main>
    </>
  );
};

export default Home;
