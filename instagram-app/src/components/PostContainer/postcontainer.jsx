import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import PropTypes from 'proptypes'
import './postContainer.css'
import {PostArticle,
     PostCont, 
     PostHeader, 
     UserImgCont, 
     PostusernameCont,
     PostImgCont,
     PostImg,
     PostCommCont,
     PostIconSec,
     SmIcon} 
     from '../styledComponents/styledComponents';

class PostContainer extends React.Component {
    state = {
        incrimented: false
    }

    clicker = (e) => {
        if (!this.state.incrimented) {
            this.setState({
                incrimented: true
            })
            e.target.classList.remove('heartlike')
            e.target.classList.add('heart_red');
            this.props.likeable(this.props.data.timestamp, this.state.incrimented);
        } else {
            this.setState({
                incrimented: false
            })
            e.target.classList.remove('heart_red');
            e.target.classList.add('heartlike');
            this.props.likeable(this.props.data.timestamp, this.state.incrimented);
        }
    }

    render() {
        return (
            <PostArticle >
                <PostCont>
                    <PostHeader>
                        <UserImgCont>
                            <img src={this.props.data.thumbnailUrl} alt="" />
                        </UserImgCont>
                        <PostusernameCont>
                            <h1>{this.props.data.username}</h1>
                        </PostusernameCont>
                    </PostHeader>
                    <PostImgCont>
                        <PostImg src={this.props.data.imageUrl} alt="" />
                    </PostImgCont>
                    <PostCommCont>
                        <PostIconSec>
                            <div onClick={this.clicker} className="smIcon heartlike"/>
                            <SmIcon comment/>
                        </PostIconSec>
                        <section>
                            <p>{this.props.data.likes} likes</p>
                        </section>
                        <div>
                            <CommentSection submitComment={this.props.submitComment} id={this.props.id} comments={this.props.data.comments} />
                        </div>
                    </PostCommCont>
                </PostCont>
            </PostArticle>
        )
    }
}


PostContainer.propTypes = {
    data: PropTypes.object
}

export default PostContainer;