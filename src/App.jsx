import { Home } from "./components/Home.jsx";
import { SideMenu } from "./components/SideMenu.jsx";
import { ProjectCreation } from "./components/ProjectCreation.jsx";
import { useState } from "react";

function App() {
  const [projectsObj, setProjectsObj] = useState({
    projectId: undefined,
    projects: [],
  });

  function handleCreation() {
    setProjectsObj((prevState) => {
      return { ...prevState, projectId: null };
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

  console.log("project", projectsObj);
  let show;

  if (projectsObj.projectId === null) {
    show = (
      <ProjectCreation handleNewProject={handleNewProject} back={handleBack} />
    );
  } else if (projectsObj.projectId === undefined) {
    show = <Home create={handleCreation} />;
  } else {
    show = <Home create={handleCreation} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideMenu projects={projectsObj.projects} create={handleCreation} />
      {show}
    </main>
  );
}

export default App;
