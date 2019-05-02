import React from 'react';
import {Nav, IconContainer, SmIcon, NmIcon, Search} from '../styledComponents/styledComponents';

const SearchBar = (props) => {
    return (
        <Nav>
            <IconContainer >
                <SmIcon camera />
                <NmIcon />
            </IconContainer>
            <form>
                <Search onChange={props.search} placeholder="Search" />
            </form>
            <IconContainer >
                <SmIcon compass />
                <SmIcon heart />
                <SmIcon person />
            </IconContainer>
        </Nav>
    )
}

export default SearchBar;