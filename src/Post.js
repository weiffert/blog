import React from "react";
import { NavLink } from "react-router-dom";
import Markdown from "commonmark";

import "./Post.css";

import Comment from "./Comment";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: this.findPost(props.match.params.id) || this.noPost(),
    };
  }

  noPost = () => {
    return {
      author: "Bad WIFI",
      id: 0,
      comments: {},
      published: {
        date: "loading...",
        title: "Sorry, slow connection",
        body: `The Internet is the global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to link devices worldwide. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries a vast range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and file sharing.`,
      },
    };
  };

  findPost = id => {
    return this.props.posts.find(post => post.id === parseInt(id));
  };

  componentWillUpdate = () => {
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
    let currentPost = reader.parse(this.state.currentPost.published.body);
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
          <div className="row">
          <h1>{this.state.currentPost.published.title}</h1>
          <NavLink to={`/compose/${this.state.currentPost.id}`}>
            <button className="button danger">Edit</button>
          </NavLink>
          </div>
          <div className="authorship">
            <p>by {this.state.currentPost.author}</p>
            <p>{this.state.currentPost.published.date}</p>
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
