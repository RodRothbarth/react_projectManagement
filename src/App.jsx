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

  function handleNewProject() {
    setProjectsObj((prevState) => {
      return { ...prevState, projects: [] };
    });
  }

  let show =
    projectsObj.projectId === null ? (
      <ProjectCreation handleNewProject={handleNewProject} />
    ) : (
      <Home create={handleCreation} />
    );

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideMenu projects={projectsObj.projects} create={handleCreation} />
      {show}
    </main>
  );
}

export default App;
