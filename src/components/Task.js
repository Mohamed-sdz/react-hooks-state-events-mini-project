import React from "react";

function Task({ text, category, onDeleteTask }) {
  const handleDelete = () => {
    onDeleteTask();
  };

  return (
    <div className="task">
      <div className="task-text">{text}</div>
      <div className="task-category">{category}</div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;