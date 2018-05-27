import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <h1>{this.props.post.title}
          <p>by {this.props.post.author} on {this.props.post.date}</p>
        </h1>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
