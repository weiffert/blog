import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="Comment">
        <p>{this.props.comment.body}</p>
        <p>{this.props.comment.author} posted on {this.props.comment.date}</p>
      </div>
    );
  }
}

export default Comment;