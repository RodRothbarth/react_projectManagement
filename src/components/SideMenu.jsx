import { Button } from "./Button.jsx";

export function SideMenu({ create, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div className="flex items-center gap-4">
        <Button onClick={create}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects &&
          projects.map((project, index) => (
            <li key={index} className="flex justify-between my-4">
              {project.title}
            </li>
          ))}
      </ul>
    </aside>
  );
}
