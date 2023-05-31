import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
 
function App() {
  const [tasks, setTasks] = React.useState(TASKS);
  const [displayedTasks, setDisplayedTasks] = React.useState(TASKS);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setDisplayedTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.category === category);
      setDisplayedTasks(filteredTasks);
    }
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    if (selectedCategory === "All" || selectedCategory === newTask.category) {
      setDisplayedTasks([...displayedTasks, newTask]);
    }
  };


  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    if (selectedCategory === "All") {
      setDisplayedTasks(updatedTasks);
    } else {
      const filteredTasks = updatedTasks.filter(
        (task) => task.category === selectedCategory
      );
      setDisplayedTasks(filteredTasks);
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={displayedTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;