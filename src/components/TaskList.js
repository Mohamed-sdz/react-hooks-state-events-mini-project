import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;