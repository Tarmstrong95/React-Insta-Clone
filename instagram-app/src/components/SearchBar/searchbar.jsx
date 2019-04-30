import React from 'react';
import './searchbar.css';

const SearchBar = (props) => {
    return(
        <div className="nav">
            <div>
                <img src="#"/>
                <img src="#"/>
            </div>
            <form>
                <input placeholder="Search"/>
            </form>
            <div>
                <img src="#"/>
                <img src="#"/>
                <img src="#"/>
            </div>
        </div>
    )
}

export default SearchBar;