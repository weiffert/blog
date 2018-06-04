import React from "react";
import Markdown from "commonmark";

import "./Post.css";

import Comment from "./Comment";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: this.findPost(props.match.params.id) || this.blankPost()
    };
  }
  
  blankPost = () => {
    return {
      author: "",
      id: Date.now(),
      date: Date.now(),
      title: "",
      body: "",
      comments: [],
    };
  };

  findPost = id => {
    return this.props.posts.find(post => post.id === id);
  };

  componentDidUpdate = () => {
    const newPost = this.findPost(this.props.match.params.id);

    if (newPost && newPost.id !== this.state.currentPost.id) {
      this.setState({
        currentPost: newPost,
      });
    }
  };

  renderMarkdown() {
    const reader = new Markdown.Parser();
    const writer = new Markdown.HtmlRenderer();
    let currentPost = reader.parse(this.state.currentPost.body);
    currentPost = writer.render(currentPost);

    return (
      <div
        className="currentPost"
        dangerouslySetInnerHTML={{ __html: currentPost }}
      />
    );
  }

  render() {
    return (
      <div className="Post">
        <div className="title">
          <h1>{this.state.currentPost.title}</h1>
          <div className="authorship">
            <p>by {this.state.currentPost.author}</p>
            <p>{this.state.currentPost.date}</p>
          </div>
        </div>
        {this.renderMarkdown()}
        <div className="comments">
          <ul>
            {/* {this.state.currentPost.comments.map(comment => <Comment comment={comment} />)} */}
          </ul>
          <form
            className="input-group"
            onSubmit={event => this.props.addComment(event)}
          >
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
