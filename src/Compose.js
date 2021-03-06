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
      id: Date.now(),
      comments: {},

      working: {
        date: Date.now(),
        title: "",
        body: "",
      },
      published: {
        date: "",
        title: "",
        body: "",
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

  unpublish = () => {
    const currentPost = { ...this.state.currentPost };
    currentPost.published.body = "";
    currentPost.published.title = "";
    currentPost.published.date = "";

    this.save();
  }

  render() {
    return (
      <div className="Compose">
        <form
          onSubmit={event => event.preventDefault()}
          onChange={this.updateForm}
        >
          <input name="title" value={this.state.currentPost.working.title} />
          <textarea name="body" value={this.state.currentPost.working.body} />
          <button className="button warning" onClick={this.save}>
            Save Changes
          </button>
          <button className="button success" onClick={this.revertToPublished}>
            Revert to published version
          </button>
          <button className="button primary" onClick={this.publish}>
            Publish
          </button>
          <button className="button alert" onClick={this.unpublish}>
            Unpublish
          </button>
        </form>
      </div>
    );
  }
}

export default Compose;
