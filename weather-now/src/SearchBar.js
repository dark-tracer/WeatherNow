import React from 'react';
import './SearchBar.css';

function SearchBar() {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter city name" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;