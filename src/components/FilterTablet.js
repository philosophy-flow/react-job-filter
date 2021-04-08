import '../assets/stylesheets/FilterTablet.css';

function FilterTablet({type, name, displayX, handleTabletClick}) {
  return (
    <div className={`FilterTablet ${displayX ? 'x-active' : ''}`}>
      <div className="contentBox"
        data-name={name}
        data-type={type}
        onClick={!displayX ? e => handleTabletClick(e) : null}
      >
        {name}
      </div>
      {displayX &&
        <div
          data-name={name}
          data-type={type}
          className="x-box"
          onClick={e => handleTabletClick(e)}
        >
          X
        </div>}
    </div>

  );
}

export default FilterTablet;
