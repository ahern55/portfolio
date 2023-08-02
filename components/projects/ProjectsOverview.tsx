import Link from "next/link";
import LongRightArrowIcon from "../icons/LongRightArrowIcon";
import projects from "@/data/projects";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsOverview = () => {
  return (
    <div className="flex flex-wrap m-3 md:mx-20 pb-10">
      <div className="text-4xl lg:text-5xl w-full mb-10 text-center">
        Highlighted Projects
      </div>

      <ProjectsGrid
        projects={projects.filter((project) => project.highlight === true)}
      />

      <div className="w-full flex text-xl">
        <div className="mt-auto ml-auto">
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
