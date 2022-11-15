import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"

function SearchBar({placeholder, data}) {
  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder = "Enter a Book Name"/>
            <div className='searchIcon'><SearchIcon/></div>
        </div>
        <div className='dataResult'></div>
    </div>    
  )
}


export default SearchBar