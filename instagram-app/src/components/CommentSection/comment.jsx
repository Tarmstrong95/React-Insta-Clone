import React from 'react';
import PropTypes from 'proptypes';
import { CommentText } from '../styledComponents/styledComponents';

const Comment = props => {
    return (
        <>
            <h3>{props.username} <CommentText>{props.comment}</CommentText></h3>
        </>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default Comment;