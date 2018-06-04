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
      author: "",
      id: 0,
      date: Date.now(),
      title: "",
      body: "",
      comments: [],
    };
  };

  updateForm = event => {
    const post = { ...this.state.post };

    post[event.target.name] = event.target.value;

    this.setState({
      post,
    });
  };

  render() {
    return (
      <div className="Compose">
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.publish(this.state.post);
          }}
          onChange={this.updateForm}
        >
          <input name="title" value={this.state.post.title} />
          <textarea name="body" value={this.state.post.body} />
          <button className="button success">Publish</button>
        </form>
      </div>
    );
  }
}

export default Compose;
