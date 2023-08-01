import { project } from "@/data/projects";

const ProjectsGrid = (props: { projects: project[] }) => {
  return (
    <div className="w-full">
      {props.projects.map((project) => (
        <div>{project.name}</div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
