import React from 'react';
import './searchbar.css';

const SearchBar = (props) => {
    return(
        <div className="nav">
            <div>
                <img alt="" src="#"/>
                <img alt="" src="#"/>
            </div>
            <form>
                <input placeholder="Search"/>
            </form>
            <div>
                <img alt=""  src="#"/>
                <img alt="" src="#"/>
                <img alt="" src="#"/>
            </div>
        </div>
    )
}

export default SearchBar;