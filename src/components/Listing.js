import Tag from './Tag';
import FilterTablet from './FilterTablet';
import '../assets/stylesheets/Listing.css';

function Listing({data, handleTabletSelect}) {
  return (
    <div className="Listing">
      <div className="static-info-container">
        <div className="logo-container">
          <img src={data.logo} alt="logo" />
        </div>

        <div className="job-info">
          <div className="top-info">
            <h3 className="company-name">{data.company}</h3>
            {data.new && <Tag content="NEW!" color="hsl(180, 29%, 50%)" />}
            {data.featured && <Tag content="FEATURED" color="black" />}
          </div>

          <h2 className="title">{data.position}</h2>

          <div className="additional-info">
            <p>{data.postedAt}</p>
            <span>&#8226;</span>
            <p>{data.contract}</p>
            <span>&#8226;</span>
            <p>{data.location}</p>
          </div>
        </div>
      </div>


      <div className="tablet-container">
        <FilterTablet
          type="role"
          name={data.role}
          displayX={false}
          handleTabletClick={handleTabletSelect}
        />
        <FilterTablet
          type="level"
          name={data.level}
          displayX={false}
          handleTabletClick={handleTabletSelect}
        />
        {
          data.languages.map(language =>
            <FilterTablet
              key={language}
              type="language"
              name={language}
              displayX={false}
              handleTabletClick={handleTabletSelect}
            />
          )
        }
        {
          data.tools.map(tool =>
            <FilterTablet
              key={tool}
              type="tool"
              name={tool}
              displayX={false}
              handleTabletClick={handleTabletSelect}
            />
          )
        }
      </div>
    </div>
  );
}

export default Listing;
