import React from 'react';
import Comment from './comment';
import PropTypes from 'proptypes';

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(comment => 
                (
                    <Comment username={comment.username} comment={comment.text}/>
                ))}
                
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;