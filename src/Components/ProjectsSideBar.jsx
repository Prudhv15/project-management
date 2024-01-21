import Button from "./Button";

export default function ProjectSideBar({
  onStartAddProject,
  projectslist,
  onShowProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl flex flex-col">
      <h2 className="mb-8 dont-bold uppercase md:text-xl  text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul>
        {projectslist.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onShowProject(project.id)}
              className="px-4 py-4 mt-4 w-full text-xs md:text-base rounded-md  bg-stone-700 text-stone-400  hover:bg-stone-600  hover: text-stone-100"
            >
              {project.title}
              {project.description}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
