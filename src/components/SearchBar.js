import React from 'react';


const SearchBar = ({ handleSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => handleSearch(e.target.value)}
      style={{  margin: "2em",
        height: "35px",
        padding: "10px",
        marginBottom: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        resize: "none",
        width: "-webkit-fill-available",}}
    />
  </div>
);

export default SearchBar;