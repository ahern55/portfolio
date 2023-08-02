import { project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = (props: { projects: project[] }) => {
  return (
    <div className="w-full flex flex-wrap items-stretch">
      {props.projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
