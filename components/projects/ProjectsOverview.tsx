import Link from "next/link";
import LongRightArrowIcon from "../icons/LongRightArrowIcon";
import projects from "@/data/projects";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsOverview = () => {
  return (
    <div className="flex flex-wrap h-screen m-3">
      <div className="lg:ml-8 xl:ml-20 text-4xl lg:text-5xl">
        Highlighted Projects
      </div>

      <ProjectsGrid
        projects={projects.filter((project) => project.highlight === true)}
      />

      <div className="w-full flex text-xl">
        <div className="mt-auto ml-auto lg:mr-8 xl:mr-20">
          <Link href="/projects" className="flex items-center">
            <span className="mr-1">All Projects</span>
            <LongRightArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
