import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  let content = "";
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });
  const selectedProject = projects.projects.find(
    (project) => project.id === projects.selectedProject
  );

  function handleStartAddProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancel() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleNewProject({ project }) {
    setProjects((prevState) => {
      const newProject = {
        ...project,
        id: Math.random().toString(),
      };
      return {
        selectedProject: newProject.id,
        projects: [...prevState.projects, newProject],
        tasks: prevState.tasks,
      };
    });
  }

  function handleSelectProject(id) {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== projects.selectedProject
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjects((prevState) => {
      const taskID = Math.random().toString();
      const newTask = {
        text: text,
        projectID: prevState.selectedProject,
        id: taskID,
      };
      return {
        ...prevState,
        tasks: [...(prevState.tasks || []), newTask],
      };
    });
  }

  function handleDeleteTask(taskID) {
    setProjects((prevState) => {
      console.log("Delete task");
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskID),
      };
    });
  }

  if (projects.selectedProject === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleNewProject} />;
  } else if (projects.selectedProject === undefined) {
    content = <NoProject onStart={handleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        tasks={projects.tasks.filter(
          (task) => task.projectID === projects.selectedProject
        )}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <div className="h-screen flex gap-8">
      <Sidebar
        onStart={handleStartAddProject}
        onSelected={handleSelectProject}
        projectsList={projects.projects}
        selected={projects.selectedProject}
      />
      {content}
    </div>
  );
}

export default App;
