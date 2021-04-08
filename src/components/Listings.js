import '../assets/stylesheets/Listings.css';
import Listing from './Listing';

function Listings({listingData, handleTabletSelect}) {
  function renderListings() {
    return listingData.map(item =>
      <Listing
        key={item.id}
        data={item}
        handleTabletSelect={handleTabletSelect}
      />
    )
  }

  return (
    <div className="Listings">
      {renderListings()}
    </div>
  );
}

export default Listings;
