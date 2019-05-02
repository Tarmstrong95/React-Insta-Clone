import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import './postContainer.css'
import PropTypes from 'proptypes'


class PostContainer extends React.Component {
    state={
        incrimented: false
    }

clicker = (e) => {
if (!this.state.incrimented) {
            this.setState({
                incrimented: true
            })
            e.target.classList.remove('heart');
            e.target.classList.add('heart_red');
            this.props.inc(this.props.data.timestamp);
        } else {
            this.setState({
                incrimented: false
            })
            e.target.classList.remove('heart_red');
            e.target.classList.add('heart');
            this.props.dec(this.props.data.timestamp);
        }
}

    render() {
        return (
            <article className="post-art">
                <div className="post-cont">
                    <header className="post-header">
                        <div className="user-img-cont"><img src={this.props.data.thumbnailUrl} alt=""/></div>
                        <span className="post-username-cont"><h1>{this.props.data.username}</h1></span>
                    </header>
                    <div className="post-img-cont">
                        <img src={this.props.data.imageUrl} alt="" />
                    </div>
                    <div className="post-com-cont">
                        <section className="post-icon-sec">
                            <div onClick={this.clicker} className="heart sm-ico mtop"/>
                            <div className="commentico sm-ico mtop"/>
                        </section>
                        <section>
                            <p>{this.props.data.likes} likes</p>
                        </section>
                        <div>
                            <CommentSection submitComment={this.props.submitComment} id={this.props.id} comments={this.props.data.comments} />
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