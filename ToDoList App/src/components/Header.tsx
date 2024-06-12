import React from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt';
import "../styles/Header.css";
import { useTaskManager } from '../context/List';

type Project = {
  id: number;
  name: string;
};


const Header = () => {
  const [state, dispatch] = useTaskManager();
  const projects: Project[] = state.Projects;
  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = parseInt(e.target.value);
    if (projectId === -1) {
      const projectName = prompt("Enter Project Name") ?? "";
      const newProject: Project = {
        id: Math.floor(Math.random() * 1000),
        name: projectName
      };
      dispatch({ type: "ADD_PROJECT", payload: newProject });
    }
  }
  return (
    <div className="NavBar">
      <div className="Nav-title">
        <ListAltIcon style={{ fontSize: 40 }} />
        <h2>ToDoList</h2>
      </div>
      <div className="project_selection">
        <h3>Project:</h3>
        <select value={"Select a Project"} onChange={handleProjectChange}>
          <option value="Select a Project" disabled>Select a Project</option>
          {projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
          <option value="-1">Add Project</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
