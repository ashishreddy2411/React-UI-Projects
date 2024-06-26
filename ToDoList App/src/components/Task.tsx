import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTaskManager } from '../context/List'
import "../styles/Task.css"

type TaskProps = {
  id: number,
  title: string,
  description: string,
  status: string
}

const Task = ({ id, title, description, status }: TaskProps) => {
  const [state, dispatch] = useTaskManager();

  const deleteTask = () => {
    switch (status) {
      case "NEW_TASK":
        dispatch({ type: "DELETE_NEW_TASK", payload: id });
        break;
      case "IN_PROGRESS":
        dispatch({ type: "DELETE_IN_PROGRESS_TASK", payload: id });
        break;
      case "REVIEW_TASK":
        dispatch({ type: "DELETE_IN_REVIEW_TASK", payload: id });
        break;
      case "COMPLETED_TASK":
        dispatch({ type: "DELETE_COMPLETED_TASK", payload: id });
        break;
      default:
        break;
    }
  }
  const moveForward = () => {
    switch (status) {
      case "NEW_TASK":
        dispatch({ type: "MOVE_TO_IN_PROGRESS", payload: { id, title, description } });
        break;
      case "IN_PROGRESS":
        dispatch({ type: "MOVE_TO_IN_REVIEW", payload: { id, title, description } });
        break;
      case "REVIEW_TASK":
        dispatch({ type: "MOVE_TO_COMPLETED", payload: { id, title, description } });
        break;
      default:
        break;
    }
  }
  const editTask = () => {
    const newTitle = prompt("Enter new title", title) ?? "";
    const newDescription = prompt("Enter new description", description) ?? "";
    switch (status) {
      case "NEW_TASK":
        dispatch({ type: "EDIT_NEW_TASK", payload: { id, title:newTitle, description:newDescription } });
        break;
      case "IN_PROGRESS":
        dispatch({ type: "EDIT_IN_PROGRESS_TASK", payload: { id, title:newTitle, description:newDescription } });
        break;
      case "REVIEW_TASK":
        dispatch({ type: "EDIT_IN_REVIEW_TASK", payload: { id, title:newTitle, description:newDescription } });
        break;
      case "COMPLETED_TASK":
        dispatch({ type: "EDIT_COMPLETED_TASK", payload: { id, title:newTitle, description:newDescription } });
        break;
      default:
        break;
    }
  }
  const moveBackward = () => {
    switch (status) {
      case "IN_PROGRESS":
        dispatch({ type: "BACK_TO_NEW", payload: { id, title, description } });
        break;
      case "REVIEW_TASK":
        dispatch({ type: "BACK_TO_IN_PROGRESS", payload: { id, title, description } });
        break;
      case "COMPLETED_TASK":
        dispatch({ type: "BACK_TO_IN_REVIEW", payload: { id, title, description } });
        break;
      default:
        break;
    }
  }


  return (
    <div className="Task">
      <div className="Task_title">
        {title}
      </div>
      <div className="Task_description">
        {description}
      </div>
      <div className="Task_buttons">
        {status !== "NEW_TASK" && (
          <button className="Task_back" onClick={moveBackward}>
            <ArrowBackIcon style={{ color: 'red' }} />
          </button>
        )}
        <button className="Task_edit" onClick={editTask}>
          <EditIcon style={{ backgroundColor: 'red' }} />
        </button>
        <button className="Task_delete" onClick={deleteTask}>
          <DeleteForeverIcon style={{ backgroundColor: 'black' }} />
        </button>
        {status !== "COMPLETED_TASK" && (
          <button className="Task_done" onClick={moveForward}>
            <ArrowForwardIcon style={{ color: 'green' }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
