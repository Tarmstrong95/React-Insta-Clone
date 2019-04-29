import React from 'react';
import CommentSection from '../CommentSection/commentsection'

const PostContainer = props => {
    return(
        <div>
            <CommentSection comments={props.data.comments} />
            
        </div>
    )
}

export default PostContainer;