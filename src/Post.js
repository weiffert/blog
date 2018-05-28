import React from "react";

import "./Post.css";

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <div className="title">
          <h1>{this.props.post.title}</h1>
          <div className="authorship">
            <p>by {this.props.post.author}</p>
            <p>{this.props.post.date}</p>
          </div>
        </div>
        <p className="post">{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
