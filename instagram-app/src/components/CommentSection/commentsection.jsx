import React from 'react';
import Comment from './comment';

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

export default CommentSection;