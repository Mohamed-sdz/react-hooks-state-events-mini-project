import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Details:</label>
      <input
        type="text"
        id="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;