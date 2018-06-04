import React from "react";

import "./Compose.css";

class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.blankPost(),
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

  updateForm = event => {
    const post = { ...this.state.post };

    post.working[event.target.name] = event.target.value;

    this.setState({
      post,
    });
  };

  revertToPublished = () => {
    const post = { ...this.state.post };
    post.working = { ...post.published };

    this.setState({ post });
  };

  publish = () => {
    const post = { ...this.state.post };
    post.published = { ...post.working };

    this.setState({ post });
    this.props.publish(post);
  };

  render() {
    return (
      <div className="Compose">
        <form
          onSubmit={event => {
            event.preventDefault();
            this.publish();
          }}
          onReset={() => this.revertToPublished()}
          onChange={this.updateForm}
        >
          <input name="title" value={this.state.post.working.title} />
          <textarea name="body" value={this.state.post.working.body} />
          <button className="button success" type="submit">
            Publish
          </button>
          <button className="button danger" type="reset">
            Revert to published version
          </button>
        </form>
      </div>
    );
  }
}

export default Compose;
