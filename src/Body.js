import React from "react";

import "./Body.css";

import Post from "./Post";
import List from "./List";

class Body extends React.Component {
  state = {
    reading: true,
    currentPost: this.props.posts[0]
  };

  render() {
    return (
      <div className="Body">
        {this.state.reading ? <Post post={this.state.currentPost} /> : <List />}
      </div>
    );
  }
}

export default Body;
