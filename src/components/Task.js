import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, editTask } from "../redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newDescription = prompt("Edit task description:", task.description);
    if (newDescription) {
      dispatch(editTask(task.id, { ...task, description: newDescription }));
    }
  };

  return (
    <div>
      <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.description}
      </span>
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? "Undo" : "Complete"}
      </button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
