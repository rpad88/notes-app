import React from 'react'
import './Search.css'
import {FaSearch} from 'react-icons/fa'
export default function Search({searchText, setSearchText}) {
    
    function handleSearch(e){
        setSearchText(e.target.value)
    }
     
  return (
    <div className='search'>
        <FaSearch />
        <input
            type="text"
            placeholder="Type for search..."
            value={searchText}
            onChange={handleSearch}
        />
    </div>
  );
}
