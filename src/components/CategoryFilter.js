import React from "react";

function CategoryFilter({ categories, onCategoryClick, selectedCategory }) {
  const handleButtonClick = (category) => {
    onCategoryClick(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleButtonClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;