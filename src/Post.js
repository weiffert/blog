import React from "react";
import Markdown from "commonmark";

import "./Post.css";

import Comment from "./Comment";

class Post extends React.Component {
  renderMarkdown() {
    const reader = new Markdown.Parser();
    const writer = new Markdown.HtmlRenderer();
    let post = reader.parse(this.props.post.body);
    post = writer.render(post);

    return <div className="post" dangerouslySetInnerHTML={{ __html: post }} />;
  }

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
        {this.renderMarkdown()}
        <div className="comments">
          <ul>
            {this.props.post.comments.map(comment => <Comment comment={comment} />)}
          </ul>
          <form className="input-group" onSubmit={(event) => this.props.addComment(event)} >
            <input
              type="text"
              name="comment"
              placeholder="I think..."
              required
            />
            <button className="button success input-group-button">
              Comment
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Post;
