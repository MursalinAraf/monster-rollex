import React from 'react'
import './search-bar.style.css'

function SearchBar({handleChange,placeholder}) {
    return (
        <div>
         <input className="search" type="search" placeholder={placeholder}
         onChange={handleChange} />
        </div>
    )
}

export default SearchBar
