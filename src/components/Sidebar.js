import React from "react";

function Sidebar({ onStart, onSelected, projectsList, selected }) {
  return (
    <div className="bg-black w-3/12 pl-8 pr-10 pt-6 mt-12 rounded-tr-2xl">
      <h2 className="uppercase font-semibold text-2xl text-white">Your Projects</h2>
      <button
        className="text-gray-400 bg-gray-800 p-2.5 mt-4 mb-2 rounded-md"
        onClick={onStart}
      >
        + Add Project
      </button>
      <ul>
        {projectsList.map((project) => {
          let cssClass = "text-left p-1.5 w-full ";
          if (project.id === selected) {
            cssClass += " bg-gray-800 rounded-md";
          } else {
            cssClass += " hover:bg-gray-800 rounded-md";
          }
          return (
            <li key={project.id} className="text-white mt-2">
              <button
                className={cssClass}
                onClick={() => onSelected(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
