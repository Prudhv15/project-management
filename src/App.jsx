import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjects";
import ProjectSideBar from "./Components/ProjectsSideBar";
import ShowProjects from "./Components/ShowProjects";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const AddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const showProjects = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const DeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };
  // console.log(projectState);

  const selectedProj = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <ShowProjects projects={selectedProj} onDelete={DeleteProject} />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onStartAddProject={handleStartAddProject}
        onAdd={AddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projectslist={projectState.projects}
        onShowProject={showProjects}
      />
      {/* <ShowProjects onClick={showProjects} /> */}
      {content}
    </main>
  );
}

export default App;
