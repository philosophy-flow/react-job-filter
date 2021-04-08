import '../assets/stylesheets/FilterBar.css';

import FilterTablet from './FilterTablet.js';

function FilterBar ({filters, handleTabletClick, handleClearClick}) {





  return (
    <div className="FilterBar">
      <div className="filter-container">
        {
          filters.role !== "" &&
          <FilterTablet
            type="role"
            name={filters.role}
            displayX={true}
            handleTabletClick={handleTabletClick}
           />
        }
        {
          filters.level !== "" &&
          <FilterTablet
            type="level"
            name={filters.level}
            displayX={true}
            handleTabletClick={handleTabletClick}
           />
        }
        {
          filters.languages !== [] &&
          filters.languages.map(language => (
            <FilterTablet
              key={language}
              type="language"
              name={language}
              displayX={true}
              handleTabletClick={handleTabletClick}
             />
          ))
        }
        {
          filters.tools !== [] &&
          filters.tools.map(tool => (
            <FilterTablet
              key={tool}
              type="tool"
              name={tool}
              displayX={true}
              handleTabletClick={handleTabletClick}
             />
          ))
        }
      </div>
      <button
        className="clear-button"
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
}

export default FilterBar;
