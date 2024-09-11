import { Input } from "./Input.jsx";
import { useRef } from "react";
import moment from "moment";

export function ProjectCreation({ handleNewProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const projectTitle = titleRef.current.value;
    const projectDescription = descriptionRef.current.value;
    const projectDueDate = dueDateRef.current.value;

    handleNewProject({
      title: projectTitle,
      description: projectDescription,
      dueDate: moment(projectDueDate).format("DD/MM/YYYY"),
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-red-500">
            Cancelar
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            Salvar
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" input title="Title" ref={titleRef} />
        <Input title="Description" ref={descriptionRef} />
        <Input type="date" input title="Due Date" ref={dueDateRef} />
      </div>
    </div>
  );
}
