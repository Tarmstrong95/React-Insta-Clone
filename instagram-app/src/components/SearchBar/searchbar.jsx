import React from 'react';
import './searchbar.css';

const SearchBar = (props) => {
    return (
        <div className="nav">
            <div className="icon-cont">
                <div className="camera sm-ico"/>
                <div className="name"/>
            </div>
            <form>
                <input className="search-inp" onChange={props.search} placeholder="Search" />
            </form>
            <div className="icon-cont">
                <div className="compass sm-ico"  />
                <div className="heart sm-ico"  />
                <div className="person sm-ico"  />
            </div>
        </div>
    )
}

export default SearchBar;