import React from 'react';
import Comment from './comment';
import PropTypes from 'proptypes';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {
                username: '',
                text: ''
            }
        }
    }
    
    changeUpdate = (e) => {
        this.setState({
            comment: {
                username: localStorage.getItem('username'),
                text: e.target.value
            }
        })
    }

    submit = e => {
        e.preventDefault();
        this.props.submitComment(this.state.comment, this.props.id);
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    (
                        <Comment key={Date.now + i} username={comment.username} comment={comment.text} />
                    ))}

                <div className="form-cont">
                    <form onSubmit={this.submit} className="form-main">
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