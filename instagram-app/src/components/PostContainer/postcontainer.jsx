import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import './postContainer.css'
import PropTypes from 'proptypes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'


class PostContainer extends React.Component {
    state= {
        likes: this.props.data.likes,
        incrimented: false
    }
   
incrimentLikes = () => {
    if(!this.state.incrimented){
        this.setState({
        likes: this.state.likes + 1,
        incrimented: true
    })
    }else{
        this.setState({
            likes: this.state.likes - 1,
            incrimented: false
        })
    }
    
}


    render() {
        return (
            <article className="post-art">
                <div className="post-cont">
                    <header className="post-header">
                        <div className="user-img-cont"><img src={this.props.data.thumbnailUrl}/></div>
                        <span className="post-username-cont"><h1>{this.props.data.username}</h1></span>
                    </header>
                    <div className="post-img-cont">
                        <img src={this.props.data.imageUrl} alt=""/>
                    </div>
                    <div className="post-com-cont">
                        <section className="post-icon-sec">
                        <FontAwesomeIcon icon={faHeart} onClick={this.incrimentLikes}/>
                        <FontAwesomeIcon icon={faComment}/>
                        </section>
                        <section>
                            <p>{this.state.likes} likes</p>
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