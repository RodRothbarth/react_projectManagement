import {Home} from "./components/Home.jsx";
import {SideMenu} from "./components/SideMenu.jsx";
import {ProjectCreation} from "./components/ProjectCreation.jsx";
import {useState} from "react";

function App() {
    const [createProject, setCreateProject] = useState(false)
    const [projects, setProjects] = useState([])


    function handleCreation() {
        setCreateProject(true)
    }

    function handleNewProject() {
    setProjects(prevState => [...prevState])

    }

    let show = createProject ? (<ProjectCreation handleNewProject={handleNewProject}/>) : (<Home create={handleCreation}/>)

    return (
    <main className='h-screen my-8 flex gap-8'>
        <SideMenu projects={projects} create={handleCreation}/>
        {show}
    </main>
  );
}

export default App;
