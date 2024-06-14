import React from "react";
import Tasks from "./Tasks";

function SelectedProject({
  project,
  onDelete,
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  return (
    <div className="flex flex-col justify-normal mt-32 w-3/5">
      <header>
        <h2 className="font-bold text-4xl">{project.title}</h2>
        <p className="text-base text-gray-500 pb-4">{project.dueDate}</p>
        <p className="text-lg whitespace-pre-wrap">{project.description}</p>
        <div className="flex flex-row justify-end">
          <button
            className="text-sm text-white bg-black px-2 py-0.5 mt-0 rounded-md"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </header>
      <hr className="my-4" />
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default SelectedProject;
