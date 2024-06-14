import React, { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

function Tasks({ tasks, onAddTask, onDeleteTask }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim().length === 0) {
      modal.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  function handleDone(event) {
    event.target.classList.toggle("line-through");
  }

  return (
    <div>
      <Modal ref={modal}>
        <h2 className="font-bold text-2xl pb-2">Invalid Task</h2>
        <p className="text-base">Please fill in the following field.</p>
        <div className="flex justify-end">
          <button
            className="rounded bg-gray-500 text-gray-200 px-4 py-1 mt-4 hover:bg-gray-600 hover:scale-105 hover:transform-gpu duration-700 ease-in-out"
            onClick={() => modal.current.close()}
          >
            Close
          </button>
        </div>
      </Modal>
      <h3 className="font-bold text-xl">Tasks</h3>
      <div className="flex flex-row gap-2 justify-start items-center">
        <Input
          isTextArea={false}
          width="w-60"
          onChange={handleChange}
          value={enteredTask}
          maxLength={80}
        />
        <button
          className="text-white hover:text-gray-200 bg-black px-2 rounded-md ml-3"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>This projects does not have any tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-2">
              <p
                onClick={handleDone}
                className="bg-stone-100 w-full mr-6 m-0-5 p-2 rounded-md decoration-red-600 decoration-2"
              >
                {task.text}
              </p>
              <div className="flex justify-center items-center">
                <button
                  className="text-sm text-white bg-black px-2 rounded-md h-3/5"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
