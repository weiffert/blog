import React from "react";

import "./Post.css";

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <div className="title">
        <h1>{this.props.post.title}</h1>
        <p>
          by {this.props.post.author} on {this.props.post.date}
        </p>
        </div>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
