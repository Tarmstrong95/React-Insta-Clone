import React from 'react';
import PropTypes from 'proptypes';

const Comment = props => {
    return (
       <>
        <h3>{props.username}</h3>
        <p>{props.comment}</p>
       </> 
    )
}

Comment.propType = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default Comment;