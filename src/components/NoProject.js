import React from "react";
import NoProjectImage from "../assets/no-projects.png";

function NoProject({ onStart }) {
  return (
    <div className="w-9/12 flex flex-col gap-3 justify-center text-center pl-4 pr-24">
      <img
        src={NoProjectImage}
        alt=""
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold">No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button className="bg-black text-white px-4 py-1 rounded-md" onClick={onStart}>
          Create New Project
        </button>
      </p>
    </div>
  );
}

export default NoProject;
