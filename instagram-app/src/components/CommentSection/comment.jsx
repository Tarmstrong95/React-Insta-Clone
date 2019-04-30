import React from 'react';
import PropTypes from 'proptypes';
import './commentsection.css'

const Comment = props => {
    return (
       <>
        <h3>{props.username} <span className="comment">{props.comment}</span></h3>
        
       </> 
    )
}

Comment.propType = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default Comment;