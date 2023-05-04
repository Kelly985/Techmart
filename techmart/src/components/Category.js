import React from "react";
function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    return (
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={onCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  export default CategoryFilter;