import React from "react";

import "./Body.css";

import Post from "./Post";
import List from "./List";

class Body extends React.Component {
  render() {
    return (
      <div className="Body">
        {this.props.currentPost ? <Post post={this.props.currentPost} /> : <List />}
      </div>
    );
  }
}

export default Body;
