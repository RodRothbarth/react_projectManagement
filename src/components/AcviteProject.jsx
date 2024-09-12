import { Input } from "./Input.jsx";

export function AcviteProject({ project, deleteProject, ...props }) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stoen-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-800 hover:text-red-500"
            onClick={deleteProject}
          >
            Excluir
          </button>
        </div>
        <p className="mb-4 texto-stone-400">{project.dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      {/*<Input input />*/}
    </div>
  );
}
