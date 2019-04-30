import React from 'react';
import Comment from './comment';
import PropTypes from 'proptypes';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            comment: {
                username: '', 
                text: ''
            }
        }
    }

    componentDidMount(){
        this.setState({
            comments: this.props.comments
        })
    }

    changeUpdate = (e) => {
        this.setState({
            comment: {
                username: "King Neptune",
                text: e.target.value
            }
        })
    }

    submitComment = (e) => {
        e.preventDefault();
        this.setState({
            comments: [...this.state.comments, this.state.comment],
            comment: {
                username: '',
                text: ''
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) =>
                    (
                        <Comment key={Date.now + i}username={comment.username} comment={comment.text} />
                    ))}

                <div className="form-cont">
                    <form onSubmit={this.submitComment} className="form-main">
                        <input
                            onChange={this.changeUpdate}
                            value={this.state.comment.text}
                            type="text"
                            placeholder="Add a comment..." />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }

}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;