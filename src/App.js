import React, {useState, useEffect} from 'react';

import Listings from './components/Listings';
import FilterBar from './components/FilterBar';
import './assets/stylesheets/App.css';
import {listingData} from './data.js';

function App() {

  const [activeListings, setActiveListings] = useState(listingData);

  // Filter object --> use to filter listingData anytime a change occurs
  const [filterObj, setFilterObj] = useState({
    role: '',
    level: '',
    languages: [],
    tools: [],
  });


  // runs every time filterObj is updated
  useEffect(() => {
    let newListings = [];
    newListings = listingData.filter(listing => {
      for (let key in filterObj) {
        if (typeof(filterObj[key]) === 'string') {
          if (listing[key] !== filterObj[key] && filterObj[key] !== '') {
            return false;
          }
        }

        if (typeof(filterObj[key]) === 'object') {
          for (let i in filterObj[key]) {
            let currentVal = filterObj[key][i];
            if (!listing[key].includes(currentVal)) {
              return false;
            }
          }
        }
      };
      return true;
    });

    setActiveListings(newListings);
  }, [filterObj]);


  // Handles tablet selection
  const handleTabletSelect = e => {
    const tabletType = e.target.dataset.type;
    const tabletName = e.target.dataset.name;

    switch (tabletType) {
      case 'role' :
        if (tabletName !== filterObj.role) {
          setFilterObj({...filterObj, role: tabletName});
        }
        break;

      case 'level' :
        if (tabletName !== filterObj.level) {
          setFilterObj({...filterObj, level: tabletName});
        }
        break;

      case 'language' :
        if (!filterObj.languages.includes(tabletName)) {
          const languages = [...filterObj.languages, tabletName];
          setFilterObj({...filterObj, languages: languages});
        }
        break;

      case 'tool' :
        if (!filterObj.tools.includes(tabletName)) {
          const tools = [...filterObj.tools, tabletName];
          setFilterObj({...filterObj, tools: tools});
        }
        break;
      default :
        return;
    }
  }


  // handle tablet remove
  const handleTabletRemove = e => {
    const tabletType = e.target.dataset.type;
    const tabletName = e.target.dataset.name;

    switch (tabletType) {
      case 'role' :
        setFilterObj({...filterObj, role: ''});
        break;

      case 'level' :
        setFilterObj({...filterObj, level: ''});
        break;

      case 'language' :
        const languages = filterObj.languages.filter(language =>
          language !== tabletName
        );
        setFilterObj({...filterObj, languages: languages});
        break;

      case 'tool' :
        const tools = filterObj.tools.filter(tool =>
          tool !== tabletName
        )
        setFilterObj({...filterObj, tools: tools});
        break;
      default :
        return;
    }
  };

  // handle clear button
  const handleClearClick = () => {
    setFilterObj({
      role: '',
      level: '',
      languages: [],
      tools: [],
    })
  };

  // Only render filter bar if some filter tablet is selected
  const renderTest = (
    filterObj.role !== '' || filterObj.level !== '' ||
    filterObj.languages.length > 0 || filterObj.tools.length > 0
  );

  return (
    <div className="App">
      <div className="banner"></div>
      {
        renderTest &&
        <FilterBar
          filters={filterObj}
          handleTabletClick={handleTabletRemove}
          handleClearClick={handleClearClick}
        />
      }
      <Listings
        listingData={activeListings}
        handleTabletSelect={handleTabletSelect}
      />
    </div>
  );
}

export default App;
