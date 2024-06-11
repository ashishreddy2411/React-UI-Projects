import "../styles/Label.css"
import { useState } from "react"
import { useTaskManager } from "../context/List"

type Task = {
  id: number,
  title: string,
  description: string
}


const CreateLabel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string>("");
  const [_, dispatch] = useTaskManager();

  const createNewLabel = () => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: description
    };
    dispatch({type: "ADD_NEW_TASK", payload: newTask});
    setTitle("");
    setDescription("");
  }

  return (
    <div className="label-container">
      <div className="title">
        <input type="text" value={title} placeholder="Enter Task Title" onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="description">
        <textarea rows={3} cols={25} value={description} placeholder="Enter Task Description" onChange={e => setDescription(e.target.value)}></textarea>
      </div>
      <button onClick={createNewLabel}>Create Label</button>
    </div>
  )
}

export default CreateLabel