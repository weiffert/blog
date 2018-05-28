import React from "react";
import Markdown from "commonmark";

import "./Post.css";

class Post extends React.Component {
  reader = new Markdown.Parser();
  writer = new Markdown.HtmlRenderer();

  renderMarkdown() {
    let post = this.reader.parse(this.props.post.body);
    post = this.writer.render(post);

    return <div className="post" dangerouslySetInnerHTML={{__html:post}} />;
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
      </div>
    );
  }
}

export default Post;
