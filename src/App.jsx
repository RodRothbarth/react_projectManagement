import { Home } from "./components/Home.jsx";
import { SideMenu } from "./components/SideMenu.jsx";
import { ProjectCreation } from "./components/ProjectCreation.jsx";
import { useState } from "react";
import { AcviteProject } from "./components/AcviteProject.jsx";

function App() {
  let show;
  const [projectsObj, setProjectsObj] = useState({
    projectId: undefined,
    projects: [],
  });
  const selectedProject = projectsObj.projects.find(
    (project) => project.id === projectsObj.projectId,
  );

  function handleCreation() {
    setProjectsObj((prevState) => {
      return { ...prevState, projectId: null };
    });
  }

  function handleDelete() {
    setProjectsObj((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => prevState.projectId !== project.id,
        ),
        projectId: undefined,
      };
    });
  }

  function handleBack() {
    setProjectsObj((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
      };
    });
  }

  function handleOpenProject(id) {
    setProjectsObj((prevState) => {
      return {
        ...prevState,
        projectId: id,
      };
    });
  }

  function handleNewProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectsObj((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
    handleBack();
  }

  if (projectsObj.projectId === null) {
    show = (
      <ProjectCreation handleNewProject={handleNewProject} back={handleBack} />
    );
  } else if (projectsObj.projectId === undefined) {
    show = <Home create={handleCreation} />;
  } else {
    show = (
      <AcviteProject project={selectedProject} deleteProject={handleDelete} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideMenu
        projects={projectsObj.projects}
        create={handleCreation}
        openProject={handleOpenProject}
        // selectedId={selectedProject ? selectedProject.id : ""}
      />
      {show}
    </main>
  );
}

export default App;
