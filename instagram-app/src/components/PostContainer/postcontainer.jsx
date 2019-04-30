import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import './postContainer.css'
import PropTypes from 'proptypes'

const PostContainer = props => {
    return (
        <article className="post-art">
            <div className="post-cont">
                <header className="post-header">
                    <div className="user-img-cont"><img className="user-img" src={props.data.thumbnailUrl} /></div>
                    <span className="post-username-cont"><h1>{props.data.username}</h1></span>
                </header>
                <div className="post-img-cont">
                    <img src={props.data.imageUrl} />
                </div>
                <div className="post-com-cont">
                    <section className="post-icon-sec">
                        <span><img src="#" /></span>
                        <span><img src="#" /></span>
                    </section>
                    <section>
                        <p>{props.data.likes} likes</p>
                    </section>
                    <div>
                        <CommentSection comments={props.data.comments} />
                    </div>
                    {/* <div>
                    <p>{Date.now()}</p>
                </div> */}
                </div>



            </div>
            <div className="form-cont">
                <form className="form-main">
                    <input placeholder="Add a comment..." />
                    <button>Post</button>
                </form>
            </div>

        </article>
    )
}


PostContainer.propTypes = {
    data: PropTypes.object
}

export default PostContainer;