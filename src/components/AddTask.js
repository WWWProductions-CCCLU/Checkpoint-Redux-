import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  const [task, setTask] = useState({
    id: Date.now(),
    description: "",
    isDone: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.description) {
      dispatch(addTask(task));
      setTask({ ...task, id: Date.now(), description: "", isDone: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task.description}
        onChange={handleChange}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
