import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onCancel, onSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      dueDate.current.value === ""
    ) {
      modal.current.open();
      return;
    }
    console.log(newProject);
    onSave({ project: newProject });
  }

  return (
    <div className="w-9/12 flex flex-col justify-center text-left pl-4 pr-24">
      <Modal ref={modal}>
        <h2 className="font-bold text-2xl pb-2">Invalid Input</h2>
        <p className="text-base">Please fill in all fields.</p>
        <div className="flex justify-end">
          <button
            className="rounded bg-gray-500 text-gray-200 px-4 py-1 mt-4 hover:bg-gray-600 hover:scale-105 hover:transform-gpu duration-700 ease-in-out"
            onClick={() => modal.current.close()}
          >
            Close
          </button>
        </div>
      </Modal>
      <menu className="flex justify-end gap-4 text-lg">
        <li>
          <button className="px-4 py-1 hover:cursor-pointer hover:bg-stone-200 rounded-md" onClick={onCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button
            className="text-white bg-black px-4 py-1 rounded-md hover:cursor-pointer"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div className="uppercase">
        <Input label="Title" isTextArea={false} type="text" ref={title} />
        <Input label="Description" isTextArea={true} ref={description} />
        <Input label="Due Date" isTextArea={false} type="date" ref={dueDate} />
      </div>
    </div>
  );
}

export default NewProject;
