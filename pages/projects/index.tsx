import NavBar from "@/components/nav/Navbar";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import projects from "@/data/projects";
import { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="Projects" key="title" />
      </Head>
      <main>
        <div className="min-h-screen">
          <NavBar />
          <div className="mx-20 mt-36">
            <ProjectsGrid projects={projects} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
