import React from "react";
import '../assets/css/filter.css';

const FilterSection = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    onFilterChange(id, value);
  };

  return (
    <section id="product2" className="filter-section">
      <div className="filter-header">
        <i
          className="fa-solid fa-filter filter-icon"
          id="filterToggle"
          onClick={() => {
            const selectFilters = document.getElementById("selectFilters");
            selectFilters.classList.toggle("visible");
          }}
        ></i>
      </div>

      <div className="filter-controls">
        <div className="select-filters" id="selectFilters">
          <div className="select-wrapper">
            <select
              id="categoryFilter"
              className="filter-select"
              value={filters.categoryFilter}
              onChange={handleChange}
            >
              <option value="">Kateqoriya görə</option>
              <option value="mobile-accessories">Telefon aksesuarlari</option>
              <option value="smartphones">Telefonlar</option>
            </select>
            <i className="fa-solid fa-chevron-down select-arrow"></i>
          </div>

          <div className="select-wrapper">
            <select
              id="ratingFilter"
              className="filter-select"
              value={filters.ratingFilter}
              onChange={handleChange}
            >
              <option value="">Ulduz sayına görə</option>
              <option value="5">5 ulduz</option>
              <option value="4">4+ ulduz</option>
              <option value="3">3+ ulduz</option>
            </select>
            <i className="fa-solid fa-chevron-down select-arrow"></i>
          </div>

          <div className="select-wrapper">
            <select
              id="priceFilter"
              className="filter-select"
              value={filters.priceFilter}
              onChange={handleChange}
            >
              <option value="">Qiymətə görə</option>
              <option value="0-100">0$ - 100$</option>
              <option value="100-300">100$ - 300$</option>
              <option value="300-600">300$ - 600$</option>
              <option value="600-1000">600$ - 1000$</option>
            </select>
            <i className="fa-solid fa-chevron-down select-arrow"></i>
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            placeholder="Məhsul adı ilə axtar..."
            className="search-input"
            value={filters.searchTerm}
            onChange={(e) => onFilterChange("searchTerm", e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
