import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import './postContainer.css'
import PropTypes from 'proptypes'

class PostContainer extends React.Component {
   

    render() {
        return (
            <article className="post-art">
                <div className="post-cont">
                    <header className="post-header">
                        <div className="user-img-cont"><img alt="" className="user-img" src={this.props.data.thumbnailUrl} /></div>
                        <span className="post-username-cont"><h1>{this.props.data.username}</h1></span>
                    </header>
                    <div className="post-img-cont">
                        <img src={this.props.data.imageUrl} alt=""/>
                    </div>
                    <div className="post-com-cont">
                        <section className="post-icon-sec">
                            <span><img alt="" src="#" /></span>
                            <span><img alt="" src="#" /></span>
                        </section>
                        <section>
                            <p>{this.props.data.likes} likes</p>
                        </section>
                        <div>
                            <CommentSection comments={this.props.data.comments} />
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}


PostContainer.propTypes = {
    data: PropTypes.object
}

export default PostContainer;