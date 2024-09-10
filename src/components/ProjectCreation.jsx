import { Input } from "./Input.jsx";

export function ProjectCreation({ handleNewProject }) {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-red-500">
            Cancelar
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            Salvar
          </button>
        </li>
      </menu>
      <div>
        <Input input title="Title" />
        <Input title="Description" />
        <Input input title="Due Date" />
      </div>
    </div>
  );
}
