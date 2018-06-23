import React from "react";

import "./Compose.css";

class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: this.findPost(props.match.params.id) || this.blankPost(),
    };
  }

  blankPost = () => {
    return {
      author: null,
      id: null,
      comments: {},

      working: {
        date: Date.now(),
        title: "",
        body: "",
      },
      published: {
        date: Date.now(),
        title: null,
        body: null,
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

  updateForm = event => {
    const currentPost = { ...this.state.currentPost };
    currentPost.working[event.target.name] = event.target.value;

    this.setState({ currentPost });
  };

  revertToPublished = () => {
    const currentPost = { ...this.state.currentPost };
    currentPost.working = { ...currentPost.published };

    this.setState({ currentPost });
    this.save();
  };

  save = () => {
    this.props.update(this.state.currentPost);
  };

  publish = () => {
    const currentPost = { ...this.state.currentPost };
    currentPost.published = { ...currentPost.working };

    this.setState({ currentPost });
    this.props.publish(currentPost);
  };

  render() {
    return (
      <div className="Compose">
        <form onChange={this.updateForm}>
          <input name="title" value={this.state.currentPost.working.title} />
          <textarea name="body" value={this.state.currentPost.working.body} />
          <button className="button danger" onClick={this.revertToPublished}>
            Revert to published version
          </button>
          <button className="button warning" onClick={this.save}>
            Save Changes
          </button>
          <button className="button success" onClick={this.publish}>
            Publish
          </button>
        </form>
      </div>
    );
  }
}

export default Compose;
