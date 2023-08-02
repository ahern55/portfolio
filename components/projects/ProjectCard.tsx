import { project } from "@/data/projects";
import GitHubIcon from "../icons/GitHubIcon";
import Link from "next/link";
import RocketIcon from "../icons/RocketIcon";

const ProjectCard = (props: { project: project }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-10">
      <div className="bg-transparent h-full rounded-xl p-4 flex flex-col leading-normal colored-shadow mx-5">
        <p className="text-base secondary">{props.project.dateString}</p>
        <div className="border-t secondary-border w-[90%] lg:w-2/3 mb-1"></div>
        <div className="flex flex-wrap h-full">
          <div className="font-bold text-xl md:text-2xl mb-1 w-full">
            {props.project.name}
          </div>
          <div className="font-bold text-md lg:text-lg mb-2 w-full">
            {props.project.summary}
          </div>
          <div className="w-full mt-auto flex">
            <div className="ml-auto flex">
              {props.project.gitHubUrl && (
                <Link
                  href={props.project.gitHubUrl}
                  target="_blank"
                  className="mb-0 h-fit highlight-link mr-3"
                >
                  <GitHubIcon />
                </Link>
              )}
              {props.project.demoUrl && (
                <Link
                  href={props.project.demoUrl}
                  target="_blank"
                  className="mb-0 h-fit highlight-link"
                >
                  <RocketIcon />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
